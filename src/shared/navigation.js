import "../styles/navigation.css";

function createAnchor(label) {
    const anchor = document.createElement('button');
    anchor.textContent = label;
    return anchor;
}

function createNavigationBar(navData) {
    const header   = document.createElement("header");
    const navbar   = document.createElement("nav");
    const listUL   = document.createElement('ul');
    
    navData.forEach(elem => {
        const li     = document.createElement("li");
        const anchor = createAnchor(elem.label);
        li.appendChild(anchor);
        listUL.appendChild(li);
    })

    navbar.appendChild(listUL);
    header.appendChild(navbar);
    return header;
}

/************************************************ */

const navData = [
    {
        label: 'Home',
        id: "label"
    },
    {
        label: 'Menu',
        id: "menu"
    },
    {
        label: 'Contact',
        id: "contact"
    }
];

export const header = createNavigationBar(navData);