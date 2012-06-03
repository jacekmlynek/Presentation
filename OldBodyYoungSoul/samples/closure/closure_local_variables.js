(function()
{
    var _message = "default message";
    var _count  = 1;

    function  change_context_for_local_varibale(func_to_call)
    {
        var  _message = "second message";
        var  _count = 2;
        func_to_call();
    }

    change_context_for_local_varibale(function(){
        console.log("Example of js closure with local variable");
        console.log("Params value in closure -  message:" + _message + " and count:" + _count);
    }); 
})();
