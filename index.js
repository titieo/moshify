import './scss/normalize.css';
import './scss/index.scss';
const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((item) =>
    item.addEventListener('click', function () {
        this.classList.toggle('collapsible--expanded');
    }),
);
