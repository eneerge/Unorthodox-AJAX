// UnorthodoxAjax.js
function asyncRefresh(asyncURL, asyncRefreshIntervalMS) {
  // Write out a script tag to cause the browser to retrieve it
  var asyncReq = document.createElement("script");
  asyncReq.setAttribute("type","text/javascript");
  asyncReq.setAttribute("src",asyncURL);
  asyncReq.setAttribute("id","asyncReq");
  document.body.append(asyncReq);

  window.setTimeout(
    function() { 
      var existingRef = document.getElementById("asyncReq");
      existingReg.parentNode.removeChild(existingRef);
      asyncRefresh(asyncURL, asyncRefreshIntervalMS);
    }
    ,asyncRefreshIntervalMS
  );
}

// -------------------------------------
// Somepage.php
// EG:
asyncRefresh("https://www.test.com/checkForUpdates.php",10000);
