/**
 * redirect the 404.html to the index page after a defined delay in seconds
 * @var string
 */
 function redirection()
 {
     duration_in_seconds = 10;
     time = duration_in_seconds * 1000 - 100;
 
     setTimeout(function ()
     {
         window.location.href = ""
     },
     time);
 }