const fan = document.querySelector('.fan');
const container = document.querySelector('.container');
const button = document.querySelector('.button');
let activeButton = null;

const animationProperties = {
    0: {  duration: '0s' },
    1: {  duration: '0.1s' },
    2: {  duration: '0.02s' },
    3: {  duration: '0.01s' },
};

container.addEventListener('click', function(event){
    if(event.target.classList.contains('button')) {
        const triggerButton = Number(event.target.value);
        if(animationProperties[triggerButton]) {
            const { duration } = animationProperties[triggerButton];

            if(activeButton) {
                activeButton.classList.remove('active');
            }

            fan.style.animationName = "rotate";
            fan.style.animationDuration = duration;
            fan.style.animationIterationCount = "infinite";

            event.target.classList.add('active');
            activeButton = event.target
        }
    }
});