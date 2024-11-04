"use strict";
function generateResume() {
    const form = document.getElementById("resume-form");
    if (!form.checkValidity()) {
        form.reportValidity(); // This will trigger the HTML5 validation messages
        return;
    }
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedin = document.getElementById('linkedin').value;
    const description = document.getElementById('description').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const year1 = document.getElementById('year1').value;
    const designation = document.getElementById('designation').value;
    const year2 = document.getElementById('year2').value;
    const Projecttitle = document.getElementById('projecttitle').value;
    const Projectdescription = document.getElementById('Projectdescription').value;
    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const duration = document.getElementById('duration').value;
    const skill1 = document.getElementById('skill1').value;
    const skill2 = document.getElementById('skill2').value;
    const skill3 = document.getElementById('skill3').value;
    const imageInput = document.getElementById('usrimg');
    let imageUrl = '';
    if (imageInput.files && imageInput.files[0]) {
        imageUrl = URL.createObjectURL(imageInput.files[0]); // Create a URL for the uploaded image
    }
    // Collect resume data
    const resumeData = {
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
    const container = document.querySelector('.container');
    if (container) {
        container.style.display = 'none';
    }
    // Show the resume display
    const resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.style.display = 'block';
}
function displayResume(data) {
    const resumeDisplay = document.getElementById('resume-display');
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
}
// write a function for Editable Resume
function editResume() {
    const container = document.querySelector('.container');
    if (container) {
        container.style.display = 'block'; // show the entire container
    }
    // hide the resume display
    const resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.style.display = 'none';
}
