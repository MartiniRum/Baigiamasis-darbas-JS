//Isnykstantis div
function disappearingDiv(x) {
    document.getElementsByClassName('disappear')[x].classList.toggle('disappearing-div')
}
//div aukstis
function height(x) {
    document.getElementsByClassName('disappear')[x].classList.toggle('height')
}
//div plotis
function width(x) {
    document.getElementsByClassName('disappear')[x].classList.toggle('width')
}
//div centravimas
function center(x) {
    document.getElementsByClassName('disappear')[x].classList.toggle('center')
}
//div pozicija
function position(x) {
    document.getElementsByClassName('disappear')[x].classList.toggle('position')
}
//spalvos
function rand() {
    return Math.floor(Math.random() * 256);
}
function randomColor() {
    return 'rgb(' + rand() +
        ',' + rand() +
        ',' + rand() +
        ')';
    return `rgb(${rand()}, ${rand()}, ${rand()})`;
}

const box1 = document.getElementsByClassName('bb1')[0];
const box2 = document.getElementsByClassName('bb2')[0];
const box3 = document.getElementsByClassName('bb3')[0];
const box4 = document.getElementsByClassName('bb4')[0];

function recolor(event, obj) {
    box1.style.backgroundColor = randomColor();
    box2.style.backgroundColor = randomColor();
    box3.style.backgroundColor = randomColor();
    box4.style.backgroundColor = randomColor();
}
/// numeracijos skaiciuotuvas
let i = 0;
function counter() {
    submit.value = i++;
    return i
}
//JQuery

$(document).ready(function () {

// burger meniu
    function displayNav() {
        let nav = $('#nav');
        nav.animate({
            right: '0',
        }, 1000);
    }

    $('#burger').click(function () {
        let right = $('#nav').css('right');
        if (right == '0px') {
            let nav = $('#nav');
            nav.animate({
                right: '-110%',
            }, 1000);
        }
        else {
            displayNav();
        }
    })
// pakeisti spalvas
    $('.blackBox').click(function () {
        recolor(event, this)
    })
// lenteles kodas
    $('#submit').click(function () {
        $('#table').css('display', 'inline-table')
        let date = new Date().getFullYear();
        let firstName = $('#name').val();
        let secondName = $('#lastName').val();
        let age = $('#age').val();
        $('#tbody').append('<tr> <td>' + counter() + '</td> <td>' + firstName + '</td> <td>' + secondName + '</td> <td>' + (date - age) + '</td></tr>')
        $('#age').val('');
        $('#name').val('');
        $('#lastName').val('');
    })
    $('#empty').click(function () {
        $('#age').val('');
        $('#name').val('');
        $('#lastName').val('');
        $('#tbody').empty();
        $('#table').css('display', 'none')


    })
})