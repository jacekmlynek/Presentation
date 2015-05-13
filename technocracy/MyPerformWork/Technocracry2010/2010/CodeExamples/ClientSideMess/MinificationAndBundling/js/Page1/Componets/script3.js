/// <reference name="MicrosoftAjax.js"/>
/// <reference path="script2.js" />
/// <reference path="script1.js" />

(function() {
    function executescript3() {
        Type.registerNamespace("Intellise.Componets");

        Intellise.Componets.AlertDisplayer = (function() {
            var _test = Intellise2.Componets2.PrototypeSingleton.get_instance().get_fild();
            var _secondComponets = new Intellise.Componets.Simple();
            return {
                displayMessage: function() {
                    alert(_test + _secondComponets.get_message());
                }
            }
        })();
    }

    if (window.Sys && Sys.loader) {
        Sys.loader.registerScript("script3", null, executescript3);
    }
    else {
        execute();
    }

})();