let images= [];
const popup = document.querySelector('.popup');
const sliderImg = document.querySelector(".inner img");
const close = document.querySelector('.clos');
const nextClick = document.querySelector('.next');
const prevClick = document.querySelector('.prev');
let nextElement;
let prevElement;

const downloadKey = document.querySelector(".download-key i");
const inputForKey = document.querySelector(".download-key input");

downloadKey.addEventListener('click',function(){
    inputForKey.click();
})

inputForKey.addEventListener('change',function(e){
    const {files} = e.target;
    for (const file of files) {
        const fileReader = new FileReader();
        fileReader.onloadend = (e) => {
            const {result} = e.target; 

        let img = document.createElement('img');
        img.setAttribute('src',result);
        document.querySelector('.mini').append(img);
        images.push({result});
        localStorage.setItem('imagesList',JSON.stringify(images));
        }
        fileReader.readAsDataURL(file);
    }  
    localStorage.setItem('imagesList',JSON.stringify(images));
})

if(localStorage){
    JSON.parse(localStorage.getItem("imagesList")).forEach(element => {
    let img = document.createElement('img');
    img.setAttribute('src',element.result);
    document.querySelector('.mini').append(img);
    console.log(JSON.parse(localStorage.getItem("imagesList")));
  }); 
}




// this.classList.add('showSlider');
// popup.style.display = 'block';
// let bigImgSrc = this.getAttribute("src");
// sliderImg.setAttribute("src",bigImgSrc);








function closeSlider(){
    popup.style.display= 'none';
}



document.addEventListener('click',(e)=>{
if(e.target.classList.contains('popup')){
    closeSlider();
}
})

document.addEventListener('keydown',(e)=>{
    if(e.key === "Escape"){
        closeSlider();
    }
    })

close.addEventListener('click',()=>{
    closeSlider();
})

nextClick.addEventListener('click',function(e){

    let changebleAtr;

    let showSlider = document.querySelector('.showSlider')

    if(showSlider.nextElementSibling){
        showSlider.nextElementSibling.classList.add('showSlider')
        changebleAtr = showSlider.nextElementSibling.getAttribute('src');
    }
    else{   
        showSlider.parentElement.children[0].classList.add('showSlider') 
        changebleAtr = showSlider.parentElement.children[0].getAttribute('src');
    }

    showSlider.classList.remove("showSlider");
    sliderImg.setAttribute('src',changebleAtr);
})

prevClick.addEventListener('click',function(){
    let changebleAtr;

    let showSlider = document.querySelector('.showSlider')

    if(showSlider.previousElementSibling){
        showSlider.previousElementSibling.classList.add('showSlider')
        changebleAtr = showSlider.previousElementSibling.getAttribute('src');
    }
    else{   
        showSlider.parentElement.children[showSlider.parentElement.children.length-1].classList.add('showSlider') 
        changebleAtr = showSlider.parentElement.children[showSlider.parentElement.children.length-1].getAttribute('src');
    }

    showSlider.classList.remove("showSlider");
    sliderImg.setAttribute('src',changebleAtr);
})


setInterval(() => {
    if(popup.style.display == 'block'){
        let changebleAtr;

    let showSlider = document.querySelector('.showSlider')

    if(showSlider.nextElementSibling){
        showSlider.nextElementSibling.classList.add('showSlider')
        changebleAtr = showSlider.nextElementSibling.getAttribute('src');
    }
    else{   
        showSlider.parentElement.children[0].classList.add('showSlider') 
        changebleAtr = showSlider.parentElement.children[0].getAttribute('src');
    }

    showSlider.classList.remove("showSlider");
    sliderImg.setAttribute('src',changebleAtr);

    }
}, 5000);


document.addEventListener('keydown',(e)=>{
    if(e.key === "ArrowLeft"){
        let changebleAtr;

    let showSlider = document.querySelector('.showSlider')

    if(showSlider.previousElementSibling){
        showSlider.previousElementSibling.classList.add('showSlider')
        changebleAtr = showSlider.previousElementSibling.getAttribute('src');
    }
    else{   
        showSlider.parentElement.children[4].classList.add('showSlider') 
        changebleAtr = showSlider.parentElement.children[4].getAttribute('src');
    }

    showSlider.classList.remove("showSlider");
    sliderImg.setAttribute('src',changebleAtr);

    }})

    document.addEventListener("keydown",function(e){
        if(e.key === "ArrowRight"){
            if(popup.style.display == 'block'){
                let changebleAtr;
        
            let showSlider = document.querySelector('.showSlider')
        
            if(showSlider.nextElementSibling){
                showSlider.nextElementSibling.classList.add('showSlider')
                changebleAtr = showSlider.nextElementSibling.getAttribute('src');
            }
            else{   
                showSlider.parentElement.children[0].classList.add('showSlider') 
                changebleAtr = showSlider.parentElement.children[0].getAttribute('src');
            }
        
            showSlider.classList.remove("showSlider");
            sliderImg.setAttribute('src',changebleAtr);
        
            }
        }
    })






