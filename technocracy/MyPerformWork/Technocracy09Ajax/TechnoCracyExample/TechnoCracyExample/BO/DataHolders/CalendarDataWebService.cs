using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using BO.Tools;

namespace BO.DataHolders
{
    public class CalendarDataWebService
    {
        public List<string> OutDateRange{get; set;}
        public List<string> RetDateRange{get; set;}
        public DateTime NewStartOutDate { get; set; }
        public DateTime NewStartRetDate { get; set; }
    }
}
