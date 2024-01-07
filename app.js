function productPrice (isIncress,quantityId){
    const phoneValueField = document.getElementById(quantityId)
    const phoneValueString = phoneValueField.value;
    const phoneValueNumber = parseInt(phoneValueString)
    let  newNumber =1 ;
    if(isIncress){
        newNumber= phoneValueNumber + 1;
    }else{
        if(phoneValueNumber > 0){
        newNumber= phoneValueNumber - 1;
        }else{
            alert("Wrong Decision")
            return phoneValueNumber
        }   
    }
        phoneValueField.value=newNumber
    return newNumber;     
    }

function priceMultiply (newNumber,productPrice){
    const phoneValue = document.getElementById("phone_price")
    const newPrice = newNumber * productPrice;
    phoneValue.innerText = newPrice
}


// Phone Price Functionality

document.getElementById("phone_minus_btn").addEventListener("click", function () {
    const newNumber = productPrice(false,"phone_value")
    // Phone Price Is $1219
    priceMultiply(newNumber, 1219)
})


document.getElementById("phone_plus_btn").addEventListener("click", function () {
    const newNumber = productPrice(true,"phone_value")
    // Phone Price Is $1219
    priceMultiply(newNumber,1219)

})


