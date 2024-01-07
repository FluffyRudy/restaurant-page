import '../styles/home.css';
import { createTableDataRow} from '../shared/table';
import { restaurant} from '../data';

function createHomePage() {
    const homeContainer = document.createElement("div");
    const restaurantNameElem = document.createElement("h1");
    const welcomMessageElem  = document.createElement("p");
    const table = document.createElement('table');
    const tableHeadRow = createTableDataRow('th', restaurant.hoursHeadings);
    const tableDataRow = restaurant.hours.map(hoursData => {
         return createTableDataRow('td', hoursData);
    });
    
    homeContainer.setAttribute('id', 'homepage');
    restaurantNameElem.setAttribute("id", "restaurant-name");
    welcomMessageElem.setAttribute("id", "welcome-msg");
    table.setAttribute("id", "hours-table");
    restaurantNameElem.textContent = restaurant.name;
    welcomMessageElem.textContent = restaurant.description;

    table.appendChild(tableHeadRow);
    tableDataRow.forEach(trElem => {
        table.appendChild(trElem);
    })

    homeContainer.appendChild(restaurantNameElem);
    homeContainer.appendChild(welcomMessageElem);
    homeContainer.appendChild(table);

    return homeContainer;
}

const homePage = createHomePage();
export { homePage };