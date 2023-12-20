const container = $('.container');
const circle = $('#main');

let itemSize = 80;
let countCirlce = 1;

const list = [
    [

        {
            title: "WebBeautyBook",
            links:{
                git: "https://github.com/Ch-Tima/WebBeautyBook",
                web: "https://appwebbeautybook.azurewebsites.net"
            },
            img: ""
        },
        {
            title: "CurrencyConverter",
            links:{
                git: "https://github.com/Ch-Tima/CurrencyConverter",
                kofi: "https://ko-fi.com/i/IL4L5LHX6E",
                playStore: "https://play.google.com/store/apps/details?id=com.chtima.currencyconverter"
            },
            img: "img/CC.png"
        },
        {
            title: "Movie",
            links:{
                git: "https://github.com/Ch-Tima/Movie-net-6.0",
            },
            img: ""
        },
        {
            title: "Flashlight",
            links:{
                kofi: "https://ko-fi.com/i/IL4L5LHX6E",
                playStore: "https://play.google.com/store/apps/details?id=com.chtima.flashlight"
            },
            img: "img/F.png"
        }
    ], 
    [
        {
            title: "Guard",
            links:{
                git: "https://github.com/AN0NCER/guard",
            },
            img: "img/G.png"
        },
        {
            title: "Steam-lib",
            links:{
                git: "https://github.com/AN0NCER/steam-lib",
                nuget: "https://www.nuget.org/packages/SteamAuthStandart"
            },
            img: "img/G-lib.png"
        },
        {
            title: "WebAds",
            links:{
                git: "https://github.com/Ch-Tima/WebAds",
            },
            img: ""
        }
    ], 
    [
        {
            title: "SpaceInvaders",
            links:{
                git: "https://github.com/Ch-Tima/SpaceInvaders",
            },
            img: "img/SI.png"
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

    itemSize = $(window).width() >= 750 ? 80 : ($(window).width() <= 750 && $(window).width() >= 540 ? 70 : 55)
    
    addProjectes(circle, list[0])
    createCircle(0.68, 1).appendTo(container);
    createCircle(0.38, 2).appendTo(container);
}

function addProjectes(qE, arr){
    for (let i = 0; i < arr.length; i++) {
        var radius = qE.width()/2;
        var radians = (((360 / arr.length) * i) * (Math.PI / 180)) + countCirlce
        let item = $("<a>").attr("href",arr[i].link).css({
            'width': itemSize,
            'height': itemSize,
            'left': (radius * Math.cos((radians))) + radius - itemSize / 2,
            'top': (radius * Math.sin(radians)) + radius - itemSize / 2,
            'position': 'absolute'
        })
        .append($("<div>").addClass("item").css({
            "background-image": `url(${arr[i].img})`,
            "background-size": "90%",
            "background-position": "center",
            "background-repeat": "no-repeat"
        }))
        .append(createItemDetails(arr[i]))

        qE.append(item)
    }
}

function createItemDetails(data){
    console.log(data);

    let links = [];

    for (var key in data.links) {
        console.log(key);

        links.push($("<a>").attr("href", data.links[key]).append($("<img>").attr('src', `../assets/svg/${key}.svg`).css({
            'width': '25px',
            'height': '25px',
            'margin': '0 5px' 
        })))
    }

    return $("<div>").addClass("item-details").css({
        width: `${175}px`,
        height: `${itemSize-5}px`,
        left: `${itemSize/2.25}px`,
    }).append($("<p>").text(data.title).css({
        'text-align': 'center',
        'margin': '0'
    })).append($("<div>").css({
        'display': 'flex',
        'justify-content': 'center'
    }).append(links))
}
