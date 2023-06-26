import ImageOne from "../../images/todo.jpg";
import ImageTwo from "../../images/News.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";

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