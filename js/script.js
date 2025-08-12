var canvas = /** @type {HTMLCanvasElement} */ (
  document.querySelector('#canvas1')
)
const ctx = canvas.getContext('2d')




// Game class
class Game {
  constructor () {
    this.ctx = ctx;
    this.isRunning = false;
    this.lastTime = 0;
    this.fps = 60;
    this.frameCount = 0;
    this.lastFpsTime = 0;


    // settings 
    this.start();
  }

  //update
  update (dt) {}

  //draw
  draw () {


    //Draw FPS
    // this.updateFPS();
  }

  //gameLoop
  gameLoop(currentTime){
    if(!this.isRunning) return;
    const deltaTime = Math.min((currentTime - this.lastTime) / 1000, 0.02)
    this.lastTime = currentTime;

    this.update(deltaTime);
    this.draw();

    requestAnimationFrame((time)=>this.gameLoop(time));

  }
  //start
  start(){
    this.isRunning = true;
    this.lastTime = performance.now();
    this.lastFpsTime = this.lastTime;
    requestAnimationFrame((time)=>this.gameLoop(time));
  }
  //FPS
  updateFPS(){
    this.frameCount++;
    const currentTime = performance.now();

    if(currentTime - this.lastFpsTime >= 1000){
        this.fps = this.frameCount;
        this.frameCount = 0;
        this.lastFpsTime = currentTime
        console.log(`FPS: ${this.fps}`);
    }
  }

}

// Initialize the game
let game
window.addEventListener('load', () => {
    game = new Game();
})
