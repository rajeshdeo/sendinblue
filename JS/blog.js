

let data= [
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2021/11/cheap_email_marketing-300x116.png",
          para1:"September 29 2022",
          h3:"19 Best Cheap Email Marketing Services (October 2022)",
          para2:"Reading time about 20 min",

     },
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2020/08/Best-email-marketing-services-ft-300x116.png",
          para1:"September 29, 2022", 
          h3:"The Best Email Marketing Services Compared (October 2022)",
          para2:"Reading time about 21 min",
     },
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2022/09/whatsapp_template-300x116.png",
          para1:"September 29, 2022",
          h3:"17 Examples of WhatsApp Business Message Templates",
          para2:"Reading time about 12 min",
     },
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2019/07/What_is_email_marketing.png",
          para1:"September 28, 2022",
          h3:" What is Email Marketing? Definition, Strategies, & Tools to Get Started",
          para2:"Reading time about 27 min",
     },
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2020/02/how_to_create_a_newsletter-300x116.png",
          para1:"September 28, 2022",
          h3:"How to Create a Newsletter in 9 Easy Steps (Completely Free)",
          para2:"Reading time about 24 min",
     },
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2020/09/Holiday-marketing-ideas-ft-300x116.png",
          para1:"September 22, 2022",
          h3:"9 Holiday Marketing Campaign Ideas to Stand Out This Season",
          para2:"Reading time about 7 min",
     },
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2020/09/Emotion-packed-holiday-campaigns-ft-300x116.png",
          para1:"September 20, 2022",
          h3:"13 Heartwarming Holiday Marketing Campaign Examples",
          para2:"Reading time about 10 min",
     },
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2020/10/Cyber-Monday-emails-why-they-work-ft-300x116.png",
          para1:"September 20, 2022",
          h3:"11 Cyber Monday Email Examples and Tips to Drive Sales in 2022",
          para2:"Reading time about 9 min",
     },
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2019/11/Holiday-email-templates-ft-300x116.png",
          para1:"September 19, 2022",
          h3:"Free Holiday Email Templates to Stand Out This Season",
          para2:"Reading time about 7 min",
     },
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2018/01/transactional_email_guide-300x116.png",
          para1:"September 15, 2022 ",
          h3:"Transactional Email Explained: Definition, Best Practices, & Setup",
          para2:"Reading time about 12 min",
     },
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2019/07/email-marketing-best-practices-feature-300x116.png",
          para1:"September 14, 2022",
          h3:"24 Email Marketing Best Practices for Campaigns That Convert (2022)",
          para2:"Reading time about 23 min",
     },
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2022/09/whatsapp_partner-300x116.png",
          para1:"September 8, 2022",
          h3:"What Is a WhatsApp Business Partner & How to Choose the Best One for Your Business",
          para2:"Reading time about 7 min",
     },
]

data.forEach(function(el){

     let div= document.createElement("a");

     let div_image= document.createElement("div");
     div_image.setAttribute("class","div-image")

     let img= document.createElement("img");
     img.src=el.url;
     div_image.append(img);

     let para1= document.createElement("p");
     para1.innerText=el.para1;

     let h3=document.createElement("h3");
     h3.innerText=el.h3;

     let para2= document.createElement("p");
     para2.innerText=el.para2;

     div.append(div_image,para1,h3,para2);
     document.querySelector(".container").append(div);
     


})

let data1=[
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2019/07/What_is_email_marketing.png",
          h3:"What is Email Marketing? Definition, Strategies, & Tools to Get Started",
          para2:"Reading time about 27 min",

     },
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2022/02/10-Best-Sites-for-Free-Email-Templates.png",
          h3:"The 10 Best Sites for Free Email Templates",
          para2:"Reading time about 9 min",

     },
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2021/09/How-to-Send-Mass-Email-with-Gmail.png",
          h3:"How to Send Mass Email in Gmail",
          para2:"Reading time about 12 min",

     },
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2021/09/Mass-Email-Outlook-with-Mail-Merge.png",
          h3:"A Quick & Easy Guide to Sending Mass Email in Outlook",
          para2:"Reading time about 10 min",

     },
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2018/03/best_email_newsletter_examples.png",
          h3:"13 of the Best Email Newsletter Examples to Show You How It’s Done",
          para2:"Reading time about 18 min",

     },
     {
          url:"https://www.sendinblue.com/wp-content/uploads/2021/11/what-is-a-newsletter-_feature.png",
          h3:"What Is A Newsletter? Definition, Purpose, & Benefits",
          para2:"Reading time about 8 min",

     }
]

data1.forEach(function(el){

     let div= document.createElement("a");

     let div_image= document.createElement("div");
     div_image.setAttribute("class","div-image")

     let img= document.createElement("img");
     img.src=el.url;
     div_image.append(img);

     let h3=document.createElement("h3");
     h3.innerText=el.h3;

     let para2= document.createElement("p");
     para2.innerText=el.para2;

     div.append(div_image,h3,para2);
     document.querySelector(".container1").append(div);
     


})

