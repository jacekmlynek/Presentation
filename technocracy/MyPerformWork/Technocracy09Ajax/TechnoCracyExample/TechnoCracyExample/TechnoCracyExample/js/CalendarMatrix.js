//Glob variable for privious selected calendar matrix cell.
var privousSelecDataId;
var priviousSelectCssClass;

//Select current flight item. For one way flight retDate is null.
function setActiveDate(outDate, retDate)
{
    document.getElementById(outDate).className = "calendarMatrixDateHeader activedate";
    if (retDate != null) {
        document.getElementById(retDate).className = "calendarMatrixDateHeader activedate";
    }
}
// Unselect privious item. For one way flight retDate is null.
function previousDate(outDate, retDate)
{
    document.getElementById(outDate).className = "calendarMatrixDateHeader";
    if (retDate != null) {
        document.getElementById(retDate).className = "calendarMatrixDateHeader";
    }
}

function selectData(selectFlightKey, flightKeyHfId){
    if (privousSelecDataId != null) {
        unSelectData();
    }

    priviousSelectCssClass = document.getElementById(selectFlightKey).className;
    document.getElementById(selectFlightKey).className = "selectDate";
    privousSelecDataId = selectFlightKey;

    SaveSelcetdFlightKeyToHF(flightKeyHfId, selectFlightKey);
}

function SaveSelcetdFlightKeyToHF(HiddenFieldId, selectFlightKey) {
   document.getElementById(HiddenFieldId).value = true;//selectFlightKey;

}

function unSelectData() {
    // if change data range the privious elemnt doesnt exist on page.
    if (document.getElementById(privousSelecDataId) != null) {
        document.getElementById(privousSelecDataId).className = priviousSelectCssClass;
        }
    }

function selectBestPriceFligth(offersToSelect, separator, bestOfferHfId) {

    var offersArray = offersToSelect.split(separator);
    for (var i = 0; i < offersArray.length; i++) {
        if (document.getElementById(offersArray[i]) != null) {
            document.getElementById(offersArray[i]).className = "lowCost";
        }
    }
    SaveBestOfferJsArrayToHF(offersArray, bestOfferHfId);
}

function SaveBestOfferJsArrayToHF(offersArray, bestOfferHfId) {
    document.getElementById(bestOfferHfId).value = offersArray;
}


function pageLoad()
{
    var manager = Sys.WebForms.PageRequestManager.getInstance();
    manager.add_endRequest(OnEndRequest);
    manager.add_pageLoading(OnPageLoading);
}

function OnEndRequest(sender, args)
{
    var dataItem = args.get_dataItems()["__Page"];
    if (dataItem)
    {
        $get(dataItem[0]).value = dataItem[1];
    }
}

// Make Update Panel mockup refreshing faster
function OnPageLoading(sender, args)
{
    var calendarMatrix = $get("CalenarMatrixPnanel");
    var div = args._panelsUpdating[0];
    if(calendarMatrix !=null
    && MatrixUpI == div.id)
    {
        calendarMatrix.parentNode.removeChild(calendarMatrix);
    }
    
}


/*
For Callback functions
*/
function ReceiveServerData(arg, contex)
{
    var serializer = Sys.Serialization.JavaScriptSerializer;
    var data = serializer.deserialize(arg);
    var totalPriceId = "TotalPriceSpan";
    var flightKeySpanId= "FlightKeySpan";
    var selectedFlightHFId = data.SelctedFlightKeyHf;
    
    $get(totalPriceId).innerHTML = data.TotalPriceTxt;
    $get(flightKeySpanId).innerHTML = data.FlightKey
    
    if(selectedFlightHFId !=null)
    {
        $get(selectedFlightHFId).value = data.FlightKey;
    }
    
} 






function doSomething() {
   
    alert("I'm done resizing for the moment");
    
};


var resizeTimer = null;


window.onresize = "doSomething()"; 