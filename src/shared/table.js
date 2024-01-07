function createDataElement(elemType, data) {
    const element = document.createElement(elemType);
    element.textContent = data;
    return element;
}

function createTableDataRow(elemType, data) {
    const tableRow = document.createElement('tr');
    data.forEach(dataElem => {
        const tableElem = createDataElement(elemType, dataElem);
        tableRow.appendChild(tableElem);
    });
    return tableRow;
}

export { createTableDataRow };