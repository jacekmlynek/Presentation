using System;
using System.Web.Services;

using BO.DataHolders;

public partial class CalendarSearchWebService : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    [WebMethod]
    public static bool ValidFlightRequestData(AjaxWebServicerequestData requstedData)
    {
        return true;
    }

    [WebMethod]
    public static string GetResult()
    {
        return "ola";
    }
}

