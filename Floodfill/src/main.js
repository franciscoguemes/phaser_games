import Bootloader from './Bootloader.js';
import MainMenu from './scenes/MainMenu.js';
import Flood from './scenes/Flood.js';

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
        MainMenu,
        Flood
    ]
}

new Phaser.Game(config);

