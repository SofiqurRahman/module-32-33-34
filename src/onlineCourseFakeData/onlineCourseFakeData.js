let onlineCourseFakeData = [
  {
    name: 'RESTful API with HTTP and JavaScript',
    price: '100',
    courseDuration: '3 Month',
    img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/ee/d46a24511b4101be39111feda2ccea/RESTful800x800.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
  },
  {
    name:'Full-Stack Web Development with React',
    price: '200',
    courseDuration: '4 Month',
    img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/eb/cab7f07dd411e8991ff71ead974a6c/Slide1.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
  },
  {   
    name:'Software Design and Architecture',
    price: '300',
    courseDuration: '5 Month',
    img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/42/b45be076f911e7a3133714ebc885f2/SDALogo-newOption.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
  },
  {   
    name:'Full Stack Web and Multiplatform Mobile App Development',
    price: '400',
    courseDuration: '6 Month',
    img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/a4/d69e204d3a11e7bd76e991b22caa52/HKUST_full-stack-banner.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
  },
  {   
    name:'Developing APIs with Google Clouds Apigee API Platform',
    price: '500',
    courseDuration: '3 Month',
    img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/e6/495f603fdd11e79e71e78acf0bed19/google_AFW_2192_RGB_F2v2.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
  },
  {   
    name:'Front-End Web Development with React',
    price: '600',
    courseDuration: '4 Month',
    img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/5f/506890537e11e8966b999b6cf9ce61/logo.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
  },
  {   
    name:'Using Python to Access Web Data',
    price: '200',
    courseDuration: '5 Month',
    img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/53/01bee0502a11e58ddc8ff4d6e0523a/pythonnetworkdata_thumbnail_1x1.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
  },
  {   
    name:'Agile with Atlassian Jira',
    price: '400',
    courseDuration: '6 Month',
    img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/44/a1aa6de0754300a8bb8a2f2d2ac817/atlassian-logo-gradient-vertical-white.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
  },
  {   
    name:'How Things Work: An Introduction to Physics',
    price: '300',
    courseDuration: '4 Month',
    img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/a7/3b2ef504dc4c08cf37ad097944120f/logo.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
  },
  {   
    name:'Version Control with Git',
    price: '500',
    courseDuration: '5 Month',
    img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/51/ecc7a0d9f011e79fde91c2c898f933/Course-1-Logo.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
  },
  {   
    name:'Personality Types at Work',
    price: '600',
    courseDuration: '6 Month',
    img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/df/7a76006fb411e6aa674545a373872a/UF_PersonalityTypesAtWork_Logo.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
  },
  {   
    name:'Object-Oriented Design',
    price: '200',
    courseDuration: '5 Month',
    img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/e9/498510722711e78adf8b73211f164c/SDA-Courseralogos-C1-option1.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
  },
  {   
    name:'Ready, Set, Future! Introduction to Futures Thinking',
    price: '400',
    courseDuration: '4 Month',
    img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/36/614c7a62254878ae597f9da4293433/Ready-Set-Future.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
  },
  {   
    name:'Amazon DynamoDB: Building NoSQL Database-Driven Applications',
    price: '300',
    courseDuration: '3 Month',
    img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/a6/5a3fc03aa849d8bfe1633b15a6ae00/DynamoDBicon-08.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
  },
  {   
    name:'Server-side Development with NodeJS, Express and MongoDB',
    price: '400',
    courseDuration: '6 Month',
    img: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/c3/2ab0304cf611e7a143498f0a05f3b8/Logo.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
  }
];

export default onlineCourseFakeData;