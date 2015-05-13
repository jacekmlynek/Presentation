/// <reference name="MicrosoftAjax.js"/>
/// <reference path="JQuery.Intellisense.js" />

Type.registerNamespace("Intellise.Componets");

Intellise.Componets.Simple = function(args) {
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


