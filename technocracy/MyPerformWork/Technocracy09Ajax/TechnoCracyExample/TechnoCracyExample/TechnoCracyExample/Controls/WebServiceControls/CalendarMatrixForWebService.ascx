<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CalendarMatrixForWebService.ascx.cs" Inherits="TechnoCracyExample.Controls.WebServiceControls.CalendarMatrixForWebService" %>

<div id="CalenarMatrixPnanel">
        <table class="calendatMatrixTable">
        <thead>
            <tr>
                <td colspan="9">
                    <div class="calendarMatrixTop">
                    <div class="calendarMatrixReturnPadding calendarMatrixReturnPaddingLeft">
                        <asp:ImageButton ID="ReturnPrevDateBt" runat="server" ImageUrl="~/img/CalendarMatrix/left.gif"
                             OnClientClick="ReturnPrevDateBt_Click(); return false;"  EnableViewState="false" />
                    </div>
                    <span class="calendarMatrixReturnText header3">P o w r ó t</span>
                    <div class="calendarMatrixReturnPadding calendarMatrixReturnPaddingRight">
                        <asp:ImageButton ID="ReturnNextDateBt" runat="server" ImageUrl="~/img/CalendarMatrix/right.gif"
                            OnClientClick="ReturnNextDateBt_Click(); return false;" EnableViewState="false" />
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
        <tbody id="PriceAndDateContainer">
            <tr id="RetDateContainer">
                <td class="calendarMatrixOutPadding" rowspan="9">
                    <div class="calendarMatrixOutPaddingVer">
                       <asp:ImageButton ImageUrl="~/img/CalendarMatrix/up.gif" ID="OutPrevDateBt"
                        runat="server" OnClientClick="OutPrevDateBt_Click(); return false;" EnableViewState="false" />
                    </div>
                    <div class="calendarMatrixOutPaddingText">
                        W
                        <br />
                        Y
                        <br />
                        L
                        <br />
                        O
                        <br />
                        T
                        </div>
                    <div class="calendarMatrixOutPaddingVer">
                        <asp:ImageButton ImageUrl="~/img/CalendarMatrix/down.gif" ID="OutNextDateBt"
                         runat="server" OnClientClick="OutNextDateBt_Click(); return false;" EnableViewState="false" /> 
                    </div>
                </td>
                <td class="calendarMatrixDateHeader">
                 
                 </td>
            </tr>
        </tbody>
    </table>
    </div>