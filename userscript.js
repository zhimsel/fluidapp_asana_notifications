window.fluid.dockBadge = "";
setTimeout(updateDockBadge, 1000);
setTimeout(updateDockBadge, 3000);
setInterval(updateDockBadge, 1000);


function updateDockBadge() {
    var inbox = document.getElementsByClassName("has-newNotifications");
    if (Object.keys(inbox).length > 1) {
        window.fluid.dockBadge = "•";
    } else {
        window.fluid.dockBadge = "";
    }
}
