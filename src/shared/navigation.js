import "../styles/navigation.css";

function createAnchor(label, redirect) {
    const anchor = document.createElement('a');
    anchor.href  = redirect;
    anchor.textContent = label;
    return anchor;
}

function createNavigationBar(navData) {
    const header   = document.createElement("header");
    const navbar   = document.createElement("nav");
    const listUL   = document.createElement('ul');
    
    navData.forEach(elem => {
        const li     = document.createElement("li");
        const anchor = createAnchor(elem.label, elem.redirect);
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
        redirect: '#',
    },
    {
        label: 'Menu',
        redirect: '#'
    },
    {
        label: 'Contact',
        redirect: '#'
    }
];

export const header = createNavigationBar(navData);