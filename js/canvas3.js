var canvas = document.querySelector('canvas')
    var c = canvas.getContext('2d')
    

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;	


    window.addEventListener("resize", function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;			
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


