class Character {

    scrollState = false;

    orgScrollY = 0;

    speed = 1;

    runningState = true;

    constructor(x, y){
        this.direction = "";
        this.x = x * 100;
        this.speed = Math.random() * 0.7 + 0.2;
        this.init();
        console.log(x);
    }

    init() {
        this.mainElem = document.createElement('div');
        this.mainElem.classList.add('character');
        this.mainElem.innerHTML =
        `
            <div class="character-face-con character-head">
                <div class="character-face character-head-face face-front"></div>
                <div class="character-face character-head-face face-back"></div>
            </div>
            <div class="character-face-con character-torso">
                <div class="character-face character-torso-face face-front"></div>
                <div class="character-face character-torso-face face-back"></div>
            </div>
            <div class="character-face-con character-arm character-arm-right">
                <div class="character-face character-arm-face face-front"></div>
                <div class="character-face character-arm-face face-back"></div>
            </div>
            <div class="character-face-con character-arm character-arm-left">
                <div class="character-face character-arm-face face-front"></div>
                <div class="character-face character-arm-face face-back"></div>
            </div>
            <div class="character-face-con character-leg character-leg-right">
                <div class="character-face character-leg-face face-front"></div>
                <div class="character-face character-leg-face face-back"></div>
            </div>
            <div class="character-face-con character-leg character-leg-left">
                <div class="character-face character-leg-face face-front"></div>
                <div class="character-face character-leg-face face-back"></div>
            </div>
        `;
        
        const stageElem = document.querySelector('.stage');
        stageElem.appendChild(this.mainElem);
        this.wallFix(this);
        this.mainElem.style.left = `${this.x - 5}%`;

        window.addEventListener('scroll', (e) => {
            clearTimeout(this.scrollState);
            if(!this.scrollState){
                this.mainElem.classList.add('running');
            }
            this.scrollState = setTimeout(() => {
                this.scrollState = false;
                this.mainElem.classList.remove('running');
            }, 500);
            
            if(scrollY - this.orgScrollY >= 0){
                this.mainElem.dataset.direction = 'forward';
            }else{
                this.mainElem.dataset.direction = 'backward';
            }

            this.orgScrollY = scrollY;
        });
        

        // window.addEventListener('scrollend', (e) => {
        //     if(this.mainElem.classList.contains('running'))this.mainElem.classList.remove('running');
        // });

        window.addEventListener('keydown', (e) => {
            if(!this.runningState) return;            
            if(e.key == 'ArrowLeft'){
                this.direction = 'left';
                this.mainElem.dataset.direction = 'left';
                this.mainElem.classList.add('running');
                this.run(this);
                this.runningState = false;
            }

            if(e.key == 'ArrowRight'){
                this.direction = 'right';
                this.mainElem.dataset.direction = 'right';
                this.mainElem.classList.add('running');
                this.run(this);
                this.runningState = false;
            }

        });

        window.addEventListener('keyup', (e) => {
            if(this.mainElem.classList.contains('running')){
                this.mainElem.classList.remove('running');
                cancelAnimationFrame(this.rafId);
                this.runningState = true;
            }
        });
    }
    run(self) {
        console.log(self);
        if(self.direction == 'left'){
            self.x -= self.speed;
        }else if(self.direction == 'right'){
            self.x += self.speed;            
        }

        self.wallFix(self);

        self.mainElem.style.left = `${self.x  - 5}%`;

        self.rafId = requestAnimationFrame(() => self.run(self));
    }
    wallFix(self){
        if(self.x < 9)self.x = 9;
        if(self.x > 90)self.x = 90;
    }

}