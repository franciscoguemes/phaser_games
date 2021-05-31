
const black = 0x000000;
const yellow = 0xffff00;
const purple = 0xff00ff;

class Flood extends Phaser.Scene{
    constructor(){
        super({key: 'Flood'});

        // this.allowClick = true;

        this.moves = 25;

        this.frames = [ 'blue', 'green', 'grey', 'purple', 'red', 'yellow' ];

    }

    preload(){
        console.log('Scene: Flood');
    }

    create(){

        this.drawBoard();

        console.log('width: ' + this.scale.width);
        console.log('height: ' + this.scale.height);

        console.log('width: ' + this.sys.game.canvas.width);
        console.log('height: ' + this.sys.game.canvas.height);

        // var rect = new Phaser.Geom.Rectangle(this, 50, 50, 400, 400);

        // var graphics = this.add.graphics({ fillStyle: { color: 0xd35400 } });

        // graphics.fillRectShape(rect);

        // graphics.setInteractive(rect, event);


        // this.add.image(400, 300, 'flood', 'background');
        // this.gridBG = this.add.image(400, 600 + 300, 'flood', 'grid');

        // this.createIcon(this.icon1, 'grey', 16, 156);
        // this.createIcon(this.icon2, 'red', 16, 312);
        // this.createIcon(this.icon3, 'green', 16, 458);
        // this.createIcon(this.icon4, 'yellow', 688, 156);
        // this.createIcon(this.icon5, 'blue', 688, 312);
        // this.createIcon(this.icon6, 'purple', 688, 458);

        // this.cursor = this.add.image(16, 156, 'flood', 'cursor-over').setOrigin(0).setVisible(false);

    }

    /**
     * https://www.html5gamedevs.com/topic/38018-interactive-rectangle-fill/
     * https://labs.phaser.io/edit.html?src=src/game%20objects%5Cgraphics%5Cfill%20rounded%20rectangle.js
     */
    drawBoard(){

        let graphics = this.add.graphics();

        graphics.fillStyle(black, 1);
        var rect = new Phaser.Geom.Rectangle(50, 50, 400, 400);
        graphics.fillRectShape(rect);
        graphics.setInteractive(rect, this.event);

        // graphics.fillRect(0,0,500,500);



        graphics.fillStyle(yellow, 1);
    
        //  32px radius on the corners
        graphics.fillRoundedRect(32, 32, 300, 200, 32);
    
        graphics.fillStyle(purple, 1);
    
        //  Using an object to define a different radius per corner
        graphics.fillRoundedRect(360, 240, 400, 300, { tl: 64, tr: 22, bl: 12, br: 0 });

    }

    event() {
        console.log('over');
    }

    update(){

    }

}

export default Flood;