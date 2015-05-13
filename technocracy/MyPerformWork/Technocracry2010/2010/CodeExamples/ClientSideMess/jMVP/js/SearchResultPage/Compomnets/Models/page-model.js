/// <reference name="MicrosoftAjax.js"/>
Type.registerNamespace("SearchResultPage.Componets.Models");

SearchResultPage.Componets.Models.PageModel = function() {
    this._data = { key: "value" };
    Sys.Observer.makeObservable(this._data);

}
SearchResultPage.Componets.Models.PageModel.prototype = {
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

SearchResultPage.Componets.Models.PageModel.registerClass('SearchResultPage.Componets.Models.PageModel');