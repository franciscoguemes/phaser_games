class Bootloader extends Phaser.Scene{
    constructor(){
        super('Bootloader');
    }

    preload(){
        console.log('Bootloader :D');
        this.load.path = './assets/';
        
        // this.load.image('logo_gamma', 'logo_gamma.png');

        /**
         * Boot here the assets
         */



        this.load.on('complete', () => {
            // const configFont = this.cache.json.get('fontJSON');
            // this.cache.bitmapFont.add('font', Phaser.GameObjects.RetroFont.Parse(this, configFont));    
            // this.scene.start('MainMenu');
        });

        console.log('You chose to play in the menu! :D');
        /**
         * Delete this line and load the MainMenu scene!
         */
        this.scene.start('Flood');
    }

    create(){
        // this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2, 'logo_gamma');
    }

    update(){

    }
}

export default Bootloader;