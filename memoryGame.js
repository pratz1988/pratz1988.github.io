////  JQuery Onload Function //////
$(() => {
    let count = 1, i = 0, j = 1, count1 = 0, moves = 0, gridSize1 = 0, gridSize2=0, callCondtion=1;
    let matchDivId = "", imageUrl = ""; 
    let compareGridSize = [],imagesArray = [], matchArray = [], divIdArray = [], shuffleImagesArray = [];
    let nowTime, second = 0, totalMatches = 0, totalCards=0;

    //// Moves SpanClass ////
    let $moves = $('.moves');
    let $timer = $('.timer');

    // Object for back image
    var backImage = {
        url : "question-mark-vector-icon.jpg"
        // url: "background.png"
    }

// called function for getting API data
const getImage = (response) => {
    // console.log(data);
        imagesArray.push(response.url);
        imagesArray.push(response.url);
        // imagesArray.push(response.data.images.downsized_large.url); 
        // pushing  duplicate image into an array
        // imagesArray.push(response.data.images.downsized_large.url); 
        console.log(imagesArray);
  
}
// AJAX Call external API 
const ajaxCall = (gridSize) => {
    for(let i=0; i<gridSize; i++){
        $.ajax({
            url: 'http://www.splashbase.co/api/v1/images/random'   
            // url: 'http://api.giphy.com/v1/gifs/random?api_key=cFAep3nZo1HwaaIyl5dL8fN7sMmqg57m'
            
            }).then(getImage)      
    }
}
//Shuffling (function) the images in array 
const  shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // console.log("array before ..."+array.length);
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    // console.log("array after ..."+array.length);
    return array;
}

// Event Listener to render images based on grid size
const init = () => {
    alert('click on any button to start the game');
    
    $('.grid').on('click',(event) => {
        
    //// Get The Grid Size 
    const gridValue = $(event.currentTarget).text();  
    const size = gridValue.split('');  
    gridSize1 = parseInt(size[0],10);
    gridSize2 = parseInt(size[2],10);
    // console.log("gridSize....."+gridSize1*gridSize2);

    // comparimg grid sizes if you want to change the grid size if you already clicked another grid size
    compareGridSize.push(gridSize1*gridSize2);
    if( compareGridSize.length >= 2 ) {
        console.log(compareGridSize.length);
        if(compareGridSize[0] != compareGridSize[1])
        {
            alert("plese click reload page button if you want to change the grid size");
        }
        compareGridSize.length = 0;
    }

    let gridSize = gridSize1*gridSize2/2;
    // calling ajaxCall function
    if(callCondtion <= 1){ //calls only one time
        ajaxCall(gridSize); 
        callCondtion++;
    }
    if(imagesArray.length < gridSize1*gridSize2) {
        alert('click the button again & plz wait the data is loading from external api');
    }
    //Calling ShuffleImage function
    if(imagesArray.length >= gridSize1*gridSize2){ 
        shuffleImagesArray = shuffle(imagesArray);
    }

       //////  Grid alignment //////////
       if( shuffleImagesArray.length == gridSize1*gridSize2 ) {
        // alert('Now you can press grid size');
        for(let i=0; i<shuffleImagesArray.length; i++){
            const $img2 = $('<img>').addClass('front');
            const $img = $('<img>').addClass('back');
            const $div = $('<div>').attr('id','flipImage'+i).addClass('flipDiv');  
        
            // Adding width property to the cardContainer and  the div holding images    
            const $deckId = $("#cardContainer");
            if(gridValue === "2*2"){      
                $deckId.addClass("container-2*2");
                $div.addClass("divFlip-2-2");
            }
            else if(gridValue === "3*2"){      
                $deckId.addClass("container-3*2");
                $div.addClass("divFlip-3-2");
            }
            else if(gridValue === "4*2"){      
                $deckId.addClass("container-4*2");
                $div.addClass("divFlip-4-2");
            }
            else if(gridValue === "4*4"){      
                $deckId.addClass("container-4*4");
                $div.addClass("divFlip-4-4");
            }

                // appending images to the div         
                $img.attr('src',imagesArray[i]);
                $img2.attr('src',backImage.url);
                $div.append($img2);
                $div.append($img);  
                $('#cardContainer').css('outline', '5px solid rgba(23, 27, 158, 0.7)'); 
                $('#cardContainer').append($div);             
                  
    }  //  for loop ends here
   // Enables the timer to reset to 0 when the game is restarted
//   resetTimer(nowTime);
  initTime();
}       // If ends here
 
//////// FLIPPING Card function ///////////
    for(let i=0; i<gridSize*2; i++){
        $(function($) {                
            //// card flip //////
            $('#flipImage'+i).flip();
            // $(`#${divId}`).flip(); 
            const id = '#flipImage'+i;
       
    });
}   
    matchFunction();
}); /// Button click function close here 
}
init(); //Deck arranging function calling

//// Finding Match cards Match Function  with (flip:done) event Listener////
const matchFunction = () => {
    $(".flipDiv").on('flip:done',function(event)
    {

    const imageUrl = $(event.currentTarget).children().eq(1).attr('src');
    const matchDivId = $(event.currentTarget).attr('id');
    console.log(($(event.currentTarget).attr('id'))+" "+imageUrl);
    
        /// checking flip  status //////
        var flip = $(`#${matchDivId}`).data("flip-model");
        console.log(flip.isFlipped);

            if(flip.isFlipped === true)
            {  
                matchArray.push(imageUrl);
                divIdArray.push(matchDivId);
               
                let spanMove = $('.moves');
                if(matchArray.length >= 2) 
                {
                    console.log("length.."+matchArray.length);
                    if(matchArray[0] === matchArray[1])
                    {
                        // console.log("Matched");
                        // If both flipped cards matched then stay the cards, don't flip again when click
                        $(`#${divIdArray[0]}`).off(".flip"); 
                        $(`#${divIdArray[1]}`).off(".flip");
                        // Counting no of moves and adding no of moves to the span
                        moves++;
                        $moves.text(moves);
                        totalMatches++;
                        //This is to reet the timer by checking totalCards 
                        totalCards = imagesArray.length/2 ; 
                        if(totalCards == totalMatches){
                            resetTimer(nowTime);
                            alert(`Congrats, You did in ${second} seconds, with a total of ${moves} moves. Well done!`);
                        }
                    }
                    else{
                        // console.log("not matched");
                        // If both flipped cards are not matched flip them over
                        $(`#${divIdArray[0]}`).flip(false);
                        $(`#${divIdArray[1]}`).flip(false);
                        // Counting no of moves and adding no of moves to the span
                        moves++;
                        $moves.text(moves);
                    }
                }
                    if(divIdArray.length >= 2){
                        divIdArray.length = 0;
                        matchArray.length = 0;
                    }
            }
    }); // (flip:done) function closes here 
  } // matchFunction Close

    // Function to reload page 
    $('.reset').on('click', function(event) {
            location.reload(true);
    })

  // Initiates the timer as soon as the game is loaded
    function initTime() {
        nowTime = setInterval(function () {
            $timer.text(`${second}`)
            second = second + 1
        }, 1000);
    }

   // Resets the timer when the game ends or is restarted
    function resetTimer(timer) {
        if (timer) {
            clearInterval(timer);
        }
}

});//// Onload function close
  
    