let clickAmount = 0;

function setButtonTitle(title) {
  document.getElementById("jsBtn").innerHTML = title;
}

function onClick() {
  if (clickAmount == 0) {
    setButtonTitle("You clicked me!");
    clickAmount = clickAmount + 1;
  } else if (clickAmount == 1) {
    setButtonTitle("You clicked me again!");
    clickAmount = clickAmount + 1;
  } else if (clickAmount == 2) {
    setButtonTitle("Okay i get it, you like clicking buttons");
    clickAmount = clickAmount + 1;
  } else if (clickAmount == 3) {
    setButtonTitle("Ouch");
    clickAmount = clickAmount + 1;
  } else if (clickAmount == 4) {
    setButtonTitle("Stop that!");
    clickAmount = clickAmount + 1;
  } else if (clickAmount == 5) {
    setButtonTitle("That's it! I'm calling the lawyer police.");
    clickAmount = clickAmount + 1;
  } else if (clickAmount == 6) {
    setButtonTitle("Stop that.");
    clickAmount = clickAmount + 1;
  } else if (clickAmount == 7) {
    setButtonTitle("I'm a JavaScript button. Click me!");
    clickAmount = clickAmount + 1;
  } else if (clickAmount == 8) {
    setButtonTitle("Wow, you're persistant");
    clickAmount = clickAmount + 1;
  } else if (clickAmount == 9) {
    setButtonTitle("Well, anyways, i have to go back to being a button.");
    clickAmount = clickAmount + 1;
  } else if (clickAmount == 10) {
    setButtonTitle("See ya!");
    clickAmount = clickAmount + 1;
  } else if (clickAmount == 11) {
    setButtonTitle("I'm a JavaScript button. Click me!");
    clickAmount = 0;
  }
}
