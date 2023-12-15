const container = $('.container');
const circle = $('#main');

let itemSize = 66;
let countCirlce = 1;

const list = [
    [
        {
            title: "WebBeautyBook",
            link: "https://github.com/Ch-Tima/WebBeautyBook"
        },
        {
            title: "CurrencyConverter",
            link: "https://github.com/Ch-Tima/CurrencyConverter"
        },
        {
            title: "Movie",
            link: "https://github.com/Ch-Tima/Movie-net-6.0"
        }
    ], 
    [
        {
            title: "Guard",
            link: "https://github.com/AN0NCER/guard"
        },
        {
            title: "Steam-lib",
            link: "https://github.com/AN0NCER/steam-lib"
        },
        {
            title: "WebAds",
            link: "https://github.com/Ch-Tima/WebAds",
        }
    ], 
    [
        {
            title: "SpaceInvaders",
            link: "https://github.com/Ch-Tima/SpaceInvaders"
        }
    ]
]

$(function (){
    $(window).bind("resize", rerender);
    rerender();
});

function createCircle(scale, indexProject){
    countCirlce++;
    let qE = $("<div>").addClass(countCirlce%2==0 ? "rotate-l" : "rotate-r").css({
        'width': circle.width()*scale,
        'height': circle.height()*scale,
        top: (circle.height()/2) -circle.height()*scale/2,
        left: (circle.width()/2) -circle.width()*scale/2,
        position: 'absolute'
    }).addClass('circle');
    addProjectes(qE, list[indexProject])
    return qE;
}

function rerender(){
    $(".circle:not(#main)").remove();
    circle.children().remove();
    countCirlce = 1;

    itemSize = $(window).width() >= 750 ? 66 : ($(window).width() <= 750 && $(window).width() >= 540 ? 50 : 45)
    
    addProjectes(circle, list[0])
    createCircle(0.68, 1).appendTo(container);
    createCircle(0.38, 2).appendTo(container);
}

function addProjectes(qE, arr){
    for (let i = 0; i < arr.length; i++) {
        var radius = qE.width()/2;
        var radians = (((360 / arr.length) * i) * (Math.PI / 180)) + countCirlce
        let item = $("<a>").text(arr[i].title).attr("href",arr[i].link).addClass("item").css({
            'width': itemSize,
            'height': itemSize,
            'left': (radius * Math.cos((radians))) + radius - itemSize / 2,
            'top': (radius * Math.sin(radians)) + radius - itemSize / 2,
        })
        qE.append(item)
    }
}