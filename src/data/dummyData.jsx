export default{
    firstName:'FirstName',
    lastName:'LastName',
    jobTitle:'Job Title',
    address:'525 N tryon Street, NC 28117',
    phone:'(123)-456-7890',
    email:'exmaple@gmail.com',
    themeColor:"#33CEFF",
    summary:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    experience:{
        0: {
            id:1,
            title:'Full Stack Developer',
            companyName:'Amazon',
            city:'New York',
            state:'NY',
            startDate:'Jan 2021',
            endDate:'',
            currentlyWorking:true,
            workSummary:' Designed, developed, and maintained full-stack applications using React and Node.js.\n'+
            '• Implemented responsive user interfaces with React, ensuring seamless user experiences across\n'+
            'various devices and browsers.\n'+
            '• Maintaining the React Native in-house organization application.'+
            '• CreatedRESTfulAPIs withNode.js and Express,facilitating data communicationbetween the front-end'+
            'and back-end systems.'
        },
        1: {
            id:2,
            title:'Frontend Developer',
            companyName:'Google',
            city:'Charlotte',
            state:'NC',
            startDate:'May 2019',
            endDate:'Jan 2021',
            currentlyWorking:false,
            workSummary:' Designed, developed, and maintained full-stack applications using React and Node.js.'+
            '• Implemented responsive user interfaces with React, ensuring seamless user experiences across'+
            'various devices and browsers.'+
            '• Maintaining the React Native in-house organization application.'+
            '• CreatedRESTfulAPIs withNode.js and Express,facilitating data communicationbetween the front-end'+
            'and back-end systems.'
        }
    },
    education:{
       0: {
            id:1,
            universityName:'Western Illinois University',
            startDate:'Aug 2018',
            endDate:'Dec:2019',
            degree:'Master',
            major:'Computer Science',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        },
       1: {
            id:2,
            universityName:'Western Illinois University',
            startDate:'Aug 2018',
            endDate:'Dec:2019',
            degree:'Master',
            major:'Computer Science',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        }
    },
    skills:{
        0: 'React',
        1: 'Angular',
        2: 'MySQL',
        3: 'NodeJS'
    }
}