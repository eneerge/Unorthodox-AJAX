<!-- HTML OF PAGE -->

<!-- Now setup Unorthodox AJAX -->
<script type="text/javascript" src="UnorthodoxAjax.js"></script>
<script type="text/javascript">
// Implement my response or other functions
function asyncProcessResponse(obj) {
  alert("Hey guys, the data was just received and it is available in obj");
  // Do some more stuff with the response obj
}

// Now lets wireup the refreshing interval so that  a script tag will be removed and recreated every 10 seconds that polls checkForUpdates.php
window.addEventListener(
  "load"
  ,function() {
    asyncRefresh("checkForUpdates.php",10000); // poll every 10 seconds
  }
  ,false
);
</script>
