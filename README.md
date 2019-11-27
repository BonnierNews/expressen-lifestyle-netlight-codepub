# Flappy Wasp Game

This is a guide for making the Flappy Wasp Game.

---


## 0. **Getting Started**

### 0.1. **Download project from GitHub**
Download project by clicking the green button named “Clone or download”. When a small dialogue appears, click “Download ZIP” in the right bottom corner to download it to your computer. Or if you have `git` installed, you can just clone the project.

### 0.2. **Install Visual Studio Code**
Download Visual Studio Code from https://code.visualstudio.com/ or use editor of your choice. You also need a running local server on your computer.

**TIP:** In Visual Studio Code you can install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) as a plugin from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/). When Live Server is installed, you should be able to click “Go Live” in the bottom right corner of the Visual Studio Code editor.

---


## 1. **Create game**

### 1.1. **Create a canvas**
Get started with p5.js by visiting https://p5js.org/get-started/. The first thing we need to do is add a canvas by using the [createCanvas()](https://p5js.org/reference/#/p5/createCanvas) function. Add it in the `index.js` file. See example [here](https://p5js.org/reference/#/p5/createCanvas).

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>

<h4>index.js</h4><pre>
function setup() {
  <b>createCanvas(400, 600);</b>
}</pre>

</details>

### 1.2. **Add a background**
When we have a canvas we can add a background image. In `index.js`, use p5.js’s [image()](https://p5js.org/reference/#/p5/image) function to add the `background.png` image. See example [here](https://p5js.org/reference/#/p5/image). 

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>

<h4>index.js</h4><pre>
function preload() {
  <b>backgroundImg = loadImage("images/background.png");</b>
}
function draw() {
  <b>image(backgroundImg, 0, 0, 400, 600);</b>
}</pre>

</details>

---


## 2. **Create wasp**


### 2.1. **Show wasp**
In `wasp.js`, use p5.js’s [image()](https://p5js.org/reference/#/p5/image) function in the `this.show()` function. Pass the variables `this.x`, `this.y` and `this.size` as parameters to the image() function.

Then in `index.js`, create a new wasp instance and call the wasp’s `show()` function in the `draw()` function.

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>

<h4>index.js</h4><pre>
function preload() {
  backgroundImg = loadImage("background.png");
  <b>waspImg = loadImage("wasp.png");</b>
}<br>
function startGame() {
  <b>wasp = new Wasp();</b>
}<br>
function draw() {
  <b>wasp.update();</b>
  <b>wasp.show();</b>
}</pre>

<h4>wasp.js</h4><pre>
this.show = function() {
  <b>image(waspImg, this.x - 16, this.y - 16, 32, 32);</b>
}</pre>

</details>


### 2.2. **Add gravity**
The wasp should fall to the ground because it is affected by gravity! In `wasp.js`, we need to use `this.gravity`, `this.y`, and `this.velocity` (the wasp’s speed) to create a falling wasp. Try adding gravity in `this.show` in `wasp.js` and then use the `wasp.show()` in the the `draw()` function. **BONUS:** See if you can check if the wasp falls outside the canvas and stop the wasp from falling!

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>

<h4>wasp.js</h4><pre>
this.update = function() {
  <b>this.velocity += this.gravity;</b>
  <b>this.velocity += 0.2;</b>
  <b>this.y += this.velocity;</b>
}</pre>

</details>


### 2.3. **Add jump**
Now the wasp is just falling. It must be able to fly! Use the p5.js function named [keyPressed()](https://p5js.org/reference/#/p5/keyPressed) in `index.js`. Check if the space bar key is pressed, then call the `wasp.up()` function.

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>
<h4>index.js</h4><pre>
function keyPressed() {
  <b>if (key === " ") {
    wasp.up();
  }</b>
}</pre>
</details><br>

Nothing is happening when calling the `wasp.up()` function? We need to add some code to it! Go to `this.up()` in `wasp.js`. We must change the velocity of the wasp from going down to up.

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>
<h4>wasp.js</h4><pre>
this.up = function() {
  <b>this.velocity += this.lift;</b>
}</pre>
</details>

---


## 3. **Create pipes**
We want the wasp to move past obstacles, like the pipes in Flappy Bird.

### 3.1. **Show pipes**
We want to draw pipes both at the top and the bottom of the canvas. We can draw rectangles to the canvas by using p5.js's [rect()](https://p5js.org/reference/#/p5/rect) function. Add two rectangles to the `this.show()` function in `pipe.js`. 

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>

<h4>pipe.js</h4><pre>
this.show = function() {
  <b>fill(121, 85, 72);</b>
  <b>rect(this.x, 0, this.width, this.topPipeHeight);</b>
  <b>rect(this.x, CANVAS_HEIGHT - this.bottomPipeHeight, this.width, this.bottomPipeHeight);</b>
}</pre>

<h4>index.js</h4><pre>
function startGame() {
  <b>pipes = [];</b>
  <b>pipes.push(new Pipe());</b>
}<br>
function draw() {
  <b>pipe.show();</b>
}</pre>
</details>


### 3.2. **Add movement to pipes**

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>
<h4>pipe.js</h4><pre>
this.update = function() {
  <b>this.x -= this.speed;</b>
}</pre>
</details>

---


## 4. **Create score**
Of course we want to show off our score and here we will check if the wasp has passed a pipe and add a score.
Here we should add more logic in the for-loop in `index.js`, that goes through each pipe which we just did in the step above!

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>
<h4>index.js</h4><pre>
  <b>if (pipes[i].pass(wasp)) {</b>
    <b>score++;</b>
  <b>}</pre></b>
</details>

### 4.1 **Display score**
To display the score, which is plain text, we want to use p5 function's, such as `text()`. The text function takes the text, the score variable and the position - where you want to position it on the site. <br> Feel free to play around with the different function's but we will come a long way with text size and color.

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>

<h4>index.js</h4><pre>
function showScores() {
  <b>fill(000);</b>
  <b>textSize(32);</b>
  <b>text("Score: " + score, 1, 32);</b>
}</pre>

</details>

### 4.2 **Call the score function**
Do not forget to call the score function we just created in `index.js`. Call the function inside of the for-loop that goes through each pipe, without this step nothing will happen.

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>

<h4>index.js</h4><pre>
<b>showScores();</pre></b>

</details>

---


## 5. **Create presents**
We want something that the wasp can collect to get extra score. To make the game more christmas-y we can add christmas presents that randomly flies against us. But this time, compared to the pipes, we actually want to hit the presents to get extra score.
<br>
To start off with the presents we want to set up a show and a update function in `christmasPresent.js`. The `show()` will take the present variable, (which we have not declared yet), x, y, width and height.

### 5.1 **Show presents**
To use the present we want to create a global variable in `index.js` and also set the image using `image()` from p5 in the preload function. 


<details>
<summary><b>Cheatsheet: Check the code here</b></summary>

<h4>index.js</h4><pre>
<b>let presentImg;</b>
<b>presentImg = loadImage('present.png');</pre></b>

</details>


WIP: Loop through all presents 
<details>
<summary><b>Cheatsheet: Check the code here</b></summary>

<h4>index.js</h4><pre>
<b>for (let i = presents.length-1; i >= 0; i--) {</b>
<b> presents[i].show();</b>
<b> presents[i].update();</b>
<b> if (presents[i].hits(wasp)) {</b>
<b>   score += 3;</b>
<b>   presents.splice(i, 1);</b>
<b> }</b>
<b>}</b>
<b>reset() {</b>
<b> presents = [];</b>
<b> presents.push(new christmasPresent());</b>
<b>}</pre></b>

</details>

---


## 6. **More ideas**
- The game gradually increases in speed.
- Make start screen with the Expressen, Code Pub, or Netlight logo.


