import Bootloader from './Bootloader.js';
import Scene1 from './scenes/Scene1.js';

const config = {
    title: 'Floodfill',
    type: Phaser.AUTO,
    backgroundColor: "#22a6b3",
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'container',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },
    
    pixelArt: true,
    scene: [
        Bootloader,
        Scene1
    ]
}

new Phaser.Game(config);

