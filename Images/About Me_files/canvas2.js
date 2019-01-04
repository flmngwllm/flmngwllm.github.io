var canvas = document.querySelector('canvas')
    var c = canvas.getContext('2d')
    

    canvas.width = 1500;
    canvas.height = 1500;


    window.addEventListener("resize", function() {
        canvas.width = 1000;
        canvas.height = 1500;		
    });


/*
  Design
*/

function Moon(){

this.draw = function(){
c.beginPath();
c.arc(100, 75, 30, 0, Math.PI* 2, false)
c.strokeStyle = "blue";
c.stroke()
}

}


//function for rain
function Rain() {
    this.x = Math.random()* 2000
    this.y = Math.random()* 1500
    // assigning a random velocity 
    this.dx = (Math.random() - 0.5) * 20;
    this.dy = (Math.random() * 6) + 10
    this.rainWidth = (Math.random() * 1) + .3

    this.update = function(){
        if (this.y  + this.dy >= canvas.height - groundHeight) {
            this.y = Math.random() * 200

        }

        if (this.x  + this.dx >= canvas.width ) {
            this.x = Math.random() * 10

        }
        this.y += this.dy;
        this.x += this.dx;
        this.draw()

    }


// draw function for rain
this.draw = function(){

    
    c.save()
    c.beginPath()
    c.strokeStyle = "white"
    c.lineWidth = this.rainWidth
    c.moveTo(this.x, this.y )
    c.lineTo(this.x, this.y + this.dx - this.dy + .1)
    // c.lineCap = "round"
    c.stroke();
    c.restore()
}
}



    


// stars in the background
    function BackStar() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2;

        this.draw = function() {
            c.save();
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

            c.shadowColor = '#E3EAEF';
            c.shadowBlur = (Math.random() * 10) + 10;
            c.shadowOffsetX = 0;
            c.shadowOffsetY = 0;

            //color of stars
            c.fillStyle = "white";
            c.fill()

            c.closePath();	
            c.restore();
        }
    }



// *  Implementation


    
    var groundHeight = canvas.height  * 0.15;
    //coordinates for color gradient
    var backgroundGradient = c.createLinearGradient(0,0,0, canvas.height);
    backgroundGradient.addColorStop(0,"#171e26");
    backgroundGradient.addColorStop(1,"gray");
    
    // var moonGradient = c.createLinearGradient()
   

    var backStars = [];
    for (var i = 0; i < 26; i++) {
        backStars.push(new BackStar());
    }


    var rain = [];
    for ( var k = 0; i <1000; i++ ){
        rain.push(new Rain());
    }




    function animate() {
        window.requestAnimationFrame(animate);
        // background filling
        c.fillStyle = backgroundGradient;
        c.fillRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < backStars.length; i++) {
            backStars[i].draw();
        }

        c.fillStyle = "#182028";
        c.fillRect(0, canvas.height - groundHeight, canvas.width , groundHeight);

            
        
        

       
        
        for (var i = 0; i < rain.length; i++) {
            rain[i].update();

            if (rain[i] <= 0) {
                rain.splice(i, 1);
            }
        }
        
        c.beginPath();
        c.arc(200, 75, 200, 0, Math.PI* 2, false)
        c.fillStyle = "#f5f3ce";
        c.fill()

    }

    animate();


