import "./styles/style.css";
import './styles/customfont.css';
import { header } from  "./shared/navigation";
import { homePage } from "./pages/home";
import { menuPage } from "./pages/menu";

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
    return function() { 
        clearPage();
        loadPage(page);
    }
}

window.onload = () => {
    renderPage(homePage)();
}

homeLink.addEventListener('click', renderPage(homePage));
menuLink.addEventListener('click', renderPage(menuPage));