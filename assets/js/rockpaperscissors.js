// AGE IN DAYS

function ageInDays() {
    let birthYear = prompt("What year were you born? ");
    let ageInDayss = (2021 - birthYear) * 365; 
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageInDayss + ' ' + 'days old!');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}


function reset() {
    // reset button function
    document.getElementById('ageInDays').remove();
    location.reload();
}

//##########################################################################
// CAT GENERATOR API
function generateCat() {
    let image = document.createElement('img');
    let div =  document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&isze=small"
    div.appendChild(image)
}


function resetCat() {
    document.getElementById('flex-cat-gen').remove();
    location.reload();
}
//##########################################################################

// ROCK, PAPER, SCISSORS
function rpsGame(yourChoice) {
    //console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id
    botChoice = numberToChoice(randToRpsInt());
    //console.log('Computer choice:', botChoice);
    results = decideWinner(humanChoice, botChoice); // return array [0, 1] human lost | bot won
    //console.log(results);
    message = finalMessage(results); // return something like 'You won!'
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        //If you pick rock and the computer picks scissors: you get 1 point.
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        //If you pic paper and bot picks rock, you get 1 point
        'paper': {'rock': 1, 'paper': 0.5, 'scissors':0},
        //If you pic scissors and bot picks paper, you get 1 point
        'scissors': {'paper':1, 'scissors': 0.5, 'rock': 0}
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    }   else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': '#5E33FF'};
    }   else {
        return {'message': 'You won!', 'color': 'green'};
    }

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    // Remove all images when clicked
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // Divs
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=250 width=250 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=250 width=250 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
}   


function resetRps() {
    document.getElementById('flex-box-rps-div').remove();
    location.reload();
}
//##########################################################################

// CHANGE COLOR OF ALL BUTTONS
let all_buttons = document.getElementsByTagName('button');
//console.log(all_buttons);

let copyAllButtons = []
for (let i=0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]); //classlist shows the classes ex: btn btn-primary
}

function buttonColorChange(buttonChanger) {
    //console.log(buttonChanger.value)
    if (buttonChanger.value === 'red') {   //value from the html code for each button
        buttonsRed();
    } else if (buttonChanger.value === 'green') {
        buttonsGreen();
    } else if (buttonChanger.value === 'reset') {
        buttonColorReset();
    } else if (buttonChanger.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i=0; i < all_buttons.length; i++) {
        //.classList tells you how many classes you have: example, your array has the btn-primary class, the btn-success class, etc.
        all_buttons[i].classList.remove(all_buttons[i].classList[1]); //remove lets you remove the styling from the class
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    let choices = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];

    for (let i=0; i < all_buttons.length; i++) {
        let randomNumber = Math.floor(Math.random() * choices.length);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

//##########################################################################
// RANDOM NUMBER SELECTOR
function randomNumber() {
    let askMin = prompt("What is the lowest number that you want your random number to be? ");
    let min = Math.ceil(askMin);
    let askMax = prompt("Enter the maximum number for your random number.");
    let max = Math.floor(askMax);
    let getRandom = Math.floor(Math.random() * (max - min)) + min;
    let h1 = document.createElement('h1');
    let selectedNum = document.createTextNode("Your random number is " + getRandom + '!');
    h1.setAttribute('id', 'getRandom');
    h1.appendChild(selectedNum);
    document.getElementById('flex-box-rand-result').appendChild(h1);
}

function resetRandom() {
    document.getElementById('getRandom').remove();
    location.reload();
}


//##########################################################################
//RANDOM CHOICE PICKER (FOR PHRASES, NUMBERS, ETC.)
const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 40

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}




//##########################################################################
// BLACKJACK
let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div':'#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div':'#dealer-box', 'score': 0},
    'cards': ['2','3','4','5','6','7','8','9','10','K','Q','J','A',],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'Q': 10, 'J': 10, 'A': [1, 11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
    
    //this will talk to the cards object above
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');




buttonConnector('#blackjack-hit-button', 'click', blackjackHit);
buttonConnector('#blackjack-stand-button', 'click', dealerLogic);
buttonConnector('#blackjack-deal-button', 'click', blackjackDeal);
//document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
//document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
//document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);


function buttonConnector(id, eventType, func) {
    document.querySelector(id).addEventListener(eventType, func);
}


function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
        let card = randomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
};

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
};

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
};

function blackjackDeal() {
    if (blackjackGame['turnsOver'] === true) {

        blackjackGame['isStand'] = false;
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        for (i=0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }

        for (i=0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }
        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = '#ffffff';
        document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';

        document.querySelector('#blackjack-result').textContent = "Let's play";
        document.querySelector('#blackjack-result').style.color = "black";

        blackjackGame['turnsOver'] = true;
    } 
};

function updateScore(card, activePlayer) {
    if (card === 'A') {
    // If adding 11 keeps player under 21, add 11. Else add 1.
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
};

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }  
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    blackjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
    
    
};




// compute winner and return who just won
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        //condition: higher score than dealer or when dealer busts 
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            blackjackGame['wins']++;
            winner = YOU;

        } else if(YOU['score'] < DEALER['score']) {
            blackjackGame['wins']++;
            winner = DEALER;

        } else if (YOU['score'] === DEALER['score']) {
            blackjackGame['draws']++;
        }
    // when user busts but dealer doesn't bust
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackjackGame['losses']++;
        winner = DEALER;

    // both the user and dealer bust    
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draws']++;
    }
    return winner;
}   

function showResult(winner) {
    let message, messageColor;
    if (blackjackGame['turnsOver'] === true) {

        if (winner === YOU) {
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You Won!';
            messageColor = 'green';
            winSound.play();

        } else if (winner === DEALER) {
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You Lost!';
            messageColor = 'red';
            lossSound.play();

        } else {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You Drew!';
            messageColor = 'black';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
};