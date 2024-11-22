var V = 200;
var play1 = false, play2 = false;
var direction1 = 'right', direction2 = 'left';
var containerWidth = window.innerWidth;
var containerHeight = window.innerHeight;
var spriteWidth = 479;
var spriteHeight = 479;
var maxLeft = containerWidth - spriteWidth;
var maxTop = containerHeight - spriteHeight - 500;

var $boneco1 = $('#boneco1');
var $boneco2 = $('#boneco2');
var gameMusic = document.getElementById('gameMusic');
var jumpSound = document.getElementById('jumpSound');
var isJumping1 = false, isJumping2 = false;

function verificaColisao(elem1, elem2) {
    var rect1 = elem1[0].getBoundingClientRect();
    var rect2 = elem2[0].getBoundingClientRect();
    
    return !(rect1.right < rect2.left ||
             rect1.left > rect2.right ||
             rect1.bottom < rect2.top ||
             rect1.top > rect2.bottom);
}

function pularSobreCercas(boneco, direction, isJumpingFlag) {
    if (!isJumpingFlag) {
        isJumpingFlag = true;
        if (direction === 'right') {
            boneco.removeClass('esquerda final').addClass('direita pular');
        } else if (direction === 'left') {
            boneco.removeClass('direita final').addClass('esquerda pular');
        }
        jumpSound.play();
        setTimeout(function() {
            boneco.removeClass('pular');
            isJumpingFlag = false;
        }, 600);
    }
}

$(document).on('keydown', function(evento) {
    var tecla = evento.keyCode;

    var andouLeft1 = parseInt($boneco1.css('left')) || 0;
    if (tecla == 68 && !play1 && !isJumping1) {
        play1 = true;
        direction1 = 'right';
        gameMusic.play();
        $boneco1.removeClass('esquerda final pular').addClass('direita');
        var moveSteps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        moveSteps.forEach(function(step, index) {
            setTimeout(function() {
                var newLeft1 = Math.min(andouLeft1 + step * V, maxLeft);
                $boneco1.css('left', newLeft1 + 'px');
                if (verificaColisao($boneco1, $('.cerca')) ||
                    verificaColisao($boneco1, $('.cerca2')) ||
                    verificaColisao($boneco1, $('.cerca3'))) {
                    pularSobreCercas($boneco1, direction1, isJumping1);
                }
                if (step === 10) {
                    $boneco1.css('left', newLeft1 + 'px').addClass('final');
                    play1 = false;
                }
            }, index * 200);
        });
    } else if (tecla == 65 && !play1 && !isJumping1) {
        play1 = true;
        direction1 = 'left';
        gameMusic.play();
        $boneco1.removeClass('direita final pular').addClass('esquerda');
        var moveSteps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        moveSteps.forEach(function(step, index) {
            setTimeout(function() {
                var newLeft1 = Math.max(andouLeft1 - step * V, 0);
                $boneco1.css('left', newLeft1 + 'px');
                if (verificaColisao($boneco1, $('.cerca')) ||
                    verificaColisao($boneco1, $('.cerca2')) ||
                    verificaColisao($boneco1, $('.cerca3'))) {
                    pularSobreCercas($boneco1, direction1, isJumping1);
                }
                if (step === 10) {
                    $boneco1.css('left', newLeft1 + 'px').addClass('final');
                    play1 = false;
                }
            }, index * 200);
        });
    } else if (tecla == 32 && !isJumping1) {
        pularSobreCercas($boneco1, direction1, isJumping1);
    }
    var andouLeft2 = parseInt($boneco2.css('left')) || 0;
    if (tecla == 39 && !play2 && !isJumping2) {
        play2 = true;
        direction2 = 'right';
        gameMusic.play();
        $boneco2.removeClass('esquerda final pular').addClass('direita');
        var moveSteps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        moveSteps.forEach(function(step, index) {
            setTimeout(function() {
                var newLeft2 = Math.min(andouLeft2 + step * V, maxLeft);
                $boneco2.css('left', newLeft2 + 'px');
                if (verificaColisao($boneco2, $('.cerca')) ||
                    verificaColisao($boneco2, $('.cerca2')) ||
                    verificaColisao($boneco2, $('.cerca3'))) {
                    pularSobreCercas($boneco2, direction2, isJumping2);
                }
                if (step === 10) {
                    $boneco2.css('left', newLeft2 + 'px').addClass('final');
                    play2 = false;
                }
            }, index * 200);
        });
    } else if (tecla == 37 && !play2 && !isJumping2) {
        play2 = true;
        direction2 = 'left';
        gameMusic.play();
        $boneco2.removeClass('direita final pular').addClass('esquerda');
        var moveSteps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        moveSteps.forEach(function(step, index) {
            setTimeout(function() {
                var newLeft2 = Math.max(andouLeft2 - step * V, 0);
                $boneco2.css('left', newLeft2 + 'px');
                if (verificaColisao($boneco2, $('.cerca')) ||
                    verificaColisao($boneco2, $('.cerca2')) ||
                    verificaColisao($boneco2, $('.cerca3'))) {
                    pularSobreCercas($boneco2, direction2, isJumping2);
                }
                if (step === 10) {
                    $boneco2.css('left', newLeft2 + 'px').addClass('final');
                    play2 = false;
                }
            }, index * 200);
        });
    } else if (tecla == 38 && !isJumping2) {
        pularSobreCercas($boneco2, direction2, isJumping2);
    }
});
