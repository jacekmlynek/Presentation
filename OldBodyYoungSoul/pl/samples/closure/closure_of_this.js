(function(){
    var LocalClosure = function()
    {
        this.closure = function()
        {
            return this;
        }
    }

    var ClientOfClosure = function(local_closure_instance)
    {
        var _local_closure = local_closure_instance.closure;

        this.closure_this = function()
        {
            return _local_closure();
        }
    }

    var _local_closure_instance = new LocalClosure();
    var _client_of_closure = new ClientOfClosure(_local_closure_instance);

    console.log("Js this example!!!");

    var _is_realy_client_of_closure_instance = _client_of_closure.constructor === ClientOfClosure
    var _is_realy_local_closure_instance = _client_of_closure.closure_this().constructor === LocalClosure
    
    console.log("Client this object is equal ClientOfClosure?: " + _is_realy_client_of_closure_instance);
    console.log("Closure this object returned by his client is equal LocalClosure?: " + _is_realy_local_closure_instance);
    console.log("Closure this object returned by his client is: " + _client_of_closure.closure_this());
})();
