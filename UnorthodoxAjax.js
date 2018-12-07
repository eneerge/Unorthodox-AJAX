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
      existingRef.parentNode.removeChild(existingRef);
      asyncRefresh(asyncURL, asyncRefreshIntervalMS);
    }
    ,asyncRefreshIntervalMS
  );
}

// -------------------------------------
// Somepage.php
// EG:
asyncRefresh("https://www.test.com/checkForUpdates.php",10000);

// Somepage.php will return javascript to manipulate the current page in some way.
// IE:
// samepage.php returns a JSONObject and calls processResponse() javascript to trigger the immediate processing the return data.

// EG:
// asyncRefresh("page.php?action=DELETE&id=10&sessionData=xxxx");
// page.php checks for action==delete, then checks for authorization, and t hen returns a json response along with processResponse()
