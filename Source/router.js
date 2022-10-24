// Page Routing Functions and Handlers

function loadPage(pageName) 
{
    $.get('/'+pageName+'.html', function(pageContent){
        $('.page-container').html(pageContent);
     })
}

$(window).on('load', function(){
    var hash = window.location.hash.replace('#','');
    if(hash === "")
        loadPage('home');
    else
        loadPage(hash);
});

$(window).on('hashchange',function(){ 
    var hash = window.location.hash.replace('#','');
    console.log("Navigating to: " + hash);
    loadPage(hash);
});