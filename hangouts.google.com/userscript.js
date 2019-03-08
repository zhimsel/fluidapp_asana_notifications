// This userscript will set the Dock Badge to the number of unread conversations
// It should be run on '*hangouts.google.com*'

setInterval(getUnreadMessages, 2000);  // check for unread messages every 2 seconds

function getUnreadMessages() {

  // The list of conversations is an HTML doc inside an iFrame with the class 'Xyqxtc'
  var conversationList = document.getElementsByClassName('Xyqxtc')[0].contentDocument

  // Any conversations with unread messages will be in a div with the class 'ee'
  var allUnread = conversationList.getElementsByClassName('ee');

  // Set Dock Badge to unread count
  unreadCount = allUnread.length;
  if (unreadCount > 0) {
    window.fluid.dockBadge = unreadCount;
  }
  else {
    window.fluid.dockBadge = '';
  }
}
