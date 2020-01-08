
// initialises instagram feed
var feed = new Instafeed({
    get: 'user',
    limit: 12,
    userId: '20401021174',
    accessToken: '20401021174.1677ed0.7822cee968454bbb9b932d169072e20a',
    template: '<div class="instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
});
feed.run();

// opens topbar menu when in mobile mode
function openMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}