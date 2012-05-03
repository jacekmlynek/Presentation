(function(){
  //define my own extend
  if (typeof Object.extend !== 'function') {
      Object.extend = function (objectToExtend, props) {
      
      for ( var prop in props ) {
        var _value = props[prop].value;
      
        if(_value !== undefined 
          && props.hasOwnProperty(prop)) 
        {
          objectToExtend[prop] = _value;
        }
      }
    };
  }

  var printer = {
    printToPdf: {
      value: function()
      {
        console.log("Text as pdf: " + this.details);
      }
    },
    printToHtml: {
      value: function()
      {
        console.log("Text as html: " + this.details);
      }
    },
    printToCsv: {
      value: function(){
        console.log("Text as csv: " + this.details);
      }
    }
  }

  savingAccountOffer = {
    details: "Nice saving account with intrest rate up to 5.7"
  },

  //Using ECMAScript 5 
  Object.defineProperties(savingAccountOffer, printer);

  //Using my coustom extend
  //Object.extend(savingAccountOffer, printer);

  savingAccountOffer.printToPdf();

  workAndTravelOffer = {
    details: "work and travel"
  }

  if(workAndTravelOffer.printToCsv !== undefined) workAndTravelOffer.printToCsv();

})();
