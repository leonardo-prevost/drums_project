document.body.addEventListener('keyup',(e)=>{
    playsound(e.code.toLocaleLowerCase());
});

document.querySelector('.composer button').addEventListener('click', ()=>{
    let input = document.querySelector('#input').value;

    if(input !== '') {
        let inputArray = input.split('');
        playComposition(inputArray);
    }
});


function playsound (sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key=${sound}]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        },300);
    }

}

function playComposition(inputArray) {
    let wait = 0;


    for(let songItem of inputArray){
        setTimeout(()=>{
            playsound(`key${songItem}`);
        },wait);

        wait += 250;
        
    }
}