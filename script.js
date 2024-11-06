document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animOne');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('animate__flip');
    } else {
        targetBlock.classList.remove('animate__flip');
    }
});
document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animTwo');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('animate__tada');
    } else {
        targetBlock.classList.remove('animate__tada');
    }
});
document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animThree');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('animate__rubberBand');
    } else {
        targetBlock.classList.remove('animate__rubberBand');
    }
});
document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animFour');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('animate__rollIn');
    } else {
        targetBlock.classList.remove('animate__rollIn');
    }
});
document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animFive');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('animate__heartBeat');
    } else {
        targetBlock.classList.remove('animate__heartBeat');
    }
});
document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animSix');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('animate__bounce');
    } else {
        targetBlock.classList.remove('animate__bounce');
    }
});
document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animSeven');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('animate__flash');
    } else {
        targetBlock.classList.remove('animate__flash');
    }
});
document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animEight');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('animate__lightSpeedInRight');
    } else {
        targetBlock.classList.remove('animate__lightSpeedInRight');
    }
});
document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animNine');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('animate__zoomInDown');
    } else {
        targetBlock.classList.remove('animate__zoomInDown');
    }
});
document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animTen');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('animate__zoomInRight');
    } else {
        targetBlock.classList.remove('animate__zoomInRight');
    }
});
document.addEventListener('scroll', function() {
    const targetBlock = document.getElementById('animEleven');
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (blockPosition < windowHeight && blockPosition > 0) {
        targetBlock.classList.add('animate__shakeX');
    } else {
        targetBlock.classList.remove('animate__shakeX');
    }
});