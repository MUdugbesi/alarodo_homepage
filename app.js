const theme_button = document.querySelector('#theme_btn');
const moon_fill = document.querySelector('.moon_fill');
const sun_fill = document.querySelector('.sun_fill');
const logo = document.querySelector('#logo');
const body = document.querySelector('body')
const container = document.querySelector('.container');
const about = document.querySelector('a');
const smallText = document.querySelector('.small_text') 
const largeText = document.querySelector('#large_text') 

function setLightTheme() {
    const moon_fill = document.querySelector('.moon_fill');
    const sun_fill = document.querySelector('.sun_fill');
    sun_fill.style.border = ''
    sun_fill.style.backgroundColor = ''
    moon_fill.style.border = '';
    moon_fill.style.borderRadius = ''
    moon_fill.style.backgroundColor = ''
    logo.src = 'assets/alarado-icon-homepage.svg';
    body.style.backgroundColor = ''
    container.style.backgroundColor = ''
    about.style.color = ''
    sun_fill.src = 'assets/Sun_fill.svg';
    smallText.style.color = '';
    largeText.style.color = ''

    theme_button.addEventListener('click', () => setDarkTheme(sun_fill, moon_fill, body, container))
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
    

    theme_button.addEventListener('click', () => setLightTheme())
}


theme_button.addEventListener('click', () => setDarkTheme(sun_fill, moon_fill, body, container))

