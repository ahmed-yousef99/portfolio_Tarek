
/*--------------------------------------------------------
-------------------- الكتابة والمسح ---------------------- 
--------------------------------------------------------*/ 

const dynamicText = document.querySelector(".skills-4")
const words = ["منشئ محتوى ","مونتور","مصمم","مخرج"];


let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if(!isDeleting && charIndex < currentWord.length) {
        // if condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    }else if(isDeleting && charIndex > 0) {
        // if condition is true, remove the previons character
        charIndex--;
        setTimeout(typeEffect, 100);
    }else {
        // if word is deleted then switch to thenext word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

/*--------------------------------------------------------
-------------------   تزايد الارقام   --------------------- 
--------------------------------------------------------*/

let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}


const burger = document.getElementById("burger");
const actions = document.getElementById("actions");

burger.addEventListener("click", () => {
  hundleBurger();
})


function hundleBurger() {
  burger.classList.toggle("is-active");
  actions.classList.toggle("is-active");
}
