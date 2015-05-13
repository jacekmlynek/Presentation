<%@ Control Language="C#" AutoEventWireup="true"
 CodeBehind="CallBackCalenarPriceCell.ascx.cs"
  Inherits="TechnoCracyExample.Controls.CallBackControls.CallBackCalenarPriceCell"
   EnableViewState="false" %>

<asp:PlaceHolder ID="EmptyCellPH" runat="server">
    <td class="calendarMatrixEmptyPriceCell">
        <span>---</span>
    </td>
</asp:PlaceHolder>
<asp:PlaceHolder ID="PricePH" runat="server">
    <td id='<%# DataSource.ToString() %>'
        class='<%#CalendarMatrixPriceCellCss%>' 
        onmouseover="javascript:setActiveDate(<%#GetOnMauseActionJsParam()%>)"
        onmouseout="javascript:previousDate(<%#GetOnMauseActionJsParam()%>)">
    <asp:LinkButton ID="TwoWaySelecteFlightLb" runat="server"
     OnLoad="TwoWaySelecteFlightLb_Load" >
            <%# DataSource.FlightPrice.ToString(PriceFormat)%>
        </asp:LinkButton>
    </td>
</asp:PlaceHolder>
<asp:HiddenField ID="IsSelectedHF"  runat="server" />