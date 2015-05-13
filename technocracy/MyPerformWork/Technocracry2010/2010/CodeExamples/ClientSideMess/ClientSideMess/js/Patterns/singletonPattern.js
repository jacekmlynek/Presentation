/// <reference name="MicrosoftAjax.js"/>
/// <reference path="../Intellisense/JQuery.Intellisense.js" />

//in closure way
var closureSingleton = (function() {
  var privateVar = '';

  function privateMethod () {
    // ...
  }

  return { // public interface
    publicMethod1: function () {
      // all private members are accesible here
    },
    publicMethod2: function () {
    }
  };
})();


// prototype way.

PrototypeSingleton = function() {
    this._fild = '';
}
PrototypeSingleton.prototype = {
    get_fild: function() { return this._fild; }
}

if (PrototypeSingleton._staticInstance == null) {
    PrototypeSingleton._staticInstance = new PrototypeSingleton();
}

//static instance
PrototypeSingleton.get_instance = function() {
    return PrototypeSingleton._staticInstance;
}