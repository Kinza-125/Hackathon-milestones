//get references to the form dispaly area//
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDispalyElement = document.getElementById('resume-dispaly') as HTMLDivElement;

//handle form submission
form.addEventListener('submit',(event:Event) =>{

 event.preventDefault(); //prevent page reload
 //collect input values
 
 const name = (document.getElementById('name')as HTMLInputElement).value
 const email = (document.getElementById('email')as HTMLInputElement).value
 const phone = (document.getElementById('phone')as HTMLInputElement).value
 const education = (document.getElementById('education')as HTMLInputElement).value
 const experience = (document.getElementById('experience')as HTMLInputElement).value
 const skills = (document.getElementById('skills')as HTMLInputElement).value

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

 if(resumeDispalyElement){
    resumeDispalyElement.innerHTML= resumeHTML;
 } else{
    console.error('The resume dispaly element is missing.')
 }

})