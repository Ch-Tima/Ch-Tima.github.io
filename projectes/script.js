const container = $('.container');
const circle = $('#main');

let itemSize = 80;
let countCirlce = 1;
let winSize = 0;

const list = [
    [

        {
            title: "WebBeautyBook",
            links:{
                git: "https://github.com/Ch-Tima/WebBeautyBook"
            },
            img: "img/B.png"
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
            title: "Movie",
            links:{
                git: "https://github.com/Ch-Tima/Movie-net-6.0",
            },
            img: "img/M.png"
        },
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
    //cls
    $(".circle:not(#main)").remove();
    circle.children().remove();
    $("#hugeDetails").remove();
    countCirlce = 1;

    //
    if(getOrientation() == 'portrait'){
        $("body").css({"height": "80vh"})
    }else{
        $("body").css({"height": ""})
    }

    //calc item size
    let win = $(window);
    winSize = win.width() < win.height() ? win.width() : win.height();
    itemSize = winSize >= 750 ? 80 : winSize <= 750 && winSize >= 540 ? 70 : 48

    //draw diograna
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
        }).on("mouseenter", () => showDetails(arr[i], item)))
        .append($("<div>").addClass("item-details").css({
            "width": '175px',
            height: `${itemSize-5}px`,
            left: `${itemSize/1.8}px`,
        }));

        qE.append(item)
    }
}

function showDetails(event, element){
    let links = [];
    for (var key in event.links) {
        let sizeLink = 0 
        if(winSize > 800 && getOrientation() == 'landscape'){
            sizeLink = 30
        }else if(winSize < 800 && getOrientation() == 'landscape'){
            sizeLink = 20
        }else{
            sizeLink = 40
        }
        links.push($("<a>").attr("href", event.links[key]).append($("<img>").attr('src', `../assets/svg/${key}.svg`).css({
            'width': `${sizeLink}px`,
            'height': 'auto',
            'margin': `${winSize < 800 ? 2 : 5}px ${winSize < 800 ? 5 : 8}px ${0}px ${winSize < 800 ? 5 : 8}px`
        })))
    }

    if(winSize < 800 && getOrientation() == 'portrait'){
        $("#hugeDetails").remove();
        $("body").append
        (
            $("<div>").css({
                'width': '100%',
                'height': '13vh',
                'background': '#89d1d9',
                'position': 'absolute',
                'bottom': '0'
            }).attr("id", "hugeDetails")
            .append($("<p>").text(event.title).addClass("title-xxl text-center"))
            .append($("<div>").addClass("df-center").append(links))
        )
    }else{
        let item = $(element).children(".item");
        let details = $(element).children(".item-details");

        details.children().remove();
        details.append($("<p>").text(event.title).addClass(`text-center ${ winSize > 800 && getOrientation() == 'landscape' ? 'title-l': 'title-m'}`)).append($("<div>").addClass("df-center").append(links));
        
        item.addClass("item-on");
        details.addClass("item-details-on");

        // mouseout | mouseover
        details.on("mouseover",()=> {
            item.addClass("item-on");
            details.addClass("item-details-on");
            details.one("mouseout", ()=>{
                item.removeClass("item-on");
                details.removeClass("item-details-on");
            })
        });

        $(element).one("mouseout", ()=>{
            item.removeClass("item-on");
            details.removeClass("item-details-on")
        })
    }


}

function getOrientation(){
    return window.innerWidth > window.innerHeight ? "landscape" : "portrait";;
}