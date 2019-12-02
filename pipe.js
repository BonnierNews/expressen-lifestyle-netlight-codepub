/****************************************************
 * pipe.js
 *
 ****************************************************/

class Pipe {
  speed = 2;
  topHeight = random(CANVAS_HEIGHT / 2);
  width = 20;
  x = CANVAS_WIDTH;
  topY = 0;
  bottomHeight = random(CANVAS_HEIGHT / 2);
  bottomY = CANVAS_HEIGHT - this.bottomHeight;

  /****************************************************
   * Create pipes
   * Use fill and rect from p5 together with
   * the variables in the top
   * @custom
   ****************************************************/
  show() {

  }

  /****************************************************
   * Each pipe starts to the right of the canvas and
   * moves to the left
   * This function updates in draw()
   * @custom
   ****************************************************/
  update() {

  }

  /****************************************************
   * Hit detection: when the wasp hits the pipe
   * @custom
   ****************************************************/
  hits(wasp) {

  }

  /****************************************************
   * When the wasp passes a pipe
   * @custom
   ****************************************************/
  pass(wasp) {

  }

  /****************************************************
   * Check if the pipe is offscreen or not
   * Use the variables in the top
   * @custom
   ****************************************************/
  offscreen() {

  }
}
