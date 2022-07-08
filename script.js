const main = document.querySelector(".main");
const box = document.querySelectorAll(".color-box");
const addBtn = document.querySelector(".add-box");
const lockBtn = document.querySelector(".lock-box");
const unlockBtn = document.querySelector(".unlock-box");
const filterBtn = document.querySelector(".filter-button");
const changeBtn = document.querySelector(".change-button");
const removeBtn = document.querySelector(".remove-box");

var arr = [
	box[0],
	box[1],
	box[2],
	box[3],
	lockBtn,
	unlockBtn,
	addBtn,
	removeBtn,
	filterBtn,
	changeBtn
];
tippy(addBtn, {
	placement: "left-start",
	content: 'create ticket',
	theme:'gradient'
	// animation:'perspective extreme'
});
tippy(removeBtn, {
	placement: "bottom",
	content: 'remove ticket'
});
tippy(lockBtn, {
	placement: "left-start",
	content: 'read mode'
});
tippy(unlockBtn, {
	placement: "bottom",
	content: 'edit mode'
});
tippy(changeBtn, {
	placement: "top-start",
	content: 'Change color'
});
tippy(filterBtn, {
	placement: "bottom-end",
	content: 'filter mode'
});


var isLock = false;
var isDelete = false;
var lockvalue = -1;
addBtn.addEventListener("click", createModal);
function createModal() {
	// addBtn.classList.add("clicked");
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] != addBtn) {
	// 		arr[i].classList.remove("clicked");
	// 	}
	// }

	if (isLock) {
		alert("Please click on unlock button");
		return;
	} else {
		createTicket();
	}
}

removeBtn.addEventListener("click", removeTicket);
function removeTicket() {
	// console.log("remove")
	removeBtn.classList.add("clicked");
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] != removeBtn) {
	// 		arr[i].classList.remove("clicked");
	// 	}
	// }
	isDelete = true;
	if (isLock == true || isDelete == false) {
		return;
	} else {
		let ticket = document.querySelectorAll(".ticket");
		for (let i = 0; i < ticket.length; i++) {
			ticket[i].addEventListener("click", (e) => {
				if (isDelete && !isLock) {
					console.log("remove element");
					let ticketEle = e.currentTarget;
					ticketEle.remove();
					// alert("ticket removed");
				}
			});
		}
	}
}

function createTicket() {
	let modallength = document.querySelectorAll(".modal").length;
	if (modallength > 0) {
		return;
	}

	let modalEle = document.createElement("div");
	modalEle.setAttribute("class", "modal");
	modalEle.innerHTML = `<textarea name="" placeholder="Enter some task ..." class="modal-area"></textarea>
        
          <div class="color-pallete">
            <div class="color-box blue">
                <button style="background-color:lightblue;"></button>
            </div>
            <div class="color-box pink">
                <button style="background-color:pink;"></button>
            </div>
            <div class="color-box green">
                <button style="background-color:green;"></button>
            </div>
            <div class="color-box black">
                <button style="background-color:gray;"></button>
            </div>
        </div>`;
	let modalHeadervalue = "black";
	let main = document.querySelectorAll(".main");
	main[0].appendChild(modalEle);
	let modalPalette = modalEle.querySelectorAll(".color-box");
	for (let i = 0; i < modalPalette.length; i++) {
		let modalColor = modalPalette[i].classList[1];
		modalPalette[i].addEventListener("click", () => {
			modalHeadervalue = modalColor;
		});
	}

	modalEle.addEventListener("keypress", (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			addBtn.classList.remove("clicked")
			let textArea = document.querySelector(".modal-area");
			let value = textArea.value;
			modalEle.remove();
			let ans = "#" + uuid().slice(0, 6);
			let ticketele = document.createElement("div");
			ticketele.setAttribute("class", "ticket");
			ticketele.innerHTML = `<div class="ticket-header" style="background-color:${modalHeadervalue}">
            </div>
            <div class="ticket-content">
                <div class="ticket_id">${ans}</div>
                <textarea name="" readonly>${value}</textarea>
            </div>`;
			main[0].appendChild(ticketele);
		}
	});
}

lockBtn.addEventListener("click", lockme);
function lockme() {
	// lockBtn.classList.add("clicked");
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] != lockBtn) {
	// 		arr[i].classList.remove("clicked");
	// 	}
	// }
	isLock = true;
    isDelete = false;
    lockvalue = 1;
	let ticket = document.querySelectorAll(".ticket");
	for (let i = 0; i < ticket.length; i++) {
		let textarea = ticket[i].children[1].children[1];
		textarea.setAttribute("readonly", "");
		ticket[i].style.display = "block";
	}
}

unlockBtn.addEventListener("click", unlockme);
function unlockme() {
	// unlockBtn.classList.add("clicked");
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] != unlockBtn) {
	// 		arr[i].classList.remove("clicked");
	// 	}
	// }
	isLock = false;
	isDelete = false;
	let ticket = document.querySelectorAll(".ticket");
	for (let i = 0; i < ticket.length; i++) {
		let textarea = ticket[i].children[1].children[1];
		textarea.removeAttribute("readonly", "");
		ticket[i].style.display = "block";
	}
}

filterBtn.addEventListener("click", filterColor);
function filterColor() {
	// filterBtn.classList.add("clicked");
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] != filterBtn) {
	// 		arr[i].classList.remove("clicked");
	// 	}
	// }
	isDelete = false;
    isLock = true;
    lockvalue=-1
	for (let i = 0; i < box.length; i++) {
		box[i].addEventListener("click", () => {
			// box[i].classList.add("clicked");
			// for (let i = 0; i < arr.length; i++) {
			// 	if (arr[i] != box[i]) {
			// 		arr[i].classList.remove("clicked");
			// 	}
			// }
			if (isLock == false || isDelete == true || lockvalue==1) {
				return;
			} else {
				let color = box[i].classList[1];
				let ticket = document.querySelectorAll(".ticket");
				for (let i = 0; i < ticket.length; i++) {
					let eleClass = ticket[i].children[0].classList[0];
					let element = ticket[i].querySelector(`.${eleClass}`);
					let eleColor = element.style.backgroundColor;
					if (eleColor == color) {
						ticket[i].style.display = "block";
					} else {
						ticket[i].style.display = "none";
					}
				}
			}
		});
	}
}

changeBtn.addEventListener("click", changeColor);
function changeColor() {
	// changeBtn.classList.add("clicked");
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] != changeBtn) {
	// 		arr[i].classList.remove("clicked");
	// 	}
	// }
	isLock = true;
    isDelete = false;
    lockvalue = -1;
	let ticket = document.querySelectorAll(".ticket");
	for (let i = 0; i < ticket.length; i++) {
		if (ticket[i].style.display != "none") {
			ticket[i].addEventListener("click", (e) => {
				if (isLock == false || isDelete == true || lockvalue==1) {
					return;
				} else {
					let eleClass = ticket[i].children[0].classList[0];
					let element = ticket[i].querySelector(`.${eleClass}`);
					let eleColor = element.style.backgroundColor;
					for (let i = 0; i < box.length; i++) {
						let cbox = box[i].classList[1];
						if (cbox == eleColor) {
							eleColor = box[(i + 1) % box.length].classList[1];
							break;
						}
					}
					element.style.backgroundColor = eleColor;
				}
			});
		}
	}
}
