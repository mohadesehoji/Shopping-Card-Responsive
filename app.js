let img = document.querySelectorAll("div.thumb img");
let slide = document.querySelector("div.big-img img");
let ticket = document.getElementById("ticket");
let money = document.getElementById("money");
let calculateprice = document.getElementById("calculateprice");
let tax = document.getElementById("tax");
let discount = document.getElementById("discount");
let discountbtn = document.getElementById("discountbtn");
let lastprice = document.getElementById("lastprice");
let bag = document.getElementById("bag");
let error = document.getElementById("error");
let number = 0;

// event
for (let i = 0; i < img.length; i++) {
    img[i].onclick = slideShow;
}
// function
function slideShow() {
    let imgSrc = this.getAttribute("src");
    slide.setAttribute("src", imgSrc);
}
money.addEventListener("click", calculate)

function calculate() {
    if (ticket.value !== "") {
        bag.textContent = ticket.value;
        money.textContent = ticket.value * 3000;
        calculateprice.textContent = ticket.value * 3000 + 0.5;
        let pay = ticket.value * 3000 + 0.5 * 0.09;
        number = ticket.value * 3000 + 0.5 + pay;
        tax.textContent = number;
        ticket.focus();
        error.textContent = "";
        error.classList.replace("text-danger", "text-light");

    }
    else {
        bag.textContent = "0";
        error.textContent = "لطفا مثل آدم کارت رو بگو";
        error.classList.replace("text-light", "text-danger")
    }
    discountbtn.addEventListener("click", function () {
        if (discount.value == "123") {
            lastprice.textContent = number / 2;
        }
    }
    );
}
//Press Enter
ticket.addEventListener("keyup", pressEnter);
function pressEnter(event) {
    if (event.keyCode == 13) {
        calculate()
    }
}

//Press Enter
discount.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        lastprice.textContent = number / 2;
    }
});