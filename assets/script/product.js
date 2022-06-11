let Btn = document.getElementById("productBtn")
let Product = document.getElementById("productInfo")
let minusBtn = Btn.parentElement.children.item(3)
let prodCount = Btn.parentElement.children.item(4)
let plusBtn = Btn.parentElement.children.item(5)
let resetCount = Btn.nextElementSibling.nextElementSibling.nextElementSibling
let errMes = document.getElementById("errMes")

if (localStorage.getItem("basket") == null) {
    localStorage.setItem("basket", JSON.stringify([]))
}

Btn.addEventListener("click", function (ev) {
    ev.preventDefault();
    if (localStorage.getItem("basket") == null) {
        localStorage.setItem("basket", JSON.stringify([]))
    }
    let arr = JSON.parse(localStorage.getItem("basket"));
    let productId = Product.firstElementChild.getAttribute("data-id");
    let existProductId = arr.find(p => p.id == productId);

    if (existProductId == undefined) {
        arr.push({
            id: productId,
            price: this.parentElement.firstElementChild.lastElementChild.lastElementChild.innerText,
            imageUrl: Product.firstElementChild.firstElementChild.getAttribute("src"),
            name: Product.parentElement.parentElement.parentElement.firstElementChild.innerText,
            count: parseInt(prodCount.innerText),
        })
    }
    else {
        if (Btn.nextElementSibling.hasAttribute("disabled")) {
            existProductId.count += parseInt(prodCount.innerText)
        }
        else {
            if (Btn.nextElementSibling.value <= 99) {
                errMes.classList.add("d-none")
                existProductId.count += parseInt(Btn.nextElementSibling.value)
            }
            else {
                errMes.classList.remove("d-none")
            }
        }
    }

    localStorage.setItem("basket", JSON.stringify(arr));
    WriteProductCount();
})

Btn.nextElementSibling.onmouseleave = function () {
    if (Btn.nextElementSibling.value > 99) {
        errMes.classList.remove("d-none")
    }
    else {
        errMes.classList.add("d-none")
    }
}

minusBtn.onclick = function () {
    if (prodCount.innerText > 0) {
        newCount = prodCount.innerText--
    }
    if (prodCount.innerText == 0) {
        Btn.nextElementSibling.removeAttribute('disabled')
    }
}
plusBtn.onclick = function () {
    prodCount.innerText++
    Btn.nextElementSibling.setAttribute('disabled', '');
}
resetCount.onclick = function () {
    let arr = JSON.parse(localStorage.getItem("basket"));

    let productId = Product.firstElementChild.getAttribute("data-id");
    let existProductId = arr.find(p => p.id == productId);
    existProductId.count = 0
    let zero = arr.filter(element => element.count > 0);
    let newArr = [...zero];
    arr = newArr
    localStorage.setItem("basket", JSON.stringify(arr));
    WriteProductCount();
    if (arr.length == 0) {
        localStorage.removeItem("basket")
        WriteProductCount();
    }
    WriteProductCount();

}
// rating

let rating = document.getElementById("rating")


oneStar = rating.children.item(0)
twoStars = rating.children.item(2)
threeStars = rating.children.item(4)
fourStars = rating.children.item(6)
fiveStars = rating.children.item(8)

oneStar.onmouseover = function () {
    this.firstElementChild.classList.remove("grey")
    this.firstElementChild.classList.add("gold")
}
oneStar.onmouseleave = function () {
    if (this.classList.contains("active")) {

    }
    else {
        this.firstElementChild.classList.add('grey');
    }
}
oneStar.onclick = function () {
    this.classList.add("active")
    twoStars.classList.remove("active")
    threeStars.classList.remove("active")
    fourStars.classList.remove("active")
    fiveStars.classList.remove("active")
    twoStars.firstElementChild.classList.add('grey')
    twoStars.firstElementChild.nextElementSibling.classList.add('grey')
    threeStars.firstElementChild.classList.add('grey')
    threeStars.firstElementChild.nextElementSibling.classList.add('grey')
    threeStars.firstElementChild.nextElementSibling.nextElementSibling.classList.add('grey')
    fourStars.firstElementChild.classList.add('grey')
    fourStars.firstElementChild.nextElementSibling.classList.add('grey')
    fourStars.firstElementChild.nextElementSibling.nextElementSibling.classList.add('grey')
    fourStars.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('grey')
    fiveStars.firstElementChild.classList.add('grey')
    fiveStars.firstElementChild.nextElementSibling.classList.add('grey')
    fiveStars.firstElementChild.nextElementSibling.nextElementSibling.classList.add('grey')
    fiveStars.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('grey')
    fiveStars.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('grey')
}
twoStars.onmouseover = function () {
    this.firstElementChild.classList.remove('grey');
    this.firstElementChild.nextElementSibling.classList.remove('grey')
    this.firstElementChild.classList.add('gold');
    this.firstElementChild.nextElementSibling.classList.add('gold')
}

twoStars.onmouseleave = function () {
    if (this.classList.contains("active")) {

    }
    else {
        this.firstElementChild.classList.add('grey');
        this.firstElementChild.nextElementSibling.classList.add('grey')
    }
}
twoStars.onclick = function () {
    oneStar.classList.remove("active")
    this.classList.add("active")
    threeStars.classList.remove("active")
    fourStars.classList.remove("active")
    fiveStars.classList.remove("active")
    oneStar.firstElementChild.classList.add('grey')
    threeStars.firstElementChild.classList.add('grey')
    threeStars.firstElementChild.nextElementSibling.classList.add('grey')
    threeStars.firstElementChild.nextElementSibling.nextElementSibling.classList.add('grey')
    fourStars.firstElementChild.classList.add('grey')
    fourStars.firstElementChild.nextElementSibling.classList.add('grey')
    fourStars.firstElementChild.nextElementSibling.nextElementSibling.classList.add('grey')
    fourStars.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('grey')
    fiveStars.firstElementChild.classList.add('grey')
    fiveStars.firstElementChild.nextElementSibling.classList.add('grey')
    fiveStars.firstElementChild.nextElementSibling.nextElementSibling.classList.add('grey')
    fiveStars.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('grey')
    fiveStars.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('grey')
}

threeStars.onmouseover = function () {
    this.firstElementChild.classList.remove('grey');
    this.firstElementChild.nextElementSibling.classList.remove('grey')
    this.firstElementChild.nextElementSibling.nextElementSibling.classList.remove('grey')

    this.firstElementChild.classList.add('gold');
    this.firstElementChild.nextElementSibling.classList.add('gold')
    this.firstElementChild.nextElementSibling.nextElementSibling.classList.add('gold')
}
threeStars.onmouseleave = function () {
    if (this.classList.contains("active")) {

    }
    else {
        this.firstElementChild.classList.add('grey');
        this.firstElementChild.nextElementSibling.classList.add('grey')
        this.firstElementChild.nextElementSibling.nextElementSibling.classList.add('grey')
    }
}

threeStars.onclick = function () {
    oneStar.classList.remove("active")
    twoStars.classList.remove("active")
    this.classList.add("active")
    fourStars.classList.remove("active")
    fiveStars.classList.remove("active")

    oneStar.firstElementChild.classList.add('grey')
    twoStars.firstElementChild.classList.add('grey')
    twoStars.firstElementChild.nextElementSibling.classList.add('grey')
    fourStars.firstElementChild.classList.add('grey')
    fourStars.firstElementChild.nextElementSibling.classList.add('grey')
    fourStars.firstElementChild.nextElementSibling.nextElementSibling.classList.add('grey')
    fourStars.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('grey')
    fiveStars.firstElementChild.classList.add('grey')
    fiveStars.firstElementChild.nextElementSibling.classList.add('grey')
    fiveStars.firstElementChild.nextElementSibling.nextElementSibling.classList.add('grey')
    fiveStars.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('grey')
    fiveStars.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('grey')
}

fourStars.onmouseover = function () {
    this.firstElementChild.classList.remove('grey');
    this.firstElementChild.nextElementSibling.classList.remove('grey')
    this.firstElementChild.nextElementSibling.nextElementSibling.classList.remove('grey')
    this.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('grey')

    this.firstElementChild.classList.add('gold');
    this.firstElementChild.nextElementSibling.classList.add('gold')
    this.firstElementChild.nextElementSibling.nextElementSibling.classList.add('gold')
    this.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('gold')
}
fourStars.onmouseleave = function () {
    if (this.classList.contains("active")) {

    }
    else {
        this.firstElementChild.classList.add('grey');
        this.firstElementChild.nextElementSibling.classList.add('grey')
        this.firstElementChild.nextElementSibling.nextElementSibling.classList.add('grey')
        this.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('grey')
    }
}

fourStars.onclick = function () {
    oneStar.classList.remove("active")
    twoStars.classList.remove("active")
    threeStars.classList.remove("active")
    this.classList.add("active")
    fiveStars.classList.remove("active")

    oneStar.firstElementChild.classList.add('grey')
    twoStars.firstElementChild.classList.add('grey')
    twoStars.firstElementChild.nextElementSibling.classList.add('grey')
    threeStars.firstElementChild.classList.add('grey')
    threeStars.firstElementChild.nextElementSibling.classList.add('grey')
    threeStars.firstElementChild.nextElementSibling.nextElementSibling.classList.add('grey')
    fiveStars.firstElementChild.classList.add('grey')
    fiveStars.firstElementChild.nextElementSibling.classList.add('grey')
    fiveStars.firstElementChild.nextElementSibling.nextElementSibling.classList.add('grey')
    fiveStars.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('grey')
    fiveStars.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('grey')
}

fiveStars.onmouseover = function () {
    this.firstElementChild.classList.remove('grey');
    this.firstElementChild.nextElementSibling.classList.remove('grey')
    this.firstElementChild.nextElementSibling.nextElementSibling.classList.remove('grey')
    this.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('grey')
    this.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('grey')

    this.firstElementChild.classList.add('gold');
    this.firstElementChild.nextElementSibling.classList.add('gold')
    this.firstElementChild.nextElementSibling.nextElementSibling.classList.add('gold')
    this.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('gold')
    this.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('gold')
}
fiveStars.onmouseleave = function () {
    if (this.classList.contains("active")) {

    }
    else {
        this.firstElementChild.classList.add('grey');
        this.firstElementChild.nextElementSibling.classList.add('grey')
        this.firstElementChild.nextElementSibling.nextElementSibling.classList.add('grey')
        this.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('grey')
        this.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('grey')
    }
}

fiveStars.onclick = function () {
    oneStar.classList.remove("active")
    twoStars.classList.remove("active")
    threeStars.classList.remove("active")
    fourStars.classList.remove("active")
    this.classList.add("active")

    oneStar.firstElementChild.classList.add('grey')
    twoStars.firstElementChild.classList.add('grey')
    twoStars.firstElementChild.nextElementSibling.classList.add('grey')
    threeStars.firstElementChild.classList.add('grey')
    threeStars.firstElementChild.nextElementSibling.classList.add('grey')
    threeStars.firstElementChild.nextElementSibling.nextElementSibling.classList.add('grey')
    fourStars.firstElementChild.classList.add('grey')
    fourStars.firstElementChild.nextElementSibling.classList.add('grey')
    fourStars.firstElementChild.nextElementSibling.nextElementSibling.classList.add('grey')
    fourStars.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('grey')
}