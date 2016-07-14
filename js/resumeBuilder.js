// Note to reviewer:
// I finished this project late in the front-end dev nano-degree so
// it's implemented using the mvc pattern taught toward the end of the programme.

var model = {
    bio: {
        "name": "Stefan Stefansen",
        "role": "Consultant",
        "contacts": {
            "mobile": "111-111111",
            "email": "email@email.com",
            "github": "git.github.com",
            "location": "Odense, Denmark"
        },
        "biopic": "images/li_img.jpg",
        "welcomeMessage": "Welcome",
        "skills": ["Business Analysis", "Data analysis", "R", "Python", "Javascript"]
        // display delegated to the view object.
    },

    education: {
        "schools": [
            {
                "name": "University of Melbourne",
                "location": "Melbourne, Australia",
                "degree": "Master of Management",
                "major": "Business Analysis & Systems",
                "dates": "2009-2011",
                "url": "http://unimelb.edu.au"
            },
            {
                "name": "University of Queensland",
                "location": "Brisbane, Australia",
                "degree": "Bachelor of Arts",
                "major": "Psychology, Philosophy",
                "dates": "2006-2009",
                "url": "http://uq.edu.au"
            }
            // display delegated to the view object.
        ],
        "onlineCourses": [
            {
                "school": "Johns Hopkins University",
                "title": "Data Science Specialization",
                "dates": "2015-2016",
                "url": "https://www.coursera.org/specializations/jhu-data-science"
            }
        ]  
        // display delegated to the view object.
    },
    
    work: {
        "jobs": [
            {
                "employer": "Quintiq",
                "title": "Lead Consultant",
                "description": "Delivered five complete software development lifecycles with the agile methodology and proprietary software. Facilitated 100+ workshops for solution analysis, software modelling, and iterative development. Documented solution architecture for major clients. Engaged daily with client business and IT stakeholders including business analysts, platform architects, subject matter experts, top management as well as in-house developers and architects.Undertook project management tasks for several projects, including responsibility for managing scope, time, risks and coordination of delivery teams. Oversaw multiple projects in a quality assurance capacity, training and guiding colleagues on best practices and solutions.",
                "location": "Melbourne, Australia",
                "dates": "2011-2015"
            },
            {
                "employer": "Decision Logic",
                "title": "Consultant",
                "description": "Independent consultant contracting with major European logisitcs providers to develop customised in-house business intelligence solutions. These have included a central pricing application, a customer quote application, and a sensitivity analysis tool for scenario analysis. These have been built using the customer's preferred pre-existing software, primarily MS Excel and its programming language VBA.",
                "location": "The Hague, Netherlands",
                "dates": "2006-2011"
            },
            {
                "employer": "Maersk",
                "title": "Ship Broker",
                "description": "In daily contact with vessel and cargo owners brokering multimillion dollar vessel lease agreements.",
                "location": "Copenhagen, Denmark", 
                "dates": "2002-2006"
            }
        ]
        // display delegated to the view object.
    },
    
    projects: [
        {
            "title": "Data Science Capstone",
            "description": "Capstone for Coursera Data Science Specialization",
            "images": ["images/jhu-logo.png"],
            "dates": "2015-2016"
        }
    ]
    // display delegated to the view object.
}


// The famous octopus controller
var octopus = {
    init: function() {
        view.init();
    },

    getDataObj: function(dataType) {
        return model[dataType];
    }
}

var view = {
    init: function() {
        view.addBio();
        view.addWorkExperience();
        view.addProjects();
        view.addEducation();
        view.addMap();
    },

    prependItem: function(elem, destID, value) {
        var formattedItem = elem.replace("%data%", value);
        $(destID).prepend(formattedItem);
    },

    appendItem: function(elem, destID, value) {
        var formattedItem = elem.replace("%data%", value);
        $(destID).append(formattedItem);
    },

    addBio: function() {
        var bio = octopus.getDataObj('bio');
        // add bio details
        view.prependItem(HTMLheaderRole, '#header', bio['role']);
        view.prependItem(HTMLheaderName, '#header', bio['name']);
        view.appendItem(HTMLbioPic, '#header', bio['biopic']);
        view.appendItem(HTMLwelcomeMsg, '#header', bio['welcomeMessage']);
        // add contact info
        for (var key in bio.contacts) {
            var formattedElem = HTMLcontactGeneric.replace('%contact%', key);
            view.appendItem(formattedElem, '#topContacts', bio.contacts[key]);
            view.appendItem(formattedElem, '#footerContacts', bio.contacts[key]);
        }
        // add skills
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            view.appendItem(HTMLskills, '#header', skill);
        });
    },

    addWorkExperience: function() {
        var work = octopus.getDataObj('work');
        // add work experience
        $('#workExperience').append(HTMLworkStart);
        work.jobs.forEach(function(job) {
            view.appendItem(HTMLworkEmployer, '.work-entry', job.employer);
            view.appendItem(HTMLworkTitle, '.work-entry', job.title);
            view.appendItem(HTMLworkDates, '.work-entry', job.dates);
            view.appendItem(HTMLworkLocation, '.work-entry', job.location);
            view.appendItem(HTMLworkDescription, '.work-entry', job.description);            
        });
    },

    addProjects: function() {
        var proj = octopus.getDataObj('projects');
        // add project details
        $('#projects').append(HTMLprojectStart);
        proj.forEach(function(project) {
            view.appendItem(HTMLprojectTitle, '.project-entry', project.title);
            view.appendItem(HTMLprojectDates, '.project-entry', project.dates);
            view.appendItem(HTMLprojectDescription, '.project-entry', project.description);
            project.images.forEach(function(image) {
                view.appendItem(HTMLprojectImage, '#projects', image);
                $('img:last').width('200px');
            });
        });
    },

    addEducation: function() {
        var edu = octopus.getDataObj('education');
        // add work experience
        $('#education').append(HTMLschoolStart);
        // add education details
        edu.schools.forEach(function(school) {
            view.appendItem(HTMLschoolName, '.education-entry', school.name);
            view.appendItem(HTMLschoolDegree, '.education-entry', school.degree);
            view.appendItem(HTMLschoolDates, '.education-entry', school.dates);
            view.appendItem(HTMLschoolLocation, '.education-entry', school.location);
            view.appendItem(HTMLschoolMajor, '.education-entry', school.major);
        });
        $(HTMLonlineClasses).insertAfter(".education-entry:eq(5)");
         edu.onlineCourses.forEach(function(school) {
            view.appendItem(HTMLonlineTitle, '.education-entry', school.title);
            view.appendItem(HTMLonlineSchool, '.education-entry', school.school);
            view.appendItem(HTMLonlineDates, '.education-entry', school.dates);
            view.appendItem(HTMLonlineURL, '.education-entry', school.url);
        });
    },

    addMap: function() {
        $('#mapDiv').append(googleMap);
    }
}

octopus.init();