/// <reference name="MicrosoftAjax.js"/>

Type.registerNamespace("SearchResultPage.Componets.Views");

SearchResultPage.Componets.Views.PageView = function() {
    this._inputSelector = "input";
}

SearchResultPage.Componets.Views.PageView.prototype = {
    get_inputSelector: function() {
        return this._inputSelector;
    }
}

SearchResultPage.Componets.Views.PageView.registerClass('SearchResultPage.Componets.Views.PageView');