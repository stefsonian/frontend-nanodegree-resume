

var formattedName = HTMLheaderName.replace("%data%", "Stefan Stefansen");
var formattedRole = HTMLheaderRole.replace("%data%", "Consultant");


if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
}

function displayWork() {

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



var education = [school1, school2, school3];


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




