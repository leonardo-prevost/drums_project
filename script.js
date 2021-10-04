document.body.addEventListener('keyup',(e)=>{
    playsound(e.code.toLocaleLowerCase());
});

function playsound (sound){
    let audioElement = document.querySelector(`#s_${sound}`);

    if(audioElement) {
        audioElement.play();
    }
}