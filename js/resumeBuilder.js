
// Two helper functions to format and then insert items into the DOM.
var prependItem = function(elem, destID, value) {
    var formattedItem = elem.replace("%data%", value);
    $(destID).prepend(formattedItem);
}

var appendItem = function(elem, destID, value) {
    var formattedItem = elem.replace("%data%", value);
    $(destID).append(formattedItem);
}

var bio = {
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
    "skills": ["Business Analysis", "Data analysis", "R", "Python", "Javascript"],
    "display": function() {
        prependItem(HTMLheaderRole, '#header', bio['role']);
        prependItem(HTMLheaderName, '#header', bio['name']);
        appendItem(HTMLbioPic, '#header', bio['biopic']);
        appendItem(HTMLwelcomeMsg, '#header', bio['welcomeMessage']);
        
        // Note to reviewer:
        // I realise this type of for loop is frowned upon
        // but in this case I need the key for the initial replace call
        // because the helper functions I have defined only substitute %data%
        // and not %contact%. 
        for (var key in bio.contacts) {
            if (bio.contacts.hasOwnProperty(key)) {
                var formattedElem = HTMLcontactGeneric.replace('%contact%', key);
                appendItem(formattedElem, '#topContacts', bio.contacts[key]);
                appendItem(formattedElem, '#footerContacts', bio.contacts[key]);
            }
        }

        // add skills
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            appendItem(HTMLskills, '#skills', skill);
        });
    }
};
bio.display();

var education = {
    "schools": [
        {
            "name": "University of Melbourne",
            "location": "Melbourne, Australia",
            "degree": "Master of Management",
            "majors": ["Business Analysis & Systems"],
            "dates": "2009-2011",
            "url": "http://unimelb.edu.au"
        },
        {
            "name": "University of Queensland",
            "location": "Brisbane, Australia",
            "degree": "Bachelor of Arts",
            "majors": ["Psychology", "Philosophy"],
            "dates": "2006-2009",
            "url": "http://uq.edu.au"
        }
    ],
    "onlineCourses": [
        {
            "school": "Johns Hopkins University",
            "title": "Data Science Specialization",
            "dates": "2015-2016",
            "url": "https://www.coursera.org/specializations/jhu-data-science"
        }
    ],
    "display": function() {
        $('#education').append(HTMLschoolStart);
        // add education details
        education.schools.forEach(function(school) {
            var formattedName = HTMLschoolName.replace("%data%", school.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $('.education-entry').append(formattedName + formattedDegree);
            appendItem(HTMLschoolDates, '.education-entry', school.dates);
            appendItem(HTMLschoolLocation, '.education-entry', school.location);
            school.majors.forEach(function(major) {
                appendItem(HTMLschoolMajor, '.education-entry', major); 
            });
        });
        $('.education-entry').append(HTMLonlineClasses);
         education.onlineCourses.forEach(function(school) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", school.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", school.school);
            $('.education-entry').append(formattedTitle + formattedSchool);
            appendItem(HTMLonlineDates, '.education-entry', school.dates);
            appendItem(HTMLonlineURL, '.education-entry', school.url);
        });
    }  
};
education.display();

    
var work = {
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
    ],
    "display": function() {
        $('#workExperience').append(HTMLworkStart);
        work.jobs.forEach(function(job) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            $('.work-entry').append(formattedEmployer + formattedTitle);
            appendItem(HTMLworkDates, '.work-entry', job.dates);
            appendItem(HTMLworkLocation, '.work-entry', job.location);
            appendItem(HTMLworkDescription, '.work-entry', job.description);            
        });
    }
};
work.display();
    
var projects = {
    "proj": [
        {
            "title": "Data Science Capstone",
            "description": "Capstone for Coursera Data Science Specialization",
            "images": ["images/jhu-logo.png"],
            "dates": "2015-2016"
        }
    ],
    "display": function() {
        $('#projects').append(HTMLprojectStart);
        projects.proj.forEach(function(project) {
            appendItem(HTMLprojectTitle, '.project-entry', project.title);
            appendItem(HTMLprojectDates, '.project-entry', project.dates);
            appendItem(HTMLprojectDescription, '.project-entry', project.description);
            project.images.forEach(function(image) {
                appendItem(HTMLprojectImage, '#projects', image);
            });
        });
    }
};
projects.display();
// Add map
$('#mapDiv').append(googleMap);

// Add click position monitoring
var addClickPosition = function() {
    $(document).click(function(loc) {
        logClicks(loc.pageX, loc.pageY)
    });
}();

