const arrayOfWords = [["sport"], ["swim"], ["rain"]];
//the length of the array of word. 
let q = 3;
const arrayOfMissingLetters = ["s _ o _  t", "s _ i _ ", "r _ _ n"]

//the length of answer array which will be the innter array
let p =2;
const arrayOfAnswers = [["p", "r"], ["w", "m"],["a", "i"]]

//to display list of words array with missing letters

let number =0;
function displayWord(){
 
   if ( number < arrayOfMissingLetters.length){
    getWords(number);
    console.log(number);
    number=number +1;
    
    
   
   }

  }

//function to display the word, with some missing letters
function getWords(number){
  
  const word1= document.getElementById("DisplayWord");
  word1.innerHTML= arrayOfMissingLetters[number];
  console.log(word1)
}
const btn1= document.getElementById("word").addEventListener("click",displayWord);

// const arrayOfUserResponse =[];
//copying the user input, into an array 

function returnArray(){
     const retArra = document.getElementById("userInp");
  retArra.innerHTML = userResponse;
 }
 let btn3 = document.getElementById("returnArray").addEventListener("click", returnArray);


const userResponse =[];

//function getting user response for the missing letters
function returnLetter(){
  //to check how many letters the user input for a given word
        
        const inp = document.getElementById("userInput").value;
         console.log(inp);       
         userResponse.push(inp);
         alert(inp);
        //  console.log(userResponse);       
    
}
//function comparing user response with answers

// const arrayOfCheck = [];

let points=0;
function validityCheck(){
  number = number-1;
   if ( number < arrayOfWords.length){
    
    checkValidity(number);
    
    console.log(number);   
   }

  }



function checkValidity(number){
    let k=0;
    console.log(arrayOfWords[number]);  
    
    const correctWord = document.getElementById("correctword"); 
    console.log(userResponse); 

  for (let i=0; i<userResponse.length; i++){
    if(arrayOfAnswers[number][i] == userResponse[i])
      {     
      k=k+1
      }    

    else{
      k=k;             
      }
  const result = document.getElementById("result");
  
  }
  
  
  
   if (k == 2){
    result.innerHTML = "correct"
    points=points+10;     
      console.log("correct");
   }
   else{
    console.log("wrong");
    points=points-10;
    result.innerHTML = "Wrong";
   }
  
   correctWord.innerHTML = arrayOfWords[number];
   
   console.log(arrayOfWords[number]);

   console.log(points);
   
  //  number1 = number1+1;
  //  console.log(number1);
  }
  // alert("click");
  

let btn = document.getElementById("validityCheck").addEventListener("click", validityCheck);


function player1(){
  const player1 = document.getElementById("user1");
  player1.innerHTML = "player 1"; 
    
  }
  let btn4 = document.getElementById("user1").addEventListener("click", player1);

  function player2(){
  const player1 = document.getElementById("user2");
  player1.innerHTML = "player 2"; 
    
  }
  let btn5 = document.getElementById("user2").addEventListener("click", player2);

