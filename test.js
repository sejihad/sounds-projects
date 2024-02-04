for (var i = 0; i < 3; i++) {
  document
    .querySelectorAll(".my-btn")
    [i].addEventListener("click", function () {
      var text = this.innerHTML;

      playAudio(text);
      playAnimation(text);
    });
}

function playAudio(text) {
  switch (text) {
    case "a":
      var audio = new Audio("./sounds/a.m4a");
      audio.play();

      break;
    case "b":
      var audio = new Audio("./sounds/b.m4a");
      audio.play();
      break;
    case "c":
      var audio = new Audio("./sounds/c.m4a");
      audio.play();
      break;
  }
}

function playAnimation(text) {
  var selected = document.querySelector("." + text);

  selected.classList.add("anim");
  setTimeout(() => {
    selected.classList.remove("anim");
  }, 1000);
}
