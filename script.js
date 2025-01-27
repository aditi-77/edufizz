

// Function to open the counselling form popup
function openCounselForm(collegeName) {
    const counselFormPopup = document.getElementById("counselFormPopup");
    document.getElementById("counselCollegeName").innerText = collegeName;
    counselFormPopup.style.display = "flex"; // Show the popup form
}

// Function to close the popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none"; // Hide the popup
}

// Function to open the Apply form and populate the college name
function openApplyForm(collegeName) {
    const applyFormPopup = document.getElementById("applyFormPopup");
    document.getElementById("applyCollegeName").innerText = collegeName;
    applyFormPopup.style.display = "flex";  // Show the apply form modal
}

// Function to close the Apply form
function closeApplyForm() {
    const applyFormPopup = document.getElementById("applyFormPopup");
    applyFormPopup.style.display = "none";  // Hide the apply form modal
}

// Handling form submission (just a placeholder for now)
document.getElementById('applyForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent the form from submitting normally
    alert('Application submitted successfully!');
    closeApplyForm();  // Close the form after submission
});


function openTalkToExpertForm() {
    document.getElementById('talkToExpertFormPopup').style.display = 'flex';
}

// Function to close the "Talk to Expert" form
function closeTalkToExpertForm() {
    document.getElementById('talkToExpertFormPopup').style.display = 'none';
}

// Handle form submission
document.getElementById('talkToExpertForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent the form from submitting normally
    alert('Thank you for reaching out! An expert will get in touch with you soon.');
    closeTalkToExpertForm();  // Close the form after submission
});


// Fetch college data from the colleges.json file
fetch('colleges.json')
    .then(response => response.json())
    .then(data => {
        const collegeList = document.getElementById('collegeList');


        // Function to display colleges
        function displayColleges(colleges) {
            collegeList.innerHTML = ''; // Clear previous content
            const maxColleges = 8; // Set the maximum number of colleges to display
            colleges.slice(0, maxColleges).forEach(college => {
                const collegeCard = document.createElement('div');
                collegeCard.classList.add('college-card');

                collegeCard.innerHTML = `
          <img src="${college.image}" alt="${college.name}">
          <h3>${college.name}</h3>
          <p><i class="fas fa-map-marker-alt"></i>${college.location}</p>
          <a href="stanford-university.html" target="_blank">View Details</a>
          <div class="college-actions">
        <button class="get-counselling-btn" onclick="openCounselForm('${college.name}')">
           <i class="fas fa-phone-alt"></i>Talk to Counsellor
        </button>
        <button class="apply-now-btn" onclick="openApplyForm('${college.name}')">Apply Now</button>
      </div>
        `;
                collegeList.appendChild(collegeCard);
            });
        }

        // Initially display all colleges
        displayColleges(data);

        const collegeContainer = document.getElementById('collegeContainer');

        // Function to populate colleges
        function displayallColleges() {
            collegeContainer.innerHTML = '';
            colleges.forEach(college => {
                const collegeCard = document.createElement('div');
                collegeCard.classList.add('college-card');

                collegeCard.innerHTML = `
          <img src="${college.image}" alt="${college.name}">
          <h3>${college.name}</h3>
          <p><i class="fas fa-map-marker-alt"></i> ${college.location}</p>
          <div class="button-container">
            <button onclick="openCounsellingForm()"><i class="fas fa-phone"></i> Get Counselling</button>
            <button onclick="openApplyForm()"><i class="fas fa-file-alt"></i> Apply Now</button>
          </div>
        `;

                collegeContainer.appendChild(collegeCard);
            });
        }

    })
    .catch((error) => {
        console.error("Error fetching colleges:", error);
    });

    function searchCollege() {
  const searchQuery = document.getElementById('collegeSearch').value.toLowerCase();
  
  fetch('colleges.json')
    .then(response => response.json())
    .then(data => {
      const colleges = data.colleges;
      const college = colleges.find(college => college.name.toLowerCase() === searchQuery);
      
      if (college) {
        window.location.href = college.url; // Redirect to the found college's page
      } else {
        alert('College not found!');
      }
    })
    .catch(error => {
      console.error('Error fetching the college data:', error);
    });
}
