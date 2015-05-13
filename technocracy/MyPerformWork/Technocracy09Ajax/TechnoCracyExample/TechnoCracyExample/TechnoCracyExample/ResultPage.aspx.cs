using System;

namespace TechnoCracyExample
{
    public partial class ResultPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            SelcedFlightKeyLB.Text = Request.QueryString["selectedFlightKey"];
        }
    }
}
