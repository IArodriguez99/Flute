const soundBtn = document.querySelector('.play-sound-btn');
let myAudio = document.querySelector("#audio");

soundBtn.addEventListener('click' , () => {
    
    if (myAudio.paused) {
        myAudio.play();
    } else {
        myAudio.pause();
    };
})



