
var submit = document.getElementById('submit'),
 		input = document.getElementById('password'),
		regExp = {
			uppercase: new RegExp('[A-Z]'),									//Ensure string has uppercase letter
			special: new RegExp('[!@#$&*]'),								//Ensure string has one special letter
			digit: new RegExp('[0-9]'),											//Ensure string has one digit
			lowercase: new RegExp('.*[a-z].*[a-z].*[a-z]') 	//Ensure string has three lowercase letters
		},
		strength = 0;


// do action every time when key is up
input.addEventListener('keyup', function() {

	strength = 0;

	var password = document.getElementById('password');
	password = password.value;

	checkStrength(password);
	setScore();

});


// check string strength
function checkStrength(str) {

	if (str.length < 8) {
		strength = 0;
	}
	if (str.match(regExp.uppercase)) {
		strength++;
	}
	if (str.match(regExp.special)) {
		strength++;
	}
	if (str.match(regExp.digit)) {
		strength++;
	}
	if (str.match(regExp.lowercase)) {
		strength++;
	}
	if (str.length >= 8) {
		strength++;
	}

}


// output score
function setScore() {

	var bg = document.querySelector('.wrapper'),
			title = document.getElementById('title');

	switch (strength) {
		case 1:
			bg.style.backgroundColor = "#e74c3c";
			break;
		case 2:
			bg.style.backgroundColor = "#e67e22";
			break;
		case 3:
			bg.style.backgroundColor = "#f39c12";
			break;
		case 4:
			bg.style.backgroundColor = "#f1c40f";
			break;
		case 5:
			bg.classList.add('background-animation');
      title.classList.add('title-animation');
			title.innerHTML = "Your password is fucking awesome!";
			break;
    default:
      bg.style.backgroundColor = "#34495e";
      title.innerHTML = "Insert your password below";
      break;
	}

  if (strength !== 5) {
    bg.classList.remove('background-animation');
    title.classList.remove('title-animation');
    title.innerHTML = "Insert your password below";
  }

}
