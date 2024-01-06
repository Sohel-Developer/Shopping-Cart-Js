console.log("Cannected");

document.getElementById("phone_minus_btn").addEventListener("click", function () {
    const phoneValueField = document.getElementById("phone_value")
    const phoneValueString = phoneValueField.value;
    const phoneValueNumber = parseInt(phoneValueString)

    if (phoneValueNumber > 0) {
        const newNumber = phoneValueNumber - 1;
        phoneValueField.value = newNumber

        const phoneValue = document.getElementById("phone_price")
        const newPrice = newNumber * 1219
        phoneValue.innerText = newPrice
    } else {
        alert("Wrong Interactivity")
    }


})



document.getElementById("phone_plus_btn").addEventListener("click", function () {
    const phoneValueField = document.getElementById("phone_value")
    const phoneValueString = phoneValueField.value;
    const phoneValueNumber = parseInt(phoneValueString)

    const newNumber = phoneValueNumber + 1;
    phoneValueField.value = newNumber


    const phoneValue = document.getElementById("phone_price")
    const newPrice = newNumber * 1219
    phoneValue.innerText = newPrice
})
