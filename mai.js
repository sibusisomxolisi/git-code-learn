const requestJoke = async(firstName,lastName)=>{
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}& lastName=${lastName}`);
    const jsonResponse = await response.json();
    console.log(jsonResponse.value.joke);
}
requestJoke("Bruce", "Lee");
// let playGame =confirm("shall we play rock, paper, or scissors?");
// if(playGame){
//     let playerChoice = prompt("please enter rock, paper, or scissors. ");
//     if(playerChoice){
//        let playerOne = playerChoice.trim().toLowerCase();
//        if(playerOne === "rock" || playerOne=== "paper" || playerOne=== "scissors"){
//            let compterChoice= Math.floor(Math.random()* 3+1);
//            let computer = compterChoice === 1 ? "rock"
//            : compterChoice === 2 ? "paper"
//            : "scissors";

//            let result = playerOne === computer 
//            ? "Tie game!"
//            : playerOne ==="rock" && computer === "paper"
//            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//            : playerOne ==="paper" && computer === "scissors"
//            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//            : playerOne ==="scissors" && computer === "rock"
//            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          
//            : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins`;
//            alert(result);
//            let playAgain = confirm("Play Again?");
//            playAgain ? location.reload() : alert("ohk, thank for playing.");
//        }else{
//         alert("You didn't enter rock, paper, or scissors.");
//        }
//     }else{
//         alert("I guess you changed your mind. Maybe next time");
//     }
    
// }else
// {
//     alert("ohk, maybe next time");
// }