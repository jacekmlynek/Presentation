using System;
using System.Web.UI.WebControls;
using System.Web.UI;
using System.Collections.Generic;
using System.Text;
using System.Web.Script.Serialization;

using BO.DataProviders;
using BO.RsourcesAccessors;
using BO.DataHolders;
using BO.Tools;

public partial class CalendarSeartchWithICallBack : System.Web.UI.Page, ICallbackEventHandler
{
    #region Private properties

    private DateTime startOutDate
    {
        get { return (DateTime)ViewState["startOutDate"]; }
        set { ViewState["startOutDate"] = value; }
    }

    private DateTime startReturnDate
    {
        get { return (DateTime)ViewState["startReturnDate"]; }
        set { ViewState["startReturnDate"] = value; }
    }

    private string SelctedFlightKey
    {
        get { return SelectedFlightHF.Value; }
        set { SelectedFlightHF.Value = value; }
    }

    #endregion

    #region For Page Callback Only

    #region ICallbackEventHandler Members

    public string GetCallbackResult()
    {
        return GetDataToUpdate();
    }

    public void RaiseCallbackEvent(string eventArgument)
    {
        SelctedFlightKey = eventArgument;
    }

    #endregion

    #endregion

    #region Event Heandlers

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            InitStartDates();
        }

        BindData();
    }

    protected void CalendarBTN_Click(object sender, EventArgs e)
    {
        CalendarLabel.Text = string.Concat("Last modify at ", DateTime.Now.ToShortTimeString());
        calendarNonRefreshLB.Text = string.Concat("Last modify at ", DateTime.Now.ToShortTimeString());
    }

    protected void CalendarResponcePage_Click(object sender, EventArgs e)
    {   
        Response.Redirect(string.Format("ResultPage.aspx?selectedFlightKey={0}", SelctedFlightKey));
    }

    protected void GetReturnNextRangeDate(object sender, EventArgs e)
    {
        startReturnDate = startReturnDate.AddDays(CalendarHelper.RequestedDayNumber);

        BindCalendarMatrix();
    }

    protected void GetReturnPrevRangeDate(object sender, EventArgs e)
    {
        startReturnDate = startReturnDate.AddDays(-CalendarHelper.RequestedDayNumber);

        BindCalendarMatrix();
    }

    protected void GetOutNextRangeDate(object sender, EventArgs e)
    {
        startOutDate = startOutDate.AddDays(CalendarHelper.RequestedDayNumber);

        BindCalendarMatrix();
    }

    protected void GetOutPrevRangeDate(object sender, EventArgs e)
    {
        startOutDate = startOutDate.AddDays(-CalendarHelper.RequestedDayNumber);

        BindCalendarMatrix();
    }

    #endregion

    #region Private methods

    private void BindAirlinesData()
    {
        XmlDataProvider xmlDataProvider = new XmlDataProvider();
        xmlDataProvider.UrToFile = "~/App_LocalResources/Airlines.xml";
        xmlDataProvider.fileAccessor = new FileAccessor();

        CalendarAirlinesDD.DataSource = xmlDataProvider.ReadXmlAsKeyValuePair("option", "value");
        CalendarAirlinesDD.DataTextField = "Value";
        CalendarAirlinesDD.DataValueField = "Key";
        CalendarAirlinesDD.DataBind();

        if (!string.IsNullOrEmpty(Request.Form[CalendarAirlinesDD.UniqueID]))
        {
            CalendarAirlinesDD.SelectedIndex
                = CalendarAirlinesDD.Items.IndexOf(CalendarAirlinesDD.Items.FindByValue(Request.Form[CalendarAirlinesDD.UniqueID]));
        }
    }

    private void BindData()
    {
        BindAirlinesData();
        BindCalendarMatrix();

        if (!string.IsNullOrEmpty(SelectedFlightHF.Value))
        {
            BindPicedetails();
        }
    }

    private void BindPicedetails()
    {
        CalendarDataProvider calendarDataProvider =
            new CalendarDataProvider(startOutDate, startReturnDate);

        List<CalendarFlightData> responce = calendarDataProvider.GetCalendarMatrixData();
        CalendarFlightData selctedFlight = responce.Find(flightData =>
              string.Equals(flightData.ToString(), SelctedFlightKey));

        CalendarPriceDetailsCrt.DataSource = selctedFlight;
        CalendarPriceDetailsCrt.DataBind();
    }

    private void BindCalendarMatrix()
    {
        CalendarDataProvider calendarDataProvider =
            new CalendarDataProvider(startOutDate, startReturnDate);
        CalendarMatrixCrtl.DataSource = calendarDataProvider.GetCalendarMatrixData();
        CalendarMatrixCrtl.OutDateRange = calendarDataProvider.GetOutRequestDateRanage();
        CalendarMatrixCrtl.RetDateRange = calendarDataProvider.GetRetRequestDateRanage();
        CalendarMatrixCrtl.DataBind();
    }

    private void InitStartDates()
    {
        startOutDate = DateTime.Now.Date.AddDays(5);
        startReturnDate = DateTime.Now.Date.AddDays(10);
    }

    #region For Page Callback Only

    private string GetDataToUpdate()
    {
        StringBuilder sb = new StringBuilder();
        JavaScriptSerializer json = new JavaScriptSerializer();
        CalendarDataProvider calendarDataProvider =
            new CalendarDataProvider(startOutDate, startReturnDate);

        List<CalendarFlightData> responce = calendarDataProvider.GetCalendarMatrixData();

        CalendarFlightData selctedFlight = responce.Find(flightData =>
            string.Equals(flightData.ToString(), SelctedFlightKey));

        CallBackUpdateData dataToUpdate = new CallBackUpdateData();
        dataToUpdate.FlightKey = selctedFlight.ToString();
        dataToUpdate.TotalPriceTxt = selctedFlight.FlightPrice.ToString(CalendarHelper.PriceFormat);
        dataToUpdate.SelctedFlightKeyHf = SelectedFlightHF.ClientID;

        json.Serialize(dataToUpdate, sb);

        return sb.ToString();
    }

    #endregion

    #endregion

}

