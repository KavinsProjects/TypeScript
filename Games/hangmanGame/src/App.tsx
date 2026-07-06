
import { useCallback, useEffect, useState } from 'react';
import HangnmankeyBoard from './HangnmankeyBoard.tsx';
import words from "./wordList.json";
import HangnmanDrawing from './HangnmanDrawing.tsx';
import HangnmanWord from './HangnmanWord.tsx';


function getWord(){
  return words[Math.floor(Math.random()* words.length )]
}
function App() {

  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedWords, setGuessedWords] = useState<string[]>([]);
  console.log(wordToGuess);

  const incorrectLetters = guessedWords.filter(letter => !wordToGuess.includes(letter));
  
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every(letter =>
    guessedWords.includes(letter)
  );

const addGuessedLetter = useCallback(
  (letter: string) => {
    if (guessedWords.includes(letter) || isLoser || isWinner) return;
    setGuessedWords(currentLetters => [...currentLetters, letter]);
  },
  [guessedWords, isWinner, isLoser]
);


  useEffect(()=>{
    const handler = (e : KeyboardEvent)=>{
      const key = e.key;
      if(key !== "Enter") return;
      setWordToGuess(getWord())
    }
    document.addEventListener("keypress",handler)

    return()=>{
      document.removeEventListener("keypress", handler);
    }
  },[])

  useEffect(()=>{
    const handler = (e : KeyboardEvent)=>{
      const key = e.key;
      if(!key.match(/^[a-z]$/)) return;

      e.preventDefault()
      addGuessedLetter(key);
    }
    document.addEventListener("keypress",handler)

    return()=>{
      document.removeEventListener("keypress", handler);
    }
  },[addGuessedLetter])

  return (
   <div

   style={{

    maxWidth : "800px",
    display : "flex",
    flexDirection : "column",
    gap : "2rem",
    margin : "auto",
    alignItems : "center"
   }}

   >
    <div style={{ fontFamily : "sans-serif", textAlign : "center", fontSize : "2rem"}}>
      {isWinner && "Oooo Winner! - Press F5 play again"} 
      {isLoser && " loser - Press F5 play again"} </div>

  <HangnmanDrawing numberOfGuess={incorrectLetters.length} />
  <HangnmanWord revealOrgWord = {isLoser} gussedLetters={guessedWords} wordToGuss={wordToGuess} />
   <HangnmankeyBoard 
   disabled = {isWinner || isLoser}
   activeLetters={guessedWords.filter(letter => wordToGuess.includes(letter))}
   inactiveLetters={incorrectLetters}
   addGuessedLetter={addGuessedLetter} />
   <div style={{alignSelf : "stretch"}}></div>
   </div>
  )
}

export default App
