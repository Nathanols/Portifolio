function menuShow() {
    let menu = document.querySelector('.list');
    if(menu.classList.contains('open')){
        menu.classList.remove('open');
        
    }else {
        menu.classList.add('open');
        
    }
}