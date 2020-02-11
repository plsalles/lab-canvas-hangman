let hangman;
let hangmanCanvas;

class Hangman {
  constructor() {
    this.words = ['ironhack','canvas','hangman','onibus','trem','metro','lanchonete'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    
    let randomIndex = Math.floor(Math.random() * this.words.length);
    this.secretWord = this.words[randomIndex];

    return this.secretWord;
    
  }

  checkIfLetter(keyCode) {
    
    let string;
    if(typeof keyCode === 'number'){
      string = String.fromCharCode(keyCode);
    } else { string = keyCode;}
    
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    if(alphabet.includes(string.toUpperCase())){
      return true;
      } else {return false;}
    
  }

  checkClickedLetters(key) {
    
    if(this.letters.length===0){
      this.letters.push(key.toUpperCase());
      return true;}
    if (this.letters.includes(key.toUpperCase())){
        return false;
    } else {this.letters.push(key.toUpperCase());
            return true;}
    
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    
  }

  addWrongLetter(letter) {
    if(!this.secretWord.toUpperCase().includes(letter.toUpperCase())){
      this.errorsLeft --;
    }
  }

  checkGameOver() {
    console.log(this.errorsLeft);
    if(this.errorsLeft===0){
      return true;
    } else {
      return false;
    }
  }

  checkWinner(){
    
    let intGuessedLetters = 0;
    let finishArray = this.guessedLetter.split('').forEach(element => {
      if (this.secretWord.toUpperCase().includes(element)){
        intGuessedLetters+=1;

      }
    });

    if(intGuessedLetters >= this.secretWord.length){
      return true;
    } else { return false;}



  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas();
  hangmanCanvas.createBoard();
  hangman.getWord();
  hangmanCanvas.drawLines(hangman.secretWord);
};

document.onkeydown = (e) => {
    
  if(hangman.checkIfLetter(e.key)){
    if(hangman.checkClickedLetters(e.key)){
      if (hangman.secretWord.includes(e.key)){
        for (let i =0 ; i < hangman.secretWord.length; i++){
          if (e.key === hangman.secretWord[i]){
            hangman.addCorrectLetter(i);
            hangmanCanvas.writeCorrectLetter(i);
             
          }
        }
      } else {hangman.addWrongLetter(e.key);
              hangmanCanvas.writeWrongLetter(e.key,hangman.errorsLeft);
              hangmanCanvas.drawHangman(10 - hangman.errorsLeft);}
    }
  }
  if(hangman.checkGameOver()){
    console.log('You Lost!');
    hangmanCanvas.gameOver();
  }

  if(hangman.checkWinner()){
    console.log('You Won!');
    hangmanCanvas.winner();
  }


};
