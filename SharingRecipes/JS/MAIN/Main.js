/* 햄버거 메뉴 */
const toggleBtn = document.querySelector('#check');
const menu = document.querySelector('.navbar_menu');
const icon = document.querySelector('.navbar_icon');

toggleBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
});
/* 햄버거 메뉴 끝 */