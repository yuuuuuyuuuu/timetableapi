$(document).ready(function(){
	console.log("document ready");

	$("#a_get").on("click", getBtnClick);
});

function getBtnClick()
{
	console.log("getBtnClick");
	$("#a_get").button("loading");

	var stationName = $("#input_stationName").val();
	var date = $("#input_date").val();
	var dateArray = date.split("-");

	var year = dateArray[0];
	var month = dateArray[1];
	var day = dateArray[2];

	console.log("date:" + dateArray);
	sendRequest(stationName, year, month, day);
}

function setBtnDefault()
{
	$("#a_get").button("reset");
}

function showResult(json)
{
	$("#p_result").text(JSON.stringify(json));
}

function sendRequest(stationName, year, month, day)
{
	console.log("stationName: " + stationName);

	var postData = {
		"stationName": stationName,
		"year": parseInt(year, 10),
		"month": parseInt(month, 10),
		"day": parseInt(day, 10)
	};

	var url = "http://traintimetableapi.c.node-ninja.com:3000/timetable";
	//var url = "http://localhost:3000/timetable";
	
	var ajaxOption = {
		url: url,
		type: "POST",
		data: postData,
		dataType: "json",
		success: ajaxSuccess,
		complete: ajaxComplete,
		error: ajaxError
	};

	$.ajax(ajaxOption);
}

function ajaxComplete(xmlHttpRequest, textStatus)
{
	console.log("ajaxComplete");
	setBtnDefault();
}

function ajaxSuccess(data, dataType)
{
	console.log("ajaxSucdess");
	showResult(data);
}

function ajaxError(xmlHttpRequest, textStatus, errorThrown)
{
	console.log("ajaxError");
	showResult({});
}