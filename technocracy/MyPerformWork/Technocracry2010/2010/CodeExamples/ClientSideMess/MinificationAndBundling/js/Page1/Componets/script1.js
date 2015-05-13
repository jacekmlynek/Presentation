/// <reference path="JQuery.Intellisense.js" />
/// <reference path="file:///D:\Mulimedia\MyData\Documents\MyPerformWork\Technocracry2010\2010\CodeExamples\ClientSideMess\jMVP\js\ThirdPartLibraries\AspAjax\start.js" />
/// <reference path="file:///D:\Mulimedia\MyData\Documents\MyPerformWork\Technocracry2010\2010\CodeExamples\ClientSideMess\jMVP\js\ThirdPartLibraries\AspAjax\MicrosoftAjaxCore.js" />

(function() {
    function execute() {
        Type.registerNamespace("Intellise.Componets");
        Intellise.Componets.Simple = function() {
            /// <summary>Some object (simulation of class) description</summary>
            this._message = "The simple intellisnese coponets was call";
        }

        Intellise$Componets$Simple$showMessage = function() {
            alert(this._message);
        }

        Intellise.Componets.Simple.prototype = {
            showMessage: Intellise$Componets$Simple$showMessage,
            set_message: function(value) {
                this._message = value;
            },
            get_message: function() {
                return this._message;
            }
        }
        Intellise.Componets.Simple.registerClass('Intellise.Componets.Simple');
    }

    if (window.Sys && Sys.loader) {
        Sys.loader.registerScript("script1", null, execute);
    }
    else {
        execute();
    }
})();
