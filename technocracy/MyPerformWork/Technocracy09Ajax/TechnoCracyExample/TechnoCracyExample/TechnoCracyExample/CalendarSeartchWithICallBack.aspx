<%@ Page Language="C#" AutoEventWireup="true" EnableEventValidation="false"
 CodeBehind="CalendarSeartchWithICallBack.aspx.cs"
  Inherits="CalendarSeartchWithICallBack" MasterPageFile="~/CalendarSearch.Master" %>
  
<%@ Register  TagPrefix="cc" TagName="PriceDetails" Src="~/Controls/PriceDetails.ascx" %>
<%@ Register TagPrefix="cc" TagName="CallBackCalendarMatrix" Src="~/Controls/CallBackControls/CallBackCalendarMatrix.ascx" %>

  <asp:Content ID="CalednarBody" runat="server" ContentPlaceHolderID="ContentPlaceHolder1">
     <asp:ScriptManager ID="CalendarSM" runat="server">
        <Scripts >
            <asp:ScriptReference Path="~/js/CalendarMatrix.js" />
        </Scripts>
    </asp:ScriptManager>
    <cc:CallBackCalendarMatrix ID="CalendarMatrixCrtl" runat="server"
     OnCalendarReturnNextDate="GetReturnNextRangeDate"
     OnCalendarOutNextDate="GetOutNextRangeDate"
     OnCalendarOutPrevDate="GetOutPrevRangeDate"
     OnCalendarReturnPrevDate="GetReturnPrevRangeDate">
    </cc:CallBackCalendarMatrix>
    <cc:PriceDetails ID="CalendarPriceDetailsCrt" runat="server" />
    
    <asp:Label ID="calendarNonRefreshLB" runat="server" Text="First text"></asp:Label>
    <asp:TextBox id="CalendarNonRefreshTextBox" runat="server" Text="Test txt"></asp:TextBox>
    <asp:UpdatePanel ID="CalendarSearchUP" runat="server" UpdateMode="Conditional">
    <ContentTemplate>
        <div>Jasia</div>
        <asp:Button ID="CalendarBTN" runat="server" OnClick="CalendarBTN_Click" Text="Submit" />
        <asp:Label ID="CalendarLabel" runat="server" Text="First not modyfy"></asp:Label>
    </ContentTemplate>
    </asp:UpdatePanel>
    <asp:DropDownList ID="CalendarAirlinesDD" EnableViewState="false" runat="server"></asp:DropDownList>
    <br />
    <asp:Button ID="calendarNonAjaxPost" Text="Normal Post" runat="server" />
    <asp:Button ID="CalendarResponcePage" Text="RedirecToResult" runat="server"
     OnClick="CalendarResponcePage_Click" />
     
     <asp:HiddenField ID="SelectedFlightHF" runat="server" />
  </asp:Content>


