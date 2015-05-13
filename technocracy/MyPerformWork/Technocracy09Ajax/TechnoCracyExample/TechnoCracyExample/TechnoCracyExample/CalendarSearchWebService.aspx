<%@ Page Language="C#" AutoEventWireup="true"
    CodeBehind="CalendarSearchWebService.aspx.cs"
    Inherits="CalendarSearchWebService"
    MasterPageFile="~/CalendarSearch.Master" %>

<%@ Register TagPrefix="cc" TagName="CalendarMatrixWS" Src="~/Controls/WebServiceControls/CalendarMatrixForWebService.ascx" %>

<%--<asp:Content ContentPlaceHolderID="head" ID="Head" runat="server">
    <script type="text/javascript" src="js/jquery-1.3.2.min.js"></script>
    <script type="text/javascript" src="js/jquery.js"></script>
</asp:Content>--%>

<asp:Content ID="CalendarSearchBody" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    
    <asp:ScriptManager ID="CalendarSM" runat="server" EnablePageMethods="true">
        <Services>
            <asp:ServiceReference
             InlineScript="true"
             Path="~/AjaxWebServices/CalendaSearchService.asmx" />
        </Services>
        <Scripts>
            <asp:ScriptReference Path="~/js/CalendarSearchWebService.js" />
        </Scripts>
    </asp:ScriptManager>
    <cc:CalendarMatrixWS Id="CalendarMatrix" runat="server"></cc:CalendarMatrixWS>
    
    <label>Page method result:</label><div id="PageMethodResult"  style="color:Red"></div>
    <asp:Button ID="ValidateRequestBtn" runat="server" OnClientClick="ValidFlight(); return false;"
     Text="Validate Flight  Request Data" />
    <div id="result"></div>
    <label id="ErrorLabel" style="color:Red"></label>
    <%--<label>jquery result:</label><div id="jqueryResult" style="color:Red"></div>
    <button id="CallPagetMethod">Call Page method </button>--%>
</asp:Content>