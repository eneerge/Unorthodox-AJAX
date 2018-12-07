// UnorthodoxAjax.js

// Perform a single update
function asyncRequest(asyncURL) {
  var existingRef = document.getElementById("asyncReq");
  existingRef.parentNode.removeChild(existingRef);
  
  // Write out a script tag to cause the browser to retrieve it
  var asyncReq = document.createElement("script");
  asyncReq.setAttribute("type","text/javascript");
  asyncReq.setAttribute("src",asyncURL);
  asyncReq.setAttribute("id","asyncReq");
  document.body.append(asyncReq);
}

// Refresh a page indefinitely
function asyncRefresh(asyncURL, asyncRefreshIntervalMS) {  
  window.setTimeout(
    function() { 
      var existingRef = document.getElementById("asyncReq");
      existingRef.parentNode.removeChild(existingRef);
      asyncRefresh(asyncURL, asyncRefreshIntervalMS);
    }
    ,asyncRefreshIntervalMS
  );
}
