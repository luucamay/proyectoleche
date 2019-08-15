// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  
  var animations = ["bounce",
"flash",
"pulse",
"rubberBand",
"shake",
"headShake",
"swing",
"tada",
"wobble",
"jello",
"bounceIn",
"bounceInDown",
"bounceInLeft",
"bounceInRight",
"bounceInUp",
"fadeIn",
"fadeInDown",
"fadeInDownBig",
"fadeInLeft",
"fadeInLeftBig",
"fadeInRight",
"fadeInRightBig",
"fadeInUp",
"fadeInUpBig",
"flipInX",
"flipInY",
"flipOutX",
"flipOutY",
"lightSpeedIn",
"lightSpeedOut",
"rotateIn",
"rotateInDownLeft",
"rotateInDownRight",
"rotateInUpLeft",
"rotateInUpRight",
"hinge",
"jackInTheBox",
"rollIn",
"zoomIn",
"zoomInDown",
"zoomInLeft",
"zoomInRight",
"zoomInUp",
"slideInDown",
"slideInLeft",
"slideInRight",
"slideInUp",
];
  
  var outs = ["bounceOut",
"bounceOutDown",
"bounceOutLeft",
"bounceOutRight",
"bounceOutUp","fadeOut",
"fadeOutDown",
"fadeOutDownBig",
"fadeOutLeft",
"fadeOutLeftBig",
"fadeOutRight",
"fadeOutRightBig",
"fadeOutUp",
"fadeOutUpBig","rotateOut",
"rotateOutDownLeft",
"rotateOutDownRight",
"rotateOutUpLeft",
"rotateOutUpRight","rollOut",
"zoomOut",
"zoomOutDown",
"zoomOutLeft",
"zoomOutRight",
"zoomOutUp","slideOutDown",
"slideOutLeft",
"slideOutRight",
"slideOutUp"]
                    
  console.log('hello world :o');
  
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? name : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };
  
  function randomElem(items) {
    return items[Math.floor(Math.random()*items.length)];
  }
  
  function spawnText(text) {
    var e = document.createElement('h1')
    e.innerHTML = text;
    e.classList.add("animated");
    //e.classList.add("infinite");
    e.classList.add(randomElem(animations));
    
    var posx = (Math.random() * ($(document).width())).toFixed();
    var posy = (Math.random() * ($(document).height())).toFixed();
    
    e.style.left = posx + 'px';
    e.style.top = posy + 'px';
    
    setTimeout(function(){
      e.classList.add(randomElem(outs));
      setTimeout(function(){document.body.removeChild(e);}, 1000);
    }, 4000)
    
    document.body.appendChild(e);

  }
  
  var counter = 1000;
  var name = getUrlParameter('conectar');
  spawnText(name)
  var words = ["puede mi cotidiano  y con el mi cuerpo desaparecer cuando mis bit desaparecen?"]
  
  function spawnRandomText(){
    spawnText(randomElem(words));
    if (counter >= 0) counter = counter - 20;
    setTimeout(function(){
      spawnRandomText()
    }, counter)
  }
  
  spawnRandomText();
  
  console.log();
  
  
});
