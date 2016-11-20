// Wait till the browser is ready to render the game (avoids glitches)
var gmGlobal;
var aiGlobal;
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  var gm = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  gmGlobal = gm;
  var a = new auto(gm);
  aiGlobal = a;
  a.go();
});
