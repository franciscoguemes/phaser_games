# Introduction:

This repository is a collection of games all developed by me. In this collection of games I will try to reproduce classical 2D arcade games from the 80s with some other newer 2D games.

The games will be added to my personal website www.franciscoguemes.com where you will be able to play them directly.


***

# Installation and running instructions:
 1. It is necessary to do in the terminal (in the parent directory of the lesson) "npm init -y" to start the repository 
        in the lesson. This generates the file package.json that keeps track of the JS packages installed by NPM.

2. Download Phaser: Open the terminal (in the parent directory of the lesson) and type "npm install --save phaser". This
        downloads and install phaser, now you will see that in the file package.json in the dependencies section, the
        packet "phaser" has been added. This command also creates a folder called node_modules that contains phaser3 and all necessary JS dependencies for the game to work. All videogames in this collection depends on this folder for working.

3. It is recommendable to install VS Code and the plugin "live server". You will need to open this repository with VS Code and start the plugin "live server". Then go to your browser and enjoy the games.

***

# Technical notes:

## .gitignore
A ".gitignore" file based on the github template "Node" has been added to the repository therefore all the files
        created with npm are not stored in the code repository. This makes the repository cleaner and more efficient.

## VS CODE Intellisense for Phaser3

In order to activate the intellisense download the file [phaser.d.ts](https://github.com/photonstorm/phaser/blob/master/types/phaser.d.ts) and copy it in the folder /def. Then create in the root folder a file called jsconfig.json and leave it empty. Original source [here](https://www.html5gamedevs.com/topic/27418-visual-studio-code-intellisense-for-phaserjs/)

Anohter way to activate the intellisense in VS Code is to watch the following [video from jest array](https://www.youtube.com/watch?list=PLitFP8FdScfHcJQ-kDmm0i6aOhinVO7ND&time_continue=2&v=wDOym-mXxO4&feature=emb_logoD)