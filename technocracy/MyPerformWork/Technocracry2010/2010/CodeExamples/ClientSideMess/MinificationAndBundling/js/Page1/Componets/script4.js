/// <reference name="MicrosoftAjax.js"/>
/// <reference path="script3.js" />

(function() {
    function executescript4() {
        $(document).ready(function() {
           Intellise.Componets.AlertDisplayer.displayMessage();
        });

    }

    if (window.Sys && Sys.loader) {
        Sys.loader.registerScript("script4", null, executescript4);
    }
    else {
        execute();
    }

})();