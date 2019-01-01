var canvas = document.querySelector('canvas')
    var c = canvas.getContext('2d')

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;		
    });



// function Rain() {
//     this.x = Math.random()* window.innerWidth
//     this.y = Math.random()* 200
//     this.dx = 60
//     this.dy = 60


//     this.update = function(){
//         if (this.y  + this.dy >= canvas.height ) {
//             this.y = Math.random()* 200

//         }
//         this.y += this.dy
//         this.draw()

//     }
// this.draw = function(){
//     c.beginPath()
//     c.moveTo(this.x, this.y)
//     c.lineTo(this.x, this.y + this.dx +20)
//     c.strokeStyle = "green"
//     c.stroke();
// }
// }



   
    var groundHeight = canvas.height * 0.15;
    //coordinates for color gradient
    var backgroundGradient = c.createLinearGradient(0,0,0, canvas.height);
    backgroundGradient.addColorStop(0,"skyblue");
    backgroundGradient.addColorStop(1,"white");

    




    function animate() {
        window.requestAnimationFrame(animate);
        // background filling
        c.fillStyle = backgroundGradient;
        c.fillRect(0, 0, canvas.width, canvas.height);

   

        c.fillStyle = "#182028";
        c.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);



        // for (var i = 0; i < rain.length; i++) {
        //     if (rain[i].length <= 0) {
        //         rain.splice(i, 1);
        //     }
        // }

        
    }

    animate();