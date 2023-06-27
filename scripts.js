const navBtn= document.querySelector('.nav__btn');
const navMenu=document.querySelector('.nav-menu');
const likeEl=[...document.querySelectorAll('.place__like-icon')];
console.log(likeEl);
let navOpen = false;

navBtn.addEventListener('click',function(){
    if(navOpen){
        navBtn.classList.remove('nav__btn--open');
        navMenu.style.left='-25rem';
        navOpen=false;


    } else{
        navBtn.classList.add('nav__btn--open');
        navOpen = true;
        navMenu.style.left='0';
    }
    
})




likeEl.map((i)=>{
    let like=true;
    i.addEventListener('click',function(){
        if(like){
            console.log(i)
            i.classList.add('place__like-icon--fill');
            
            like=false;
        }else{
            console.log(i);
            i.classList.remove('place__like-icon--fill');
            like=true;
        }
    })
});

