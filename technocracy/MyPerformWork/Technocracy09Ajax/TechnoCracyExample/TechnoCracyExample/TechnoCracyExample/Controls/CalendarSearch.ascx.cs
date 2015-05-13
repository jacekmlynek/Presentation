using System;
using System.Web.UI.WebControls;
using System.Collections.Generic;
using System.Web.UI;
using System.Text;
using System.Web.Script.Serialization;

using BO.DataHolders;
using BO.Tools;

namespace TechnoCracyExample.Controls
{
    public partial class CalendarSearch : System.Web.UI.UserControl
    {
        #region Const fields

        private const string outHeaderTxt = "Wylot";
        private const string retHeaderTxt = "Powrót";

        #endregion

        private List<CalendarPriceCell> items = new List<CalendarPriceCell>();

        #region Protected properties

        protected string OutHeaderVerticalText
        {
            get
            {
                char[] nameTable =  outHeaderTxt.ToCharArray();
                StringBuilder sb = new StringBuilder();

                for (int i = 0; i < nameTable.Length; i++)
                {
                    if (i != 0)
                    {
                        sb.Append("<br />");
                    }

                    sb.Append(nameTable[i].ToString());

                }

                return sb.ToString();
            }
        }

        protected string ReturnHeaderText
        {
            get { return retHeaderTxt; }
        }

        #endregion

        #region public properties

        public List<DateTime> OutDateRange { get; set; }
        public List<DateTime> RetDateRange { get; set; }
        public List<CalendarFlightData> DataSource { get; set; }
        public List<CalendarPriceCell> Items
        {
            get { return items; }
        }

        public int SelectedIndex
        {
            get
            {
                if (!string.IsNullOrEmpty(SelectedIndexHF.Value))
                {
                    return int.Parse(SelectedIndexHF.Value);
                }
                else
                {
                    return 0;
                }
            }
        }

        #endregion

        #region Public EventHendler

        public event EventHandler CalendarReturnNextDate;
        public event EventHandler CalendarReturnPrevDate;
        public event EventHandler CalendarOutPrevDate;
        public event EventHandler CalendarOutNextDate;
        public event EventHandler SelectedFlightChange;

        #endregion

        #region EventHeandler

        protected void PriceRp_OnItemDataBound(object sender, RepeaterItemEventArgs e)
        {
            if (e.Item.ItemType == ListItemType.Item || e.Item.ItemType == ListItemType.AlternatingItem)
            {
                const string innerPriceCellId = "CalednarPriceCellCrt";

                RepeaterItem parentItem = (RepeaterItem)e.Item.Parent.NamingContainer;
                DateTime outDate = (DateTime)parentItem.DataItem;
                DateTime retDate = (DateTime)e.Item.DataItem;

                CalendarPriceCell priceCell = (CalendarPriceCell)e.Item.FindControl(innerPriceCellId);

                if (GetFligtData(outDate, retDate) != null)
                {
                    priceCell.ID = GetFligtData(outDate, retDate).ToString();
                }
                priceCell.DataSource = GetFligtData(outDate, retDate);
                priceCell.DataBind();

                items.Add(priceCell);
            }

        }

        protected void ReturnNextDateBt_Click(object sender, EventArgs e)
        {
            if (CalendarReturnNextDate != null)
            {
                CalendarReturnNextDate(sender, e);

                //SetSelectedValue(DefaultSelectedValue.FlightKey.ToString());
                //SetBtDateRangeChangeActivity();
            }
        }

        protected void ReturnPrevDateBt_Click(object sender, EventArgs e)
        {
            if (CalendarReturnPrevDate != null)
            {
                CalendarReturnPrevDate(sender, e);

               // SetSelectedValue(DefaultSelectedValue.FlightKey.ToString());
                //SelectCalendarValues();
            }
        }

        protected void OutPrevDateBt_Click(object sender, EventArgs e)
        {
            if (CalendarOutPrevDate != null)
            {
                CalendarOutPrevDate(sender, e);

                //SetSelectedValue(DefaultSelectedValue.FlightKey.ToString());
                //SetBtDateRangeChangeActivity();
            }
        }

        protected void OutNextDateBt_Click(object sender, EventArgs e)
        {
            if (CalendarOutNextDate != null)
            {
                CalendarOutNextDate(sender, e);

                //SetSelectedValue(DefaultSelectedValue.FlightKey.ToString());
                //SetBtDateRangeChangeActivity();
            }
        }

        protected void PriceCell_CalendarChangeSelecteFlight(object sender, EventArgs e)
        { 
            CalendarPriceCell priceCell = (CalendarPriceCell) sender;
           
            SelectedIndexHF.Value = items.IndexOf(items.Find(flight =>
                string.Equals(flight.ID, priceCell.ID, StringComparison.InvariantCultureIgnoreCase))).ToString();

            if (SelectedFlightChange != null)
            {
                SelectedFlightChange(this, e);
            }
        }

        protected override void OnDataBinding(EventArgs e)
        {
            base.OnDataBinding(e);

            if (DataSource != null && OutDateRange != null 
                && RetDateRange != null)
            {
                SetData();
            }
        }

        protected override void OnPreRender(EventArgs e)
        {
            base.OnPreRender(e);
            if (ScriptManager.GetCurrent(Page).IsInAsyncPostBack)
            {
                ScriptManager.GetCurrent(Page).RegisterDataItem(Page, FormatUpdateddata(), true);
            }

            if (!IsPostBack)
            { 
                string script = string.Format("var MatrixUpI='{0}'", CalendarMatrixUP.ClientID);
                Page.ClientScript.RegisterClientScriptBlock(this.GetType(), "up", script, true);
            }
        }

        #endregion

        private CalendarFlightData GetFligtData(DateTime outDate, DateTime retDate)
        {
          string dateFormat = CalendarHelper.DateFormat;

           return DataSource.Find(flightData =>
                string.Equals(flightData.OutDate.ToString(dateFormat), outDate.ToString(dateFormat), StringComparison.InvariantCultureIgnoreCase)
                && string.Equals(flightData.RetDate.ToString(dateFormat), retDate.ToString(dateFormat), StringComparison.InvariantCultureIgnoreCase));
        }

        private void SetData()
        {
            //Set return Dates header.
            ReturnTwoWayRp.DataSource = RetDateRange;
            ReturnTwoWayRp.DataBind();

            // Set out dates header and prices values.
            OutTwoWayRp.DataSource = OutDateRange;
            OutTwoWayRp.DataBind();
        }

        private string FormatUpdateddata()
        {
            JavaScriptSerializer json = new JavaScriptSerializer();
            string [] data ={SelectedIndexHF.ClientID, SelectedIndex.ToString()};
            StringBuilder sb = new StringBuilder();

            json.Serialize(data, sb);
            return sb.ToString();
        }
    }
}