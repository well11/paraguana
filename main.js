
  var blueAnimation = anime({
    targets: '.blue',
    translateX: -200,
    direction: 'alternate',
    
    autoplay: true,
  });

  var redAnimation = anime({
    targets: '.red',
    translateX: -200,
    direction: 'alternate',
    autoplay: true
  });


  var greenAnimation = anime({
    targets: '.green',
    translateX: 200,
    direction: 'alternate',
    autoplay: true
  });

  blueAnimation.settings.complete = function() {
    greenAnimation.pause();
  }

  redAnimation.settings.complete = function() {
    blueAnimation.pause();
  }

  greenAnimation.settings.complete = function() {
    redAnimation.pause();
  }

  greenAnimation.play();
