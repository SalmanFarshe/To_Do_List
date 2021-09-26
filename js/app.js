var submitButton = document.querySelector(".submit-button");
var formControl = document.querySelector(".form-control");
var warningElement = `<div class="bg-warning p-3 fw-bold custom_warning w-75 mb-2 text-center m-auto">Please!! Input a valid Entry!! Thank you!!</div>`;
var warningElementWrap = document.querySelector(".warning_element");
var itemsList = [];
submitButton.addEventListener("click", todolistFunction);
function todolistFunction() {
	var inputGroup = document.querySelector(".listItems");
	formControlValue = formControl.value;
	if (!formControlValue) {
		(function warning() {
			warningElementWrap.innerHTML = warningElement;
		})();
		setTimeout(() => {
			warningElementWrap.innerHTML = `<div class="d-none"> Please!! Input a valid Entry!! Thank you!!</div>`;
		}, 1500);
	} else {
		itemsList.push(formControlValue);
		// console.log(itemsList);
		for (i = 0; i < itemsList.length; i++) {
			html = `<div class="bg-muted row mt-1 custom_item bg-text p-2 w-100 m-auto item-${
				i + 1
			}">
                        <div class="col-2"><b>${i + 1}</b></div>
                        <div class="col-4 text-center customAttribut">${
																									itemsList[i]
																								}</div>
                        <div class="col-3 text-center"><i class="bi bi-check-circle" onclick="bicheckcircle()"></i></div>
                        <div class="col-1 text-center"><i class="bi bi-pencil-square"></i></div>
                        <div class="col-2 text-center"><i class="bi bi-trash" onclick="trashButton()"></i></div>
                    </div>`;
		}
		formControl.value = "";
		inputGroup.innerHTML += html;
	}
}
function trashButton() {
	var custom_item = document.querySelectorAll(".custom_item");
	for (i = 0; i < custom_item.length; i++) {
		custom_item[i].onclick = function () {
			this.remove();
		};
	}
}
function bicheckcircle() {
	var bicheckcircle = document.querySelectorAll(".bi-check-circle");
	for (i = 0; i <= bicheckcircle.length; i++) {
		bicheckcircle[i].onclick = function () {
			this.classList.toggle("complete");
		};
	}
}
