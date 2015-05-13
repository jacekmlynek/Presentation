<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="jsControler.aspx.cs" Inherits="ClientSideMess._Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>
   <%-- <script src="js/ThirdPartLibraries/AspAjax/start.js" type="text/javascript"></script>--%>
  <%--  <script type="text/javascript">
        Sys.require("dataView");
    </script>--%>

    <script src="js/ThirdPartLibraries/AspAjax/MicrosoftAjaxCore.js" type="text/javascript"></script>
    <script src="js/ThirdPartLibraries/jquery/jquery-1.4.2.min.js" type="text/javascript"></script>

    <script src="js/Intellisense/Componets/simplePrototypeComponet.js" type="text/javascript"></script>
    <script src="js/Patterns/ClosureAndPrototypePattern.js" type="text/javascript"></script>
    <script src="js/Intellisense/intellisense1.js" type="text/javascript"></script>

    <script src="js/Patterns/observer.js" type="text/javascript"></script>
    
</head>
<body>
<h1>Client side test page</h1>
    <form id="form1" runat="server">
    <div>
    <input type="button" value="Observer" />
    </div>
    </form>
</body>
</html>
