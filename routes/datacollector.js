
module.exports = DataCollector;

var jsdom = require('jsdom');

var D = true;
var D_TAG = "DataCollector";

function DataCollector()
{
	console.log("Constructor");
}

DataCollector.prototype.GetTimeTableSource = function(station, year, month, day, callback)
{
	var encodedName = encodeURI(station);

	if(D) console.log("Org station name: " + station);
	if(D) console.log("encodedName:" + encodedName);
	var url = "http://www.jorudan.co.jp/time/cgi/time.cgi?eok1=&Cmap1=&rf=tm&pg=0&eki1=" + encodedName + "&Dw=0&Dym=" + year + month + "&Ddd=" + day + "&S.x=48&S.y=19&S=%E6%A4%9C%E7%B4%A2&Csg=1";
	
	jsdom.env(url, ["http://code.jquery.com/jquery.js"], callback);
};