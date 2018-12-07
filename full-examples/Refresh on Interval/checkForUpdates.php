<?php
  // Must set the Header to Javascript so it will execute when its returned
  header("Content-type: application/javascript");

  // DO some heavy lifting
?>
// Configure the response object
// NOTE: You could dynamically build it within PHP logic if necessary, but this example just spits out a simple responseObj.
var responseObj = {success:"true", data:"my data"};

// Now lets call the function that processes the response.  In this case asyncProcessResponse().
asyncProcessResponse(responseObj);
