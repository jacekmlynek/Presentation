using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using BO.DataHolders;

namespace BO.DataProviders
{
    public class CalendarDataProvider
    {
        private const int dayRange = 3;
        private const int dataRange = 7;

        private DateTime startOutDate;
        private DateTime startRetDate;

        public CalendarDataProvider(DateTime startOutdate, DateTime startRetDate)
        {
            this.startOutDate = startOutdate.Date.AddDays(-dayRange);
            this.startRetDate = startRetDate.Date.AddDays(-dayRange);
        }

        public List<CalendarFlightData> GetCalendarMatrixData()
        {
            DateTime currentDate = DateTime.Now.Date;
            List<CalendarFlightData> flightData = new List<CalendarFlightData>();
            Random rd = new Random();

            for (int i = 0; i < dataRange; i++)
            {
                DateTime newOutDate = startOutDate.AddDays(i);

                for (int j = 0; j < dataRange; j++)
                {
                    DateTime newStartRetDate = startRetDate.AddDays(j);

                    if ( newOutDate > currentDate
                        && newStartRetDate > currentDate
                        && newStartRetDate >= newOutDate)
                    {
                        flightData.Add(CreateFlightData(newOutDate, newStartRetDate, rd));
                    }
                }
            }

            return flightData;
        }

        public List<DateTime> GetOutRequestDateRanage()
        {
            return GetRangeDate(startOutDate);
        }

        public List<DateTime> GetRetRequestDateRanage()
        {
            return GetRangeDate(startRetDate);
        }



        private List<DateTime> GetRangeDate(DateTime startDate)
        {
            List<DateTime> dateRange = new List<DateTime>();

            for (int i = 0; i < dataRange; i++)
            {
                dateRange.Add(startDate.AddDays(i));
            }

            return dateRange;
        }

        private CalendarFlightData CreateFlightData(DateTime outDate, DateTime retDate,
            Random rd)
        {
            decimal price = (decimal)rd.NextDouble() * 1000;

            CalendarFlightData data = new CalendarFlightData();
            data.OutDate = outDate;
            data.RetDate = retDate;
            data.FlightPrice = price;

            return data;
        }


    }
}
