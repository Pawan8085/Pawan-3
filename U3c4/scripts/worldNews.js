import user from "../components/user.js"
console.log(user)
// document.getElementById('user').innerHTML=navbar()
// console.log('flafjl')
document.getElementById('in').addEventListener('click',india);
document.getElementById('us').addEventListener('click',Usa);
document.getElementById('ch').addEventListener('click',China);
document.getElementById('uk').addEventListener('click',Uk);
document.getElementById('nz').addEventListener('click',NewZealand);

    var myserach=document.getElementById("search_box");
    myserach.addEventListener('input',func);
    
    function func(){
        _getData(myserach.value)
    }

function india(){
    getData('in')
}
function Usa(){
    getData('us')
}
function China(){
    getData('ch')
}
function Uk(){
    getData('uk')
}
function NewZealand(){
    getData('nz')
}
var obj=JSON.parse(localStorage.getItem('user'));
getData(obj.country)
async function getData(country){
    var url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`
    var res=await fetch(url);
    var data=await res.json();
    // console.log(data.articles);
    append(data.articles)
    
}
async function _getData(q){
    try{
        var url=`https://masai-mock-api.herokuapp.com/news?q=${q}`
    var res=await fetch(url);
    var data=await res.json();
    append(data.articles)
    }
    catch (error){
        console.log(error);
    }
    
}
function append(data){
    var mydiv=document.getElementById('news_result');
    mydiv.innerHTML=null;

    data.forEach(element => {
        var div=document.createElement('div')
        div.setAttribute('class','news');
        
        var img=document.createElement('img')
        img.src=element.urlToImage;
        
        var p=document.createElement('p')
        p.innerText=element.title;

        var p1=document.createElement('p')
        p1.innerText=element.author;
        div.append(img,p,p1);
        div.addEventListener('click',func);
        function func(){
            let myobj={
                image:element.urlToImage,
                title:element.title,
                author:element.author,
            }
            localStorage.setItem('mydata',JSON.stringify(myobj));
        }
        mydiv.append(div);

    });
}
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



