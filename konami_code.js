const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let keystrokes = [];
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', function(ev){
    keystrokes.push(ev.which);
    if (JSON.stringify(code) === JSON.stringify(keystrokes.slice(-10))){
      alert("Konami Found!")
    }
  })
}
