import queenCityPups from  "../src/assets/images/queenCityPups.png"
import codeQuiz from  "../src/assets/images/codeQuiz.png"
import employeeTracker from  "../src/assets/images/employeeTracker.png"
import pokemonGiphy from  "../src/assets/images/pokemonGiphy.png"
import techBlog from  "../src/assets/images/techBlog.png"
import workDayScheduler from  "../src/assets/images/workDayScheduler.png"

let informationData = {
  name: "Brandy Moore",
  role: "Software Engineer",
  about:
    "Welcome! My name is Brandy and I am a Software Engineer trained at the University of North Carolina, Charlotte. I am an innovative problem-solver who is passionate about developing user friendly applications; focused on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to creation.",
  address: "Charlotte, NC",
  portfolio: [
    {
      name: "Queen City Pups",
      description:
        "Collaborated with a group of five developers to design a webpage that allows dog owners in Charlotte, NC to access local resources for their favorite pup in Queen City. This application uses Handlebars.js as a template engine, MySQL database, and Node.js.",
      imglink: "https://evening-river-11733.herokuapp.com/",
      imgurl: queenCityPups,
    },
    {
      name: "Tech-Blog",
      description:
        "A tech-blog that allows users to create an account and post on a blog forum. Users have the ability to comment on others posts, as well as, editing and deleting their own blog posts. This application uses Handlebars.js, node js, mysql, and other technologies. ",
        imglink: "https://murmuring-atoll-71811.herokuapp.com/",
      imgurl: techBlog,
    },
    {
      name: "Pokemon-Giphy",
      description:
        "Collaborated with a group of four developers to design a webpage that allows Pokemon fans to search any Pokemon and receive a variety of information in regards to that said Pokemon. This application uses JavaScript, Bootstrap, jQuery, and local storage.",
      imglink: "https://bbelk.github.io/pokemon-giphy-group-project/",
      imgurl: pokemonGiphy,
    },
    {
      name: "Code Quiz",
      description:
        "This code quiz project is a timed multiple-choice questioned quiz. This quiz features 4 questions, a timer, and a leadership board. When you press the begin button questions will begin to populate and the timer will begin. If questions are answered incorrectly, time is deducted. This project was completed using HTML, CSS, and JavaScript.",
      imglink: "https://evening-river-11733.herokuapp.com/",
      imgurl: codeQuiz,
    },
    {
      name: "Employee Tracker",
      description:
        "This is a Content Management System (CMS) application that will allow you to manage a company's database. Using this application, you will be able to manage the company's employees, roles, and departments.",
      imglink: "https://murmuring-atoll-71811.herokuapp.com/",
      imgurl: employeeTracker,
    },
    {
      name: "Work Day Scheduler",
      description:
        "This project is an app that allows the user to plan their day by the hourly block from 9am-5pm. The user can save text and also clear the text when needed.",
      imglink: "https://bbelk.github.io/pokemon-giphy-group-project/",
      imgurl: workDayScheduler,
    },
  ],
};

export default informationData;
