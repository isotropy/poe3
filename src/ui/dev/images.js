// select the target node
const target = document.getElementById("container");

// create an observer instance
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    scheduleImageUpdate(mutation);
  });
});

let nextUpdate = 0;
function scheduleImageUpdate(mutation) {
  const timeNow = Date.now();
  if (nextUpdate <= timeNow) {
    nextUpdate = timeNow + 100;
    setTimeout(refreshImages, 100);
  }
}

function refreshImages() {
  const images = document.querySelectorAll("img :not([data-inlined])");
  const backgrounds = document.querySelectorAll(
    ".bg-image :not([data-inlined]"
  );
  console.log("IMG", images, backgrounds);
}

// configuration of the observer:
const config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);
