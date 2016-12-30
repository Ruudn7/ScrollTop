(function() {

function createButton() {

var button = document.createElement("button");

button.classList.add("backToTop", "hidden");
button.textContent = "Powrót do góry";
document.body.appendChild(button);


return button;

}

var button = createButton ();


})();