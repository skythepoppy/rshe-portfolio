import {
    weather,
    weatherapi,
    menufood,
    pypackage,
    taskdo,
    todoweb,
    library1,
    vaip,
    modernforgehome,
    modernforgeproduct,
    modernforgeuser,
    portfolio1,
    portfolio2, 
    focusquest1, 
    focusquest2, 
    focusquest3
} from './assets/images.js';


const projects = [
    {
        id: 1,
        title: "Portfolio",
        image: [portfolio1, portfolio2],
        description: "Portfolio web app moved from streamlit.",
        about: "This website you're viewing this on was made to showcase my interests as well as my projects!",
        tags: ["JavaScript", "HTML", "CSS", "React", "Vite"],
        link: "https://github.com/skythepoppy/rshe-portfolio"
    },
    {
        id: 2,
        title: "Weather Dashboard",
        image: [weather],
        description: "Web application that presents the temperature and forecast by accessing global weather data from an API.",
        about: "This web application was one of the first projects I built, aimed at being able to practice fetching weather data using an API and presenting that data via a dashboard. This project was built using Python and Plotly(Python), and eventually deployed using streamlit. The application itself allows users to pick a place and get a projected forecast based on temperature, weather, etc.",
        tags: ["Python", "API", "Plotly", "Deployment: Streamlit"],
        link: "https://github.com/skythepoppy/weather-dashboard"
    }
    ,
    {
        id: 3,
        title: "Weather API",
        image: [weatherapi],
        description: "Developed a REST API that accesses historical temperature data from various European Cities",
        about: "This application was developed in order to practice working with FLASK and RESTful APIs. The project itself created a Weather API and presented the structured data as a table using HTML.",
        tags: ["Python", "RESTful API", "Flask", "Pandas", "Deployment: Streamlit"],
        link: "https://github.com/skythepoppy/historical-weather-api"
    }
    ,
    {
        id: 4,
        title: "Vehicular AI Presets",
        image: [vaip],
        description: "A full-stack web application that leverages AI facial recognition and machine learning to automate vehicle driver presets",
        about: "This full-stack web application was developed as a project for UTD’s 48 hour HACKUTD Hackathon. The project at its core uses AI Facial Recognition in order to automate driver presets such as seat incline, steering angle, and sidemirror angle. The prototype showcased this by detecting a specific user and adjusting the seat incline, steering angle, and sidemirror sliders on the user interface. \n\nThis project utilized Javascript and HTML/CSS for the front end, Python and Pytorch for AI facial logic and data manipulation (linear regression model) from a sample dataset, and Firebase as the database. ",
        tags: ["Python", "CSS", "JavaScript", "HTML", "React", "PyTorch", "Firebase"],
        link: "https://github.com/aerongcanlas/hack-utd-2022"
    }
    ,
    {
        id: 5,
        title: "Modern Forge",
        image: [modernforgehome, modernforgeuser, modernforgeproduct],
        description: "A full-stack e-commerce web application for DIY toy products. ",
        about: "This e-commerce web application was created on the idea of selling DIY toy kits in a manner similar to “Mall of Toys”. At its core, this project was created in order to practice creating a full-stack application that allowed user authentication using JWT authentication, connecting multiple (4) tables in a single relational database, and automated email sending to affiliate applicants, support inquiries, and new users. \n\nThis project utilized Javascript and HTML/CSS for the front end, Express and Node.js (alongside nodemailer for SMTP) for the backend, and MySQL and AWS S3 (S3 for backend database deployment along with EC2) for the database.",
        tags: ["JavaScript", "React", "HTML", "CSS", "MySQL", "Node.js", "Express", "RESTful API", "AWS",
            "Deployment: Vercel / AWS EC2"
        ],
        link: "https://github.com/skythepoppy/ModernForge"
    }
    ,
    {
        id: 6,
        title: "To-Do Web App",
        image: [todoweb],
        description: "Simple task managing web application.",
        about: "This project was created in order to showcase a simple and clean task management application. The project itself was aimed at practicing task generation and task deletion using Python.",
        tags: ["Python", "Deployment: Streamlit"],
        link: "https://github.com/skythepoppy/todo_web"
    }
    ,
    {
        id: 7,
        title: "Book Library Database",
        image: [library1],
        description: "Simple book library that allows users to enter book data to be stored in a database.",
        about: "This project was the first instance in which I used PostgreSQL. Using Python, this local application allowed the user to enter in book data based on Title, Author, and ISBN. Furthermore the database itself was pre-populated with book data from an API. Therefore users can add to this DB or search up book data.",
        tags: ["Python", "PostgreSQL"],
        link: "https://github.com/skythepoppy/book-database"
    }
    ,
    {
        id: 8,
        title: "Filipino Food Menu",
        image: [menufood],
        description: "A web application that displays a Filipino restaurant menu.",
        about: "This application was the first instance in which I used Python’s Django framework. Django itself uses SQLite by default, which allows for the storing of food items and order data into two separate tables. The webpage was created in order to practice using Django’s innate SQLite and rendering of HTML templates.",
        tags: ["HTML", "Python", "Django", "SQLite"],
        link: "https://github.com/skythepoppy/restaurant-menu-app"
    }
    ,
    {
        id: 9,
        title: "Local To-Do Task App",
        image: [taskdo],
        description: "Local desktop task management application.",
        about: "The prior iteration to the deployed To-Do web app, this project was created to first understand how to insert, edit, delete, and complete a task alongside a task counter.",
        tags: ["Python", "HTML", "CSS"],
        link: "https://github.com/skythepoppy/task-app"
    }, 
    {
        id: 10,
        title: "FocusQuest",
        image: [focusquest1, focusquest2, focusquest3],
        description: "Final Class project for creating a web application.",
        about: "This prototype was created as the final class project developed over 8 weeks. This project was aimed at practicing Agile methodologies and working in a large team (12 people)",
        tags: ["JavaScript", "HTML", "CSS", "React Native", "Design : Figma"],
        link: "https://github.com/3589hunter/3354-Group-1"
    }

];

export default projects;