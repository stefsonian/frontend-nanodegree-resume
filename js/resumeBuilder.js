



var formattedName = HTMLheaderName.replace("%data%", "Stefan Stefansen");
var formattedRole = HTMLheaderRole.replace("%data%", "Consultant");
var skills = ["Business Analysis", "Data analysis", "R", "Python"];

var bio = {
    "name": "Stefan Stefansen",
    "role": "Consultant",
    "photo": "images/li_img.jpg",
    "welcomeMessage": "Welcome",
    "skills": skills
};

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
}

function displayWork() {
    var job1 = {
        "employer": "Quintiq",
        "title": "Lead Consultant",
        "responsibilities": "Delivered five complete software development lifecycles with the agile methodology and proprietary software. Facilitated 100+ workshops for solution analysis, software modelling, and iterative development. Documented solution architecture for major clients. Engaged daily with client business and IT stakeholders including business analysts, platform architects, subject matter experts, top management as well as in-house developers and architects.Undertook project management tasks for several projects, including responsibility for managing scope, time, risks and coordination of delivery teams. Oversaw multiple projects in a quality assurance capacity, training and guiding colleagues on best practices and solutions.",
        "location": "Melbourne, Australia",
        "start": "2011",
        "end": "2015"
    };

    var job2 = {
        "employer": "Decision Logic",
        "title": "Consultant",
        "responsibilities": "Independent consultant contracting with major European logisitcs providers to develop customised in-house business intelligence solutions. These have included a central pricing application, a customer quote application, and a sensitivity analysis tool for scenario analysis. These have been built using the customer's preferred pre-existing software, primarily MS Excel and its programming language VBA.",
        "location": "Denmark, Netherlands, Belgium, Sweden",
        "start": "2006",
        "end": "2011"
    };

    var job3 = {
        "employer": "Maersk",
        "title": "Ship Broker",
        "responsibilities": "In daily contact with vessel and cargo owners brokering multimillion dollar vessel lease agreements.",
        "location": "Copenhagen, Denmark", 
        "start": "2002",
        "end": "2006"
    };

    var work = {"jobs": [job1, job2, job3]};

    //Insert job stuff
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        $("#workExperience").append(HTMLworkStart);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $("#workExperience").append(HTMLworkStart);
        var workDates = work.jobs[job].start + ' - ' + work.jobs[job].end;
        var formattedDates = HTMLworkDates.replace("%data%", workDates);

        $("#workExperience").append(HTMLworkStart);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

        $("#workExperience").append(HTMLworkStart);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].responsibilities);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
} 

displayWork();


var school1 = {
    "name": "University of Melbourne",
    "location": "Melbourne, Australia",
    "degree": "Master of Management",
    "major": "Business Analysis & Systems",
    "start": "2009",
    "end": "2011"
};

var school2 = {
    "name": "University of Queensland",
    "location": "Brisbane, Australia",
    "degree": "Bachelor of Arts",
    "major": "Psychology, Philosophy",
    "start": "2006",
    "end": "2009"
};

var school3 = {
    "name": "Johns Hopkins University",
    "location": "Coursera online",
    "degree": "Data Science Specialization",
    "major": "Data Science",
    "start": "2015",
    "end": "2016"
};

var education = [school1, school2, school3];

var proj1 = {
    "title": "Data Science Capstone",
    "description": "Capstone for Coursera Data Science Specialization",
    "images": [],
    "start": "2015",
    "end": "2016"
};

var projects = [proj1];

projects.display = function() {
    for (project in projects) {
        if (!project[project]) {
            break; // fixes bug where an extra 'undefined' project was added to the projects array.
        }

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects[project].title);
        $(".project-entry:last").append(formattedTitle);
    
        var formattedDates = HTMLprojectDates.replace("%data%", projects[project].start + ' - ' + projects[project].end);
        $(".project-entry:last").append(formattedDates);    
        
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects[project].images.length > 0) {
            for (image in projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects[project].image);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();

formattedBioPic = HTMLbioPic.replace("%data%", bio.photo);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(formattedBioPic);
$("#main").append(googleMap);

$(document).click(function(loc) {
    // your code goes here
    logClicks(loc.pageX, loc.pageY)
    //var pos = 'X: ' + loc.pageX + '   Y: ' + loc.pageY;
    //console.log(pos);
    
});




