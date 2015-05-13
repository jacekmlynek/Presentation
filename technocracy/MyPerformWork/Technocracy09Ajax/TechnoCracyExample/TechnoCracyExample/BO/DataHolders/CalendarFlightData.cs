using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using BO.Tools;

namespace BO.DataHolders
{
    public class CalendarFlightData
    {
        private const string DateFormat = "dd.MM.yyyy";

        public DateTime OutDate { get; set; }
        public DateTime RetDate { get; set; }
        public decimal FlightPrice { get; set; }
        public string FlightPriceTxt
        {
            get { return FlightPrice.ToString(CalendarHelper.PriceFormat); }
        }
        public string OutDateTxt
        {
            get { return OutDate.ToString(DateFormat); }
        }
        public string RetDateTxt
        {
            get { return RetDate.ToString(DateFormat); }
        }

        public override string ToString()
        {
            const string seprator = "|";

            return string.Concat(OutDate.ToString(DateFormat),
                seprator, RetDate.ToString(DateFormat));
        }
    }
}
