<%@ Control Language="C#" AutoEventWireup="true"
 CodeBehind="CallBackCalendarMatrix.ascx.cs" Inherits="TechnoCracyExample.Controls.CallBackControls.CallBackCalendarMatrix" %>
<%@ Register TagPrefix="cc" TagName="CallBaclPriceCell" Src="~/Controls/CallBackControls/CallBackCalenarPriceCell.ascx" %>
<%@ Import Namespace="BO.Tools" %>

<asp:UpdatePanel ID="CalendarMatrixUP" runat="server"
 ChildrenAsTriggers="false" UpdateMode="Conditional">
    <ContentTemplate>
        <div id="CalenarMatrixPnanel">
        <table class="calendatMatrixTable">
        <thead>
            <tr>
                <td colspan="9">
                    <div class="calendarMatrixTop">
                    <div class="calendarMatrixReturnPadding calendarMatrixReturnPaddingLeft">
                        <asp:ImageButton ID="ReturnPrevDateBt" runat="server" ImageUrl="~/img/CalendarMatrix/left.gif"
                            OnClick="ReturnPrevDateBt_Click" EnableViewState="false" />
                    </div>
                    <span class="calendarMatrixReturnText header3"><%# ReturnHeaderText %></span>
                    <div class="calendarMatrixReturnPadding calendarMatrixReturnPaddingRight">
                        <asp:ImageButton ID="ReturnNextDateBt" runat="server" ImageUrl="~/img/CalendarMatrix/right.gif"
                            OnClick="ReturnNextDateBt_Click" EnableViewState="false" />
                    </div>
                    </div>
                </td>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <td colspan="9" rowspan="9">
                </td>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                <td class="calendarMatrixOutPadding" rowspan="9">
                    <div class="calendarMatrixOutPaddingVer">
                       <asp:ImageButton ImageUrl="~/img/CalendarMatrix/up.gif" ID="OutPrevDateBt"
                        runat="server" OnClick="OutPrevDateBt_Click" EnableViewState="false" />
                    </div>
                    <div class="calendarMatrixOutPaddingText">
                        <%#OutHeaderVerticalText%></div>
                    <div class="calendarMatrixOutPaddingVer">
                        <asp:ImageButton ImageUrl="~/img/CalendarMatrix/down.gif" ID="OutNextDateBt"
                         runat="server" OnClick="OutNextDateBt_Click" EnableViewState="false" /> 
                    </div>
                </td>
                 <td class="calendarMatrixDateHeader">
                 
                 </td>
                <asp:Repeater ID="ReturnTwoWayRp" runat="server">
                    <ItemTemplate>
                        <td id='<%# CalendarHelper.GetRetCalendarDataIdentity((DateTime)Container.DataItem) %>' class="calendarMatrixDateHeader">
                             <%#((DateTime)Container.DataItem).ToString(CalendarHelper.DateFormat)%>
                        </td>
                    </ItemTemplate>
                </asp:Repeater>
            </tr>
            <asp:Repeater ID="OutTwoWayRp" runat="server">
                <ItemTemplate>
                    <tr>
                        <td id='<%# CalendarHelper.GetOutCalendarDateIdentity((DateTime)Container.DataItem)%>' class="calendarMatrixDateHeader">
                            <%#((DateTime)Container.DataItem).ToString(CalendarHelper.DateFormat)%>
                        </td>
                        <asp:Repeater ID="PriceRp" runat="server" DataSource='<%# RetDateRange%>'
                         OnItemDataBound ="PriceRp_OnItemDataBound">
                            <ItemTemplate>
                            <cc:CallBaclPriceCell ID="PriceCellCrtl" runat="server" />
                            </ItemTemplate>
                        </asp:Repeater>
                        <td class="margin">&nbsp;</td>
                    </tr>
                </ItemTemplate>
            </asp:Repeater>
        </tbody>
    </table>
    </div>
    </ContentTemplate>
    <Triggers>
        <asp:AsyncPostBackTrigger EventName="Click" ControlID="OutPrevDateBt"/>
        <asp:AsyncPostBackTrigger EventName="Click" ControlID="OutNextDateBt" />
        <asp:AsyncPostBackTrigger EventName="Click" ControlID="ReturnPrevDateBt"  />
        <asp:AsyncPostBackTrigger EventName="Click" ControlID="ReturnNextDateBt" />
    </Triggers>
 </asp:UpdatePanel>

<asp:HiddenField ID="SelectedIndexHF" runat="server" />