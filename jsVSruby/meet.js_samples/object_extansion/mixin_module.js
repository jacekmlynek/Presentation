(function(){
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
  };

  var invoiceMaker = function()
  {
    var _details;
    var _proto = {};
    Object.defineProperties(_proto, printer);
    var _that = Object.create(_proto);

    _that.details = _details;

    return _that;
  };

  tvInvoice = invoiceMaker();
  tvInvoice.details = "tv invoice for march equal 120 pln";
  if(tvInvoice.printToCsv !== undefined) tvInvoice.printToCsv();

  mobileInvoice = invoiceMaker();
  mobileInvoice.details = "mobile invoice for april 89 pln";
  if(mobileInvoice.printToHtml !== undefined) mobileInvoice.printToHtml();

})();



