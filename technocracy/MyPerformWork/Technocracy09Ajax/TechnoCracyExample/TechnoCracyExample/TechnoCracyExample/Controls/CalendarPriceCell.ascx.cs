using System;
using System.Web.UI.WebControls;
using BO.DataHolders;

using BO.Tools;

namespace TechnoCracyExample.Controls
{
    public partial class CalendarPriceCell : System.Web.UI.UserControl
    {
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
            get {return  CalendarHelper.PriceFormat; }
        }

        #endregion

        #region Public properties

        public CalendarFlightData DataSource { set; get; }

        public override void DataBind()
        {
            if (DataSource != null)
            {
                base.DataBind();
            }
        }

        protected override void OnPreRender(EventArgs e)
        {
            base.OnPreRender(e);
            
            PricePH.Visible = IsPriceCellVisible;
            EmptyCellPH.Visible = IsEmptyCellVisible;
            
        }

        #endregion

        #region Public Event 

        public event EventHandler CalendarChangeSelecteFlight;

        #endregion

        /// <param name="e"><![CDATA[OfferKey]]>Consist offer key as a string</param>
        protected void SelecteFlighByDates_Click(object sender, CommandEventArgs e)
        {
            //string[] selectDates = e.CommandArgument.ToString().Split(CalendarMatrixHelper.identitySeparator);

            SetSelectedValue();

            //flightWasSelecting = true;
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
    }
}