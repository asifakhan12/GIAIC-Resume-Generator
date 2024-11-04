interface ResumeData {
  name: string;
  designation: string;
  email: string;
  phone: string;
  linkedin: string;
  description: string;
  degree: string;
  institution: string;
  year1: string;
  year2: string;
  Projecttitle: string;
  Projectdescription: string;
  jobTitle: string;
  company: string;
  duration: string;
  skills: string[];
  imageUrl: string;
}

function generateResume(): void {
  const form=document.getElementById("resume-form") as HTMLFormElement
  if (!form.checkValidity()) {
      form.reportValidity(); // This will trigger the HTML5 validation messages
      return;
    }
  // Get form values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
  const description = (document.getElementById('description') as HTMLInputElement).value;
  const degree = (document.getElementById('degree') as HTMLInputElement).value;
  const institution = (document.getElementById('institution') as HTMLInputElement).value;
  const year1 = (document.getElementById('year1') as HTMLSelectElement).value;
  const designation = (document.getElementById('designation') as HTMLInputElement).value;
  const year2 = (document.getElementById('year2') as HTMLSelectElement).value;
  const Projecttitle = (document.getElementById('projecttitle') as HTMLInputElement).value;
  const Projectdescription = (document.getElementById('Projectdescription') as HTMLInputElement).value;
  const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
  const company = (document.getElementById('company') as HTMLInputElement).value;
  const duration = (document.getElementById('duration') as HTMLSelectElement).value;
  const skill1 = (document.getElementById('skill1') as HTMLInputElement).value;
  const skill2 = (document.getElementById('skill2') as HTMLInputElement).value;
  const skill3 = (document.getElementById('skill3') as HTMLInputElement).value;
  const imageInput = document.getElementById('usrimg') as HTMLInputElement;
  let imageUrl = '';
  if (imageInput.files && imageInput.files[0]) {
      imageUrl = URL.createObjectURL(imageInput.files[0]); // Create a URL for the uploaded image
  }

  // Collect resume data
  const resumeData: ResumeData = {
      name,
      designation,
      email,
      phone,
      linkedin,
      description,
      degree,
      institution,
      year1,
      year2,
      Projecttitle,
      Projectdescription,
      jobTitle,
      company,
      duration,
      skills: [skill1, skill2, skill3],
      imageUrl,
  };

  // Display the resume
  displayResume(resumeData);

  // Hide the form
  const container = document.querySelector('.container') as HTMLElement;
  if (container) {
      container.style.display = 'none';
  }

  // Show the resume display
  const resumeDisplay = document.getElementById('resume-display') as HTMLElement;
  resumeDisplay.style.display = 'block';
}

function displayResume(data: ResumeData): void {
  const resumeDisplay = document.getElementById('resume-display') as HTMLElement;

  resumeDisplay.innerHTML = `
  <div class="resume-container">
      <header class="header">
          <div class="content">
              <h1>${data.name}</h1>
              <p>${data.designation}</p>
              <div class="contact-info">
                  <p>Email: ${data.email}</p>
                  <p>Phone: ${data.phone}</p>
                  <p>LinkedIn: <a href="${data.linkedin}" target="_blank" class="linkedin">${data.linkedin}</a></p>
              </div>
          </div>
          <div class="image">
              <img src="${data.imageUrl}" alt="User Image">
          </div>
      </header>

      <section class="summary">
          <h2>Summary</h2>
          <p>${data.description}</p>
      </section>

      <section class="skills">
          <h2>Skills</h2>
          <div class="skills-grid">
              <div class="skill-item">${data.skills[0]}</div>
              <div class="skill-item">${data.skills[1]}</div>
              <div class="skill-item">${data.skills[2]}</div>
          </div>
      </section>

      <section class="projects">
          <h2>Projects</h2>
          <div class="project-card">
              <h3>${data.Projecttitle}</h3>
              <p>${data.Projectdescription}</p>
          </div>
      </section>

      <section class="experience">
          <h2>Work Experience</h2>
          <div class="job">
              <h3>${data.jobTitle}</h3>
              <p>${data.company} | ${data.duration}</p>
          </div>
      </section>

      <section class="education">
          <h2>Education</h2>
          <p>${data.degree} | ${data.year1} - ${data.year2}</p>
          <p>${data.institution}</p>
      </section>
      <div class="btns">
        <button type="submit" class="btn" onclick="event.preventDefault(); editResume()">Edit Resume</button>
      </div>
  </div>
  `;
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const shareLinkButton = document.createElement('button');
  shareLinkButton.textContent = "Copy Sharable Link";
  shareLinkButton.className = "share-link-btn"; // Optional: Add a class for styling
  
  shareLinkButton.addEventListener("click", async () => {
    try {
      const sharableLink = `http://resum.com/${name.replace(/\s+/g, '_')}_CV.html`;
      await navigator.clipboard.writeText(sharableLink);
      alert("Sharable Link Copied to Clipboard");
    } catch (err) {
      console.log("Failed! Please try again", err);
    }
  });
  
  // Append to the resume display 
  resumeDisplay.appendChild(shareLinkButton);
}
// write a function for Editable Resume
function editResume(){
  const container = document.querySelector('.container') as HTMLElement;
  if (container) {
    container.style.display = 'block';  // show the entire container
  }

  // hide the resume display
  const resumeDisplay = document.getElementById('resume-display') as HTMLElement;
  resumeDisplay.style.display = 'none';

}