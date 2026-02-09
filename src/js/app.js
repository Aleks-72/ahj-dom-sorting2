import Header from "./page/header";
import Table from "./page/table";

const filmsList = [
  {
    "id": 26,
    "title": "Побег из Шоушенка",
    "imdb": 9.30,
    "year": 1994
  },
  {
    "id": 25,
    "title": "Крёстный отец",
    "imdb": 9.20,
    "year": 1972
  },
  {
    "id": 27,
    "title": "Крёстный отец 2",
    "imdb": 9.00,
    "year": 1974
  },
  {
    "id": 1047,
    "title": "Тёмный рыцарь",
    "imdb": 9.00,
    "year": 2008
  },
  {
    "id": 223,
    "title": "Криминальное чтиво",
    "imdb": 8.90,
    "year": 1994
  }
];

export default function renderPage() {
    const body = document.querySelector("body");
    const header = new Header(body);
    header.generateHeader();
    const table = new Table(body);
    table.renderTable(filmsList);
    const params = [
        {'list': filmsList, 'column': 'id', 'type': 'up'},
        {'list': filmsList, 'column': 'id', 'type': 'down'},
        {'list': filmsList, 'column': 'title', 'type': 'up'},
        {'list': filmsList, 'column': 'title', 'type': 'down'},
        {'list': filmsList, 'column': 'year', 'type': 'up'},
        {'list': filmsList, 'column': 'year', 'type': 'down'},
        {'list': filmsList, 'column': 'imdb', 'type': 'up'},
        {'list': filmsList, 'column': 'imdb', 'type': 'down'}
    ];
    let counter = 0;
    setInterval(() => {
        const param = params[counter % params.length];
        console.log(param);
        table.renderTable(param.list, param.column, param.type);
        counter ++;
    }, 5000);
}
