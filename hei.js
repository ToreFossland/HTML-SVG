const xmlns = "http://www.w3.org/2000/svg";

let svg1 = document.createElementNS(xmlns, "svg");
svg1.setAttribute("height", window.innerHeight);
svg1.setAttribute("width",window.innerWidth);
// svg1.style.backgroundColor = "cyan";
svg1.id = "frame";
document.body.appendChild(svg1);


let mouse = {
    x: undefined,
    y: undefined
}

const maxRadius = 100;
//let minRadius = 30;

const colorArray = ['#ffaa33', '#fa2345', '#556775', '#44ff11', '#aa3445'];


// window.addEventListener('mousemove', (mouseevent) => {mouse.x = mouseevent.x; mouse.y = mouseevent.y; })
//
// window.addEventListener('resize', () => {
//         svg1.setAttribute("height", window.innerHeight);
//         svg1.setAttribute("width",window.innerWidth);
//         svg1.style.backgroundColor = "cyan";
//         document.body.appendChild(svg1);
//         //init();
//     }
// )


function Circle(x, y, dx, dy, radius, id) {
    this.x = x;
    this.y = y;
    console.log(this.y);
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.id = id;


    let circles = document.createElementNS(xmlns, "circle");
    circles.setAttribute("cx", this.x);
    circles.setAttribute("cy", this.y);
    circles.setAttribute("r", this.radius);
    circles.setAttribute('dx', this.dx);
    circles.setAttribute('dy', this.dy);
    circles.style.fill = this.color;
    circles.id = this.id;
    svg1.appendChild(circles);


    function draw(){

    }

    //Sto function før
    // this.update = () => {
    //     // if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
    //     //     this.dx = -this.dx;
    //     // }
    //     //
    //     // if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
    //     //     this.dy = -this.dy;
    //     // }
    //     console.log('hello');
    //     this.x += this.dx;
    //     this.y += this.dy;

        //     //Interactivity
        //
        //     if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
        //         if (this.radius < maxRadius) {
        //             this.radius += 3;
        //         }
        //     } else if (this.radius > this.minRadius) {
        //         this.radius -= 3;
        //     }
        //
        //     svg1.remove();
        //     svg1.appendChild(circles);
        // }
}

let circleArray = [];

let init = () => {
    for(let i = 0; i < 800; i++){
        let radius = Math.random() * 10 + 10;
        let x = Math.random() * (innerWidth - 2 * radius) + radius;
        let y = Math.random() * (innerHeight - 2 * radius) + radius;
        let dx = (Math.random() -0.5);
        let dy = (Math.random() -0.5);

        new Circle(x, y ,dx, dy, radius, i);
    }
}

let animate = () => {
    requestAnimationFrame(animate);
    for(let i = 0; i < 800; i++){
        let circle = svg1.getElementById(i);
        let foo = circle.getAttribute('cx');
        let bar = circle.getAttribute('cy');
        let dx = circle.getAttribute('dx');
        let dy = circle.getAttribute('dy');
        foo = parseFloat(foo); bar = parseFloat(bar); dx = parseFloat(dx); dy = parseFloat(dy);
        circle.setAttribute('cx', foo + dx);
        circle.setAttribute('cy', bar + dy);
    }
}

console.log(circleArray);

init();

animate();

