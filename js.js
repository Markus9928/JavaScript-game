class Tile {
 
    constructor() {}
    

    addinfo(xpos, ypos,number,ctx,img){
        this.number = number; //Number used to identify the piece
        this.xpos = xpos; // Current Position in the array
        this.ypos = ypos; // Current Position in the array
        this.ctx = ctx; //Context for drawing on the Canvas
        this.img = img; //Img to be used
        this.picxpos=xpos;
        this.picypos=ypos;
        console.log(number+" "+ ypos +" "+ xpos);  
    }
    setUp(){
        if(this.number==0){
            this.ctx.rect(this.xpos,this.ypos,300,300);
        }
        else{
            //draw picture part
            
            this.ctx.drawImage(this.img,this.picxpos*300,this.picypos*300,300,300,this.xpos*300,this.ypos*300,300,300);
            this.ctx.rect(this.picxpos*300,this.picypos*300,300,300);
            this.ctx.stroke();
        }

    }
    setPosition(xpos,ypos){
        this.xpos=xpos;
        this.ypos=ypos;
    }
    
  }


function createTiles(){
    let tiles = new Array();
    var counter=0;
    var ctx = document.getElementById("canvas").getContext("2d");
    var img = document.getElementById("img");
    for(var i=0;i<3;++i){
        for(var j=0;j<3;j++){
            var temp = new Tile();
            temp.addinfo(i,j,counter, ctx,img);
            temp.setUp();
            tiles.push(temp); 
            
            
            ++counter;
           
        }
    }
    scramble(tiles);
}
function scramble(tiles){
    for(var i=0;i<9;++i){
        
        tiles[i].setPosition()
    }

}