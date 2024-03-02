const FullscreenBtn = document.querySelector(".model-box span");

FullscreenBtn.addEventListener('click', () => {
    const canva = document.querySelector("canvas");

    if(canva.requestFullscreen){
        canva.requestFullscreen();
    } else if(canva.webkitRequestFullscreen){
        canva.webkitRequestFullscreen();
    } else if(canva.mozRequestFullscreen){
        canva.mozRequestFullscreen();
    } else if(canva.msRequestFullscreen){
        canva.msRequestFullscreen();
    }
});