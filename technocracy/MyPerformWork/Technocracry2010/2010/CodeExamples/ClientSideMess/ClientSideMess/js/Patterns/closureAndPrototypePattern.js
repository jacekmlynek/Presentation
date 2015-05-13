/// <reference name="MicrosoftAjax.js"/>
/// <reference path="../Intellisense/JQuery.Intellisense.js" />


PersonAsClosure = function() {
    var _firstName = "ola";
    var _lastName = "test";

    this.get_firstName = function() { return _firstName; }
    this.get_lastName = function() { return _lastName; }
}

PersonAsPrototype = function(age) {
    this._firstName = "ola";
    this._lastname = "test";
    this._age=age;
}

PersonAsPrototype.prototype = {
    get_firstName: function() {
        return this._firstName;
    },
    get_lastName: function() {
        return this._lastname;
    },
    showMyAge: function(){
        Sys.Debug.trace("Age: " + this._age);
    }
}


//$(document).ready(function() {
//    var _closurePerson = new PersonAsClosure();
//    var _prototypePerson = new PersonAsPrototype();
//    Sys.Debug.trace("Closure person name " + _closurePerson.get_firstName());
//    Sys.Debug.trace("Closure person last name " + _closurePerson.get_lastName());
//    Sys.Debug.trace("Prototype person name " + _prototypePerson.get_firstName());
//    Sys.Debug.trace("Prototype person last name " + _prototypePerson.get_lastName());

//});

/// <summary Only for inherit. Uncoment for use </summary>


Polish = function(age) {
    PersonAsPrototype.apply(this, arguments);
}

function inherit(child, parent) {
    child.prototype = parent.prototype;
}

$(document).ready(function() {

    inherit(Polish, PersonAsPrototype);
    var _person = new PersonAsPrototype(34);
    var _polish = new Polish(12);
    _person.showMyAge();
    _polish.showMyAge();
});
