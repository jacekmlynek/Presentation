/// <reference name="MicrosoftAjax.js"/>

(function() {
    function execute2() {
        Type.registerNamespace("Intellise2.Componets2");

        var scope = Intellise2.Componets2;

        scope.PrototypeSingleton = function() {
            this._fild = 'test';
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
        ///<returns type='Intellise2.Componets2.PrototypeSingleton'>dd</returns>
            return scope.PrototypeSingleton._staticInstance;
        }



    }
    if (window.Sys && Sys.loader) {
        Sys.loader.registerScript("script2", execute2);
    }
    else {
        execute2();
    }
})();