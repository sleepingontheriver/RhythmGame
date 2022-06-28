const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


canvas.width = window.innerWidth
canvas.height = window.innerHeight

score = 0

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
        this.draw()
        if((Piano1.pressed == true)&&((parseFloat((canvas.height * 0.1)  - 11)) < parseFloat(this.y))&&(parseFloat(this.y) < ((parseFloat(canvas.height * 0.1)+11)))&&(this.x == Pos_1)){
            this.y = -50
            score += 100
            console.log("true!!")
            }
        
        if((Piano2.pressed == true)&&((parseFloat((canvas.height * 0.1)  - 11)) < parseFloat(this.y))&&(parseFloat(this.y) < ((parseFloat(canvas.height * 0.1)+11)))&&(this.x == Pos_2)){
            this.y = -50
            score += 100
            console.log("true!!")
            }
        if((Piano3.pressed == true)&&((parseFloat((canvas.height * 0.1)  - 11)) < parseFloat(this.y))&&(parseFloat(this.y) < ((parseFloat(canvas.height * 0.1)+11)))&&(this.x == Pos_3)){
            this.y = -50
            score += 100
            console.log("true!!")
            }
        if((Piano4.pressed == true)&&((parseFloat((canvas.height * 0.1)  - 11)) < parseFloat(this.y))&&(parseFloat(this.y) < ((parseFloat(canvas.height * 0.1)+11)))&&(this.x == Pos_4)){
            this.y = -50
            score += 100
            console.log("true!!")
            }

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

class game {
    constructor(bpm, Notes_per_beat){
        this.bpm = bpm
        this.time = 0
        this.rhythm = Notes_per_beat
    }
    start(){

    }
    update(){
       // this.time += 1
        //check for hitting object
    }
}



var Game1 = new game(180, 4)


const background = new Image()
background.src = "./Background.jpg"
background.onload = function(){
    c.drawImage(background,0,0);   
}
// const Game = new game(stuff)
//Updates each beat
// setInterval(game.update(), (60*game.rhythm/game.bpm))

const Pos_1 = canvas.width * (3/9)
const Pos_2 = canvas.width * (4/9)
const Pos_3 = canvas.width * (5/9)
const Pos_4 = canvas.width * (6/9)

let notes = {
    2 : Pos_1,
    5 : Pos_2,
    8 : Pos_3,
    12 : Pos_1,
    16 : Pos_4,
}


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
        function piano1false(){
            Piano1.pressed = false
        }
        setTimeout(piano1false, 50)
    }
    if(event.key == "w"){
        Piano2.pressed = true
        function piano2false(){
            Piano2.pressed = false
        }
        setTimeout(piano2false, 50)
    }
    if(event.key == "o"){
        Piano3.pressed = true
        function piano3false(){
            Piano3.pressed = false
        }
        setTimeout(piano3false, 50)
    }
    if(event.key == "p"){
        Piano4.pressed = true
        function piano3false(){
            Piano3.pressed = false
        }
        setTimeout(piano3false, 50)
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


tick = 0
note_objects = []
function Controller(){
    tick += 1
    for(i in notes){
        if(tick == i){
           //Trying to create a new object 
           var NewNote = new note(notes[tick], 4, 22, 'pink')
           note_objects.push(NewNote)
        }
    }
}
//60 * game.rhythm * (10**3) ) / game.bpm
setInterval(Controller,0.5 *(10**3))

function loop() {
    window.requestAnimationFrame(loop)
    c.clearRect(0,0, canvas.width, canvas.height)
    
    c.drawImage(background,0,0); 

    note_objects.forEach((x) =>{
        x.update()
    })

    TestNote.update()
    TestNote2.update()
    TestNote3.update()

    Piano1.draw()
    Piano2.draw()
    Piano3.draw()
    Piano4.draw()
}
window.requestAnimationFrame(loop)

function loop2(){
    c.clearRect(0,0, canvas.width, canvas.height)
    
    c.drawImage(background,0,0); 

    note_objects.forEach((x) =>{
        x.update()
    })

    console.log(note_objects)

    TestNote.update()
    TestNote2.update()
    TestNote3.update()
}

//setInterval(loop2, 20)