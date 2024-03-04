import bitrix01 from "./../imgs/projects/bitrix/sibagro.png";
import bitrix02 from "./../imgs/projects/bitrix/sbiznes.png";
import bitrix03 from "./../imgs/projects/bitrix/promeco.png";
import bitrix04 from "./../imgs/projects/bitrix/zoosat.png";

import js05 from "./../imgs/projects/js/apartments.png";
import js06 from "./../imgs/projects/js/portrait-canvas.png";
import js07 from "./../imgs/projects/js/book-library.png";
import js08 from "./../imgs/projects/js/budget-calculator.png";
import js09 from "./../imgs/projects/js/construction-lp.png";
import js10 from "./../imgs/projects/js/html-quiz.png";

import react11 from "./../imgs/projects/react/crm.png";
import react12 from "./../imgs/projects/react/shopping-cart.png";
import react13 from "./../imgs/projects/react/employee-accounting.png";

import htmlcss14 from "./../imgs/projects/htmlcss/mntn.png";
import htmlcss15 from "./../imgs/projects/htmlcss/mono.png";
import htmlcss16 from "./../imgs/projects/htmlcss/realestate.png";
import htmlcss17 from "./../imgs/projects/htmlcss/turism.png";

import react18 from "./../imgs/projects/react/marvel.png";
import react19 from "./../imgs/projects/react/countries.png";

const projectsList = [
  //bitrix
  {
    id: 1,
    best: true,
    title: "Wholesale online store.",
    website: "https://www.sibagrotrade.com/",
    filter: "bitrix",
    skills: ["php", "javascript", "jQuery", "css", "html"],
    img: bitrix01,
    gitHubLink: "",
  },
  {
    id: 2,
    best: false,
    title: "Construction Materials Online.",
    website: "https://www.sbiznes.ru/",
    filter: "bitrix",
    skills: ["php", "javascript", "jQuery", "css", "html"],
    img: bitrix02,
  },
  {
    id: 3,
    best: false,
    title: "Hardware & Building Supplies.",
    website: "https://promeco.ru/",
    filter: "bitrix",
    skills: ["php", "javascript", "jQuery", "css", "html"],
    img: bitrix03,
  },
  {
    id: 4,
    best: true,
    title: "Pet Supplies & Accessories. Online store",
    website: "https://zoosat.ru/",
    filter: "bitrix",
    skills: ["php", "javascript", "jQuery", "css", "html"],
    img: bitrix04,
  },

  {
    id: 5,
    best: true,
    title: "Real Estate, Apartments for Sale.",
    website: "",
    filter: "js",
    skills: ["javascript", "css", "html"],
    img: js05,
    gitHubLink: "https://github.com/uniqcle/apartments",
  },
  {
    id: 6,
    best: true,
    title: "Portrait on Canvas. Landing Page",
    website: "https://uniqcle.github.io/petrproject2/src/index.html",
    filter: "js",
    skills: ["javascript", "css", "html"],
    img: js06,
    gitHubLink: "https://github.com/uniqcle/petrproject2",
  },
  {
    id: 7,
    best: false,
    title: "Little Free eBook Library.",
    website: "",
    filter: "js",
    skills: ["javascript", "css", "html"],
    img: js07,
    gitHubLink: "https://github.com/uniqcle/book-app",
  },
  {
    id: 8,
    best: false,
    title: "Budget Calculator: Free & Easy.",
    website: "",
    filter: "js",
    skills: ["javascript", "css", "html"],
    img: js08,
    gitHubLink: "https://github.com/uniqcle/budget-calculator",
  },
  {
    id: 9,
    best: false,
    title: "Construction Landing Page.",
    website: "",
    filter: "js",
    skills: ["javascript", "css", "html"],
    img: js09,
    gitHubLink: "https://github.com/uniqcle/petrlanding",
  },
  {
    id: 10,
    best: false,
    title: "HTML Quiz: Questions With Answers",
    website: "",
    filter: "js",
    skills: ["javascript", "css", "html"],
    img: js10,
    gitHubLink: "https://github.com/uniqcle/qwiz",
  },
  {
    id: 11,
    best: true,
    title: "Customer Relationship Management (CRM)",
    website: "https://uniqcle.github.io/crm-react-v2/",
    filter: "react",
    skills: ["react"],
    img: react11,
    gitHubLink: "https://github.com/uniqcle/crm-reactv2",
  },
  {
    id: 12,
    best: false,
    title: "Shopping Cart",
    website: "https://uniqcle.github.io/basket-front/",
    filter: "react",
    skills: ["react"],
    img: react12,
    gitHubLink: "https://github.com/uniqcle/react-basket",
  },
  {
    id: 13,
    best: false,
    title: "Employee Accounting App",
    website: "https://uniqcle.github.io/basket-front/",
    filter: "react",
    skills: ["react"],
    img: react13,
    gitHubLink: "https://github.com/uniqcle/react-employee",
  },

  //html css
  {
    id: 14,
    best: false,
    title: "Sightseeing tours to Altai Landing",
    website: "https://uniqcle.github.io/mntn/",
    filter: "htmlcss",
    skills: ["html", "css", "javascript"],
    img: htmlcss14,
    gitHubLink: "https://github.com/uniqcle/mntn",
  },
  {
    id: 15,
    best: false,
    title: "Real Estate Investments Landing",
    website: "https://uniqcle.github.io/mono/",
    filter: "htmlcss",
    skills: ["html", "css", "javascript"],
    img: htmlcss15,
  },
  {
    id: 16,
    best: false,
    title: "Filter on Construction Website",
    website: "https://uniqcle.github.io/realestate/",
    filter: "htmlcss",
    skills: ["html", "css", "javascript"],
    img: htmlcss16,
    gitHubLink: "https://github.com/uniqcle/realestate",
  },
  {
    id: 17,
    best: false,
    title: "The Most Engaging Places Landing",
    website: "https://uniqcle.github.io/turism/",
    filter: "htmlcss",
    skills: ["html", "css", "javascript"],
    img: htmlcss17,
    gitHubLink: "https://github.com/uniqcle/2rism",
  },
  {
    id: 18,
    best: false,
    title: "Marvel App",
    filter: "react",
    skills: ["react"],
    img: react18,
    gitHubLink: "https://github.com/uniqcle/MarvelHooks",
  },
  {
    id: 19,
    best: false,
    title: "Countries App",
    filter: "react",
    skills: ["react", "Styled Components"],
    img: react19,
    gitHubLink: "https://github.com/uniqcle/countries",
  },
];

export { projectsList };

