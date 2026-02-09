export default class Table {
    constructor(element) {
        const table = document.createElement("table");
        element.appendChild(table);
        this._element = table;
    };

    renderTable(filmsList, column = undefined, type = 'up') {
        this._element.replaceChildren()
        const tableHeaders = document.createElement("tr");
        for (let header of ['id', 'title', 'year', 'imdb']) {
            const tableHeader = document.createElement('th');
            tableHeader.classList.add('sort-icon');
            tableHeader.textContent = header;
            if (header === column) {
                if (type === 'up') {
                    tableHeader.classList.add("sorted-up")
                } else if (type === 'down') {
                    tableHeader.classList.add("sorted-down")
                } else {
                    throw new Error("Неверный порядок сортировки")
                }
            }
            tableHeaders.appendChild(tableHeader);
        };
        this._element.appendChild(tableHeaders);
        if (column === undefined) {
            ;
        } else if (column === 'title') {
            filmsList.sort((a, b) => a[column].localeCompare(b[column]))
        } else if (['id', 'year', 'imdb'].includes(column)) {
            filmsList.sort((a, b) => +a[column] - +b[column])
        } else {
            throw new Error('Передан неверный параметр колонки');
        }
        if (type === 'up') {
            ;
        } else if (type === 'down') {
            filmsList.reverse()
        } else {
            throw new Error("Неверный порядок сортировки")
        }
        
        for (let film of filmsList) {
            const tableRow = document.createElement('tr');
            tableRow.dataset.id = film.id;
            tableRow.dataset.title = film.title;
            tableRow.dataset.year = film.year;
            tableRow.dataset.imbd = film.imdb;
            for (let attribute of [film.id, film.title, `(${film.year})`, `imdb: ${film.imdb.toFixed(2)}`]) {
                const tableData = document.createElement('td');
                tableData.textContent = attribute;
                tableRow.appendChild(tableData);
            };
            this._element.appendChild(tableRow);
        }
    };
}