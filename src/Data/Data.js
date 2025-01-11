export const data = {
  profile: {
    name: "Tejeshwer Singh Sachdeva",
    image: require("../images/a.png"),
    profession: "Front-End Developer",
    bio: [
      "Hi there! I’m an iOS Developer with a strong foundation in front-end web development, and I have a passion for building intuitive, user-centric applications across platforms. Currently, I’m an Associate Engineer at Hughes Systique Corporation (HSC), where I work on iOS applications that leverage my expertise in Swift, UIKit, and XCTest.",
      "I began my career as a Frontend Developer Intern at Invsto, where I contributed to building a unified trading interface, gaining experience in creating dynamic and responsive web applications. I then moved to Shloka Concepts, where I developed CRM websites as a Frontend Developer Intern, honing my skills in web technologies like JavaScript and ReactJS.", 
      "In my current role at HSC, I’ve worked on several impactful iOS application projects, including HughesLEO, Wifi Connection Applications, and FocalPoint. These experiences have sharpened my skills in building scalable, performant, and user-friendly applications for both iOS and cross-platform environments.",
      "I am driven by the challenge of solving complex problems and continuously improving my craft. I’m always open to learning new technologies and excited about opportunities that allow me to grow and make an impact.",
    ],
    resume:
      "https://drive.google.com/file/d/1hWt_Fi0KsMxN0Z2do8PMfFp1vii-Rnjr/view?usp=sharing",
  },

  education: {
    btech: {
      college: "ITM University, Gwalior",
      score: "8.6 GPA",
      year: "2019-2023",
      degree: "B.Tech Computer Science",
    },
    twelth: {
      college: "Indian School Certificate Examination",
      score: "78.5",
      year: "2017-2018",
      degree: "Higher Secondary Certificate",
    },
    tenth: {
      college: "Indian Certificate of Secondary Education",
      score: "85",
      year: "2015-2016",
      degree: "Secondary School Certificate",
    },
  },

  skills: {
    swift: "80",
    "iOS development": "70",
    "front-end": "70",
    "full-stack": "40",
    "react.js": "80",
    javascript: "80",
    "c++": "60",
  },

  experience: [
    {
      companyName: "Invsto",
      role: "Front-End Web Development Intern",
      startDate: "November 2021",
      endDate: "September 2022",
      description: [
        "Implemented React-Redux in the application, streamlining state management and improving application performance by 22%. This enhancement led to a 25% reduction in development time for new features and increased overall application responsiveness.",
        "Developed a strategy code editor using Monaco, enabling users to write Python scripts for trade execution strategies, thereby enhancing the platform’s functionality.",
        "Utilized Axios for optimized API calls, reducing data fetching time and improving overall application performance."
      ],
      technologies: ["ReactJS", "React-Redux", "Monaco", "Axios"],
    },
    {
      companyName: "Shloka Concepts",
      role: "Front-End Web Development Intern",
      startDate: "September 2022",
      endDate: "December 2022",
      description: [
        "Streamlined invoice generation and email processes, minimizing user intervention by implementing automation features using React-pdf library.",
        "Implemented seamless integration between Shopify and CRM platforms, optimizing product mapping processes and enhancing overall workflow efficiency with ReactJS, React-Redux and Ant Design components."
      ],
      technologies: ["ReactJS", "React-Redux", "React-pdf", "Ant Design"],
    },
    {
      companyName: "Hughes Systique Corporation",
      role: "Associate Engineer",
      startDate: "January 2023",
      endDate: "till date",
      description: [
        "Designed and implemented a robust file download mechanism using MVVM, ensuring seamless synchronization of server files upon expiration. Implemented additional logic for synchronizing local bundle files with server files addressing scenarios involving connectivity issues and server responses.",
        "Developed a user consent feature to toggle the upload of Firebase crash logs, analytics, and other pertinent user data. Implemented this feature using MVVM to maintain clear separation of concerns and ensure smooth integration with existing application components.",
        "Conducted thorough testing of application components using XCTest framework. Implemented API response simulations, boosting overall test coverage by 42%"
      ],
      technologies: ["Swift", "UIKIt", "Alamofire", "MVVM", "XCTest", "Firebase"],
    },
  ],

  projects: {
    "covid tracker": {
      name: "Covid-19 Tracker",
      domain: "Front-End Development",
      details:
        "It was built using React.JS. It lists out the covid-19 cases in the world wich can also be filtered out by coutries. The app also has a toogle button to switch between light and dark modes. It uses chart and map for a beautiful visualization of Covid Data",
      url: "https://covid-19-tracker-tejeshwer.netlify.app/",
      img: require("../images/Covidtracker.png"),
      github: "https://github.com/Tejeshwer25/covid_tracker",
    },
    "amazon clone": {
      name: "Amazon Clone",
      domain: "Full-Stack Development",
      details:
        "This clone allows user to add item to basket, make a payment to purchase items in basket. It also has login/logout functionalities using user email handled using Firebase. This was built using React.Js. It uses Firebase as the backend and Stripe for payment handling.",
      url: "https://clone-1f843.web.app/",
      img: require("../images/Amazonclone.png"),
      github: "https://github.com/Tejeshwer25/Amazon-clone",
    }
  },

  blogs: {
    blog1: {
      name: "Git & Github",
      details:
        "Git is a distributed Version Control System(VCS), founded in 2005 by Linus Torvalds. Version Control System is the system used to track the changes in the files of our project. Git is a distributed VCS as more than one developer can make their contributions to a project without being on the same network from anywhere in the world, this is also . …",
      mediumURL:
        "https://tejeshwersingh.medium.com/git-github-6ea45eda5edf?source=user_profile---------4----------------------------",
      hashnodeURL: "",
      devURL: "",
      img: require("../images/gitGithub_blog.jfif"),
    },
    blog2: {
      name: "JavaScript CheatSheet",
      details:
        "This is a sheet I had created for my reference you can use it if you want to. And if there are any mistakes please do correct me in the comments. …",
      mediumURL:
        "https://tejeshwersingh.medium.com/javascript-tutorial-58da7704f16e?source=user_profile---------2----------------------------",
      hashnodeURL: "",
      devURL: "",
      img: require("../images/javascript_blog.jfif"),
    },
    blog3: {
      name: "AJAX",
      details:
        "AJAX is an acronym for Asynchronous JavaScript And XML, it is a set of web technologies to send and receive data from client to server asynchronously. It does all of this behind the scenes and that does not require reloading the page. …",
      mediumURL:
        "https://tejeshwersingh.medium.com/ajax-54ea02a2bcec?source=user_profile---------1----------------------------",
      hashnodeURL: "",
      devURL: "",
      img: require("../images/AJAX_blog.png"),
    },
    blog4: {
      name: "Web Components",
      details:
        "Whenever we use any of those Front-end frameworks present in the market, like React, Angular, Vue, etc., we mostly break our User Interface into smaller manageable parts called the components. But have you ever thought that whether or not can we divide our UI into components without using these frameworks? …",
      mediumURL:
        "https://tejeshwersingh.medium.com/web-components-c3aa7238cd13?source=user_profile---------0----------------------------",
      hashnodeURL:
        "https://tejeshwer-singh.hashnode.dev/web-components-ckrc2hfz700q291s1d9lmbkyw",
      devURL: "https://dev.to/tejeshwer25/web-components-2303",
      img: require("../images/webComponent_blog.jfif"),
    },
    blog5: {
      name: "Creating Rock, Paper & Scisoors Game",
      details:
        "A rock, paper, scissor game is usually a hand game played between 2 players normally. But in this online age let's play our part in modifying this hand-based offline game and make it digital. To make this game we'll be using HTML, CSS, and… …",
      mediumURL:
        "https://tejeshwersingh.medium.com/rock-paper-scissors-game-using-html-css-js-6914d16f7760",
      hashnodeURL:
        "https://tejeshwer-singh.hashnode.dev/rock-paper-scissor-game-using-html-css-and-js-ckrx6xocu01ir0ls19x0h5a13",
      devURL: "https://dev.to/tejeshwer25/rock-paper-and-scissors-game-58g0",
      img: require("../images/rpsGame_blog.jfif"),
    },
    blog6: {
      name: "Conditional Rendering in React",
      details:
        "It might have happened or will surely happen with you that, you'd want to render the whole of the react component or a part of it based on some conditions according to the state of your component. That's where conditional rendering will save you. …",
      mediumURL:
        "https://tejeshwersingh.medium.com/conditional-rendering-in-react-43d58c597eaa",
      hashnodeURL:
        "https://tejeshwer-singh.hashnode.dev/conditional-rendering-in-react",
      devURL: "https://dev.to/tejeshwer25/conditional-rendering-in-react-1bah",
      img: require("../images/conditionalRenderingReact_blog.png"),
    },
    blog7: {
      name: "Rendering Lists in React",
      details:
        "Common scenario while working on a website is to render a list of items, that might be your follower's list, notes in a todo app, contact list, or any kind of a list. In a simple static HTML site, we use the <ul> or <ol> tag along with the <li> tags to render the list based on whether it is unordered or ordered respectively. But in this article, we'll dive into the rendering list with ReactJS. …",
      mediumURL: "",
      hashnodeURL:
        "https://tejeshwer-singh.hashnode.dev/rendering-lists-in-react",
      devURL: "https://dev.to/tejeshwer25/rendering-lists-in-react-55p4",
      img: require("../images/renderingList_blog.png"),
    },
  },

  social: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/tejeshwer-singh-sachdeva-1961a9191/",
      img: require("../images/linkedin.png"),
    },
    Twitter: {
      link: "https://twitter.com/tejeshwer_dev",
      img: require("../images/twitter.png"),
    },
    Github: {
      link: "https://github.com/Tejeshwer25",
      img: require("../images/github.png"),
    },
  },
};
