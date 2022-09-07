const body = document.querySelector(".body");
const gameContainer = document.querySelector(".game__container");
const menuBoard = document.querySelector(".menuBoard");
const menuPlayBtn = document.querySelector(".menuPlayBtn");
const soundBtn = document.querySelector(".soundBtn");
const soundCloseBtn = document.querySelector(".soundCloseBtn");
const achievementBtn = document.querySelector(".achievementBtn");
const achievementContainer = document.querySelector(".achievementContainer");
const achievementbackBtn = document.querySelector(".achievementbackBtn");
const settingBtn = document.querySelector(".settingBtn");
const settingContainer =document.querySelector(".settingContainer");
const settingbackBtn = document.querySelector(".settingbackBtn");
const privacyAndPolicyBtn = document.querySelector(".privacyBtn");
const aboutBtn = document.querySelector(".aboutBtn");
const aboutBettingSlots = document.querySelector(".aboutBettingSlots");
const aboutBettingSlotsBackBtn = document.querySelector(".aboutBettingSlotsBackBtn");
const userAggrementBtn = document.querySelector(".userAggrementBtn");
const loadingBox = document.querySelector(".loadingBox");
const betBtn = document.querySelectorAll(".animalCircleImg");
const myValue = document.querySelectorAll(".myValue");
const maxValue = document.querySelectorAll(".maxValue");
const centerImg = document.querySelectorAll(".img");
const betCoins = document.querySelector(".betCoins");
const showWinOrLose = document.querySelector(".showWinOrLose");
const winCount = document.querySelector(".winCount");
const myOwnCoin = document.querySelector(".myOwnCoin");
const circle = document.querySelector(".circle");
let ss = document.getElementById("ss");
let countDown = document.querySelector(".countDown");
const clockTickAudio = document.querySelector(".clockTickAudio");
const mainBackgroundSound = document.querySelector(".mainBackgroundSound");
const coinDropAudio = document.querySelector(".coinDropAudio");
const backgroundSound = document.querySelector(".backgroundSound");
const bubbleClickSound = document.querySelector(".bubbleClick");
const startBtn = document.querySelector(".startBtn");
const restartBtn = document.querySelector(".restartBtn");
const removeBetBtn = document.querySelector(".removeBetBtn");
 const winOrLoseDiv = document.querySelector(".winOrLose");
const randomAnimal = document.querySelector(".randomAnimal");
const winningSound = document.querySelector(".winningSound");
const losingSound = document.querySelector(".losingSound");
const drawSound = document.querySelector(".drawSound");
const selectSound = document.querySelector(".selectSound");
const getCoinBtn = document.querySelector(".get-coin");
const profileBtn = document.querySelector(".profile");
const profileContainer = document.querySelector(".profileContainer");
const profilebackBtn = document.querySelector(".profilebackBtn")
const coinBoxBtn = document.querySelector(".coinBox");
const coinBoxBtn2 = document.querySelector(".coinBox2");
const showMenuCoin = document.querySelector(".showMenuCoin");
const showCoinInProfile = document.querySelector(".showCoinInProfile");
const winBgAnimation = document.querySelector(".winBgAnimation");
const leftLoseAnimation = document.querySelector(".leftLoseAnimation");
const rightLoseAnimation = document.querySelector(".rightLoseAnimation");
const winBackground = document.querySelector(".winBackground");
const quitBtn = document.querySelector(".quitBtn");
const wantToQuitBox = document.querySelector(".wantToQuit");
const cancleBth = document.querySelector(".cancleBth");
const yesBtn = document.querySelector(".yesBtn");
const menuLoading = document.querySelector(".menuLoading");
const switcher = document.querySelector("#switcher");
const warning = document.querySelector(".warning");
const okBtn = document.querySelector(".okBtn");
const outOfCoinWarning = document.querySelector(".outOfCoinWarning");
const okBtn2 = document.querySelector(".okBtn2");
const outOfCoinAnimation = document.querySelector(".outOfCoinAnimation");
const plusBtn = document.querySelector(".plusBtn");
const countText = document.querySelector(".countText");
const minusBtn = document.querySelector(".minusBtn");

const animalsBar = document.querySelector(".animalsBar");
let animalList = [];
let srcStart = "./assets/images/square-buttons/";

function renderAnimalList(animalsBar,animalList){
    cleanAniamlList();
    if(animalList.length > 10){
        for(let i = 0; i < 10; i++){
            const animal = animalList[i];
            const animalItem = generateAnimalImg(animal);
            animalsBar.appendChild(animalItem);
        }
    }else{
        for(let i = 0; i < animalList.length; i++){
            const animal = animalList[i];
            const animalItem = generateAnimalImg(animal);
            animalsBar.appendChild(animalItem);
        }
    }
}

function cleanAniamlList(){
    let animalsBar = document.querySelector(".animalsBar");
    while(animalsBar.firstChild){
        animalsBar.removeChild(animalsBar.firstChild);
    }
}

function generateAnimalImg(item){
    const img = document.createElement("img");
    img.src = `${srcStart}${item.srcEnd}`;
    return img;
}

function getImage(url){
    return new Promise(function(resolve,reject){
        var img = new Image();
        img.onload = function(){
            resolve(url);
        };
        img.onerror = function(){
            reject(url);
        };
        img.src = url;
    });
}

function gameContainerPreloader(){
    Promise.all([
        getImage("./assets/images/square-buttons/sea-bg.png"),
        getImage("https://media.giphy.com/media/IX2uM584KCRdecASGt/giphy.gif"),
        getImage("./assets/images/animation-gif/giphy.gif"),
        getImage("./assets/images/btn/play.png"),
        getImage("./assets/images/btn/cross.png"),
        getImage("./assets/images/round-buttons/dog.png"),
        getImage("./assets/images/round-buttons/monkey.png"),
        getImage("./assets/images/round-buttons/sheep.png"),
        getImage("./assets/images/round-buttons/elephant.png"),
        getImage("./assets/images/round-buttons/seahorse.png"),
        getImage("./assets/images/round-buttons/jellyfish.png"),
        getImage("./assets/images/round-buttons/dolphin.png"),
        getImage("./assets/images/round-buttons/shark.png"),
        getImage("./assets/images/square-buttons/bird.png"),
        getImage("./assets/images/round-buttons/whale.png"),
        getImage("./assets/images/round-buttons/sea.png"),
        getImage("./assets/images/round-buttons/land.png"),
        getImage("./assets/images/square-buttons/dog(top corner).png"),
        getImage("./assets/images/square-buttons/whale(top corner).png"),
        getImage("./assets/images/square-buttons/seahorse(right side).png"),
        getImage("./assets/images/square-buttons/jellyfish(top corner).png"),
        getImage("./assets/images/square-buttons/whale(right side).png"),
        getImage("./assets/images/square-buttons/dolphin(bottom).png"),
        getImage("./assets/images/square-buttons/shark(right side).png"),
        getImage("./assets/images/square-buttons/elephant(bottom).png"),
        getImage("./assets/images/round-buttons/birdCircle.png"),
        getImage("./assets/images/square-buttons/sheep(left side).png"),
        getImage("./assets/images/square-buttons/monkey(left side).png"),
        getImage("./assets/images/animation-gif/loseAnimation.gif"),
        getImage("./assets/images/animation-gif/dog.gif"),
        getImage("./assets/images/animation-gif/sheep.gif"),
        getImage("./assets/images/animation-gif/elephant.gif"),
        getImage("./assets/images/animation-gif/jellyfish.gif"),
        getImage("./assets/images/animation-gif/dolphin.gif"),
        getImage("./assets/images/animation-gif/shark.gif"),
        getImage("./assets/images/animation-gif/whale.gif"),
        getImage("./assets/images/animation-gif/monkey.gif"),
        getImage("./assets/images/animation-gif/seahorse.gif"),
        getImage("./assets/images/animation-gif/coinfalling.gif"),
        getImage("./assets/images/animation-gif/birdAnimation.png"),
        getImage("./assets/images/animation-gif/outOfCoin.gif"),
    ]).then(() => {
        gameContainer.style.display = "flex";
        menuBoard.style.display = "none";
        loadingBox.style.display = "none"; 
    })
}

function menuBoardPreloader(){
    Promise.all([
        getImage("./assets/images/menu-board/menuBoardBg.jpeg"),
        getImage("./assets/images/btn/coin1.png"),
        getImage("./assets/images/menu-board/sound.png"),
        getImage("./assets/images/menu-board/soundClose.png"),
        getImage("./assets/images/menu-board/victory.png"),
        getImage("./assets/images/menu-board/setting.png"),
        getImage("./assets/images/menu-board/sampleProfile.jpeg"),
        getImage("./assets/images/menu-board/play.png"),
        getImage("./assets/images/menu-board/logo.png"),
    ]).then(() => {
        menuLoading.style.display = "none";
        menuBoard.style.display = "flex";
    })
}

menuBoardPreloader();

    for(let i = 0; i < betBtn.length; i++){
        betBtn[i].addEventListener("click",function(){
            playCoinDrop();
            this.classList.add('animalBtnClickAnimation');
            setTimeout (()=>{
                this.classList.remove('animalBtnClickAnimation');
            },100) 
            if(betPermission === false){
                return ;
            }else{
                if(+myOwnCoin.firstChild.textContent > 0){
                    myValue[i].firstChild.textContent = +myValue[i].firstChild.textContent + 1;
                    myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent - 1;
                    showMenuCoin.textContent = +myOwnCoin.firstChild.textContent
                    showCoinInProfile.textContent = +myOwnCoin.firstChild.textContent
                    betCoins.firstChild.textContent = +betCoins.firstChild.textContent + 1;
                }
            }
        })
    }

let menuController = true;

function playClockTick(){
    clockTickAudio.play();
}
function endClockTick(){
    clockTickAudio.pause();
    clockTickAudio.currentTime = 0;
}
function playTimeCountdownStart(){
    backgroundSound.play(); 
}
function stopTimeCountdownStart(){
    backgroundSound.pause();
    backgroundSound.currentTime = 0;
}
function playCoinDrop(){
    coinDropAudio.play();
}
function playBackgroundSound(){
    mainBackgroundSound.play();
    mainBackgroundSound.loop = true;
}
function stopBackgroundSound(){
    mainBackgroundSound.pause();
    mainBackgroundSound.currentTime = 0;
}
function playBubbleSound(){
    bubbleClickSound.play();
}
function playWinningSound(){
    winningSound.play();
}
function stopWinningSound(){
    winningSound.pause();
    winningSound.currentTime = 0;
}
function playLosingSound(){
    losingSound.play();
}
function playDrawSound(){
    drawSound.play();
}
function playSelectSound(){
    selectSound.play();
}


menuPlayBtn.addEventListener("click",function(){
    playBubbleSound();
    playBackgroundSound();
    menuController = false;
    this.classList.add('menuBtnClickAnimation');
    setTimeout (()=>{
        this.classList.remove('menuBtnClickAnimation');
    },100)
    loadingBox.style.display = "flex";
    gameContainerPreloader();
})
soundBtn.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add('menuTopLeftBtnClickAnimation');
    setTimeout (()=>{
        this.classList.remove('menuTopLeftBtnClickAnimation');
        mainBackgroundSound.src = " ";
        backgroundSound.src = " ";
        clockTickAudio.src = " ";
        coinDropAudio.src = " ";
        bubbleClickSound.src = " ";
        winningSound.src = " ";
        losingSound.src = " ";
        selectSound.src = " ";
        soundBtn.style.display = "none";
        soundCloseBtn.style.display = "block";
        switcher.checked = true;
    },100)
})
soundCloseBtn.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add('menuTopLeftBtnClickAnimation');
    setTimeout (()=>{
        this.classList.remove('menuTopLeftBtnClickAnimation');
        mainBackgroundSound.src = "./assets/audio/mainBackgroundSound.mp3";
        backgroundSound.src = "./assets/audio/backgroundSound.wav";
        clockTickAudio.src = "./assets/audio/ClockTick.wav";
        coinDropAudio.src = "./assets/audio/CoinDrop.wav";
        bubbleClickSound.src = "./assets/audio/BubbleClick.mov";
        winningSound.src = "./assets/audio/winningSound.mov";
        losingSound.src = "./assets/audio/losingSound.wav";
        selectSound.src = "./assets/audio/selectSound.wav";
        soundBtn.style.display = "block";
        soundCloseBtn.style.display = "none";
        switcher.checked = false;
        playBackgroundSound();
    },100)
})
achievementBtn.addEventListener("click", function(){
    playBubbleSound();
    if(menuController == false){
        return ;
    }else{
        this.classList.add('menuTopLeftBtnClickAnimation');
        setTimeout (()=>{
            this.classList.remove('menuTopLeftBtnClickAnimation');
            menuBoard.style.display = "none";
            achievementContainer.style.display = "flex";
        },100)
    }
})
achievementbackBtn.addEventListener("click",function(){
    playBubbleSound();
    this.classList.add('zoomoutAnimate');
    setTimeout (()=>{
        this.classList.remove('zoomoutAnimate');
        menuBoard.style.display="flex";
        achievementContainer.style.display="none";
    },100)
});
settingBtn.addEventListener("click", function(){
    playBubbleSound();
    if(menuController == false){
        return ;
    }else{
        this.classList.add('menuTopLeftBtnClickAnimation');
        setTimeout (()=>{
            this.classList.remove('menuTopLeftBtnClickAnimation');
            menuBoard.style.display="none";
            settingContainer.style.display="flex";
        },100)
    }
})
settingbackBtn.addEventListener("click",function(){
    playBubbleSound();
    this.classList.add('zoomoutAnimate');
    setTimeout (()=>{
        this.classList.remove('zoomoutAnimate');
        menuBoard.style.display="flex";
        settingContainer.style.display="none";
    },100)
});

switcher.addEventListener("input", function () {
    playBubbleSound();
    if (switcher.checked) {
        mainBackgroundSound.src = " ";
        backgroundSound.src = " ";
    } else {
        mainBackgroundSound.src = "./assets/audio/mainBackgroundSound.mp3";
        backgroundSound.src = "./assets/audio/backgroundSound.wav";
        clockTickAudio.src = "./assets/audio/ClockTick.wav";
        coinDropAudio.src = "./assets/audio/CoinDrop.wav";
        bubbleClickSound.src = "./assets/audio/BubbleClick.mov";
        winningSound.src = "./assets/audio/winningSound.mov";
        losingSound.src = "./assets/audio/losingSound.wav";
        selectSound.src = "./assets/audio/selectSound.wav";
        soundBtn.style.display = "block";
        soundCloseBtn.style.display = "none";
        playBackgroundSound();
    }
})

window.onload = function () {
    slider = document.querySelector(".slider input");
    slider.oninput = function () {
        progressBar = document.querySelector(".slider progress");
        progressBar.value = slider.value;
        mainBackgroundSound.volume = slider.value / 100;
        backgroundSound.volume = slider.value / 100;
    }
}

privacyAndPolicyBtn.addEventListener("click",function(){
    playBubbleSound();
    this.classList.add('zoomoutAnimate');
    setTimeout (()=>{
        this.classList.remove('zoomoutAnimate');
    },100)
});
aboutBtn.addEventListener("click",function(){
    playBubbleSound();
    this.classList.add('zoomoutAnimate');
    setTimeout (()=>{
        this.classList.remove('zoomoutAnimate');
        settingContainer.style.display = "none";
        aboutBettingSlots.style.display = "flex";
    },100)
});
aboutBettingSlotsBackBtn.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add('zoomoutAnimate');
    setTimeout (()=>{
        this.classList.remove('zoomoutAnimate');
        aboutBettingSlots.style.display = "none";
        settingContainer.style.display = "flex";
    },100)
})
userAggrementBtn.addEventListener("click",function(){
    playBubbleSound();
    this.classList.add('zoomoutAnimate');
    setTimeout (()=>{
        this.classList.remove('zoomoutAnimate');
    },100)
});
profileBtn.addEventListener("click", function(){
    playBubbleSound();
    if(menuController == false){
        return ;
    }else{
        this.classList.add('zoomoutAnimate');
        setTimeout (()=>{
            this.classList.remove('zoomoutAnimate');
            menuBoard.style.display="none";
            profileContainer.style.display="flex";
        },100)
    }
})
profilebackBtn.addEventListener("click",function(){
    playBubbleSound();
    this.classList.add('zoomoutAnimate');
    setTimeout (()=>{
        this.classList.remove('zoomoutAnimate');
        menuBoard.style.display="flex";
        profileContainer.style.display="none";
    },100)
});
coinBoxBtn.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add('zoomoutAnimate');
    setTimeout (()=>{
        this.classList.remove('zoomoutAnimate');
    },100)
})
coinBoxBtn2.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add('zoomoutAnimate');
    setTimeout (()=>{
        this.classList.remove('zoomoutAnimate');
    },100)
})
getCoinBtn.addEventListener("click", function(){
    playCoinDrop();
    this.classList.add('zoomoutAnimate');
    setTimeout (()=>{
        this.classList.remove('zoomoutAnimate');
    },100)
})

quitBtn.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add('zoomoutAnimate');
    setTimeout (()=>{
        this.classList.remove('zoomoutAnimate');
        if(playPermission == false){
            return ;
        }else{
            wantToQuitBox.style.display = "flex";
            playPermission = false;
        }
    },100)
})
cancleBth.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add('zoomoutAnimate');
    setTimeout (()=>{
        this.classList.remove('zoomoutAnimate');
        wantToQuitBox.style.display = "none";
        playPermission = true;
    },100)
})
yesBtn.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add('zoomoutAnimate');
    setTimeout (()=>{
        this.classList.remove('zoomoutAnimate');
        wantToQuitBox.style.display = "none";
        playPermission = true;
        menuController = true;
        gameContainer.style.display = "none";
        menuBoard.style.display = "flex";
    },100)
})

okBtn.addEventListener("click", function () {
  playBubbleSound();
  playBackgroundSound();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
    playPermission = true;
    warning.style.display = "none";
  }, 100);
});
okBtn2.addEventListener("click", function () {
    playBubbleSound();
    playBackgroundSound();
    this.classList.add("zoomoutAnimate");
    setTimeout(() => {
      this.classList.remove("zoomoutAnimate");
      playPermission = true;
      outOfCoinWarning.style.display = "none";
    }, 100);
});
plusBtn.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add("zoomoutAnimate");
    setTimeout(() => {
      this.classList.remove("zoomoutAnimate");
      if(count == 60){
        plusBtn.style.background = "#dad7cd";
        disabled = true;
      }else{
        plusBtn.style.background = "linear-gradient(to bottom, #ffe600, #ff7b01)";
        minusBtn.style.background = "linear-gradient(to bottom, #ffe600, #ff7b01)";
        disabled = false;
        count = count + 5;
        countText.innerText = count;
      }
    }, 100);
});

minusBtn.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add("zoomoutAnimate");
    setTimeout(() => {
      this.classList.remove("zoomoutAnimate");
      if(count == 10){
        minusBtn.style.background = "#dad7cd";
        disabled = true;
      }else{
        plusBtn.style.background = "linear-gradient(to bottom, #ffe600, #ff7b01)";
        minusBtn.style.background = "linear-gradient(to bottom, #ffe600, #ff7b01)";
        disabled = false;
        count = count - 5;
        countText.innerText = count;
      }
    }, 100);
});

let count = 30;
countText.innerText = count;
let timerId = 0;
let betPermission = false;
let playPermission = true;

startBtn.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add('redBtnClickAnimation');
    setTimeout (()=>{
        this.classList.remove('redBtnClickAnimation');
    },100) 
    if(playPermission === false){
        return ;
    }else{
        playPermission = false;
        stopBackgroundSound();
        if(+myOwnCoin.firstChild.textContent === 0){
            outOfCoinWarning.style.display = "flex";
        }else{
            playTimeCountdownStart();
            circle.style.display = "block";
            if(timerId !== 0) return;

            timerId = setInterval(function(){
                count--;
                let s = count
                s = (s <10)? "0" + s : s;
                countDown.innerHTML = s;

                if(betPermission == false){
                    preAmount = +myOwnCoin.firstChild.textContent;
                }

                betPermission = true;
                if(count > 0 && count <= 5){
                    stopTimeCountdownStart();
                    playClockTick();
                    countDown.style.color = "rgb(253, 38, 38)";
                    ss.style.stroke = "rgb(253, 38, 38)";
                }
                if(count === 0){
                    countDown.innerHTML = "GO";
                    countDown.style.color = "orange";
                }
                if(count < 0){
                    countingEnd();
                    if(+betCoins.firstChild.textContent === 0){
                        warning.style.display = "flex";
                    }else{
                        gameIntervel = 0;
                    let random = getRandomInt(32);
                    animationCircle(null,100);
                    setTimeout(() => {
                        clearInterval(gameIntervel);
                        gameIntervel = 0;
                        animationCircle(null,200);
                    },3000)
                    setTimeout(() => {
                        clearInterval(gameIntervel);
                        gameIntervel = 0;
                        animationCircle(null,250);
                    },5000)
                    setTimeout(() => {
                        clearInterval(gameIntervel);
                        gameIntervel = 0;
                        animationCircle(null,300);
                    },6000)
                    setTimeout(() => {
                        clearInterval(gameIntervel);
                        gameIntervel = 0;
                        animationCircle(random,350);
                    },7000)
                    }
                }
                ss.style.strokeDashoffset = 440 - (440 * count) / 30;
            },1000)
        }
    }
});

function countingEnd(){
    clearInterval(timerId);
    timerId = 0;
    count = +countText.innerText;
    countDown.innerHTML = count;
    endClockTick()
    circle.style.display = "none"
    betPermission = false;
    ss.style.stroke = "orange";
    countDown.style.color = "orange";
};

removeBetBtn.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add('redBtnClickAnimation');
    setTimeout (()=>{
        this.classList.remove('redBtnClickAnimation');
    },100)
    if(betPermission === false){
        return ;
    }else{
        for(let i = 0; i < betBtn.length; i++){
            myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + +myValue[i].firstChild.textContent;
            showMenuCoin.textContent = +myOwnCoin.firstChild.textContent
            showCoinInProfile.textContent = +myOwnCoin.firstChild.textContent
        };
        for(let i = 0; i < betBtn.length; i++){
            myValue[i].firstChild.textContent = 0;
        };
        betCoins.firstChild.textContent = 0;
        countingEnd();
        stopTimeCountdownStart();
        playBackgroundSound();
        playPermission = true;
    }
});

function check(x){
    animalsBar.style.display = "block";
    if(x == 1 || x == 2 || x == 3){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[0].firstChild.textContent * 4);
        randomAnimal.style.display = "block";
        randomAnimal.src = "./assets/images/animation-gif/dog.gif";
        const animalItem = {srcEnd: "dog(top corner).png"};
        animalList.unshift(animalItem);
        renderAnimalList(animalsBar,animalList);
    }
    if(x == 29 || x == 30 || x == 31){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[1].firstChild.textContent * 6);
        randomAnimal.style.display = "block";
        randomAnimal.src = "./assets/images/animation-gif/monkey.gif";
        const animalItem = {srcEnd: "monkey(left side).png"};
        animalList.unshift(animalItem);
        renderAnimalList(animalsBar,animalList);
    }
    if(x == 25 || x == 26 || x == 27){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[2].firstChild.textContent * 12);
        randomAnimal.style.display = "block";
        randomAnimal.src = "./assets/images/animation-gif/sheep.gif";
        const animalItem = {srcEnd: "sheep(left side).png"};
        animalList.unshift(animalItem);
        renderAnimalList(animalsBar,animalList);
    }
    if(x == 21 || x == 22 || x == 23){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[3].firstChild.textContent * 24);
        randomAnimal.style.display = "block";
        randomAnimal.src = "./assets/images/animation-gif/elephant.gif";
        const animalItem = {srcEnd: "elephant(bottom).png"};
        animalList.unshift(animalItem);
        renderAnimalList(animalsBar,animalList);
    }
    if(x == 5 || x == 6 || x == 7){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[4].firstChild.textContent * 4);
        randomAnimal.style.display = "block";
        randomAnimal.src = "./assets/images/animation-gif/seahorse.gif";
        const animalItem = {srcEnd: "seahorse(right side).png"};
        animalList.unshift(animalItem);
        renderAnimalList(animalsBar,animalList);
    }
    if(x == 9 || x == 10 || x == 11){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[5].firstChild.textContent * 6);
        randomAnimal.style.display = "block";
        randomAnimal.src = "./assets/images/animation-gif/jellyfish.gif";
        const animalItem = {srcEnd: "jellyfish(top corner).png"};
        animalList.unshift(animalItem);
        renderAnimalList(animalsBar,animalList);
    }
    if(x == 13 || x == 14 || x == 15){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[6].firstChild.textContent * 12);
        randomAnimal.style.display = "block";
        randomAnimal.src = "./assets/images/animation-gif/dolphin.gif";
        const animalItem = {srcEnd: "dolphin(bottom).png"};
        animalList.unshift(animalItem);
        renderAnimalList(animalsBar,animalList);
    }
    if(x == 17 || x == 18 || x == 19){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[7].firstChild.textContent * 24);
        randomAnimal.style.display = "block";
        randomAnimal.src = "./assets/images/animation-gif/shark.gif";
        const animalItem = {srcEnd: "shark(right side).png"};
        animalList.unshift(animalItem);
        renderAnimalList(animalsBar,animalList);
    }
    if(x == 0 || x == 8 || x == 16 || x == 24){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[8].firstChild.textContent * 24);
        randomAnimal.style.display = "block";
        randomAnimal.src = "./assets/images/animation-gif/birdAnimation.png";
        const animalItem = {srcEnd: "bird.png"};
        animalList.unshift(animalItem);
        renderAnimalList(animalsBar,animalList);
    }
    if(x == 4 || x == 12 || x == 20 || x == 28){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[9].firstChild.textContent * 48);
        randomAnimal.style.display = "block";
        randomAnimal.src = "./assets/images/animation-gif/whale.gif";
        const animalItem = {srcEnd: "whale(left+bottom).png"};
        animalList.unshift(animalItem);
        renderAnimalList(animalsBar,animalList);
    }
    if(x == 5 || x == 6 || x == 7 || x == 9 || x == 10 || x == 11 || x == 13 || x == 14 || x == 15 || x == 17 || x == 18 || x == 19){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[10].firstChild.textContent * 2);
    }
    if(x == 1 || x == 2 || x == 3 || x == 21 || x == 22 || x == 23 || x == 25 || x == 26 || x == 27 || x == 29 || x == 30 || x == 31){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[11].firstChild.textContent * 2);
    }
    finalAmount = +myOwnCoin.firstChild.textContent;
    showMenuCoin.textContent = +myOwnCoin.firstChild.textContent;
    showCoinInProfile.textContent = +myOwnCoin.firstChild.textContent
}

function winOrLose(x,y){
    if(x > y || x === y){
        playWinningSound();
        showWinOrLose.textContent = "WIN";
        showWinOrLose.style.color = "greenyellow";
        winCount.firstChild.textContent = x - y;
        winCount.firstChild.style.color = "greenyellow";
        winBgAnimation.style.display = "block";
        winBackground.style.display = "block";
    }else{
        playLosingSound();
        showWinOrLose.textContent = "LOSE";
        showWinOrLose.style.color = "rgb(253, 38, 38)";
        winCount.firstChild.textContent = y - x;
        winCount.firstChild.style.color = "rgb(253, 38, 38)";
        rightLoseAnimation.style.display = "block";
        leftLoseAnimation.style.display = "block";
        loseInterval = setInterval(() => {
            if(!body.className.includes("loseBg")){
                body.classList.add("loseBg");
            }else{
                body.classList.remove("loseBg");
            }
        },400);
    }
}

function getRandomInt(num){
    return Math.floor((Math.random() * num)+1);
}

let gameIntervel = 0;
let i = 0;

function  animationCircle(random,speed){
    let number = random;
    if(gameIntervel !== 0){
        return ;
    }
    gameIntervel = setInterval(() => {
        if(i == 32){
            i = 0;
        }
        if(!centerImg[i].className.includes("animate")) {
            centerImg[i].classList.add("animate");
        }
        if(i > 0){
            centerImg[i-1].classList.remove("animate");
        }else{
            centerImg[31].classList.remove("animate");
        }
        i++;
        number--;
        if(number == 0){
            clearInterval(gameIntervel);
            let y = i - 1;
            check(y);

            setTimeout (()=>{
                playSelectSound();
                centerImg[i-1].classList.remove("animate");
                setTimeout (()=>{
                    playSelectSound();
                    centerImg[i-1].classList.add("animate");
                },200)
                setTimeout (()=>{
                    playSelectSound();
                    centerImg[i-1].classList.remove("animate");
                },400) 
                setTimeout (()=>{
                    playSelectSound();
                    centerImg[i-1].classList.add("animate");
                },600) 
                setTimeout (()=>{
                    playSelectSound();
                    centerImg[i-1].classList.remove("animate");
                },800) 
                setTimeout (()=>{
                    playSelectSound();
                    centerImg[i-1].classList.add("animate");
                },1000) 
                setTimeout (()=>{
                    playSelectSound();
                    centerImg[i-1].classList.remove("animate");
                },1200)
                setTimeout (()=>{
                    playSelectSound();
                    centerImg[i-1].classList.add("animate");
                },1400) 
                setTimeout (()=>{
                    playSelectSound();
                    centerImg[i-1].classList.remove("animate");
                },1600)  
            },500) 

            setTimeout (()=>{
                winOrLose(finalAmount,preAmount);
                setTimeout(() => {
                    randomAnimal.style.display = "none";
                    winBgAnimation.style.display = "none";
                    winBackground.style.display = "none";
                    rightLoseAnimation.style.display = "none";
                    leftLoseAnimation.style.display = "none";
                    clearInterval(loseInterval);
                    body.classList.remove("loseBg");
                    stopWinningSound();
                },10000)
            },2000)
            
            setTimeout(() => {
                for(let i = 0; i < betBtn.length; i++){
                    myValue[i].firstChild.textContent = 0;
                }
                betCoins.firstChild.textContent = 0;
                showWinOrLose.textContent = "WIN";
                showWinOrLose.style.color = "white";
                winCount.firstChild.textContent = 0;
                winCount.firstChild.style.color = "orange";
                playPermission = true;
                playBackgroundSound();
            },12500);

            setTimeout(() => {
                if(playPermission == true && +myOwnCoin.firstChild.textContent == 0){
                    outOfCoinAnimation.style.display = "block";
                }
            },13000);
        }
        playBubbleSound();
    }, speed);
 }