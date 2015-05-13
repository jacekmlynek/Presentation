using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Web;

namespace BO.RsourcesAccessors
{
    public class FileAccessor
    {
        public string GetFileAsText(string rawUrl)
        {
            string mappedpath = HttpContext.Current.Server.MapPath(rawUrl);
            return File.ReadAllText(mappedpath);
        }
    }
}
