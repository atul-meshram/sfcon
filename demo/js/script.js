function fetchIcons(weight, type) {

  let list = "<ul class='main_icon_container'>";

  if (type === "-smooth") {
    type = '';
  }

  allIcons.forEach((element) => {
    list = list.concat('', "<li class='icon_wrap'><div class='icon_box'><i class='sfcon sfcon-" + element + weight + type + " icon_style'></i></div><p>" + element + "</p></div>");
  });

  list += "</ul>";
  return list;
}

var allIcons = [
  "bell",
  "bin",
  "bookmark",
  "calendar",
  "camera",
  "cog",
  "download",
  "edit",
  "ellipsis-h",
  "ellipsis-v",
  "filter",
  "folder",
  "heart",
  "home",
  "location",
  "lock",
  "mail",
  "next",
  "next-box",
  "next-circle",
  "pause",
  "pause-box",
  "pause-circle",
  "play",
  "play-box",
  "play-circle",
  "previous",
  "previous-box",
  "previous-circle",
  "print",
  "search",
  "share",
  "spinner",
  "star",
  "stop",
  "stop-box",
  "stop-circle",
  "thumb-up",
  "upload",
  "user",
  "video-camera",
  "volume-high",
  "volume-low",
  "bolt",
  "binoculars",
  "bullseye",
  "check",
  "check-box",
  "check-circle",
  "folder-open",
  "group",
  "launch",
  "lead",
  "store",
  "unlock",
  "desktop",
  "laptop",
  "tablet",
  "mobile",
  "image",
  "key",
  "hashtag",
  "arrow-right",
  "arrow-left",
  "arrow-up",
  "arrow-down",
]

function fetchAnimOptions(option) {
  switch (option) {
    case 1:
      $('.wrapper_click_effects').slideDown("slow");
      $('.wrapper_hover_effects').slideUp("slow");
      $('.wrapper_looping_effects').slideUp("slow");
      break;
    case 2:
      $('.wrapper_click_effects').slideUp("slow");
      $('.wrapper_hover_effects').slideDown("slow");
      $('.wrapper_looping_effects').slideUp("slow");
      break;
    case 3:
      $('.wrapper_click_effects').slideUp("slow");
      $('.wrapper_hover_effects').slideUp("slow");
      $('.wrapper_looping_effects').slideDown("slow");
      break;
  }
}