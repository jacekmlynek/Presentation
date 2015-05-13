
var calendarDateHeaderCss = "calendarMatrixDateHeader";
var calendarMatrixPriceCellCss = "calendarMatrixEmptyPriceCell";
var calendarRetDateCotainerId = "RetDateContainer";
var calendarPriceContainerId = "PriceAndDateContainer";
var calendarContentElemsId = "changedContent";
var outDateNextRange = 7;
var outDatePrevrange = -7;
var retDateNextRange = 7;
var retDatePrevRange = -7;

var startOutData;
var startRetDate;
var calendarDataResponce;
var calenarDataRangesResponce;
var outDateRangePerRequest;
var retDateRangePerrequest;

function pageLoad()
{
     startOutDate ='10.01.2010';
     startRetDate = '10.06.2010';
     
    TechnoCracyExample.AjaxWebServices.CalendaSearchService.set_defaultFailedCallback(methodFailed);
    GetDataFromService(0,0);
}

function methodFailed(results, context, methodName)
{
    $get("ErrorLabel").innerHTML = 
    String.format("Execution of method '{0}' failed because of the following:\r\n'{1}'",
    methodName, results.get_message());
}

function GetDataFromService(outDateRange, retdateRange)
{
    outDateRangePerRequest = outDateRange;
    retDateRangePerrequest = retdateRange;
    
    var requestdData = CreateRequestsAjaxData();
    
    TechnoCracyExample.AjaxWebServices.CalendaSearchService.
    GetCalendarData(requestdData, OnSucceededCallback);
}

function CallForDataRanges(outDateRange, retdateRange)
{   
    var requestdData = CreateRequestsAjaxData();

    TechnoCracyExample.AjaxWebServices.CalendaSearchService.
    GetDateRanges(requestdData, OnDatRangesCallSucceeded);
}

/*
OnSuccess functions
*/

function OnSucceededCallback(result, userContext, methodName)
{
    calendarDataResponce = result;
    CallForDataRanges(outDateRangePerRequest, retDateRangePerrequest);
}

function OnDatRangesCallSucceeded(result, userContext, methodName)
{
    calenarDataRangesResponce = result;
    startOutData = result.NewStartOutDate;
    startRetDate = result.NewStartRetDate;
    
    RemoveOldHtmlElems();
    UpdateMockUpWithNewData(result);
}


/*
    Html cretions , rendering data
*/
function UpdateMockUpWithNewData(result)
{
    CreateRetDateHeader();
    
    var retDateRange = calenarDataRangesResponce.RetDateRange;
    var outDateRange = calenarDataRangesResponce.OutDateRange;
    var priceContainer = $get(calendarPriceContainerId);
    
    for(var i=0; i<outDateRange.length; i++)
    {
       var priceTrElem = document.createElement("tr");
       priceTrElem.setAttribute("id",calendarContentElemsId);
       var outDateTdElem = document.createElement("td");
       outDateTdElem.innerHTML = outDateRange[i];
       outDateTdElem.setAttribute("class", calendarDateHeaderCss);
       outDateTdElem.setAttribute("id",calendarContentElemsId);
       priceTrElem.appendChild(outDateTdElem);
       
        for(var j=0; j<retDateRange.length; j++)
        {
            var priceCellData = GetPriceData(outDateRange[i], retDateRange[j]);
            var priceTdElem = GeneratePriceTdElem(priceCellData);
            
            priceTrElem.appendChild(priceTdElem);
        }
        
        priceContainer.appendChild(priceTrElem);
    }
}

function CreateRetDateHeader()
{
    var retDateContainer = $get(calendarRetDateCotainerId);
    var retDateCollection = calenarDataRangesResponce.RetDateRange;
    
    for(var i=0; i<retDateCollection.length; i++)
    {
        var retDateTdElem = document.createElement("td");
        
        retDateTdElem.innerHTML = retDateCollection[i];
        retDateTdElem.setAttribute("class", calendarDateHeaderCss);
        retDateTdElem.setAttribute("id",calendarContentElemsId);
        retDateContainer.appendChild(retDateTdElem);
    }
}
function GeneratePriceTdElem(priceFlightData)
{
    var priceTdElem = document.createElement("td");
    priceTdElem.setAttribute("class", calendarMatrixPriceCellCss);
    priceTdElem.setAttribute("id",calendarContentElemsId);

    if(priceFlightData != null)
    {
        priceTdElem.innerHTML = priceFlightData.FlightPriceTxt;
    }
    else
    {
        priceTdElem.innerHTML = " --- ";
    }
    
    return priceTdElem;
}

function GetPriceData(outDate, retDate)
{
    for(var i=0;i<calendarDataResponce.length; i++ )
    {
        var currentOutDate = calendarDataResponce[i].OutDateTxt;
        var currentRetDate = calendarDataResponce[i].RetDateTxt;
        
        if(outDate == currentOutDate && retDate == currentRetDate)
        {
            return calendarDataResponce[i]; 
        }
    }

    return null
}

function CreateRequestsAjaxData()
{
    var requestData = new BO.DataHolders.AjaxWebServicerequestData();
    requestData.StartOutDate = startOutDate;
    requestData.StartRetDate = startRetDate;
    requestData.OutDateChangeRange = outDateRangePerRequest;
    requestData.RetDateChangeRange = retDateRangePerrequest;
    
   return requestData;
}



/*
    Button Date range change Events handlers
*/

function ReturnPrevDateBt_Click()
{
    GetDataFromService(0, retDatePrevRange);
}
function ReturnNextDateBt_Click()
{
    GetDataFromService(0, retDateNextRange);
}

function OutPrevDateBt_Click()
{
    GetDataFromService(outDatePrevrange, 0);
}

function OutNextDateBt_Click()
{
    GetDataFromService(outDateNextRange, 0);
}

function RemoveOldHtmlElems()
{
    var priceContainer = $get(calendarPriceContainerId);
    var retDateContainer = $get(calendarRetDateCotainerId);
    
    RemoveChildElemWithId(priceContainer);
    RemoveChildElemWithId(retDateContainer);
}

function RemoveChildElemWithId(parent)
{
    var childNodes = parent.childNodes;
    var nodsToDelete = new Array();
    
    for(var i=0; i<childNodes.length; i++)
    {
        if(childNodes[i].id == calendarContentElemsId)
        {
            nodsToDelete.push(childNodes[i]);
        }
    }
    
    for(var i=0; i<nodsToDelete.length; i++)
    {
        parent.removeChild(nodsToDelete[i]);
    }

}

// Page method

function ValidFlight()
{
    var flightData = CreateRequestsAjaxData();
    
    PageMethods.ValidFlightRequestData(flightData, OnValidationSuccess, methodFailed);
}

function OnValidationSuccess(result, context, methodName)
{
    $get("PageMethodResult").innerHTML = result;
}
