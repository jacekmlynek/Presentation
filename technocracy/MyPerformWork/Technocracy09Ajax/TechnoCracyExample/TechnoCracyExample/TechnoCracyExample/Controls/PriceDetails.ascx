<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="PriceDetails.ascx.cs" Inherits="TechnoCracyExample.Controls.PriceDetails" %>
<%@ Import Namespace="BO.Tools"%>

<div class="CalendarSearchPricing">
<asp:Panel class="pricing" id="pricing" runat="server">
    <div id="pricingHeader"><p class="header2">Wycena</p></div>
    <div class="CalendarSearchPricingTable">
    <div id="tableHeaders">
    <div id="passengerType"><p class="header3 tableBorder">Rodzaj<br />pasażera</p></div>
    <div id="passengerCount"><p class="header3 tableBorder">Liczba osób</p></div>
    <div id="price">
        <div id="nettoPrice"><p class="header3 tableBorder">cena netto</p></div>
        <div id="taxPrice"><p class="header3 tableBorder">Za osobę</br>podatek</p></div>
        <div id="bruttoPrice"><p class="header3 tableBorder">cena brutto</p></div>
    </div>
    <div id="allPrice"><p class="header3 tableBorder">Razem</p></div>
    </div>
    <div id="tableData">
        <div id="passengerType"><p class="text tableBorder">Mr.</p></div>
        <div id="passengerCount"><p class="text tableBorder">1</p></div>
        <div id="nettoPrice"><p class="text tableBorder"><%# DataSource.FlightPrice.ToString(CalendarHelper.PriceFormat) %>&nbsp;PLN</p></div>
        <div id="taxPrice"><p class="text tableBorder"><%# DataSource.FlightPrice.ToString(CalendarHelper.PriceFormat) %>&nbsp;PLN</p></div>
        <div id="bruttoPrice"><p class="text tableBorder"><%# DataSource.FlightPrice.ToString(CalendarHelper.PriceFormat) %>&nbsp;PLN</p></div>
        <div id="allPrice"><p class="text tableBorder"><%# DataSource.FlightPrice.ToString(CalendarHelper.PriceFormat) %>&nbsp;PLN</p></div>
    </div>
    <asp:PlaceHolder ID="PlaceHolder1" runat="server">
        <div id="tableFooter">
            <div id="summaryText"><p class="header3 tableBorder">Cena za przelot :</p></div>
            <div id="allPrice"><p class="header3 tableBorder"><%# DataSource.FlightPrice.ToString(CalendarHelper.PriceFormat) %>&nbsp;PLN</p></div>
        </div>
    </asp:PlaceHolder>
    <div id="tableFooter">
        <div id="summaryText"><p class="header3 tableBorder">Razem cena do zapłaty :</p></div>
        <div id="allPrice" ><p class="header3 tableBorder"><asp:label ID="TotalPriceLbl" runat="server"><%# DataSource.FlightPrice.ToString(CalendarHelper.PriceFormat) %></asp:label><span id="TotalPriceSpan"></span>&nbsp;PLN</p></div>
    </div>
    <div>Selected flight key : <span id="FlightKeySpan"><%#DataSource.ToString() %> </span></div>
    </div>
</asp:Panel>
</div>