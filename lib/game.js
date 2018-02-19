function KeyModel(id, source){
  this.id = id;
  this.source = source;
}


function Key(model) {
  this.model = model;
  this.el = document.createElement("div");
  this.el.style.width = "50px";
  this.el.style.height = "150px";
  this.el.style.float = "left";
  this.el.style.border= "solid 1px #5d5e60";
  this.element = document.createElement("audio");
  this.element.setAttribute("src", this.model.source);
  this.element.setAttribute("type","audio/mpeg");
  this.el.appendChild(this.element);

  document.addEventListener("keydown",(event)=>{
    if(event.key == this.model.id){
      this.element.play();
    }
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
  this.keyLetters = ['q','w','e','r','a','s','d','f','u','i','o','p','j','k'];
}

Piano.prototype = {
  render: function(){
    this.soundSources.forEach((sound,index)=>{
      this.el.appendChild(new Key(new KeyModel(this.keyLetters[index],sound)).render());
    });
    return this.el;
  }
}

document.addEventListener("DOMContentLoaded",()=>{
  const piano = new Piano();
  document.body.appendChild(piano.render());
});
