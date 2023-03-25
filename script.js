
const button_open = document.getElementsByClassName('menu_text')[0]
const button_close = document.getElementsByClassName('menu_text_close')[0]
const menu = document.getElementsByClassName('menu')[0]

const openMenu = () =>{
    menu.classList.add('show_menu')
}

const closeMenu = () =>{
    menu.classList.remove('show_menu')
}

button_open.addEventListener('click', openMenu)
button_close.addEventListener('click', closeMenu)