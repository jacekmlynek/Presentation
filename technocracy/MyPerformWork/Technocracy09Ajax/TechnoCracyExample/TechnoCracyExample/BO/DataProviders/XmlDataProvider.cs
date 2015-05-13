using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml;

using BO.RsourcesAccessors;

namespace BO.DataProviders
{
    public class XmlDataProvider
    {
        public string UrToFile { get; set; }
        public FileAccessor fileAccessor{get; set;}

        public Dictionary<string, string> ReadXmlAsKeyValuePair(
            string expressionToNodeCollection, string atributeName)
        {
            XmlDocument xmlDocument = new XmlDocument();
            xmlDocument.InnerXml = fileAccessor.GetFileAsText(UrToFile);
            XmlElement root = xmlDocument.DocumentElement;
            Dictionary<string, string> keyValuePair =
                new Dictionary<string, string>();

            foreach (XmlNode node in root.SelectNodes(expressionToNodeCollection))
            {
                keyValuePair.Add(node.Attributes[atributeName].Value, node.InnerText);
            }

            return keyValuePair; 
        }
    }
}
