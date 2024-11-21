let value ;
value=document;
value=document.URL;
value=document.title;
value=document.location;
value=document.location.hostname;
value=document.scripts;
value=document.links;
value=document.links[document.links.length-1].getAttribute("class");
value=document.links[document.links.length-1].classList;
//ID ıle secme islemi

value=document.getElementById("title");
value=document.getElementById("title").textContent;
value=document.getElementById("title").innerHTML;

// class ile seçim

value=document.getElementsByClassName("text");
value=document.getElementsByClassName("text")[0];

// tag ile secme

value=document.getElementsByTagName("p");

//query ıle secme

value=document.querySelector("#title");
value=document.querySelector("#text");
value=document.querySelector("#span");
 
//eleman olusturma

value= document.getElementById("denemeButon");
const button =document.createElement("a");
button.ıd="denemeButon";
button.className="button";




console.log(value);