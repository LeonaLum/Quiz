//Variabel som håller koll på poängen
let points = 0;
let maxPoints = 20;

//Array som ska lagra dina svar
let correctAnswers = [];

let radioButtons = document.querySelectorAll("[name='radio']")
let questionBoxes = document.querySelectorAll(".questionBox");

let buttonDarkmode = document.getElementById("modeDark");
let all = document.getElementById("quiz");
let questions = document.querySelectorAll(".forQuestions");
let h = document.querySelectorAll("h2");
let labels = document.querySelectorAll("label");
let buttonsBottom = document.querySelectorAll(".bottomButtons");
let endText = document.querySelector("#lastText");
let buttonAnswers = document.querySelectorAll(".answerButtons");
let bigHeader = document.querySelector("h1");
let spans = document.querySelectorAll("span");

let yourResults = document.createElement("p");

divFinal = document.querySelector("#final");

let buttonSpan = document.getElementById("light");

let listItems = document.querySelectorAll("li");

//Lägger till darkmode stil när knappen trycks
//Knappen light mode dyker upp när knappen trycks
buttonDarkmode.addEventListener("click", () => {

 let buttonLightmode = document.createElement("button");
 buttonLightmode.innerText="Spela i light mode!";
 buttonLightmode.id ="light";
 buttonSpan.appendChild(buttonLightmode);

 //Lightmode
 //När du trycker på knappen laddas sidan och med ordinarie stil
 buttonLightmode.addEventListener("click" , () => {
  location.reload();
 })

 //Darkmode
 //Med loopar ger jag element darkmode klasser
 buttonDarkmode.remove();
  all.id="dark";
  questionBoxes.forEach((box) => {
   box.classList.add("darkBoxes");
  })
  questions.forEach((box) => {
    box.classList.add("darkBoxes");
   })
   h.forEach((box) => {
    box.classList.add("darkText");
   })
   labels.forEach((box) => {
    box.classList.add("darkBoxes");
   })
   buttonsBottom.forEach((box) => {
    box.classList.add("darkBoxes");
   })
   buttonAnswers.forEach((button) => {
     button.classList.add("darkBoxes");
   })
   spans.forEach((elem) => {
     elem.classList.add("darkText");
   })
   listItems.forEach((elem) => {
     elem.classList.add("darkText");
   })

   divFinal.classList.add("darkText");
   bigHeader.classList.add("darkBoxes");
   endText.classList.add("darkText");
   text.className="answeredDark";
   yourResults.className="darkResult";
})


//Text uppstår när man svarat på varje fråga
//Tilldelar nyskapade element klasser för stilsättning
let text = document.createElement("p");
text.innerHTML = "Frågan är besvarad";
text.className="answered";


let buttonAnsOne = document.getElementById("ansButton1");
//Fråga 1
buttonAnsOne.addEventListener("click", () => {

  radioButtons[0].remove(),radioButtons[1].remove(),radioButtons[2].remove();

  buttonAnsOne.remove();

  if(radioButtons[0].checked){
   
   questionBoxes[0].appendChild(text);
   points+=2;
   correctAnswers.push("Fråga1: Klorofyll");
  }
  else if(radioButtons[1].checked){
   questionBoxes[0].appendChild(text);
   correctAnswers.push("Fråga1: Fel!");
  }
  else if(radioButtons[2].checked){
   questionBoxes[0].appendChild(text);
   correctAnswers.push("Fråga1: Fel!");
  }


})

let buttonAnsTwo = document.getElementById("ansButton2");
//Fråga 2
buttonAnsTwo.addEventListener("click", () => {
  radioButtons[3].remove(),radioButtons[4].remove(),radioButtons[5].remove();
  buttonAnsTwo.remove();

if(radioButtons[3].checked){
  questionBoxes[1].appendChild(text);
  correctAnswers.push("Fråga2: Fel!");
 }
 else if(radioButtons[4].checked){
  questionBoxes[1].appendChild(text);
  points+=2;
  correctAnswers.push("Fråga2: Valletta");
 }
 else if(radioButtons[5].checked){
  questionBoxes[1].appendChild(text);
  correctAnswers.push("Fråga2: Fel!");
 }


})

let buttonAnsThree = document.getElementById("ansButton3");
//Fråga 3
buttonAnsThree.addEventListener("click", () => {
  radioButtons[6].remove(),radioButtons[7].remove(),radioButtons[8].remove();
  buttonAnsThree.remove();

if(radioButtons[6].checked){
  questionBoxes[2].appendChild(text);
  correctAnswers.push("Fråga3: Fel!");
 }
 else if(radioButtons[7].checked){
  questionBoxes[2].appendChild(text);
  points+=2;
  correctAnswers.push("Fråga3: Fastform till gasform");
 }
 else if(radioButtons[8].checked){
  questionBoxes[2].appendChild(text);
  correctAnswers.push("Fråga3: Fel!");
 }


})

let buttonAnsFour = document.getElementById("ansButton4");
//Fråga 4
buttonAnsFour.addEventListener("click", () => {
  radioButtons[9].remove(),radioButtons[10].remove(),radioButtons[11].remove();
  buttonAnsFour.remove();

if(radioButtons[9].checked){
  questionBoxes[3].appendChild(text);
  correctAnswers.push("Fråga4: Fel!");
 }
 else if(radioButtons[10].checked){
  questionBoxes[3].appendChild(text);
  correctAnswers.push("Fråga4: Fel!");
 }
 else if(radioButtons[11].checked){
  questionBoxes[3].appendChild(text);
  points+=2;
  correctAnswers.push("Fråga4: 1920-talet");
 }



})


let checkBoxes = document.querySelectorAll("[name='checkbox']")

let buttonAnsFive = document.getElementById("ansButton5");
//Fråga 5
buttonAnsFive.addEventListener("click" , () => {
  checkBoxes.forEach((elem) => {
    elem.remove();
    buttonAnsFive.remove();
  })
  if(checkBoxes[0].checked == false && checkBoxes[1].checked && checkBoxes[2].checked == false && checkBoxes[3].checked == false && checkBoxes[4].checked && checkBoxes[5].checked == false && checkBoxes[6].checked && checkBoxes[7].checked == false && checkBoxes){


  questionBoxes[4].appendChild(text);
  points+=2;
  correctAnswers.push("Fråga5: Bönor, Ärtor, Kikärtor");
  }
  else{

  questionBoxes[4].appendChild(text);
  correctAnswers.push("Fråga5: Fel!");
  }
})

let buttonAnsSix = document.getElementById("ansButton6");
//Fråga 6
buttonAnsSix.addEventListener("click" ,() => {
  radioButtons[12].remove(),radioButtons[13].remove(),radioButtons[14].remove();
  buttonAnsSix.remove();

if(radioButtons[12].checked){
  questionBoxes[5].appendChild(text);
  correctAnswers.push("Fråga6: Fel!");
 }
 else if(radioButtons[13].checked){
  questionBoxes[5].appendChild(text);
  correctAnswers.push("Fråga6: Fel!");
 }
 else if(radioButtons[14].checked){
  questionBoxes[5].appendChild(text);
  points+=2;
  correctAnswers.push("Fråga6: dur-ackord");
 }
})

let buttonAnsSeven = document.getElementById("ansButton7");
//Fråga 7
buttonAnsSeven.addEventListener("click" ,() => {
  radioButtons[15].remove(),radioButtons[16].remove(),radioButtons[17].remove();
  buttonAnsSeven.remove();

if(radioButtons[15].checked){
  questionBoxes[6].appendChild(text);
  correctAnswers.push("Fråga7: Fel!");
 }
 else if(radioButtons[16].checked){
  questionBoxes[6].appendChild(text);
  points+=2;
  correctAnswers.push("Fråga7: Öland");
  
 }
 else if(radioButtons[17].checked){
  questionBoxes[6].appendChild(text);
  correctAnswers.push("Fråga7: Fel!");
 }
})

let buttonAnsEight = document.getElementById("ansButton8");
//Fråga 8
buttonAnsEight.addEventListener("click" ,() => {
  radioButtons[18].remove(),radioButtons[19].remove(),radioButtons[20].remove();
  buttonAnsEight.remove();

if(radioButtons[18].checked){
  questionBoxes[7].appendChild(text);
  correctAnswers.push("Fråga8: Fel!");
 }
 else if(radioButtons[19].checked){
  questionBoxes[7].appendChild(text);
  points+=2;
  correctAnswers.push("Fråga8: Stigbygeln");
  
 }
 else if(radioButtons[20].checked){
  questionBoxes[7].appendChild(text);
  correctAnswers.push("Fråga8: Fel!");
 }
})


let buttonAnsNine = document.getElementById("ansButton9");
//Fråga 9
buttonAnsNine.addEventListener("click" ,() => {
  radioButtons[21].remove(),radioButtons[22].remove(),radioButtons[23].remove();
  buttonAnsNine.remove();

if(radioButtons[21].checked){
  questionBoxes[8].appendChild(text);
  correctAnswers.push("Fråga9: Fel!");
 }
 else if(radioButtons[22].checked){
  questionBoxes[8].appendChild(text);
  correctAnswers.push("Fråga9: Fel!");
  
 }
 else if(radioButtons[23].checked){
  questionBoxes[8].appendChild(text);
  points+=2;
  correctAnswers.push("Fråga9: Björk");

 }
})


let buttonAnsTen = document.getElementById("ansButton10");
//Fråga 10
buttonAnsTen.addEventListener("click" ,() => {
  radioButtons[24].remove(),radioButtons[25].remove(),radioButtons[26].remove();
  buttonAnsTen.remove();

if(radioButtons[24].checked){
  questionBoxes[9].appendChild(text);
  correctAnswers.push("Fråga10: Fel!");
 }
 else if(radioButtons[25].checked){
  questionBoxes[9].appendChild(text);
  correctAnswers.push("Fråga10: Fel!");
  
 }
 else if(radioButtons[26].checked){
  questionBoxes[9].appendChild(text);
  points+=2;
  correctAnswers.push("Fråga10: Herre");


  

 }
})


buttonGetResults = document.getElementById("getResults");
//Knapp för resultaten
buttonGetResults.addEventListener("click" , () => {
//Knappen tas bort efter klick
buttonGetResults.remove();
// Beroende av poängen så får resultatet röd, orange eller grön färg
if (points < maxPoints/2){
    yourResults.innerHTML=`Din poäng är <strong class="resul"><span  id="red">${points}</span>/${maxPoints}</strong> ! </br> Bättre kan du nog, Testa igen!`;
    divFinal.appendChild(yourResults);
  }
  if (points > maxPoints/2 && points <= maxPoints * 0.75){
    yourResults.innerHTML=`Din poäng är <strong class="resul"><span  id="orange">${points}</span>/${maxPoints}</strong> ! </br> Bra, mer än hälften av dina svar var korrekta!`;
    divFinal.appendChild(yourResults);
    }
  if(points >= maxPoints*0.75 && points < maxPoints){
    yourResults.innerHTML=`Din poäng är <strong class="resul"><span  id="green">${points}</span>/${maxPoints}</strong> ! </br> Super, det gick jättebra, men kan du få <bold>alla</bold> rätt nästa gång?`;
    divFinal.appendChild(yourResults);
    }
    if(points == maxPoints){
      let yourResults = document.createElement("p")
      yourResults.innerHTML=`<strong class="resul"><span  "id="green">${points}</span>/${maxPoints}</strong> ! </br> GRATTIS!! DU FICK <bold>FULL POTT!</bold>`;
      divFinal.appendChild(yourResults);
      }
})


buttonSeeAnswers = document.getElementById("seeAnswers");
list = document.getElementById("ans");
forName = document.getElementById("nameList");

// Se svar
//En lista med korrekta/inkorrekta svar appendas längst upp på sidan
buttonSeeAnswers.addEventListener("click", () => {

  console.log(correctAnswers)
  nameOfList = document.createElement("h2");
  nameOfList.id="nameList";
  nameOfList.innerText="Korrekta svar:"
  forName.appendChild(nameOfList);

correctAnswers.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.textContent = item;
  list.appendChild(listItem);
  console.log(item)
})

buttonSeeAnswers.remove();
document.documentElement.scrollTop = 0;
let greenBorder = document.getElementsByClassName("greenBorder");
let rightAnswers = Array.from(greenBorder);

//Med en loop ger jag dem korrekta svaren en grön border med en klass
rightAnswers.forEach((answer) => {
  answer.style.color="green";
  answer.style.border="5px green solid";
  answer.style.padding="5px";
})
})
//Sidan laddas om när du vill göra om quizet
let buttonRedo = document.getElementById("redo");

buttonRedo.addEventListener("click", () => {
  location.reload();
  document.documentElement.scrollTop = 0;
})



