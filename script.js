
const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
});

function menuShow() {
    let menu = document.querySelector('.list');
    if(menu.classList.contains('open')){
        menu.classList.remove('open');
        
    }else {
        menu.classList.add('open');
        
    }
}
