# Pratz's memory game 

I built this memory game as part of my GA ( General Assembely ) SEI bootcamp. The objective of the project was to demonstrate the Jquery / java script / html / css knowledge by buidling a fully functional applicaiton. You need to match two cards at a time and finish matching all the cards to win the game. The app tracks the time taken to finish the game and also the number of moves taken to finish the game.

# Setup / Installation

Clone this git repo to get the source code behind git. Load index.html and play the game.
All the JS, CSS files are self explanatory and the game should work after you copy over the files to a locaiton.

# How to Play

The end goal of the game is to match all the cards in pairs and win the game.

 - First you select the grid size ( 2x2, 3x2, 4x2, 4x4 )
 - Start the game by clicking two cards - if the cards are a perfect match they will stay in the flipped state. If they are not, they will flip back.
 - Keep looking for matched cards
 - When you finish matching all the cards, you get a message 'Congrats, you did in x seconds, with a total of y moves. Well Done!'


# Tech behind this
The app is built in Jquery, HTML and CSS. It uses 'jquery.flip.min.js' library for flipping cards. For getitng the images, I am using a standard API ( http://www.splashbase.co/api/v1/images/random/)

# Future enhancements / Known issues

Enhancements
#1 - building an internal database / API for getting a known list of images and using that images for creating differnt sections of this game

#2 - add sounds to images so that Kids can learn the sounds along with the images


# About the author

prathyusha.jaddu@gmail.com
