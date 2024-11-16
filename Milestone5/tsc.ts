//get references to the form dispaly area//
const Form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-dispaly') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

//handle form submission
Form.addEventListener('submit',(event:Event) =>{

 event.preventDefault(); //prevent page reload
 //collect input values
 const username = (document.getElementById('username') as HTMLInputElement).value;
 const name = (document.getElementById('name')as HTMLInputElement).value
 const email = (document.getElementById('email')as HTMLInputElement).value
 const phone = (document.getElementById('phone')as HTMLInputElement).value
 const education = (document.getElementById('education')as HTMLInputElement).value
 const experience = (document.getElementById('experience')as HTMLInputElement).value
 const skills = (document.getElementById('skills')as HTMLInputElement).value
 //Save form data in localstorage with the username as the key
 const resumeData = {
   name,
   email,
   phone,
   education,
   experience,
   skills,
 };
 localStorage.setItem(username, JSON.stringify(resumeData)); //save the data locally

 //Genreate the resume content dynamically

 const resumeHTML =`
 <h2><bEditable Resume</b></h2>
 <h3>Persnol Information</h3>
 
<p><b>Name:</b><span contenteditable="true">${name}</span></p>
<p><b>Email:</b><span contenteditable="true">${email}</span></p>
<p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

<h3>Education</h3>
<p contenteditable="true">${education}</p>

<h3>Experience</h3>
<p contenteditable="true">${experience}</p>

<h3>Skills</h3>
<p  contenteditable="true">${skills}</p>
 `;

 //Dispaly the genrated resume


    resumeDisplayElement.innerHTML= resumeHTML;
 //generate a shareable URL with the username only

 const shareableURL =
 `${window.location.origin}?username=${encodeURIComponent(username)}`;
 //display the shareable link
 shareableLinkContainer.style.display = 'block';
 shareableLinkElement.href = shareableURL;
 shareableLinkElement.textContent = shareableURL;

});
//handle PDF download
downloadPdfButton.addEventListener('click',() =>{
   window.print();  //this will open the print dialog and allow the user to save as pdf
});
//prefill the form based on the username in the url
window.addEventListener('DOMContentLoaded', () =>{
   const urlParms = new URLSearchParams(window.location.search);
   const username =urlParms.get('username');
   if  (username){


//autofill gorm is data is found in localstorge
const saveResumeData = localStorage.getItem(username);
if (saveResumeData){
   const resumeData = JSON.parse(saveResumeData);
   (document.getElementById('username') as HTMLInputElement).value =username;
   (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
   (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
   (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
   (document.getElementById('education') as HTMLInputElement).value = resumeData.education;
   (document.getElementById('experience') as HTMLInputElement).value = resumeData.experience;
   (document.getElementById('skills') as HTMLInputElement).value = resumeData.skills;
}
}
});