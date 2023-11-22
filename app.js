const theme_button = document.querySelector('.theme_btn');
const moon_fill = document.querySelector('.moon_fill');
const sun_fill = document.querySelector('.sun_fill');
const logo = document.querySelector('#logo');
const body = document.querySelector('body')
const container = document.querySelector('.container');
const about = document.querySelector('a');
const smallText = document.querySelector('.small_text');
const largeText = document.querySelector('#large_text');






function setLightTheme(e1, e2, e3, e4) {
    e1.style.border = ''
    e1.style.backgroundColor = ''
    e2.style.border = '';
    e2.style.borderRadius = ''
    e2.style.backgroundColor = ''
    logo.src = 'assets/alarado-icon-homepage.svg';
    e3.style.backgroundColor = ''
    e4.style.backgroundColor = ''
    about.style.color = ''
    e1.src = 'assets/Sun_fill.svg';
    smallText.style.color = '';
    largeText.style.color = ''

    theme_button.addEventListener('click', () => setDarkTheme(sun_fill, moon_fill, body, container));
    mobile_theme_button.addEventListener('click', () => setDarkTheme(mobile_sun_fill, mobile_moon_fill, body, container))
}



function setDarkTheme(e1, e2, e3, e4) {
    e1.style.border = 'none'
    e1.style.backgroundColor = 'black'
    e2.style.border = '1px solid white';
    e2.style.borderRadius = '50%'
    e2.style.backgroundColor = 'white'
    e2.src = '/assets/Moon_fill.svg';
    e3.style.backgroundColor = '#F2F9FE'
    e4.style.backgroundColor = '#111729';
    about.style.color = 'white';
    smallText.style.color = '#fff';
    largeText.style.color = '#fff'


    theme_button.addEventListener('click', () => setLightTheme(sun_fill, moon_fill, body, container))
    mobile_theme_button.addEventListener('click', () => setLightTheme(mobile_sun_fill, mobile_moon_fill, body, container))
}


theme_button.addEventListener('click', () => setDarkTheme(sun_fill, moon_fill, body, container, theme_button));

const barsSolid = document.querySelector('.bars-solid');
const mobileNav = document.querySelector('.mobile_navigation');
const cancelSolid = document.querySelector('#cancel-solid');


function openNavBar() {
    mobileNav.style.display = 'block';

}
const closeNavBar = () => {
    mobileNav.style.display = 'none';

}

barsSolid.addEventListener('click', openNavBar);
cancelSolid.addEventListener('click', closeNavBar);


// Mobile theme changer

const mobile_theme_button = document.querySelector('.mobile_theme_btn');
const mobile_moon_fill = document.querySelector('.mobile_moon_fill');
const mobile_sun_fill = document.querySelector('.mobile_sun_fill');


mobile_theme_button.addEventListener('click', () => {
    setDarkTheme(mobile_sun_fill, mobile_moon_fill, body, container, mobile_theme_button);  
});


module.exports = { setDarkTheme, setLightTheme }

