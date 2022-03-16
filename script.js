/**
 * redirect the 404.html to the index page after a 10sec delay
 * @var string
 */
function redirection()
{
    setTimeout(function ()
    {
        window.location.href = "https://disrupt3d.github.io/error-404--projet-html-css--team-Alpha/"
    },
    10000);
}