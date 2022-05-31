const form = document.querySelectorAll(".form");
const square = document.querySelectorAll(".square");
const progresSquare = document.querySelector(".progresSquare");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const progres = document.querySelector(".progres");
const activeform = document.querySelector(".activeform");

let step = 1;

const nextBtn = () => {
	step++;
	if (step > 4) {
		step = 4;
	}

	colors();
	unlock();
};

const backBtn = () => {
	step--;
	if (step < 1) {
		step = 1;
	}
	colors();
	unlock();
};

const colors = () => {
	square.forEach((square, index) => {
		if (index < step) {
			square.classList.add("progresSquare");
		} else {
			square.classList.remove("progresSquare");
		}
	});

	const progresSquare = document.querySelectorAll(".progresSquare");

	progres.style.width =
		((progresSquare.length - 1) / (square.length - 1)) * 100 + "%";
	nextForm();
};

const unlock = () => {
	if (step === 1) {
		btn1.disabled = true;
	} else if (step === 4) {
		btn2.disabled = true;
	} else {
		btn1.disabled = false;
		btn2.disabled = false;
	}
};

const nextForm = () => {
	form.forEach((page) => {
		if (step == page.dataset.number) {
			page.classList.add("activeform");
		} else {
			page.classList.remove("activeform");
		}
	});
};

btn1.addEventListener("click", backBtn);
btn2.addEventListener("click", nextBtn);
