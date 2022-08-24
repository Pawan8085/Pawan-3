var obj=JSON.parse(localStorage.getItem('user'));
import user from "../components/user.js"
document.getElementById('user').innerHTML=user();
document.getElementById('user_img').src=obj.image;
document.getElementById('user_name').innerText=obj.name;
document.getElementById('user_email').innerText=obj.email;
let __country=obj.country;
if(__country=='in'){
    __country="India"
}
if(__country=='us'){
    __country="Usa"
}
if(__country=='ch'){
    __country="China"
}
if(__country=='uk'){
    __country="UK"
}
if(__country=='nz'){
    __country="New Zealand "
}
document.getElementById('user_country').innerText=__country;



