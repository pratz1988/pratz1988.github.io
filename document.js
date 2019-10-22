//Creating a  MEMORY GAME for kids/////

//Get all the related links at one place

////// Design ///////

//// How do u want to design by using objects or classes,Arrays?
// One Object to store  back of the image (imgObj = { url: "img"})

//step1: displaying grid size (2*2),(3*3) (html buttons)
//step2: by default display 2*2 size
//Render all the 2 imahges for 2*2 & 
//Render 3 images for 3*2
//Render 4 images for 4*2
//Render 8 images for 4*4

//////AJAX API CALL///////

//The link gives you only one image for one AJAX call ,so run the loop based on grid size
//Store the data in an Array and use it to render on the page

////    Rendering back faces   ///////
//
//Render all the backfaces 1st of 4 images for 2*2, run loop for 4 times

/// Rendering all the front faces when On Click an event ////
// When ever there is an OnClick of current button The IMAGE should open,
// And when you click on 2nd button 2nd IMAGE should open 
// IF BOTH THE IMAGES WILL MATCH THEN THEY SHOULD STAY  OR  BOTH WILL FLIP TO BACK FACE
// IF THE IAMGES ALREADY MATCH THEY SHOULDN'T FLIP BACK AGAIN
 
//////  GAME RULES  repeate these 2 for the total game/////////
// 1.click on 1st image - it should flip , if you click again it, it shouldn't flip
// 2.click on 2nd image, it should flip & if both images match then they should stay otherwise , they will flip BACK again

//// MAINTAIN THE FLIP STATUS //////////
// 

// Table of Contents
// What is the memory game
// Requirements for the game
// Process / Flow
// 1. Shuffing Cards
// 2. Matching Cards
// 3. Moves
// 4. Star Rating
// 5. The Timer
// 6. Restart button
// 7. A Congratulations Modal
//8.conclusion
//  Add Carousel

//Next step build accordingly to the grid size