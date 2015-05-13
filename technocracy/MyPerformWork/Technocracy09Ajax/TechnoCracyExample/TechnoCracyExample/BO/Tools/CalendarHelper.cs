using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using BO.DataHolders;

namespace BO.Tools
{
    public class CalendarHelper
    {
        public static string DateFormat = "dd.MM.yyyy";
        public static string PriceFormat = "#.00";
        public static int RequestedDayNumber = 7;

        public static string GetOutCalendarDateIdentity(DateTime date)
        {
            return string.Concat("out", date.ToString(DateFormat));
        }

        public static string GetRetCalendarDataIdentity(DateTime date)
        {
            return string.Concat("ret", date.ToString(DateFormat));
        }
    }
}
