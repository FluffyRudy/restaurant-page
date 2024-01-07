import "../styles/contact.css"

function createContactPage() {
    const contactLinks = {
        "Github": {
            link: "https://github.com/FluffyRudy", 
            isdead: false,
        },
        "Youtube": {
            link: "https://www.youtube.com/@CodeRudy", 
            isdead: false,
        },
        "Email": {
            link:"noreply@gmail.com", 
            isdead: true,
        }
    };
    const container = document.createElement("div");
    container.setAttribute("id", "contact-container");
    
    for (let link in contactLinks) {
        const subContainer    = document.createElement("div");
        const hyperlink       = document.createElement("a");
        hyperlink.textContent = `${link}: ${contactLinks[link].link}`;
       
        if (!contactLinks[link].isdead)
            hyperlink.href = contactLinks[link].link;
        else
            hyperlink.href = "#";
        subContainer.appendChild(hyperlink);
        container.appendChild(subContainer);
    }

    return container;
}

const contactPage = createContactPage();
export {contactPage};