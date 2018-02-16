function Key(source) {
  this.source = source;
  this.el = document.createElement("div");
  this.el.style.width = "50px";
  this.el.style.height = "150px";
  this.el.style.float = "left";
  this.el.style.border= "solid 1px #5d5e60";
  this.element = document.createElement("audio");
  this.element.setAttribute("src", this.source);
  this.element.setAttribute("type","audio/mpeg");
  this.el.appendChild(this.element);

//JAK TUTAJ UŻYĆ BIND??
  this.el.addEventListener("click",()=>{
    this.element.play();
  });
}

Key.prototype = {
  render: function(){
    return this.el;
  }
}

function Piano(){
  this.el = document.createElement("div");
  this.el.style.width = "730px";
  this.el.style.height = "150px";
  this.soundSources = [
    "../../pianokeys/middle_c.mp3",
    "../../pianokeys/middle_d.mp3",
    "../../pianokeys/middle_e.mp3",
    "../../pianokeys/middle_f.mp3",
    "../../pianokeys/middle_g.mp3",
    "../../pianokeys/middle_a.mp3",
    "../../pianokeys/middle_b.mp3",
    "../../pianokeys/high_c.mp3",
    "../../pianokeys/high_d.mp3",
    "../../pianokeys/high_e.mp3",
    "../../pianokeys/high_f.mp3",
    "../../pianokeys/high_g.mp3",
    "../../pianokeys/high_a.mp3",
    "../../pianokeys/high_b.mp3"
  ];
}

Piano.prototype = {
  render: function(){
    this.soundSources.forEach(sound=>{
      this.el.appendChild(new Key(sound).render());
    });
    return this.el;
  }
}

document.addEventListener("DOMContentLoaded",()=>{
  const piano = new Piano();
  document.body.appendChild(piano.render());
});
