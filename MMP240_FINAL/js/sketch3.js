var r = 0;

//size
var sz = 75;

function setup() {
	createCanvas(1280, 1500);

			}
			
        


    function draw(){

			

  //PI radians is 180 degrees
	if (r > PI)
	{
		background("black");
	}
	else
	{
		background("black");
	}

	translate(300, 300);

  fill("black");
  ellipse(0, 0, 10, 10);


	push();
	rotate(r);

	fill("magenta");
	noStroke();
	ellipse(0, 350, sz, sz);
	ellipse(450, 0, sz, sz);
	ellipse(0, 550, sz, sz);
    ellipse(650, 0, sz, sz);
    ellipse(0, 750, sz, sz);
    ellipse(850, 0, sz, sz);
    ellipse(0, 950, sz, sz);
    ellipse(1050, 0, sz, sz);
	pop();

	r += 0.01;

	if (r > TWO_PI) { r = 0.0; }
}
