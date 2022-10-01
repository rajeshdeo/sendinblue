let data=[
     
     {
          name:"Email Campaigns",
          fee:"✓",
          lite:"✓",
          premium:"✓",
          enterprise:"✓",
     },
     {
          name:"Mobile-friendly email designer",
          fee:"✓",
          lite:"✓",
          premium:"✓",
          enterprise:"✓",
          
     },
     {
          name:"Email template library",
          fee:"✓",
          lite:"✓",
          premium:"✓",
          enterprise:"✓",
     },
     {
          name:"SMS marketing",
          fee:"✓",
          lite:"✓",
          premium:"✓",
          enterprise:"✓",
     },
     {
          name:"Email & SMS personalization",
          fee:"✓",
          lite:"✓",
          premium:"✓",
          enterprise:"✓",
     },
     {
          name:"Chat (1 user)",
          fee:"✓",
          lite:"✓",
          premium:"✓",
          enterprise:"✓",
     },

     {
          name:"A/B testing",
          fee:"×",
          lite:"optional",
          premium:"✓",
          enterprise:"✓",
     },
     {
          name:"Send time optimization",
          fee:"×",
          lite:"×",
          premium:"✓",
          enterprise:"✓",
     },
     {
          name:"Landing page builder",
          fee:"×",
          lite:"×",
          premium:"5 landing pages included.",
          enterprise:"Unlimited",
     },
     {
          name:"Facebook ads",
          fee:"×",
          lite:"×",
          premium:"✓",
          enterprise:"✓",
     },
     {
          name:"",
          fee:"signup",
          lite:"signup",
          premium:"signup",
          enterprise:"Get quote",
     },

];
displayTable(data);

function displayTable(data){


data.forEach(function(el){
     

     let tr= document.createElement("tr");

     let td1= document.createElement("td");
     td1.innerText=el.name;

     let td2= document.createElement("td");
     td2.innerText=el.fee;
     let td3= document.createElement("td");
     td3.innerText=el.lite;
     let td4= document.createElement("td");
     td4.innerText=el.premium;
     let td5= document.createElement("td");
     td5.innerText=el.enterprise;

     tr.append(td1,td2,td3,td4,td5);

     document.querySelector("tbody").append(tr);


});

}

// table2

let data2=[
     
     {
          name:"Transactional email and SMS sending",
          fee:"✓",
          lite:"✓",
          premium:"✓",
          enterprise:"✓",
     },
     {
          name:"Core API features",
          fee:"✓",
          lite:"✓",
          premium:"✓",
          enterprise:"✓",
          
     },
     {
          name:"Advanced templating language",
          fee:"✓",
          lite:"✓",
          premium:"✓",
          enterprise:"✓",
     },
     {
          name:"No daily sending limit",
          fee:"×",
          lite:"✓",
          premium:"✓",
          enterprise:"✓",
     },
     {
          name:"Dedicated IP included",
          fee:"×",
          lite:"×",
          premium:"×",
          enterprise:"×",
     },
     

     
     {
          name:"",
          fee:"signup",
          lite:"signup",
          premium:"signup",
          enterprise:"Get quote",
     },

];


data2.forEach(function(el){
     

     let tr= document.createElement("tr");

     let td1= document.createElement("td");
     td1.innerText=el.name;

     let td2= document.createElement("td");
     td2.innerText=el.fee;
     let td3= document.createElement("td");
     td3.innerText=el.lite;
     let td4= document.createElement("td");
     td4.innerText=el.premium;
     let td5= document.createElement("td");
     td5.innerText=el.enterprise;

     tr.append(td1,td2,td3,td4,td5);

     document.querySelector("#table2-tbody").append(tr);


});

// table3

let data3=[
     
     {
          name:"Workflow editor",
          fee:"✓",
          lite:"✓",
          premium:"✓",
          enterprise:"✓",
     },
     {
          name:"Page tracking",
          fee:"✓",
          lite:"✓",
          premium:"✓",
          enterprise:"✓",
          
     },
     {
          name:"Marketing automation workflows",
          fee:"Up to 2,000 contacts",
          lite:"Up to 2,000 contacts",
          premium:"✓",
          enterprise:"✓",
     },
     
     
     {
          name:"",
          fee:"signup",
          lite:"signup",
          premium:"signup",
          enterprise:"Get quote",
     },

];


data3.forEach(function(el){
     

     let tr= document.createElement("tr");

     let td1= document.createElement("td");
     td1.innerText=el.name;

     let td2= document.createElement("td");
     td2.innerText=el.fee;
     let td3= document.createElement("td");
     td3.innerText=el.lite;
     let td4= document.createElement("td");
     td4.innerText=el.premium;
     let td5= document.createElement("td");
     td5.innerText=el.enterprise;

     tr.append(td1,td2,td3,td4,td5);

     document.querySelector("#table3-tbody").append(tr);


});

// table4


let data4=[
     
     {
          name:"Real-time reporting",
          fee:"✓",
          lite:"✓",
          premium:"✓",
          enterprise:"✓",
     },
     {
          name:"Geography & device reporting",
          fee:"×",
          lite:"×",
          premium:"✓",
          enterprise:"✓",
          
     },
     {
          name:"Heat map reporting",
          fee:"×",
          lite:"×",
          premium:"✓",
          enterprise:"✓",
     },
     {
          name:"Advanced open & click stats",
          fee:"×",
          lite:"×",
          premium:"✓",
          enterprise:"✓",
     },
     
     
     {
          name:"",
          fee:"signup",
          lite:"signup",
          premium:"signup",
          enterprise:"Get quote",
     },

];


data4.forEach(function(el){
     

     let tr= document.createElement("tr");

     let td1= document.createElement("td");
     td1.innerText=el.name;

     let td2= document.createElement("td");
     td2.innerText=el.fee;
     let td3= document.createElement("td");
     td3.innerText=el.lite;
     let td4= document.createElement("td");
     td4.innerText=el.premium;
     let td5= document.createElement("td");
     td5.innerText=el.enterprise;

     tr.append(td1,td2,td3,td4,td5);

     document.querySelector("#table4-tbody").append(tr);


});

// table5


let data5=[
     
     {
          name:"Email support",
          fee:"✓",
          lite:"✓",
          premium:"✓",
          enterprise:"✓",
     },
     {
          name:"Phone Support",
          fee:"×",
          lite:"×",
          premium:"✓",
          enterprise:"✓",
          
     },
     {
          name:"GDPR Compliance",
          fee:"✓",
          lite:"✓",
          premium:"✓",
          enterprise:"✓",
     },
     {
          name:"API & plugins",
          fee:"Basic integrations: RSS, Google Contacts, Typeform, more",
          lite:"Basic integrations: RSS, Google Contacts, Typeform, more",
          premium:"Basic integrations: RSS, Google Contacts, Typeform, more",
          enterprise:"Basic and advanced integrations: Salesforce, FTP, more",
     },
     {
          name:"Multi-user access",
          fee:"×",
          lite:"×",
          premium:"3 users included. 9€ per additional user / month. Up to 10 users",
          enterprise:"✓",
     },
     {
          name:"Dedicated account manager",
          fee:"×",
          lite:"×",
          premium:"×",
          enterprise:"✓",
     },

     {
          name:"SSO & SAML",
          fee:"×",
          lite:"×",
          premium:"×",
          enterprise:"✓",
     },
     {
          name:"Service Level Agreement (SLA)",
          fee:"×",
          lite:"×",
          premium:"×",
          enterprise:"✓",
     },
     
     {
          name:"",
          fee:"signup",
          lite:"signup",
          premium:"signup",
          enterprise:"Get quote",
     },

];



data5.forEach(function(el){
     

     let tr= document.createElement("tr");

     let td1= document.createElement("td");
     td1.innerText=el.name;

     let td2= document.createElement("td");
     td2.innerText=el.fee;
     let td3= document.createElement("td");
     td3.innerText=el.lite;
     let td4= document.createElement("td");
     td4.innerText=el.premium;
     let td5= document.createElement("td");
     td5.innerText=el.enterprise;

     tr.append(td1,td2,td3,td4,td5);

     document.querySelector("#table5-tbody").append(tr);


});









