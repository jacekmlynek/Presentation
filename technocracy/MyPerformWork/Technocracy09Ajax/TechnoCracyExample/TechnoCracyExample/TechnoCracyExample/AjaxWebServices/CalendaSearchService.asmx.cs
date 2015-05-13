using System.ComponentModel;
using System.Web.Services;
using System.Web.Script.Services;
using System;
using System.Collections.Generic;

using BO.DataHolders;
using BO.DataProviders;
using BO.Tools;

namespace TechnoCracyExample.AjaxWebServices
{
    /// <summary>
    /// Summary description for CalendaSearchService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [ToolboxItem(false)]
    [ScriptService]
    public class CalendaSearchService : System.Web.Services.WebService
    {
        [WebMethod]
        public List<CalendarFlightData> GetCalendarData(AjaxWebServicerequestData requestedData)
        {
            CalendarDataProvider calendarProvider = GetCalendarProvider(requestedData);

            return calendarProvider.GetCalendarMatrixData();
        }

        [WebMethod]
        public CalendarDataWebService GetDateRanges(AjaxWebServicerequestData requestedData)
        {
            CalendarDataProvider calendarProvider = GetCalendarProvider(requestedData);

            CalendarDataWebService dataToSend = new CalendarDataWebService();

            DateTime startRequestOutDate = DateTime.Parse(requestedData.StartOutDate);
            DateTime startRequestRetDate = DateTime.Parse(requestedData.StartRetDate);

            dataToSend.OutDateRange = calendarProvider.GetOutRequestDateRanage().ConvertAll<string>(t=>t.ToString(CalendarHelper.DateFormat));
            dataToSend.RetDateRange = calendarProvider.GetRetRequestDateRanage().ConvertAll<string>(t=>t.ToString(CalendarHelper.DateFormat));
            dataToSend.NewStartOutDate = startRequestOutDate.AddDays(requestedData.OutDateChangeRange);
            dataToSend.NewStartRetDate = startRequestRetDate.AddDays(requestedData.RetDateChangeRange); 

            return dataToSend;
        }

        private CalendarDataProvider GetCalendarProvider(AjaxWebServicerequestData requestedData)
        {
            DateTime startRequestOutDate = DateTime.Parse(requestedData.StartOutDate);
            DateTime startRequestRetDate = DateTime.Parse(requestedData.StartRetDate);
            DateTime startOutDate = startRequestOutDate.AddDays(requestedData.OutDateChangeRange);
            DateTime startRetDate = startRequestRetDate.AddDays(requestedData.RetDateChangeRange);

            return new CalendarDataProvider(startOutDate, startRetDate);
        }
    }
}
