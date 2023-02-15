// Get a reference to the job list container in the HTML
const jobList = document.getElementById("job-list");

// Fetch the job data from the JSON file
fetch("jobs-data.json")
  .then(response => response.json())
  .then(data => {
    // Iterate through each job in the data
    data.featuredJobs.forEach(job => {
      // Create a new job listing element
      const jobListing = document.createElement("div");
      jobListing.classList.add("job");

      // Populate the job listing element with the job data
      jobListing.innerHTML = `
        <h3 class="job-title">${job.title}</h3>
        <h4 class="job-company">${job.company}</h4>
        <p class="job-location">${job.location}</p>
        <p class="job-salary">${job.salary}</p>
        <p class="job-description">${job.description}</p>
        <ul class="job-requirements">
          ${job.requirements.map(req => `<li>${req}</li>`).join("")}
        </ul>
        <a class="job-apply-btn" href="${job.applyUrl}" target="_blank">Apply Now</a>
      `;

      // Add the job listing element to the job list container
      jobList.appendChild(jobListing);
    });
  })
  .catch(error => {
    console.error("Error fetching job data:", error);
  });
