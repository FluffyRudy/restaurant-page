import "../styles/menu.css";
import { foods } from "../data";
import { createTableDataRow } from "../shared/table";
import maincourse from "../assets/images/maincourse.png";
import appetizer from "../assets/images/appetizer.png";
import drinks from "../assets/images/drinks.png";
import fish from "../assets/images/fish.png";
import horsdouvre from "../assets/images/horsdoeuvre.png";
import mignardise from "../assets/images/mignardise.png";
import palate from "../assets/images/palate.png";
import salad from "../assets/images/salad.png";
import soup from "../assets/images/soup.png";
import dessert from "../assets/images/dessert.png";
import cheesecourse from "../assets/images/cheesecourse.png";


function createMenuCard(foodType, img, shuffle=false) {
    const card = document.createElement("div");
    card.classList.add("card");
    const foodCourseDiv = document.createElement("div");
    foodCourseDiv.setAttribute("id", "course-div");
    const foodTitle = document.createElement("h2");
    foodTitle.textContent = foodType;

    const image   = new Image();
    image.src = img;

    const foodInfoTable = document.createElement("table");
    const foodItemsRow  = foods[foodType].map(foodInfo => {
        return createTableDataRow('td', foodInfo);
    })
    
    foodItemsRow.forEach(foodInfo => {
        foodInfoTable.appendChild(foodInfo);
    })

    foodCourseDiv.appendChild(foodTitle);
    foodCourseDiv.appendChild(image);
    if (shuffle) {
        card.appendChild(foodInfoTable);
        card.appendChild(foodCourseDiv);
    } else {
        card.appendChild(foodCourseDiv);
        card.appendChild(foodInfoTable);
    }

    return card;
}

function createMenuPage() {
    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id", "menu-container");

    let shuffle = false;
    let i = 0;
    const images = [maincourse, appetizer, drinks, horsdouvre, soup, salad, fish, palate, cheesecourse, dessert, mignardise];
    for (let foodType in foods) {
        const card = createMenuCard(foodType, images[i++], shuffle);
        menuContainer.appendChild(card);
        shuffle = !shuffle;
    }

    return menuContainer;
}

const menuPage = createMenuPage();
export {menuPage};