// UnorthodoxAjax.js
function asyncRefresh(asyncURL, asyncRefreshIntervalMS) {
  // Write out a script tag to cause the browser to retrieve it
  var ajax = document.createElement("script");
  ajax.setAttribute("type","text/javascript");
  ajax.setAttribute("src",asyncURL);
  ajax.setAttribute("id","ajax");
  document.body.append(ajax);

  window.setTimeout(
    function() { 
      asyncRefresh(asyncURL, asyncRefreshIntervalMS);
    }
    ,asyncRefreshIntervalMS
  );
}

// -------------------------------------
// Somepage.php
// EG:
asyncRefresh("https://www.test.com/checkForUpdates.php",10000);
