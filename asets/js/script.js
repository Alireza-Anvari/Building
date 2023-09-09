let navSearch=document.querySelector("form .bi-search");
let navX=document.querySelector("form .bi-x");
let navInput=document.querySelector("form input");
let headerMenu=document.querySelector(".headerMenu")
let offsetHeaderMenu=headerMenu.offsetTop;
let show=document.querySelector("#collapsibleNavbar")
let allLinks=document.querySelectorAll(".headerMenu .nav-link")


navSearch.addEventListener("click",()=>{
    navInput.classList.toggle("activeInput");
    navSearch.classList.toggle("hidden");
    navX.classList.toggle("hidden");
    navInput.focus();
    navInput.value="";
   

})
navInput.addEventListener("blur",()=>{
    navInput.classList.toggle("activeInput");
    navSearch.classList.toggle("hidden");
    navX.classList.toggle("hidden");
    navInput.value="";
   

})
navX.addEventListener("click",()=>{
    navInput.classList.toggle("activeInput");
    navSearch.classList.toggle("hidden");
    navX.classList.toggle("hidden");
    navInput.value="";

})



window.onscroll=function(){

// console.log(offsetHeaderMenu);
if(window.pageYOffset-70>=offsetHeaderMenu)
{   

    headerMenu.classList.add("stickyMenu")
}
else{
  
    headerMenu.classList.remove("stickyMenu")
}

if(Projects.offsetTop-350<=window.pageYOffset)
{
    if(flag==0){
    animationCounter();
   flag=1;
    }
    

}
}


document.querySelector("body").addEventListener("click",()=>{

    if(show.getAttribute("class").split(" ").includes("show"))
    {
         show.classList.toggle("show")
    }
   
})

// allLinks.forEach((link)=>{
// // console.log(link.innerHTML);
// link.addEventListener("click",()=>{
//     show.classList.toggle("show")
    

// })

// })



let swiperSlide=document.querySelectorAll(".swiper-slide");

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




//   window.onscroll=function(){

//     // console.log(offsetHeaderMenu);
 
   
    
    
//     }




let actionBoxContainer=document.querySelector("#actionBox .container")
let CompanyContainer=document.querySelector("#Company .container")
myFunction();
document.getElementsByTagName("BODY")[0].onresize = function() {myFunction()};
function myFunction() {
    if(window.innerWidth<=768){
        actionBoxContainer.className = "container-fluid";
        CompanyContainer.className = "container-fluid";
// actionBoxContainer.classList.remove("container")
// actionBoxContainer.classList.add("container-fluid")
}
else{
    // actionBoxContainer.classList.remove("container-fluid")
    // actionBoxContainer.classList.add("container")
    actionBoxContainer.className = "container";
    CompanyContainer.className = "container";
}
}





/////////////////////////// start Project section  ///////////////////////////////


// let counter=document.querySelector(".counter")
// let rand=Math.floor(Math.random()*100);
// let temp=0;
// setInterval(() => {
//     if(rand>= temp){
// temp++;
//  counter.innerHTML=temp
//     }
// }, 50);




var a=[];
let animationCounter=()=>{
let counter=document.querySelectorAll(".counter");

counter.forEach((item,index)=>{
let rand=Math.floor(Math.random()*100);
let temp=0;
a[index]=setInterval(() => {
    if(rand>= temp){
temp++;
 item.innerHTML=temp
//  console.log("nnnnnnnnnnnnnnnnn");
    }
}, 50);

})
}

let Projects=document.querySelector("#Projects");
let flag=0;

// window.onscroll=function(){
// if(Projects.offsetTop-350<=window.pageYOffset)
// {
//     if(flag==0){
//     animationCounter();
//    flag=1;
//     }
    

// }
// }



/////////////////////////// end Project section  ///////////////////////////////


/////////////////////////// start Persons section  ///////////////////////////////




let i=document.querySelectorAll("#Persons .PersonsHeader i");
let product=document.querySelectorAll("#Persons .product")

let productPage=Math.ceil(product.length/4)
let l=0;

let movePer= Number(((product[0].parentElement.offsetWidth*100)/product[0].offsetWidth).toFixed(4))
let maxMove=movePer*9;
// console.log( Number(((product[0].parentElement.offsetWidth*100)/product[0].offsetWidth).toFixed(4)));
let leftMove=()=>{
l=l+movePer;
if(l<=0){l=0}
console.log("l="+l,"-----","movePer=",movePer,"------","maxMove",maxMove);
for(const index of product)
{
    if(l>maxMove) {
        l=l-movePer;
        i[0].classList.add("deActiveIconCarousel")
      
    }
    index.style.left="-"+l+"%";
    i[1].classList.remove("deActiveIconCarousel")
    // console.log("-"+l+"%");
}

}

let rightMove=()=>{
    l=l-movePer;
    if(l<=0){l=0;i[1].classList.add("deActiveIconCarousel") }
    for(const i of product)
    {
       
      
            
        
        i.style.left="-"+l+"%"
    }
    
    i[0].classList.remove("deActiveIconCarousel")
    }
    



    
i[0].addEventListener("click",leftMove)
i[1].addEventListener("click",rightMove)





///////////////////////////////////// recent Section ////////////////////////////////

let labels=document.querySelectorAll(".shuffleButtonGroup label");
let shuffleWrapperDiv=document.querySelectorAll(".shuffleWrapper > div");
shuffleWrapperDiv.forEach((div)=>{div.style.display="block"});
// console.log(labels.length);
labels.forEach((label)=>{
label.addEventListener("click",function (event)

{
    let addActive=()=>{

        for(let index of labels){
               index.classList.remove("active");
           
            }
           
            event.target.classList.add("active");
           for(let div of shuffleWrapperDiv){
      
        let temp=div.getAttribute("data-group").replaceAll("[","")
         temp=temp.replace("]","")
         temp=temp.replaceAll("'","")
      
      
        div.style.display="none"
        if(event.target.getAttribute("for")=="all"){
            for(let i of shuffleWrapperDiv)
            {
                i.style.display="block"
            }
        }
            else if(temp.includes(event.target.getAttribute("for"))){
                // console.log("ok");

                div.style.display="block"
            }
         
            
        }

        //    }
           }

          

        event.target.tagName=="LABEL" ? addActive() : "";
    

})


})



