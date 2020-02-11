
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    
  }

  createBoard() {
    this.ctx.beginPath();
    this.ctx.moveTo(100,400);
    this.ctx.lineTo(200,400);
    this.ctx.stroke();
    this.ctx.lineTo(150,350);
    this.ctx.stroke();
    this.ctx.lineTo(100,400);
    this.ctx.stroke();
    this.ctx.moveTo(150,350);
    this.ctx.lineTo(150,0);
    this.ctx.stroke();
    this.ctx.lineTo(400,0);
    this.ctx.stroke();
    this.ctx.lineTo(400,30);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  drawLines(secretWord) {
    let letterSpace = 60;
    
    this.ctx.beginPath();
    this.ctx.setLineDash([50,10]);
    this.ctx.moveTo(500,375);
    this.ctx.lineTo(500+(secretWord.length*letterSpace),375);
    this.ctx.stroke();
    this.ctx.closePath();

  }

  writeCorrectLetter(index) {
    let letterSpace = 60;
    let positionX = 515 + (60*index);
    let positionY = 365;
    this.ctx.font = '30px Arial';
    this.ctx.fillText(hangman.secretWord[index].toUpperCase(),positionX,positionY);

  }

  writeWrongLetter(letter, errorsLeft) {
       
    let positionX = 800 + ((10 - errorsLeft ) * 25);
    let positionY = 150;
    this.ctx.font = '30px Arial';
    this.ctx.fillText(letter.toUpperCase(),positionX,positionY);
    
  }

  drawHangman(shape) {
    this.ctx.setLineDash([]);
    switch(shape){
      case 1:
        console.log('head');
        this.ctx.beginPath();
        this.ctx.arc(400,70,40,0,Math.PI *2);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 2:
        console.log('body');
        this.ctx.beginPath();
        this.ctx.moveTo(400,110);
        this.ctx.lineTo(400,250);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 3:
        console.log('right leg');
        this.ctx.beginPath();
        this.ctx.moveTo(400,250);
        this.ctx.lineTo(440,290);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 4:
        console.log('left leg');
        this.ctx.beginPath();
        this.ctx.moveTo(400,250);
        this.ctx.lineTo(360,290);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 5:
        console.log('right arm');
        this.ctx.beginPath();
        this.ctx.moveTo(400,180);
        this.ctx.lineTo(450,190);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 6:
        console.log('left arm');
        this.ctx.beginPath();
        this.ctx.moveTo(400,180);
        this.ctx.lineTo(350,190);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 7:
        console.log('right foot');
        this.ctx.beginPath();
        this.ctx.moveTo(440,290);
        this.ctx.lineTo(470,280);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 8:
        console.log('left foot');
        this.ctx.beginPath();
        this.ctx.moveTo(360,290);
        this.ctx.lineTo(330,280);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 9:
        console.log('right hand');
        this.ctx.beginPath();
        this.ctx.moveTo(450,190);
        this.ctx.lineTo(470,170);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 10:
        console.log('left hand');
        this.ctx.beginPath();
        this.ctx.moveTo(350,190);
        this.ctx.lineTo(330,170);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
    }
  }

  gameOver() {
    let img = new Image();
    let context = this.ctx;
    img.src = "./images/gameover.png";
    //this.ctx.clearRect(0,0,600,400);
    img.onload = function () {
      console.log(context)
      context.drawImage(img,0,0);
    };


  }

  winner() {
    let img = new Image();
    let context = this.ctx;
    img.src = "./images/awesome.png";
    // this.ctx.clearRect(0,0,600,400);
    img.onload = function () {
      console.log(context)
      context.drawImage(img,0,0);};
    
   }

}