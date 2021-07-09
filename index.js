import './scss/normalize.css';
import './scss/index.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';
// You can also use <link> for styles
// ..
AOS.init();

const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((item) =>
    item.addEventListener('click', function () {
        this.classList.toggle('collapsible--expanded');
    }),
);
