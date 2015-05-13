using System;
using System.Web.UI;
using System.Text;
using System.Web.UI.WebControls;

using BO.DataHolders;
using System.Web.Script.Serialization;
using BO.Tools;

namespace TechnoCracyExample.Controls.CallBackControls
{
    public partial class CallBackCalenarPriceCell : System.Web.UI.UserControl
        
    {
        #region Const fields

        private const string clientCallBackFunctionName = "ReceiveServerData";
        private const string clientInvocationCallBackFunctionName = "CallServer";

        #endregion

        #region Prottected  properties

        protected bool IsPriceCellVisible
        {
            get { return DataSource != null; }
        }

        protected bool IsEmptyCellVisible
        {
            get { return DataSource == null; }
        }

        protected string CalendarMatrixPriceCellCss
        {
            get { return "calendarMatrixPriceCell"; }
        }

        protected string PriceFormat
        {
            get { return CalendarHelper.PriceFormat; }
        }

        #endregion

        #region Public properties

        public CalendarFlightData DataSource { set; get; }

        #endregion

        #region Public Event

        public event EventHandler CalendarChangeSelecteFlight;

        #endregion

        #region Public methods

        public override void DataBind()
        {
            if (DataSource != null)
            {
                base.DataBind();
            }
        }

        #region ICallbackEventHandler Members

        public string GetCallbackResult()
        {
            return GetDataToUpdate();
        }

        public void RaiseCallbackEvent(string eventArgument)
        {
            //Receive some param from client eg. key
        }

        #endregion

        #region ICallbackContainer Members

        public string GetCallbackScript(IButtonControl buttonControl, string argument)
        {
            ClientScriptManager cm = Page.ClientScript;
            string callBackArg = string.Format("'{0}'", DataSource.ToString());

            string js = String.Format("javascript:{0};{1};{2}; return false;",
            "__theFormPostData = ''",
            "WebForm_InitCallback()",
            cm.GetCallbackEventReference(this, callBackArg,
            clientCallBackFunctionName, "null"));

            return js;
        }

        #endregion

        #endregion

        #region Event hendlers

        protected override void OnPreRender(EventArgs e)
        {
            base.OnPreRender(e);

            PricePH.Visible = IsPriceCellVisible;
            EmptyCellPH.Visible = IsEmptyCellVisible;
        }

        protected void TwoWaySelecteFlightLb_Load(object sender, EventArgs e)
        {
            if (DataSource != null)
            {
                //Control Callback
                //TwoWaySelecteFlightLb.OnClientClick = GetCallbackScript(TwoWaySelecteFlightLb, "");

                //Page callback
                TwoWaySelecteFlightLb.OnClientClick = GetCallbackScript();
            }
        }

        protected string GetOnMauseActionJsParam()
        {
            const char paramSeparetor = ',';

            if (DataSource == null)
            {
                return string.Empty;
            }

            string outDateParam = CalendarHelper.GetOutCalendarDateIdentity(DataSource.OutDate);
            string retDateParam = CalendarHelper.GetRetCalendarDataIdentity(DataSource.RetDate);

            return string.Concat("'", outDateParam, "'", paramSeparetor, "'", retDateParam, "'");
        }

        protected string SelectedJsFunction()
        {
            const string selectedFunctionName = "selectData";

            if (DataSource == null)
            {
                return string.Empty;
            }

            return string.Format("{0}('{1}', '{2}')", selectedFunctionName,
                DataSource.ToString(), IsSelectedHF.ClientID);
        }

        #endregion

        #region Private methods

        /// <summary>
        /// Set selected value and fire event for changing this value.
        /// </summary>
        /// <param name="value"></param>
        private void SetSelectedValue()
        {
            //SelectedValue = value;
            //IsSelected = bool.Parse(value);

            if (CalendarChangeSelecteFlight != null)
            {
                //TODO: check if fire event on databinding doesnt couse on framework page
                // life cycle. 
                EventArgs e = new EventArgs();
                CalendarChangeSelecteFlight(this, e);
            }
        }

        private string GetDataToUpdate()
        {
            StringBuilder sb = new StringBuilder();
            JavaScriptSerializer json = new JavaScriptSerializer();
            CallBackUpdateData dataToUpdate = new CallBackUpdateData();
            dataToUpdate.FlightKey = DataSource.ToString();
            dataToUpdate.TotalPriceTxt = DataSource.FlightPrice.ToString(PriceFormat);

            json.Serialize(dataToUpdate, sb);

            return sb.ToString();
        }

        /// <summary>
        /// Use for Page callback Only
        /// </summary>
        /// <returns></returns>
        private string GetCallbackScript()
        {
            ClientScriptManager cm = Page.ClientScript;
            string callBackArg = string.Format("'{0}'", DataSource.ToString());

            string js = String.Format("javascript:{0};{1};{2}; return false;",
            "__theFormPostData = ''",
            "WebForm_InitCallback()",
            cm.GetCallbackEventReference(Page, callBackArg,
            clientCallBackFunctionName, "null"));

            return js;
        }

        #endregion

    }
}