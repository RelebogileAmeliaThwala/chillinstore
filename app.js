const hamburger =document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu =document.querySelector('.header .nav-bar .nav-list ul');
const menu_item =document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header =document.querySelector('.header.container');

hamburger.addEventListener('click',  () =>{
hamburger.classList.toggle('active');
mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
var scroll_position = window.scrollY;

if(scroll_position > 250){
header.style.backgroundColor = '#253e55';
}
else{
    header.style.backgroundColor = 'transparent';
}
});

menu_item.forEach((item) => {
item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
     mobile_menu.classList.toggle('active');
});
});

const formOpenBtn = document.querySelector("#form_open"),
home= document.querySelector(".home"),
formContainer= document.querySelector(".form_container"),
formClose= document.querySelector(".form_close"),
signUpBtn= document.querySelector("#signup"),
loginBtn= document.querySelector("#login"),
password_hide= document.querySelectorAll(".pwhide");
//opening and closing tyhe login form 
formOpenBtn.addEventListener("click", () => home.classList.add("show"))
formClose.addEventListener("click", () => home.classList.remove("show"))

signUpBtn.addEventListener("click", (e) => {
e.preventDefault();
formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

//password show
password_hide.forEach(icon=>{
icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if(getPwInput.type === "password"){
        getPwInput.type="type";
        icon.classList.replace("uil-eye-slash","uil-eye");
    }
    else
    {
        getPwInput.type="password";
        icon.classList.replace("uil-eye","uil-eye-slash");
    }
});
});


