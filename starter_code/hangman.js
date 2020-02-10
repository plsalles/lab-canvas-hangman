let hangman;

class Hangman {
  constructor() {
    this.words = ['teste','game','ironhack'];
    this.secretWord = this.getWord(this.words);
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    
    let randomIndex = Math.floor(Math.random() * this.words.length);
    return this.words[randomIndex]; 
  }

  checkIfLetter(keyCode) {
    let string = String.fromCharCode(keyCode);
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','k','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
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
    if(this.errorsLeft===0){
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {
    let intGuessedLetters = 0;
    let finishArray = this.guessedLetter.split('').forEach(element => {
      if (this.secretWord.includes(element)){
        intGuessedLetters+=1;
      }
    });

    if(intGuessedLetters === this.secretWord.length){
      return true;
    } else { return false;}



  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
