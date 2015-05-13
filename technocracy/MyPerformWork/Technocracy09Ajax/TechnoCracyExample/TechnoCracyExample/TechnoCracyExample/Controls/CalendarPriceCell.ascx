<%@ Control Language="C#" EnableViewState="false" AutoEventWireup="true" CodeBehind="CalendarPriceCell.ascx.cs" Inherits="TechnoCracyExample.Controls.CalendarPriceCell" %>

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
        OnCommand="SelecteFlighByDates_Click" CommandName="SelectTwoWayFlight" 
        OnClientClick=<%#SelectedJsFunction()%>
        CommandArgument='<%# DataSource.ToString() %>' >
            <%# DataSource.FlightPrice.ToString(PriceFormat)%>
        </asp:LinkButton>
    </td>
</asp:PlaceHolder>
<asp:HiddenField ID="IsSelectedHF"  runat="server" />