function hideAddressBar()
{
    if(!window.location.hash)
    { 
        if(document.height <= window.outerHeight + 10)
        {
            document.body.style.height = (window.outerHeight + 50) +'px';
            setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
        }
        else
        {
            setTimeout( function(){ window.scrollTo(0, 1); }, 0 ); 
        }
    }
} 
 
window.addEventListener("load", hideAddressBar );
window.addEventListener("orientationchange", hideAddressBar );