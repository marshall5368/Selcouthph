function like(heartIcon){
    var likeRed = document.getElementById("heartIcon")
    heartIcon.classList.toggle('heart-red');

    
}

var hiddenContent = document.getElementById("cart")

function cariton(){
    if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
        hiddenContent.style.display = "block"; 
      } else {
        hiddenContent.style.display = "none"; 
      }


    }


var checkoutDiv = document.getElementById(checkout)


function checkOut(){
    document.querySelector(".checkout").style.display = "block"; 
}

var payNow = document.getElementById(checkout)

function paybtn(){
    document.querySelector(".checkout").style.display = "none";
}

const product1 = document.getElementById("milo")





const price1 = document.getElementById("miloPrice")





var item = document.getElementById("quantity")
var display  = document.getElementById("list")
var priceDisplay = document.getElementById("total")
function addCart(){
    display.innerHTML = item.value + product1.innerHTML
    priceDisplay.innerHTML = price1.innerHTML
}