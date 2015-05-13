/// <reference path="JQuery.Intellisense.js" />
/// <reference path="file:///D:\Mulimedia\MyData\Documents\MyPerformWork\Technocracry2010\2010\CodeExamples\ClientSideMess\jMVP\js\ThirdPartLibraries\AspAjax\start.js" />
/// <reference path="file:///D:\Mulimedia\MyData\Documents\MyPerformWork\Technocracry2010\2010\CodeExamples\ClientSideMess\jMVP\js\ThirdPartLibraries\AspAjax\MicrosoftAjaxCore.js" />

    function executescript4() {
        var dd = function() {
            Intellise.Componets.AlertDisplayer.displayMessage();
        }
    }

    function execute() {
        Type.registerNamespace("Intellise.Componets");
        
        Intellise.Componets.Simple = function() {
            /// <summary>Some object (simulation of class) description</summary>
            this._message = "The simple intellisnese coponets was call";
        }
        Intellise$Componets$Simple = function() {
            alert(this._message);
        }
        Intellise.Componets.Simple.prototype = {
            showMessage: Intellise$Componets$Simple,
            set_message: function(value) {
                this._message = value;
            },
            get_message: function() {
                return this._message;
            }
        }
        Intellise.Componets.Simple.registerClass('Intellise.Componets.Simple');
    }

    function execute2() {
        Type.registerNamespace("Intellise2.Componets2");
        var scope = Intellise2.Componets2;
        scope.PrototypeSingleton = function() {
            this._fild = '';
        }
        scope.PrototypeSingleton.prototype = {
            get_fild: function() { return this._fild; }
        }
        if (scope.PrototypeSingleton._staticInstance == null) {
            scope.PrototypeSingleton._staticInstance = new scope.PrototypeSingleton();
        }
        scope.PrototypeSingleton.registerClass('Intellise2.Componets2.PrototypeSingleton');
        //static instance
        scope.PrototypeSingleton.get_instance = function() {
            return scope.PrototypeSingleton._staticInstance;
        }
    }
    
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
        Sys.loader.registerScript("script4", null, executescript4);
        Sys.loader.registerScript("script3", null, executescript3);
        Sys.loader.registerScript("script1", null, execute);
        Sys.loader.registerScript("script2", null, execute2);
    }
    else {
        execute();
    }

