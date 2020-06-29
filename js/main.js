var tlFirstScroll = new TimelineMax();

tlFirstScroll
.set('.iphone-image-wrapper', {scale: 1, transformOrigin:"center top"})

var controller = new ScrollMagic.Controller();

//Scene 1

var scene1 = new ScrollMagic.Scene({
triggerElement : '.trigger1',
triggerHook:0,
duration:"100%"
})

.setTween(tlFirstScroll)
.addIndicators()
.addTo(controller);

var tlSecondScroll = new TimelineMax();

tlSecondScroll

.to('.iphone1', 10,{x: "-38%"})
.to('.iphone2', 10,{x: "78%"}, "-=10")
.from('.iphone1-text', 0.1, {autoAlpha:0}, "-=10")
.from('.iphone2-text', 0.1, {autoAlpha:0}, "-=10")
.to('.iphone1-text', 10,{x: "-30%"}, "-=10")
.to('.iphone2-text', 10,{x:"30%"}, "-=10")

.set('.iphone1-bbehind', {display: "inline", height: "100%"})
.set('.iphone2-bbehind', {display: "inline", height:"100%"})



.to('.iphone1-img-behind', 10,{y: "-53%",x: "-110%"})
.to('.iphone2-img-behind', 10,{y: "-53%",x: "110%"}, "-=10")
.to('.iphone1-bbehind', 10, {y: "50%", x:"3%"}, "-=10")
.to('.iphone2-bbehind', 10, {y: "50%",  x:"-3%"}, "-=10")


.to('.i1-img', 5, {autoAlpha: 0}, "-=10")
.to('.iphone2-img', 5, {autoAlpha: 0}, "-=10")

.to('.iphone1-text', 2, {autoAlpha: 0}, "-=10")
.to('.iphone2-text', 2, {autoAlpha: 0}, "-=10")
//Scene 2
var scene1 = new ScrollMagic.Scene({
    triggerElement : '.trigger2',
    triggerHook:0,
    duration:"100%"
    })  

.setTween(tlSecondScroll)
.setPin(".trigger2")
.addIndicators()
.addTo(controller);
