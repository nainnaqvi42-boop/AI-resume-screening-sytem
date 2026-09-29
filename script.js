// ================= PAGE NAVIGATION =================

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active-page");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }


    // Update sidebar active item

    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.classList.remove("active");
    });

    event?.currentTarget?.classList.add("active");


    // Close mobile sidebar

    document.querySelector(".sidebar").classList.remove("open");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ================= MOBILE SIDEBAR =================

function toggleSidebar() {

    const sidebar = document.querySelector(".sidebar");

    sidebar.classList.toggle("open");
}


// ================= UPLOAD MODAL =================

function openUploadModal() {

    document.getElementById("uploadModal").classList.add("show");
}


function closeUploadModal() {

    document.getElementById("uploadModal").classList.remove("show");
}


// ================= FILE UPLOAD =================

function showFileName(input) {

    const fileName = document.getElementById("fileName");

    if (input.files.length > 0) {

        fileName.textContent = input.files[0].name;

    } else {

        fileName.textContent = "Click to select resume";
    }
}


// ================= AI SCREENING =================

function processResume() {

    const input = document.querySelector(".file-input input");

    if (!input.files.length) {

        alert("Please select a resume first.");

        return;
    }

    closeUploadModal();

    alert(
        "Resume uploaded successfully!\n\n" +
        "AI Screening Started...\n\n" +
        "The backend will later perform:\n" +
        "• Resume Parsing\n" +
        "• Skill Extraction\n" +
        "• Semantic Matching\n" +
        "• Experience Analysis\n" +
        "• AI Match Score"
    );
}


// ================= CANDIDATE PROFILE =================

function viewCandidate(name) {

    alert(
        "Candidate Profile\n\n" +
        "Name: " + name + "\n" +
        "AI Match Score: 94%\n" +
        "Skills Match: 94%\n" +
        "Experience: 4 Years\n" +
        "Education: BS Data Science\n\n" +
        "A full candidate profile will be connected to the backend later."
    );
}


// ================= CLOSE MODAL =================

window.onclick = function(event) {

    const modal = document.getElementById("uploadModal");

    if (event.target === modal) {
        closeUploadModal();
    }
};