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

function priceMultiply (newNumber,productPrice,product){
    console.log(newNumber,productPrice,product);
    let phoneValue=document.getElementById(product)
    const newPrice = newNumber * productPrice;
    phoneValue.innerText = newPrice
}


// Phone Price Functionality

document.getElementById("phone_minus_btn").addEventListener("click", function () {
    const newNumber = productPrice(false,"phone_value")
    // newNuber mean product #Quantity / 2nd peramitar price #1219 / price update field. "phone_price"
    priceMultiply(newNumber, 1219,"phone_price")
})


document.getElementById("phone_plus_btn").addEventListener("click", function () {
    const newNumber = productPrice(true,"phone_value")
   // newNuber mean product #Quantity / 2nd peramitar price #1219 / price update field. #"phone_price"
    priceMultiply(newNumber,1219,"phone_price")

})


// Case Price Functionality


document.getElementById("case_minus_btn").addEventListener("click", function () {
    const newNumber = productPrice(false,"case_value")
    // newNuber mean product #Quantity / 2nd peramitar price #59 / price update field. #case_price 

    priceMultiply(newNumber, 59,"case_price",)
})


document.getElementById("case_plus_btn").addEventListener("click", function () {
    const newNumber = productPrice(true,"case_value")
      // newNuber mean product #Quantity / 2nd peramitar price #59 / price update field. #case_price
    priceMultiply(newNumber,59,"case_price")

})

