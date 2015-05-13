/// <reference name="MicrosoftAjax.js"/>
/// <reference path="../Models/page-model.js" />
/// <reference path="../Views/page-main-view.js" />
/// <reference path="../../../JQuery.Intellisense.js" />


Type.registerNamespace("SearchResultPage.Componets.Presenters");


SearchResultPage.Componets.Presenters.PagePresenter = function(model, view) {
    this._model = model;
    this._view = view;
    this._init();
}

SearchResultPage.Componets.Presenters.PagePresenter.prototype = {
    _init: function() {
        if (typeof (this._model.get_data().add_propertyChanged) === "function") {
            this._model.get_data().add_propertyChanged(Function.createDelegate(this, function() {
                alert("Notify");
            }));
        }
        $(this._view.get_inputSelector()).click(Function.createDelegate(this, function() {
            this._model.callToSerwerForNewData();
            return false;
        }))
    }

}

SearchResultPage.Componets.Presenters.PagePresenter.registerClass('SearchResultPage.Componets.Presenters.PagePresenter');

$(document).ready(function() {

    var _model = new SearchResultPage.Componets.Models.PageModel();
    var _view = new SearchResultPage.Componets.Views.PageView();
    var _presenter = new SearchResultPage.Componets.Presenters.PagePresenter(_model, _view);
});