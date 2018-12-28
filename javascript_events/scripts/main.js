var amanda = document.getElementById('amanda');
// var amandaPic = document.getElementById('amanda-pic');

var sakshi = document.getElementById('sakshi');
// var sakshiPic = document.getElementById('sakshi-pic');

var disha = document.getElementById('disha');
// var dishaPic = document.getElementById('disha-pic');

amanda.addEventListener('click', picLink);
sakshi.addEventListener('click', picLink);
disha.addEventListener('click', picLink);

// function picLink(){
// 	console.log(this);  //this will show which element is clicked.
// }

function picLink(){
	var all = document.querySelectorAll('img')

	for (var i=0; i<all.length; i++){
		all[i].className = "hide"
	}

	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	if (pic.className === "hide") {
		pic.className = "";
	}
	else{
		pic.className = "hide";
	}
}

// amanda.addEventListener('click', function() {
// 	if (amandaPic.className === "hide") {
// 		amandaPic.className = "";
// 	}
// 	else{
// 		amandaPic.className = "hide";
// 	}
// });

// sakshi.addEventListener('click', function() {
// 	if (sakshiPic.className === "hide") {
// 		sakshiPic.className = "";
// 	}
// 	else{
// 		sakshiPic.className = "hide";
// 	}
// });

// disha.addEventListener('click', function() {
// 	if (dishaPic.className === "hide") {
// 		dishaPic.className = "";
// 	}
// 	else{
// 		dishaPic.className = "hide";
// 	}
// });

// var num1 = document.getElementById("num-one");
// var num2 = document.getElementById("num-two");
// var addSum = document.getElementById("add-sum");

// num1.addEventListener("input", add);
// num2.addEventListener("input", add);

// function add() {
// 	var one = parseFloat(num1.value) || 0;
// 	var two = parseFloat(num2.value) || 0;
// 	addSum.innerHTML = one+two;
// }

// num1.addEventListener("click", function() {
// 	console.log('hi');
// });

// num1.addEventListener("click", function() {
// 	alert('hi');
// });

// num1.addEventListener("mouseenter", function() {
// 	console.log('mouseenter');
// });

// num1.addEventListener("mouseleave", function() {
// 	alert('mouseleave');
// });

// num1.addEventListener("focus", function() {
// 	console.log('focus');
// });

// num1.addEventListener("blur", function() {
// 	console.log('blur');
// });

// num1.addEventListener("mouseup", function() {
// 	console.log('mouseup');
// });

// num1.addEventListener("mousedown", function() {
// 	console.log('mousedown');
// });

// num1.addEventListener("mousemove", function() {
// 	console.log('mousemove');
// });
