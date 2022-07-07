const main= document.querySelector(".main");
const box = document.querySelectorAll(".color-box")
const addBtn = document.querySelectorAll(".add-box")
const lockBtn = document.querySelectorAll(".lock-box")
const unlockBtn = document.querySelectorAll(".unlock-box")
let ticket = document.querySelectorAll(".ticket");
let ticketHeader = document.querySelectorAll(".ticket-header");
const filterBtn = document.querySelectorAll(".filter-button");
const changeBtn=document.querySelector(".change-button")
const removeBtn=document.querySelector(".remove-box")
// console.log(box.length)
// for (let i = 0; i < box.length; i++){
//     let cbox = box[i];
//     cbox.addEventListener('click', (e) => {
//         let color = e.currentTarget.classList[1];
//         e.currentTarget.style.backgroundColor = "#aaa";
//         e.currentTarget.classList.add("clicked");
//         if (e.currentTarget.classList[2] == 'clicked') {
//             e.currentTarget.classList.remove("clicked");
//         }
//         main.style.backgroundColor = color;
        
//     })
// }

var isLock = true;
var isUnlock = 1;
addBtn[0].addEventListener('click', (e) => {
    if (isLock) {
        alert("Please click on unlock button");
        return;
    }
    else {
        ticket = ticket = document.querySelectorAll(".ticket");
        for (let i = 0; i < ticket.length; i++){
            ticket[i].style.display="block"
        }
        createTicket(isLock);
    }
});

lockBtn[0].addEventListener("click", () => {
	isLock = true;
});

unlockBtn[0].addEventListener("click", () => {
	isLock = false;
});

filterBtn[0].addEventListener("click", filterEle());

removeBtn.addEventListener("click", removeElement());

changeBtn.addEventListener("click", changeColor());


function createTicket(isLock) {
    if (isLock) {
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
    let main = document.querySelectorAll('.main')
    main[0].appendChild(modalEle);
    let modalPalette = modalEle.querySelectorAll('.color-box')
    for (let i = 0; i < modalPalette.length; i++){
        let modalColor = modalPalette[i].classList[1];
        modalPalette[i].addEventListener('click', () => {
            modalHeadervalue=modalColor
        })
    }
    
    modalEle.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
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
            
            // console.log(value + 5);
        }
    })
    
   
}


function changeColor() {
     isLock = true;
			ticket = document.querySelectorAll(".ticket");
			for (let i = 0; i < ticket.length; i++) {
				if (ticket[i].style.display != "none") {
					ticket[i].addEventListener("click", (e) => {
						if (isLock == false) return;
						let eleClass = ticket[i].children[0].classList[0];
						let element = ticket[i].querySelector(`.${eleClass}`);
						let eleColor = element.style.backgroundColor;
						for (let i = 0; i < box.length; i++) {
							let cbox = box[i].classList[1];
							console.log(cbox);
							if (cbox == eleColor) {
								eleColor = box[(i + 1) % box.length].classList[1];
								break;
							}
						}

						console.log(eleColor);
						element.style.backgroundColor = eleColor;
						unlockBtn[0].addEventListener("click", () => {
							isLock = false;
							return;
						});
					});
				}
			}
} 



function removeElement() {
    ticket = document.querySelectorAll(".ticket");
		if (ticket.length == 0) {
			alert("No ticket found");
			return;
		}
		if (isLock == true) {
			alert("Please click on unlock");
			return;
		}
		for (i = 0; i < ticket.length; i++) {
			ticket[i].addEventListener("click", (e) => {
				e.currentTarget.remove();
			});
		}
}

function filterEle() {
    for (let i = 0; i < box.length; i++){
        box[i].addEventListener('click', () => {
             let color = box[i].classList[1];
            ticket = document.querySelectorAll('.ticket');
            for (let i = 0; i < ticket.length; i++){
             let eleClass = ticket[i].children[0].classList[0];
			 let element = ticket[i].querySelector(`.${eleClass}`);
            let eleColor = element.style.backgroundColor;
                 if (eleColor == color) {
                    ticket[i].style.display="block"
                 }
                 else {
                    ticket[i].style.display = "none";
                 }
        }
        })
    }
}

// function filterEle() {
//     for (let i = 0; i < box.length; i++){
//         box[i].addEventListener('click', () => {
           
//              )
       
            
//         }
// }

// function deleteMe() {
//     // if (isLock == true) {
//     //     alert("Please unlock to delete");
// 	// 	return;
//     // }    
//     console.log(10)
//     for (i = 0; i < ticket.length; i++){
//         ticket[i].addEventListener('click', (e) => {
//             // e.currentTarget.remove();
//             // console.log
//         })
//     }
// }
