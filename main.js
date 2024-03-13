const Imgae = ['source/tshirts/T-shirt_6-removebg-preview.png','source/bags2/bag_4-removebg-preview.png','source/jacket/jacket_3-removebg-preview.png','source/bags2/bag_3-removebg-preview.png','source/shouse/yellow.png','source/bags2/love.png','source/tshirts/3-removebg-preview.png']
var display = document.getElementById('Image')
var currentIndex = 0

function Changeimg(){
   display.style.opacity = 0
   display.style.translate = ('200px')
      setTimeout(function(){ 
         currentIndex = (currentIndex + 1) % Imgae.length
         display.src = Imgae[currentIndex]
         display.style.opacity= 1   
         display.style.translate = 0
         
      },400)
    
}
display.addEventListener('click', function() {
   Changeimg();
})

function Prev(){
   display.style.opacity = 0
   display.style.translate = ('-200px')

      setTimeout(function(){
         currentIndex = (currentIndex - 1) % Imgae.length
        
         
         display.style.opacity= 1   
         display.style.translate = 0
         if(currentIndex < 0){
            currentIndex = 5
           
         }else{
           display.src = "ource/tshirts/3-removebg-preview.png"
         } 
         
         display.src = Imgae[currentIndex]
      },400)
     
}
display.addEventListener('click', function() {
   Changeimg();
})



function like(heartIcon){
    var likeRed = document.getElementById("heartIcon")
    heartIcon.classList.toggle('heart-red');

    
}

var section1 = document.getElementById('content1')
function letsGo(){ 
    section1.scrollIntoView({
        behavior: "smooth"
    })
   

}
var tshirtScroll = document.getElementById('tshirtContent')
    tshirtScroll.addEventListener('click',function(){
        section1.scrollIntoView({
            behavior: "smooth"
        })
})
var shoesScroll = document.getElementById('shoesContent')
var section2 = document.getElementById('shoesSection')
 shoesScroll.addEventListener('click',function(){
    section2.scrollIntoView({
        behavior: "smooth"
    })
 })

 var bagScroll = document.getElementById('bagContent')
 var section3 = document.getElementById('bagSection')

 bagScroll.addEventListener('click',function(){
    section3.scrollIntoView({
        behavior: "smooth"
    })
 })
 var jacketScroll = document.getElementById('jacketContent')
 var section4 = document.getElementById('jacketSection')
jacketScroll.addEventListener('click',function(){
    section4.scrollIntoView({
        behavior: "smooth"
    })
 })

 var homeScroll = document.getElementById('homeSection')
 var home = document.getElementById('homeMain')

    homeScroll.addEventListener('click',function(){
        home.scrollIntoView({
            behavior: "smooth"
        })
    })
    var productScroll = document.getElementById('ProductSection')
    var productparts = document.getElementById('productPart')
    productScroll.addEventListener('click',function(){
        productparts.scrollIntoView({
            behavior: "smooth"
        })
    })
