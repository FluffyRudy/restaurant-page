import "./styles/style.css";
import './styles/customfont.css';
import { header } from  "./shared/navigation";
import { homePage } from "./pages/home";

const container = document.getElementById("content");

document.body.insertBefore(header, container);

function loadPage(page) {
    container.appendChild(page);
}

function clearPage() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

window.onload = () => {
    loadPage(homePage);
}

  