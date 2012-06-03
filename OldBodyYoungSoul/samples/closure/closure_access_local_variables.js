(function(){
  console.log("Access local variable example");
  var _index = 123;
  console.log("index before change: " + _index);
  
  function change_in_local_index()
  {
    var _index = 1;
    return function(){
      for(var i=0; i<3; i++)
      {
        console.log(_index+=1);
      }
    }();
  }

  change_in_local_index();
  
  console.log("index after changes: " + _index);

})();
