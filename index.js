let foodTitle 
let foodPrice
let foodId 
let orderData

function displayOrderDetails(clickedFoodId) {
  foodId = clickedFoodId
  foodTitle = document.getElementById('foodTitle' + foodId).innerText
  foodPrice = document.getElementById('foodPrice' + foodId).innerText
  let orderData = {
    foodId: foodId,
    foodTitle: foodTitle,
    foodPrice: foodPrice,
  }
    localStorage.setItem('orderData', JSON.stringify(orderData))

}

function onPageLoad() {
    console.log("hello out side storage");
  let storedOrderData = localStorage.getItem('orderData')
  if (storedOrderData) {
    console.log("hello inside storage");
    let orderData = JSON.parse(storedOrderData)
    let orderedTitle = orderData.foodTitle
    // var quantity = document.querySelector('input[name="qty"]').value
    // console.log(quantity)
    if (document.getElementById('order-title')){
        document.getElementById('order-title').innerText = orderedTitle
    }
    else if(document.getElementById('ordered-title')){
        document.getElementById('ordered-title').innerText += orderedTitle
    }

    // document.getElementById('ordered-qty').innerText = quantity
    // localStorage.removeItem('orderDetails')
  } else {
    console.log('Nothing')
  }
}

window.onload = onPageLoad

function render(){
  localStorage.removeItem('orderDetails')
}