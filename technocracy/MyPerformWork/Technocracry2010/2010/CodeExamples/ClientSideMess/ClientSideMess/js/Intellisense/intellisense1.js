/// <reference name="MicrosoftAjax.js"/>
/// <reference path="JQuery.Intellisense.js" />
/// <reference path="Componets/simplePrototypeComponet.js" />

$(document).ready(function() {
    var _simpleComponets = new Intellise.Componets.Simple();
    _simpleComponets.showMessage();
    _simpleComponets.set_message("New message");
    _simpleComponets.showMessage();



});