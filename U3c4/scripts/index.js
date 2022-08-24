/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
function data(n,i,e,c){
    this.name=n;
    this.image=i;
    this.email=e;
    this.country=c;
}
function func(){
    let name=document.getElementById('user_name').value;
    let image=document.getElementById('user_pic').value;
    let email=document.getElementById('user_email').value;
    let country=document.getElementById('user_country').value;
    let mydata=new data(name,image,email,country);
    
    localStorage.setItem('user',JSON.stringify(mydata));
}
