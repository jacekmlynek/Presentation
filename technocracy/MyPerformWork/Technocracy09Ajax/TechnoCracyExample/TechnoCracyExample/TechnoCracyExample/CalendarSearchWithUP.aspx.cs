using System;

using BO.DataProviders;
using BO.RsourcesAccessors;
using BO.DataHolders;
using BO.Tools;

public partial class CalendarSearchWithUP : System.Web.UI.Page
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

    protected void CalendarMatrix_SelectedFlightChange(object sender, EventArgs e)
    {
        CalendarFlightData selectedFlight
            = CalendarMatrixCrt.Items[CalendarMatrixCrt.SelectedIndex].DataSource;

        CalendarPriceDetailsCrt.DataSource = selectedFlight;
        CalendarPriceDetailsCrt.DataBind();

        CalendarPriceDetailUP.Update();
    }

    protected void CalendarResponcePage_Click(object sender, EventArgs e)
    { 
        string selectedFlightKey 
            = CalendarMatrixCrt.Items[CalendarMatrixCrt.SelectedIndex].DataSource.ToString();

        Response.Redirect(string.Format("ResultPage.aspx?selectedFlightKey={0}", selectedFlightKey));
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
    }

    private void BindCalendarMatrix()
    {
        CalendarDataProvider calendarDataProvider =
            new CalendarDataProvider(startOutDate, startReturnDate);
        CalendarMatrixCrt.DataSource = calendarDataProvider.GetCalendarMatrixData();
        CalendarMatrixCrt.OutDateRange = calendarDataProvider.GetOutRequestDateRanage();
        CalendarMatrixCrt.RetDateRange = calendarDataProvider.GetRetRequestDateRanage();
        CalendarMatrixCrt.DataBind();
    }

    private void InitStartDates()
    {
        startOutDate = DateTime.Now.Date.AddDays(5);
        startReturnDate = DateTime.Now.Date.AddDays(10);
    }

    #endregion

}

