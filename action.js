// Select the class bubble-dance
let bubbleContainer = document.getElementsByClassName('bubble-dance')[0];

// padding values for desktop
var fish2Start = 100;
var fish3Start = 900;
var fish4Start = 1200;

if (screen.width < 400) {
    // Change transformation duration and translateY for mobile view
    bubbleContainer.style.setProperty('--transform-duration', '15s');
    bubbleContainer.style.setProperty('--transform-y', '-700vh');
    
    // padding values for mobile
    fish2Start = 1680;
    fish3Start = 3000;
    fish4Start = 4300;
}

window.addEventListener('scroll', function () {
    let scrollPos = window.scrollY;   // Get Scroll Value (Mobile - High)
    
    hero_message.style.top = 50 + scrollPos * -0.2 + '%';
    cloud.style.left = scrollPos * 2 + 'px';
    bird1.style.top = scrollPos * 0.1 + 'px';
    bird1.style.left = scrollPos * 1 + 'px';
    bird2.style.top = scrollPos * -0.1 + 'px';
    bird2.style.left = scrollPos * -2 + 'px';
    journey.style.marginTop = scrollPos * 1.5 + 'px';
    rocks.style.top = scrollPos * -0.14 + 'px';
    forest.style.top = scrollPos * 0.4 + 'px';
    sky.style.top = scrollPos * 0.25 + 'px';
    mountains.style.top = scrollPos * 0.25 + 'px';
    eco_nav.style.top = scrollPos * 0.7 + 'px';
    sun.style.top = scrollPos * 1 + 'px';
    
    // To prevent splash from moving above sea water
    if (scrollPos < 380) {
        splash.style.top = 20 + scrollPos * -0.3 + 'px';
    }
    
    // Move fishes horizontally
    fish1.style.right = (scrollPos - 100) * 1 + 'px';
    fish2.style.left = (scrollPos - fish2Start) * 1 + 'px';
    fish3.style.right = (scrollPos - fish3Start) * 1 + 'px';
    fish4.style.left = (scrollPos - fish4Start) * 1 + 'px';
});

// Contains the link for all social media handles
var ecoLinks = document.getElementsByClassName("eco-link");
ecoLinks[0].addEventListener("click", () => { openEcoLink(1) });
ecoLinks[1].addEventListener("click", () => { openEcoLink(2) });

function openEcoLink(x) {
    if (x == 1) {
        window.open("https://www.instagram.com/your_eco_account", "_blank");
    } else if (x == 2) {
        window.open("https://www.linkedin.com/in/your_eco_profile", "_blank");
    }
}