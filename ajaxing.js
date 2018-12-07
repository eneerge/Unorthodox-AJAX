var ajax = document.createElement("script");
ajax.setAttribute("type","text/javascript");
ajax.setAttribute("src","https://test.com/request1");
ajax.setAttribute("id","ajax");
document.body.append(ajax);

// If request worked, and inside of that file it calls initLoad(), it can contiuously keep communicating
function initLoad() {
  var ajax = document.getElementById("ajax");
  ajax.parentNode.removeChild(ajax);

  var ajax = document.createElement("script");
  ajax.setAttribute("type","text/javascript");
  ajax.setAttribute("src","https://test.com/request2");
  ajax.setAttribute("id","ajax");
  document.body.append(ajax);
}
