<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CalendarSearchWithUP.aspx.cs"
 Inherits="CalendarSearchWithUP" MasterPageFile="~/CalendarSearch.Master" EnableEventValidation="false"  %>
<%@ Register Src="~/Controls/CalendarSearch.ascx" TagPrefix="cc" TagName="CalendarMatrix" %>
<%@ Register  TagPrefix="cc" TagName="PriceDetails" Src="~/Controls/PriceDetails.ascx" %>

<asp:Content ContentPlaceHolderID="ContentPlaceHolder1" ID="CalendarBody" runat="server">
    <asp:ScriptManager ID="CalendarSM" runat="server">
        <Scripts >
            <asp:ScriptReference Path="~/js/CalendarMatrix.js" />
        </Scripts>
    </asp:ScriptManager>
    
    <cc:CalendarMatrix ID="CalendarMatrixCrt" runat="server"
     OnSelectedFlightChange="CalendarMatrix_SelectedFlightChange"
     OnCalendarReturnNextDate="GetReturnNextRangeDate"
     OnCalendarOutNextDate="GetOutNextRangeDate"
     OnCalendarOutPrevDate="GetOutPrevRangeDate"
     OnCalendarReturnPrevDate="GetReturnPrevRangeDate" ></cc:CalendarMatrix>
    <asp:UpdatePanel ID="CalendarPriceDetailUP" runat="server" UpdateMode="Conditional">
        <ContentTemplate>
            <cc:PriceDetails ID="CalendarPriceDetailsCrt" runat="server"></cc:PriceDetails>
        </ContentTemplate>
    </asp:UpdatePanel>
    <asp:Label ID="calendarNonRefreshLB" runat="server" Text="First text"></asp:Label>
    <asp:TextBox id="CalendarNonRefreshTextBox" runat="server" Text="Test txt"></asp:TextBox>
    <asp:UpdatePanel ID="CalendarSearchUP" runat="server" UpdateMode="Conditional">
    <ContentTemplate>
        <div>Dupa Jasia</div>
        <asp:Button ID="CalendarBTN" runat="server" OnClick="CalendarBTN_Click" Text="Submit" />
        <asp:Label ID="CalendarLabel" runat="server" Text="First not modyfy"></asp:Label>
    </ContentTemplate>
    </asp:UpdatePanel>
    <asp:DropDownList ID="CalendarAirlinesDD" EnableViewState="false" runat="server"></asp:DropDownList>
    <br />
    <asp:Button ID="calendarNonAjaxPost" Text="Normal Post" runat="server" />
    <asp:Button ID="CalendarResponcePage" Text="RedirecToResult" runat="server"
     OnClick="CalendarResponcePage_Click" />
</asp:Content>
