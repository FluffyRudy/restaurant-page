import "./styles/style.css";
import './styles/customfont.css';
import { header } from  "./shared/navigation";
import { homePage } from "./pages/home";
import { menuPage } from "./pages/menu";
import { contactPage } from "./pages/contact";

const container = document.getElementById("content");
const [homeLink, menuLink, contactLink] = header.querySelectorAll("button");

document.body.insertBefore(header, container);

function loadPage(page) {
    container.appendChild(page);
}

function clearPage() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function renderPage(page) {
    return function(e=undefined) {
        if (container.children[0]) {
            if (container.children[0].getAttribute("id") == page.getAttribute("id")) {
                return;
            }
        }
        
        if (e)
            highlightCurrentTab(e.target);
        clearPage();
        loadPage(page);
    }
}

function highlightCurrentTab(target) {
   target.classList.add('btn-clicked');
   [homeLink, menuLink, contactLink].forEach(elem => {
    if (elem != target)
        elem.classList.remove('btn-clicked');
   })
}

window.onload = () => {
    renderPage(homePage)();
    homeLink.classList.add('btn-clicked');
}

homeLink.addEventListener('click', renderPage(homePage));
menuLink.addEventListener('click', renderPage(menuPage));
contactLink.addEventListener('click', renderPage(contactPage));