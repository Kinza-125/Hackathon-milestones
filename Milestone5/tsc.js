//get references to the form dispaly area//
var Form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-dispaly');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
//handle form submission
Form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Save form data in localstorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills,
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); //save the data locally
    //Genreate the resume content dynamically
    var resumeHTML = "\n <h2><bEditable Resume</b></h2>\n <h3>Persnol Information</h3>\n \n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p  contenteditable=\"true\">").concat(skills, "</p>\n ");
    //Dispaly the genrated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    //generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    //display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
//handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); //this will open the print dialog and allow the user to save as pdf
});
//prefill the form based on the username in the url
window.addEventListener('DOMContentLoaded', function () {
    var urlParms = new URLSearchParams(window.location.search);
    var username = urlParms.get('username');
    if (username) {
        //autofill gorm is data is found in localstorge
        var saveResumeData = localStorage.getItem(username);
        if (saveResumeData) {
            var resumeData = JSON.parse(saveResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
