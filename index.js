// // const main= document.querySelector(".main");
// // const box = document.querySelectorAll(".color-box")
// // const addBtn = document.querySelectorAll(".add-box")
// // const lockBtn = document.querySelectorAll(".lock-box")
// // const unlockBtn = document.querySelectorAll(".unlock-box")
// // let ticket = document.querySelectorAll(".ticket");
// // let ticketHeader = document.querySelectorAll(".ticket-header");
// // const filterBtn = document.querySelectorAll(".filter-button");
// // const changeBtn=document.querySelector(".change-button")
// // const removeBtn=document.querySelector(".remove-box")
// // console.log(box.length)
// // for (let i = 0; i < box.length; i++){
// //     let cbox = box[i];
// //     cbox.addEventListener('click', (e) => {
// //         let color = e.currentTarget.classList[1];
// //         e.currentTarget.style.backgroundColor = "#aaa";
// //         e.currentTarget.classList.add("clicked");
// //         if (e.currentTarget.classList[2] == 'clicked') {
// //             e.currentTarget.classList.remove("clicked");
// //         }
// //         main.style.backgroundColor = color;
        
// //     })
// // }

// // var isLock = false;
// // var isUnlock = true;
// // var isDelete = false;
// // addBtn[0].addEventListener('click', (e) => {
// //     if (isLock) {
// //         alert("Please click on unlock button");
// //         return;
// //     }
// //     else {
// //         ticket = ticket = document.querySelectorAll(".ticket");
// //         for (let i = 0; i < ticket.length; i++){
// //             ticket[i].style.display="block"
// //         }
// //         createTicket(isLock);
// //     }
// // });

// function lockme() {
//     isLock = true;
// 		ticket = document.querySelectorAll(".ticket");
// 		for (let i = 0; i < ticket.length; i++) {
// 			let textarea = ticket[i].children[1].children[1];
// 			textarea.setAttribute("readonly", "");
// 			console.log(textarea);
// 			ticket[i].style.display = "block";
// 		}
// }

// lockBtn[0].addEventListener("click", () => {
//     isLock = true;
//     isDelete = false;
//      ticket = document.querySelectorAll(".ticket");
// 			for (let i = 0; i < ticket.length; i++) {
// 				let textarea = ticket[i].children[1].children[1];
// 				textarea.setAttribute("readonly", "");
// 				console.log(textarea);
// 				ticket[i].style.display = "block";
// 			}
// });

// unlockBtn[0].addEventListener("click", () => {
//     isLock = false;
//     isDelete=false;
//     ticket = document.querySelectorAll(".ticket");
//     for (let i = 0; i < ticket.length; i++){
//         let textarea = ticket[i].children[1].children[1];
//         textarea.removeAttribute("readonly", "")
//         console.log(textarea)
//         ticket[i].style.display = "block";
//     }
// });

// filterBtn[0].addEventListener("click", () => {
//     if (isLock == false) return;
//     lockme();
//     for (let i = 0; i < box.length; i++) {
// 			box[i].addEventListener("click", () => {
// 				let color = box[i].classList[1];
// 				ticket = document.querySelectorAll(".ticket");
// 				for (let i = 0; i < ticket.length; i++) {
// 					let eleClass = ticket[i].children[0].classList[0];
// 					let element = ticket[i].querySelector(`.${eleClass}`);
// 					let eleColor = element.style.backgroundColor;
// 					if (eleColor == color) {
// 						ticket[i].style.display = "block";
// 					} else {
// 						ticket[i].style.display = "none";
// 					}
// 				}
// 			});
// 		}
// });
// // ticket.addEventListener()
// removeBtn.addEventListener('click', () => {
//     ticket = document.querySelectorAll(".ticket");
// 		for (i = 0; i < ticket.length; i++) {
// 			ticket[i].addEventListener("click", (e) => {
// 				if (isLock == true && isDelete == false) {
// 					return;
// 				}
// 				// e.preventDefault();
// 				removeBtn.addEventListener("click", () => {
// 					if (isLock == true) {
// 						return;
// 					}
// 					e.currentTarget.remove();
// 				});
// 			});
// 		}
// })


// removeBtn.addEventListener("click", () => {
//     isDelete = true;
//     ticket = document.querySelectorAll(".ticket");
//     if (isLock == true) {
//         alert("Please unlock")
//         return;
//     }
   
//     for (i = 0; i < ticket.length; i++) {
//         ticket[i].addEventListener("click", (e) => {
//             // e.preventDefault();
//             if (unlockBtn.addEventListener('click', () => {
//                 return 0;
//             }))
//             if (isLock == true ) {
//                    return 0;
// 			    }
// 				e.currentTarget.remove();
//         });
//         ticket.length--;
//     }
//     // isLock = true;
// })


// // function createTicket(isLock) {
// //     isDelete = false;
// //     if (isLock) {
// //         return;
// //     }
    
// // }




// changeBtn.addEventListener('click', () => {
//     if (isLock == false) return;
//     console.log(isLock)
//     lockme();
//     isDelete = false;
    // ticketHeader = document.querySelectorAll(".ticket-header");
    //  ticket = document.querySelectorAll(".ticket");
    // for (let i = 0; i < ticket.length; i++){
    //     if (ticket[i].style.display != "none") {
    //          ticket[i].addEventListener("click", (e) => {
	// 							if (isLock == false) return;
	// 							let eleClass = ticket[i].children[0].classList[0];
	// 							let element = ticket[i].querySelector(`.${eleClass}`);
	// 							let eleColor = element.style.backgroundColor;
	// 							for (let i = 0; i < box.length; i++) {
	// 								let cbox = box[i].classList[1];
	// 								// console.log(cbox);
	// 								if (cbox == eleColor) {
	// 									eleColor = box[(i + 1) % box.length].classList[1];
	// 									break;
	// 								}
	// 							}

	// 							// console.log(eleColor);
	// 							element.style.backgroundColor = eleColor;
	// 							unlockBtn[0].addEventListener("click", () => {
	// 								isLock = false;
	// 								return;
	// 							});
	// 						});
            
    //     }
    
    // }
// })






// // function filterEle() {
// //     for (let i = 0; i < box.length; i++){
// //         box[i].addEventListener('click', () => {
           
// //              )
       
            
// //         }
// // }

// // function deleteMe() {
// //     // if (isLock == true) {
// //     //     alert("Please unlock to delete");
// // 	// 	return;
// //     // }    
// //     console.log(10)
// //     for (i = 0; i < ticket.length; i++){
// //         ticket[i].addEventListener('click', (e) => {
// //             // e.currentTarget.remove();
// //             // console.log
// //         })
// //     }
// // }
