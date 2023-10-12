(function(){
    const houseElem = document.querySelector('.house');
    let maxScrollValue;
    
    const resizeHandler = () => {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    };

    const barElem = document.querySelector('.progress-bar');
    
    window.addEventListener('scroll', (e) => {
        
        const scrollPer = scrollY  / maxScrollValue;
        const zMove = scrollPer * 970 - 490;
        
        houseElem.style.transform = `translateZ(${zMove}vw)`;

        // progress bar
        barElem.style.width = `${scrollPer * 100}%`;
    });

    const mousePos = {x: 0, y: 0};
    const stageElem = document.querySelector('.stage');
    window.addEventListener('mousemove', (e) => {
        mousePos.x = -1 + (e.clientX/window.innerWidth) * 2;
        mousePos.y = -1 + (e.clientY/window.innerHeight) * 2;
        stageElem.style.transform =
            `rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`;
    });

    window.addEventListener('resize', resizeHandler);

    resizeHandler();

})();