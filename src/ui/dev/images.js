import { getImage } from "../../server/images";
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
  const backgrounds = document.querySelectorAll(".bg-image:not([data-inlined]");
  backgrounds.forEach(async elem => {
    const style = elem.currentStyle || window.getComputedStyle(elem, false);
    const filePath = /\/images\/(.*)"\)/.exec(style.backgroundImage)[1];
    const format = /[^\.]+$/.exec(filePath)[0];
    const data = await getImage(filePath);
    const base64Data = btoa(data);
    elem.attributes.style.nodeValue = `background-image: url("data:image/${format};base64,${base64Data}")`;
  });
}

// configuration of the observer:
const config = {
  attributes: true,
  childList: true,
  characterData: true
};

// pass in the target node, as well as the observer options
observer.observe(target, config);
