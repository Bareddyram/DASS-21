const quizDB = [
  {
      question:"Q1: I found it hard to wind down",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat:"s"
  },
  {
      question:"Q2: I was aware of dryness of my mouth",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "a"
  },
  {
      question:"Q3: I couldn’t seem to experience any positive feeling at all",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "d"
  },
  {
      question:"Q4: I experienced breathing difficulty (e.g. excessively rapid breathing, <br> breathlessness in the absence of physical exertion) ",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "a"
  },
  {
      question:"Q5: I found it difficult to work up the initiative to do things",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "d"
  },
  {
      question:"Q6: I tended to over-react to situations",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "s"
  },
  {
      question:"Q7: I experienced trembling (e.g. in the hands)",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "a"
  },
  {
      question:"Q8: I felt that I was using a lot of nervous energy",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "s"
  },
  {
      question:"Q9: I was worried about situations in which I might panic and make a fool of myself",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "a"
  },
  {
      question:"Q10: I felt that I had nothing to look forward to",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "d"
  },
  {
      question:"Q11: I found myself getting agitated",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "s"
  },
  {
      question:"Q12: I found it difficult to relax",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "s"
  },
  {
      question:"Q13: I felt down-hearted and blue",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "d"
  },
  {
      question:"Q14: I was intolerant of anything that kept me from getting on with what I was doing",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "s"
  },
  {
      question:"Q15: I felt I was close to panic",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "a"
  },
  {
      question:"Q16: I was unable to become enthusiastic about anything",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "d"
  },
  {
      question:"Q17: I felt I wasn’t worth much as a person",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "d"
  },
  {
      question:"Q18: I felt that I was rather touchy",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "s"
  },
  {
      question:"Q19: I was aware of the action of my heart in the absence of physical exertion <br> (e.g. sense of heart rate increase, heart missing a beat) ",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "a"
  },
  {
      question:"Q20: I felt scared without any good reason",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "a"
  },
  {
      question:"Q21: I felt that life was meaningless",
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      cat: "d"
  }
];


const question = document.querySelector('.question');
const opt1 = document.querySelector('#opt1');
const opt2 = document.querySelector('#opt2');
const opt3 = document.querySelector('#opt3');
const opt4 = document.querySelector('#opt4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showscore = document.querySelector('#showscore');

let questionCount = 0;
let dscore = 0;
let ascore = 0;
let sscore = 0;
let dSeverity = "";
let aSeverity = "";
let sSeverity = "";
const loadQuestion = () => {
  const questionList = quizDB[questionCount];

  question.innerText = questionList.question;

  opt1.innerText = questionList.a;
  opt2.innerText = questionList.b;
  opt3.innerText = questionList.c;
  opt4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
      if(curAnsElem.checked){
          answer = curAnsElem.id;
      }
  });
  return answer;
}

const deselectAll = () => {
  answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () => {
  const checkedAnswer = getCheckAnswer();
  
  if(quizDB[questionCount].cat == "d"){
      dscore = dscore + parseInt(checkedAnswer);
  };
  if(quizDB[questionCount].cat == "a"){
      ascore = ascore + parseInt(checkedAnswer);
  };
  if(quizDB[questionCount].cat == "s"){
      sscore = sscore + parseInt(checkedAnswer);
  };

  questionCount++;

  deselectAll();

  if(questionCount < quizDB.length){
      loadQuestion();
  } else{
      if(dscore<=9){
          dSeverity = "Normal";
      };
      if(dscore>9 && dscore<=13){
          dSeverity = "Mild";
      };
      if(dscore>13 && dscore<=20){
          dSeverity = "Moderate";
      };
      if(dscore>20 && dscore<=27){
          dSeverity = "Severe";
      };
      if(dscore>27){
          dSeverity = "Extremely Severe";
      };
      if(ascore<=7){
          aSeverity = "Normal";
      };
      if(ascore>7 && ascore<=9){
          aSeverity = "Mild";
      };
      if(ascore>9 && ascore<=14){
          aSeverity = "Moderate";
      };
      if(ascore>14 && ascore<=19){
          aSeverity = "Severe";
      };
      if(ascore>19){
          aSeverity = "Extremely Severe";
      };
      if(sscore<=14){
          sSeverity = "Normal";
      };
      if(sscore>14 && sscore<=18){
          sSeverity = "Mild";
      };
      if(sscore>18 && sscore<=25){
          sSeverity = "Moderate";
      };
      if(sscore>25 && sscore<=33){
          sSeverity = "Severe";
      };
      if(sscore>33){
          sSeverity = "Extremely Severe";
      };
      showscore.innerHTML = `
      <h3> Depression : ${dSeverity} (${dscore})</h3>
      <h3> Anxiety : ${aSeverity} ${ascore}</h3>
      <h3> Stress : ${sSeverity} ${sscore}</h3>
      <button class="btn" onclick="location.reload()"> Play Again </button>
    `;
    showscore.classList.remove('scorearea');
    
  }
});
