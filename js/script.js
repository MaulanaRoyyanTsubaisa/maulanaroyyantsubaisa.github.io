const activePage = window.location.pathname;
const navlinks = document.querySelectorAll('nav a').
forEach(link => {
    if(link.href.includes('${activePage}')){
        link.classList.add('active');
    }
});