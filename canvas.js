const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


canvas.width = window.innerWidth
canvas.height = window.innerHeight


console.log(c)



class note {
    constructor(x, dy, radius, color){
        this.x = x
        this.radius = radius
        this.y = canvas.height + this.radius
        this.dy = dy
        this.color = color
    }
    draw(){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
    update(){
        this.y = this.y - this.dy
    }


}

class piano {
    constructor(x, button){
        this.x = x
        this.y = canvas.height * 0.1
        this.key = button
        this.pressed = false
    }
    draw(){
        c.beginPath()
        c.arc(this.x, this.y, 30, 0, Math.PI * 2, false)
        if(this.pressed){
            c.fillStyle = "red"
            c.fill()
        }
        else{
            c.strokeStyle = "red"
            c.stroke()
        }
    }
}



const Pos_1 = canvas.width * (3/9)
const Pos_2 = canvas.width * (4/9)
const Pos_3 = canvas.width * (5/9)
const Pos_4 = canvas.width * (6/9)


const TestNote = new note(Pos_2, 3, 20, 'pink')
const TestNote2 = new note(Pos_3, 2, 20, 'blue')
const TestNote3 = new note(Pos_1, 4, 20, 'orange')


var Piano1 = new piano(Pos_1, 'q')
var Piano2 = new piano(Pos_2, 'w')
var Piano3 = new piano(Pos_3, 'o')
var Piano4 = new piano(Pos_4, 'p')

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);


function keyDownHandler(event){
    if(event.key == "q"){
        Piano1.pressed = true
    }
    if(event.key == "w"){
        Piano2.pressed = true
    }
    if(event.key == "o"){
        Piano3.pressed = true
    }
    if(event.key == "p"){
        Piano4.pressed = true
    }
}

function keyUpHandler(event){
    if(event.key == "q"){
        Piano1.pressed = false
    }
    if(event.key == "w"){
        Piano2.pressed = false
    }
    if(event.key == "o"){
        Piano3.pressed = false
    }
    if(event.key == "p"){
        Piano4.pressed = false
    }
}

function loop() {
    
    window.requestAnimationFrame(loop)
    c.clearRect(0,0, canvas.width, canvas.height)
    TestNote.update()
    TestNote.draw()
    
    TestNote2.update()
    TestNote2.draw()

    TestNote3.update()
    TestNote3.draw()

    Piano1.draw()
    Piano2.draw()
    Piano3.draw()
    Piano4.draw()
}
window.requestAnimationFrame(loop)
  