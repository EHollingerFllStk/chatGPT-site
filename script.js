const jobsList = document.getElementById("jobs-list");
  
  jobs.forEach((job) => {
    const li = document.createElement("li");
    const title = document.createElement("h3");
    const company = document.createElement("p");
    const location = document.createElement("p");
    const description = document.createElement("p");
    const applyLink = document.createElement("a");
  
    title.textContent = job.title;
    company.textContent = job.company;
    location.textContent = job.location;
    description.textContent = job.description;
    applyLink.textContent = "Apply now";
    applyLink.href = job.applyLink;
  
    li.appendChild(title);
    li.appendChild(company);
    li.appendChild(location);
    li.appendChild(description);
    li.appendChild(applyLink);
  
    jobsList.appendChild(li);
  });
  