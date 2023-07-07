import ImageOne from "../../images/todo.jpg";
import ImageTwo from "../../images/News.jpg";
import ImageThree from "../../images/dating.jpg";
import ImageFour from "../../images/Currencies.jpg";
import ImageFive from "../../images/Billtip.jpg";

export const portfolioData = [
  {
    sectionId: 2,
    projectName: "ToDo Application",
    projectLink: " https://frikkie-todo-list.netlify.app/ ", //project link here based on you choice
    image: ImageOne,
  },
  {
    sectionId: 2,
    projectName: "Newsletter API",
    projectLink: " https://quiet-waters-59694-0fec5b9a4c86.herokuapp.com/ ", //project link here based on you choice
    image: ImageTwo,
  
  },
  {
    sectionId: 2,
    projectName: "Currency Mobile APP",
    projectLink: " https://github.com/FrikkieRyan22/Currency_Converter.git ", //project link here based on you choice
    image: ImageFour,
  
  },
  {
    sectionId: 2,
    projectName: "Bill Tip Mobile APP",
    projectLink: " https://github.com/FrikkieRyan22/Bill.git ", //project link here based on you choice
    image: ImageFive,
  
  },
  {
    sectionId: 3,
    projectName: "Dating Page App Download",
    projectLink: "",
    image: ImageThree,
    
  }
];

export const filterOptions = [
  {
    label: "All",
    id: 1,
  },
  {
    label: "Developement",
    id: 2,
  },
  {
    label: "In-Progress",
    id: 3,
  },
];