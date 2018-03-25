function doTrafficLights() {
  var activeLight = getActiveLight();
  if (activeLight === "green"){
  turnGreen();
  console.log("green");
  }
  if (activeLight === "yellow"){
    turnYellow();
    console.log("yellow");
  }
  if (activeLight === "red"){
    turnRed();
    console.log("red");
  }

}

function turnOffLights() {
  $('.traffic-light').removeClass('yellow-on red-on green-on');
}

function turnGreen() {
  turnOffLights();
  $('.green-light').addClass('green-on');
}

function turnYellow() {
  turnOffLights();
  $('.yellow-light').addClass('yellow-on');
}

function turnRed() {
  turnOffLights();
  $('.red-light').addClass('red-on');
}

function getActiveLight() {
  return (['red', 'green', 'yellow'])[Math.floor(Math.random() * 3)];
}

function handleClicks() {
  $('.js-control-lights').click(function() {
    doTrafficLights();
  });
}

$(handleClicks);
