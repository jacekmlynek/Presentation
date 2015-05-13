/// <reference name="MicrosoftAjax.js"/>
/// <reference path="../Intellisense/JQuery.Intellisense.js" />


Presenter = function(model) {
    this._model = model;
    this._init();
}

Presenter.prototype = {
    _init: function() {
        if (typeof (this._model.get_data().add_propertyChanged) === "function") {
            this._model.get_data().add_propertyChanged(Function.createDelegate(this, function() {
                alert("Notify");
            }));
        }
        $("input").click(Function.createDelegate(this, function() {
            this._model.callToSerwerForNewData();
            return false;
        }))
    }

}

 Model = function() {
     this._data = { key: "value" };
     Sys.Observer.makeObservable(this._data);

 }
 Model.prototype = {
 callToSerwerForNewData: function() {
     //just simulate call to serwer waiting 2 second and notify about changes.
         setTimeout(Function.createDelegate(this, function() {
         Sys.Observer.beginUpdate(this._data);
             Sys.Observer.setValue(this._data, "key", "newValue");
             Sys.Observer.endUpdate(this._data);
         }), 2000)
     },
     get_data: function() {
         return this._data;
     }
 }

 $(document).ready(function() {
     var model = new Model();
     var presenter = new Presenter(model);
 });