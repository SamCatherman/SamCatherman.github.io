// alert("there's javascript here");
var button = document.getElementById('button');

button.onclick = function () {
  var div = document.getElementById('hideMe');
  var button = document.getElementById('button');

  if (div.style.display !== 'none') {
    div.style.display = 'none';
    button.innerHTML = 'Show';
  }
  else {
    div.style.display = 'block'
    button.innerHTML = 'Hide';
  }
}
