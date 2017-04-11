/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append(["VALERIU"]);
// $("#workExperience").append([["employer","title","location","dates","description"],["employer","title","location","dates","description"]]);
// $("#projects").append(["basics html and css"]);
// $("#education").append(["udacity frontend nanodegree "]);
// $("#").append([""]);
/*
=======================================================
this is a set of previous tasks from previous chalanges
=======================================================
*/
// var firstName = "valerius";
// var age = 32;
// console.log(firstName);
// var awesomethoughts = "I am valeriu and I am AWESOME";
// console.log(awesomethoughts);
// var funthoughts = awesomethoughts.replace("AWESOME", "FUN");
// $("#main").append(funthoughts);
// ==========================================================

// I should use preppend instead of append so the name will be before <ul> tag
//because <ul> tag is empty the page look as it shows in the result.
var skills = ["Html", "Css", "Javascript",'Python', 'jQuery','Grunt','GitHub', 'Bootstrap'];
var bio = {
    "name": "Valeriu turcanu ",
    "role": "Web Developer",
    "contacts": {
        // "mobile": "241-241-32",
        "email": "valeriuworkemail@gmail.com",
        "github": "valeriusturcanus",
        // "twitter": "@iHaveNoTwiter",
        "location": "Liverpool UK"
    },
    "welcomeMessage": "Welcome to my page",
    "skills": skills,
    "bioPic": "images/euCV150-300.jpg"
};

$('#main').append(internationalizeButton);
function inName(name){
  var splitBioName = name.split(' ');
  var family = splitBioName[1].toUpperCase();
  var firstName = splitBioName[0].substring(0,1).toUpperCase()+splitBioName[0].substring(1,splitBioName[0].length);
  name = firstName + ' ' +family;
  return name
}
console.log(bio.name);
// inName(bio.name);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var allSkills = "";
var skill;
for (skill in bio.skills) {
    // console.log(skill);
    allSkills += HTMLskills.replace("%data%", bio.skills[skill]);
}
//--------------------------
//this is problem quiz for dot and braket object notation
// var work = {};
// work.position = "chef";
// work.employer = "bitro oui";
// work.years = "2016-2017";
// work.city = "Liverpool";
// var education = {};
// education["name"] = "Mihai Viteazul";
// education["years"] = "2001-2003";
// education["city"] = "Cimislia";
// $("#main").append(work.position);
// $("#main").append(education["name"]);
// -------------------------
//--------------------------
//validating json quiz
var education = {};
education.schools = [{
        "name": "Mihai Viteazul",
        "location": "Cimislia",
        "degree": "High School",
        "majors" : 'Mathematics, Romanian Language, Geography',
        "dates": "2001-2003"
    },
    {
        "name": "Technical University of Moldova",
        "location": "Chisinau",
        "degree": "Undeclared BA",
        'majors' : 'Engineering in Telecommunications, Management in Telecommunications',
        "dates": "2004-2007"
    }
];
education.onlineCourses = [{
    "title": "javascript basics",
    "school": "Udacity",
    "dates": "2016-2017",
    "url": "https://www.udacity.com/course/javascript-basics--ud804"
}];
var work = {
    "jobs": [{
            "employer": "slug and lettuce",
            "title": "chef",
            "location": "Liverpool",
            "dates": "2015-2016",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "employer": "Bistro Oui",
            "title": "chef",
            "location": "Liverpool",
            "dates": "2016-2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]
};
var projects = {
    "project": [{
            "title": "Intro Html and css",
            "dates": "2016",
            "description": "Final project for Intro to html and css. In this course we had an introduction to html and css made our own 12 colum grid css framework and for final project we used the oficial bootstrap css framework",
            "images": ['images/htmlCss350.png'],
            "url": "https://valeriusturcanus.github.io/finalHtmlCss/"
        },
        {
            "title": "Responsive Web Design Fundamentals",
            "dates": "2016",
            "description": "Final project for Responsive web design fundamentals. In this course we had a introduction to responsive web using media queries and for final project we had to make page breakpoints for mobile, Ipad and for Desktop screen sizes",
            "images": ['images/responsiveWebDesign350.png'],
            "url": "https://valeriusturcanus.github.io/responsive/"
        },
        {
          "title": "Responsive Images",
          "dates": "2016",
          "description": "Final project for Responsive Images. In this course we learned to use as less raster images as possible using unicode characters and SVG. We used gruntjs to uglify files and optimize raster images",
          "images": ['images/responsiveImages350.png'],
          "url": "https://valeriusturcanus.github.io/responsiveImages/"

        },
        {
        "title": "Javascript Basics",
        "dates": "2017",
        "description": "Final project for Javascript Basics. We learned to add text in to html tags and html tags in the web page  dynamically using Javascript and JSON. We used google maps API to display google maps and  add map markers and description to each location",
        "images": ['images/javascriptBasics350.png'],
        "url": "#"
        }

    ]
};




$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// $("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
// $("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedPicture);
// $("#header").append(formattedWelcome);

$("#header").append(HTMLskillsStart);
$("#skills").append(allSkills);

// for in loops quiz flow control lesson 19/01/2017
work.display = function(){
  for (var job = 0;job < work.jobs.length; job++){
    // console.log(work.jobs[job].employer);
    $('#workExperience').append(HTMLworkStart);
    var formatedEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
    var formatedTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title);
    //
    // work-entry is a class of all div elements created by HTMLworkStart
    //
    // console.log(formatedEmployer + formatedTitle);
    var formatedDates = HTMLworkDates.replace('%data%',work.jobs[job].dates);
    var formatedLocation = HTMLworkLocation.replace('%data%',work.jobs[job].location);
    var formatedDescription = HTMLworkDescription.replace('%data%',work.jobs[job].description);
    var datesLocationDescription = formatedDates + formatedLocation + formatedDescription;
    $('.work-entry:last').append(formatedEmployer + formatedTitle + datesLocationDescription);
    // console.log($('.work-entry'));

  };
};
education.display = function(){
  for (var school = 0;school < education.schools.length; school++){
    // console.log(education.schools[school].name);
    $('#education').append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace('%data%',education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace('%data%',education.schools[school].degree);
    // //
    // // work-entry is a class of all div elements created by HTMLworkStart
    // //
    // console.log(formatedSchoolName + formatedSchoolDegree);
    var formatedDates = HTMLschoolDates.replace('%data%',education.schools[school].dates);
    var formatedLocation = HTMLschoolLocation.replace('%data%',education.schools[school].location);
    var formatedMajors = HTMLschoolMajor.replace('%data%',education.schools[school].majors);
    var datesLocationMajors = formatedDates + formatedLocation + formatedMajors;
    var nameDegree = formattedSchoolName + formattedSchoolDegree;
    $('.education-entry:last').append(nameDegree + datesLocationMajors);
    // // console.log($('.work-entry'));

  };
};
education.display();
// work.display();
// $(document).click(function(loc){
//   console.log('xLocation'+loc.pageX + '|yLocation' + loc.pageY);
//
// });
projects.display = function(){
  for (var number = 0; number < projects.project.length; number++){
    $('#projects').append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace('%data%',projects.project[number].title);
    formattedProjectTitle =    formattedProjectTitle.replace('#',projects.project[number].url);
    var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.project[number].title);
    var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.project[number].description);
    var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.project[number].images);
    $('.project-entry:last').append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage);
  }

};
projects.display();
$('#mapDiv').append(googleMap);
