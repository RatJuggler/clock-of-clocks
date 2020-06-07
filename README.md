# clock-of-clocks
It's a clock, but sort of made up of clocks. You can see it running [here](https://ratjuggler.github.io/clock-of-clocks/src/index.html).

I used [p5.js](https://p5js.org/) which is great for playing round with 2D graphics on the HTML 
[`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element.

I've got a mechanism for displaying the time using the outlines of digits as well as some predefined patterns and random movements,
but transitioning between the different effects still feels a bit clunky.

Something I've not seen talked about with these displays are that in reality the hand movements and positions used to create the 
digit outlines / patterns would not be possible on a normal clock. The hands always move independently to exact positions. For 
example, for a top right-hand corner using a quarter to six (05:45), the minute had will be pointing straight left directly at 
nine, but on a normal clock the hour hand will be pointing slightly to the right of six (to minute 29) and not straight down (to 
minute 30). It might be interesting at some point to produce another version which only uses real clock movements and positions.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/RatJuggler/clock-of-clocks/master/clock-of-clocks.png)
