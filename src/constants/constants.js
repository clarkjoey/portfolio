export const projects = [
  {
    title: 'Bad Bank Three-Tier',
    description: `"Bad Bank" is my MIT capstone application with a front-end, back-end, and database. The Bad Bank name refers to the project's earlier iteration where it was a banking application that was not secure (i.e. no login, no administrative privileges). However, we will be using firebase authentication and authorization to create different levels of authorization to turn "Bad Bank" into a more secure bank - a lot like what a really company might use. This project was created in my effort to learn how to build a complete 3-tier application and it will continue to grow as my knowledge of application development grows. It is also designed to be an easy way to show off things I've learned in my Master's Full Stack Development program.`,
      image: '/images/badbank.png',
      tags: ['Mongo', 'React', 'Express', 'Node', 'Docker'],
    source: 'https://badbank-docker-edvmxc3iaa-uw.a.run.app',
    visit: 'https://github.com/clarkjoey/BadBank-three-tier',
    id: 0,
  },
  {
    title: 'Bug Tracker',
    description: `"Bug Tracker" is a coding project designed to mimic the job of a potential employer's error tracking system. Error tickets can be created and edited by all users and resolved/deleted by an admin user. Authentication via a login page, will be used to allow for distinction between those with admin capabilities and those without. Error tickets along with user accounts will be keep in a Mongo Database. This project is styled in CSS currently with plans to add Bootstrap styling in the future. This project is unfinished right now and the goal is to launch in February 2022.`,
      image: '/images/bug-tracker.png',
      tags: ['Mongo', 'React', 'Express', 'Node', 'Bootstrap'],
    source: '',
    visit: 'https://github.com/clarkjoey/Bug-tracker',
    id: 1,
  },
];

export const TimeLineData = [
  { year: 2015, text: 'Started learning to code with Java', },
  { year: 2019, text: 'Picked coding back up with R Studio', },
  { year: 2020, text: 'Started my Masters program in Full Stack Development', },
  { year: 2021, text: 'Graduated from Masters program', },
  { year: 2022, text: 'Launching the Bug Tracker web application in February', },
];