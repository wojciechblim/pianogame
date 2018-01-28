document.addEventListener("keydown", event => {
  const keyName = event.key;
  const audio = document.querySelector("#" + keyName);
  audio.play();
  changeClass(audio);
});

function changeClass(element) {
  let parent = element.parentNode;
  parent.className = "keyPressed";
  setTimeout(function() {
    parent.className = "key";
  }, 500);
}
