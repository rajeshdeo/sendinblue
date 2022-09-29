document.querySelector("form").addEventListener("submit",myFun);


let arrObj=JSON.parse(localStorage.getItem("signupData"))||[];
function myFun(event){

     event.preventDefault();

     let obj={


          email:document.querySelector("#email").value,
          password:document.querySelector("#password").value,
     };

     arrObj.push(obj);
    // console.log(arrObj);
     localStorage.setItem("signupData",JSON.stringify(arrObj));
     window.location.href="login.html";

     document.querySelector("#email").value="";
     document.querySelector("#password").value="";
}