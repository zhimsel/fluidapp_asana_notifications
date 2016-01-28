setTimeout(updateDockBadge, 1000);
setTimeout(updateDockBadge, 3000);
setInterval(updateDockBadge, 1000); // set how often we check for unread items


function updateDockBadge() {
    var inbox = document.getElementsByClassName("has-newNotifications");
    if (Object.keys(inbox).length > 1) {
        window.fluid.dockBadge = "•"; // unread items
    } else {
        window.fluid.dockBadge = ""; // no unread items
    }
}
