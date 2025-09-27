"use strict";
const quoteTxt=document.querySelector(".quote");
const btnQuote=document.querySelector(".btn-quote");
const SpeechEl=document.querySelector(".speech");
const authorEl=document.querySelector(".author");
const copyEl=document.querySelector(".copy");
const twitterEl=document.querySelector(".twitter");
const messageEl=document.querySelector(".message");

// Random quote generator

async function randomQuote() {
    btnQuote.textContent="loading";
    const data=await fetch("https://dummyjson.com/quotes/random");
    const result = await data .json();
    const{ quote,author} = result;
    quoteTxt.textContent=quote;
    authorEl.textContent=author;
    btnQuote.textContent="New Quote";

    // console.log(result);
}

// Speechfun==============

function speechTxt() {
    let speechText =new SpeechSynthesisUtterance();
    speechText.text=`${quoteTxt.textContent}  by ${authorEl.textContent}`;
    speechText.voice=window.speechSynthesis.getVoices()[0];
    window.speechSynthesis.speak(speechText);
// console.log(speechText);
}

copyEl.addEventListener('click', ()=>{
    navigator.clipboard.writeText(quoteTxt.innerText);
    messageEl.classList.add('active');

    setInterval(() => {
    messageEl.classList.remove('active');
        
    }, 2500);
})


twitterEl.addEventListener('click', ()=>{
let tweet=`https://twitter.com/intent/tweet?url=${quoteTxt.innerText}`;
window.open(tweet,"_Blank")
})


SpeechEl.addEventListener("click",speechTxt);
btnQuote.addEventListener("click" , randomQuote);


