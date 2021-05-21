var DATA = {
  'profile': {
    'name': 'Tejeshwer Singh Sachdeva',
    'image': require('../images/Profile1.png'),
    'profession': 'Front-End Developer',
    'bio': [
      "Hello, I'am Tejeshwer Singh Sachdeva!!!👳‍♂️", "I am a 20yr old Front-End Developer based in Jhansi, India. I am currently pursuing my Bachelors in Computer Science and Engineering from ITM University, Gwalior. Apart from that I am an all time explorer in the field of web & app development👨‍💻.", "'All work and no play makes jack a dull boy', this is a famous a quote and one of the main reasons I love playing games mostly outdoor. My hobbies include: Indulging with Music🎼, Sports(like Cricket🏏, Football⚽, Badminton🏸, etc), Little bit of Reading📖...", "Apart from the Tech stuff I am also a Defence Aspirant and crazy about the Indian Armed Forces👮‍♂️."],
    'resume': 'https://drive.google.com/file/d/1Q8Cm7mSlXpkQO_FeBIpT5JQ3Vdsf2vl_/view?usp=sharing',
  },

  "education": {
    'btech': {
      'college': "ITM University, Gwalior",
      'score': '',
      'year': '2019-2023',
      'degree': 'B.Tech Computer Science'
    },
    'twelth': {
      'college': "Indian School Certificate Examination",
      'score': '78.5',
      'year': '2017-2018',
      'degree': 'Higher Secondary Certificate'
    },
    'tenth': {
      'college': "Indian Certificate of Secondary Education",
      'score': '85',
      'year': '2015-2016',
      'degree': 'Secondary School Certificate'
    }
  },

  "skills": {
    "front-end": "70",
    "back-end": "10",
    "full-stack": "40",
    "react.js": "80",
    "python": "60",
    "javascript": "70",
    "c++": "60",
    "seo": "5"
  },

  "projects": {
    "covid tracker": {
      "name": "Covid-19 Tracker",
      "domain": "Front-End Development",
      "details": "It was built using React.JS. It lists out the covid-19 cases in the world wich can also be filtered out by coutries. API for this project was fetched from 'Disease.sh'. It features a theme toggler, implemented using 'styled-components'. Graph to display worldwide cases was implemented using 'react-chart-js2, to display the cases on the map, 'react-leaflet' was used with additional styling, 'react-spring' was used for transtition effects and the rest styling was handled by 'material-ui'.",
      "url": "https://elegant-bhabha-243c16.netlify.app/",
      "img": require("../images/Covidtracker.png"),
    }, 
    "amazon clone": {
      "name": "Amazon Clone",
      "domain": "Full-Stack Development",
      "details": "This clone allows user to add item to basket, make a payment to purchase items in basket. It also has login/logout functionalities using user email handled using Firebase. This was built using React.Js. It uses Firebase as the backend and Stripe for payment handling.",
      "url": "https://clone-1f843.web.app/",
      "img": require("../images/Amazonclone.png"),
    },
    "blogs": {
      "name": "My Blogs",
      "domain": "Content Writing",
      "details": "These blogs were created on 'blogger.com'. This site features blogs on the domain of Data Structures & Algorithms, and Web Development(especially Front-end).  ",
      "url": "http://lets-dev.blogspot.com/",
      "img": require("../images/lets-dev.PNG") 
    }
  },

  "social": {
    "LinkedIn": {
      "link": "https://www.linkedin.com/in/tejeshwer-singh-sachdeva-1961a9191/",
      "img": require("../images/linkedin.png")
    },
    "Facebook": {
      "link": "https://www.facebook.com/tejeshwersinghsachdeva.tss2500",
      "img": require("../images/facebook.png")
    },
    "Instagram": {
      "link": "https://www.instagram.com/lets_dev/",
      "img": require("../images/instagram.png")
    },
    "Twitter": {
      "link": "https://twitter.com/tejeshwer_singh",
      "img": require("../images/twitter.png")
    },
    // "Email": {
    //   "link": "tejeshwersingh2504@gmail.com",
    //   "img": require("../images/gmail.png")
    // },
    "Github": {
      "link": "https://github.com/Tejeshwer25",
      "img": require("../images/github.png")
    }
  }
};

export default DATA;