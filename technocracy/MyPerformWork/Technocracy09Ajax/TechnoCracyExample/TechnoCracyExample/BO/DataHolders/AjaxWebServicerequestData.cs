using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BO.DataHolders
{
    public class AjaxWebServicerequestData
    {
        public string StartOutDate { get; set; }
        public string StartRetDate { get; set; }
        public int OutDateChangeRange { get; set; }
        public int RetDateChangeRange { get; set; }
    }
}
