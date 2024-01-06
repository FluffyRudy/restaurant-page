import '../styles/home.css';

const restaurant = {
    name: 'Odin\'s Restaurant',
    description: 'Restaurant Odin\'s Restaurant is a culinary gem nestled in the heart of the city. We offer an unforgettable dining experience with a menu that features a unique blend of world flavors. Our chefs use only the freshest ingredients, locally sourced and seasonally inspired, to create dishes that are both innovative and delicious.From our warm, inviting ambiance to our exceptional service, we strive to make every visit to Odin\'s Restaurant a memorable one. Whether you\'re joining us for a casual lunch, a romantic dinner, or a special occasion, we look forward to welcoming you and providing an outstanding dining experience.Join us at Odin\'s Restaurant, where every meal is a celebration of food, friends, and fine living.',
    hoursHeadings: ["Days", "Opening", "Closing"],
    hours: [
        ['Monday - Tuesday', '11:00 AM', '10:00 PM'],
        ['Wednesday - Thursday', '9:00 AM', '11:00 PM'],
        ['Friday - Sunday', '10:00 AM', '8:00 PM'],
    ]
};

function createDataElement(elemType, data) {
    const element = document.createElement(elemType);
    element.textContent = data;
    return element;
}

function createTableDataRow(data, elemType) {
    const tableRow = document.createElement('tr');
    data.forEach(dataElem => {
        const tableElem = createDataElement(elemType, dataElem);
        tableRow.appendChild(tableElem);
    });
    return tableRow;
}

function createHomePage() {
    const homeContainer = document.createElement("div");
    const restaurantNameElem = document.createElement("h1");
    const welcomMessageElem  = document.createElement("p");
    const table = document.createElement('table');
    const tableHeadRow = createTableDataRow(restaurant.hoursHeadings, 'th');
    const tableDataRow = restaurant.hours.map(hoursData => {
         return createTableDataRow(hoursData, 'td');
    });
    
    homeContainer.setAttribute('id', 'homepage');
    restaurantNameElem.setAttribute("id", "restaurant-name");
    welcomMessageElem.setAttribute("id", "welcome-msg");
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