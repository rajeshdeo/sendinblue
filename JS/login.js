let data= JSON.parse(localStorage.getItem("signupData"))||[];
console.log(data);
document.querySelector("form").addEventListener("submit",myFun);

function myFun(){
     let email= document.querySelector("#email").value;
     let password=document.querySelector("#password").value;


     let flag=false;
     for(let i=0;i<data.length;i++)
     {
          if(data[i].email==email && data[i].password==password)
          {
               flag=true;
          }
     }

     if(flag==true)
     {
          window.location.href="index.html";
          alert("Login Successful.");
          
          
     }
     else{
          alert("Invalid Credentials !");
     }
}