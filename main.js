//***************  Slide navigation Bar *************
let slides = document.querySelector(".data-div");
let circlesBtn = document.querySelectorAll(".circles-btn");
let nextSlide = document.querySelector(".next");
let prevtSlide = document.querySelector(".prev");
let skipSlide = document.querySelectorAll(".skip-btn");
let cssVar = document.querySelector(":root");
let varValues = getComputedStyle(cssVar);
let pos = parseInt(varValues.getPropertyValue("--slideSize"));
let body = document.querySelector("body");
pos += 100;
let curPos = 0;
for (let i = 0; i < circlesBtn.length; i++) {
    circlesBtn[i].addEventListener("click", (e) => {
        curPos = i * pos;
        slides.style.right = `${curPos}px`;
        for (let i = 0; i < circlesBtn.length; i++) {
            circlesBtn[i].style.color = "black";
            circlesBtn[i].style.backgroundColor = "white";
        }
        e.path[0].style.color = "white";
        e.path[0].style.backgroundColor = "green";
    });
}

nextSlide.addEventListener("click", (e) => {
    if (curPos < 7 * pos) {
        curPos += pos;
        for (let i = 1; i <= 8; i++) {
            if (curPos == i * pos) {
                circlesBtn[i].click();
                curPos -= pos;
            }
        }
        curPos += pos;
    }
});
prevtSlide.addEventListener("click", () => {
    if (curPos > 0) {
        curPos -= pos;
        for (let i = 0; i < 8; i++) {
            if (curPos == i * pos) {
                circlesBtn[i].click();
            }
        }
        slides.style.right = `${curPos}px`;
    }
});
for (let i = 0; i < skipSlide.length; i++) {
    skipSlide[i].addEventListener("click", () => {
        if (curPos < 7 * pos) {
            curPos += pos;
            for (let i = 1; i <= 8; i++) {
                if (curPos == i * pos) {
                    circlesBtn[i].click();
                    curPos -= pos;
                }
            }
            curPos += pos;
        }
    });
}
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Experience slide
let compnayList = document.querySelector(".company-list");
let addCompany = document.querySelector(".add-company");
let slide3Para = document.querySelector(".slide3-para");
let companyLimit = 0;
addCompany.addEventListener("click", () => {
    if (companyLimit > 3) {
        slide3Para.classList.add("slide3-para-toggle");
        return;
    } else {
        // list itme
        let hr = document.createElement("hr");
        hr.classList.add("company-line");
        let li = document.createElement("li");
        li.classList.add("company-numbering");
        // delete button for company
        let delCompany = document.createElement("button");
        delCompany.classList.add("del-company");
        let delNode = document.createTextNode("x");
        delCompany.appendChild(delNode);
        // input for job title
        let company = document.createElement("div");
        company.classList.add("company");
        let companyTitle = document.createElement("input");
        companyTitle.type = "text";
        companyTitle.classList.add("input3");
        companyTitle.placeholder = "Job Title";
        // input for company name
        let companyName = document.createElement("input");
        companyName.type = "text";
        companyName.classList.add("input3");
        companyName.classList.add("company-name");
        companyName.placeholder = "Company Name";
        // Brief description of company
        // let companyInfo = document.createElement("textarea");
        // companyInfo.name = "company-info";
        // companyInfo.classList.add("input3");
        // companyInfo.classList.add("company-info");
        // companyInfo.placeholder =
        //     "Enter short info about company & what you do in here";
        // divs for date
        let dateDiv1 = document.createElement("div");
        dateDiv1.classList.add("date-div");
        let startDateLabel = document.createElement("label");
        startDateLabel.for = "date3";
        startDateLabel.classList.add("date-lable");
        let labelNode1 = document.createTextNode("Starting Date");
        startDateLabel.append(labelNode1);
        let startdateInput = document.createElement("input");
        startdateInput.type = "date";
        startdateInput.classList.add("date");
        startdateInput.classList.add("start-date");

        dateDiv1.appendChild(startDateLabel);
        dateDiv1.appendChild(startdateInput);
        // date div 2
        let dateDiv2 = document.createElement("div");
        dateDiv2.classList.add("date-div");
        let endDateLabel = document.createElement("label");
        endDateLabel.for = "date3";
        endDateLabel.classList.add("date-lable");
        let labelNode2 = document.createTextNode("Ending Date");
        endDateLabel.append(labelNode2);
        let enddateInput = document.createElement("input");
        enddateInput.type = "date";
        enddateInput.classList.add("date");
        enddateInput.classList.add("end-date");
        dateDiv2.appendChild(endDateLabel);
        dateDiv2.appendChild(enddateInput);
        // date div3 working-div
        let workingDiv = document.createElement("div");
        workingDiv.classList.add("working-div");
        let workingLable = document.createElement("label");
        workingLable.for = "working";
        workingLable.classList.add("working-lable");
        let workingcheck = document.createElement("input");
        workingcheck.type = "checkbox";
        workingcheck.classList.add("check-box");
        let workingTextNode = document.createTextNode(" Currently working");
        workingLable.appendChild(workingcheck);
        workingLable.appendChild(workingTextNode);
        workingDiv.appendChild(workingLable);
        // append everything
        company.appendChild(delCompany);
        company.appendChild(companyTitle);
        company.appendChild(companyName);
        // company.appendChild(companyInfo);
        company.appendChild(dateDiv1);
        company.appendChild(dateDiv2);
        company.appendChild(workingDiv);
        company.appendChild(hr);
        li.appendChild(company);
        compnayList.insertBefore(li, compnayList.firstChild);
        delCompany.addEventListener("click", (e) => {
            console.log(e.path[2]);
            e.path[2].remove();
            if (slide3Para.classList.contains("slide3-para-toggle")) {
                slide3Para.classList.remove("slide3-para-toggle");
            }
            companyLimit--;
        });
        companyLimit++;
    }
});
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Skills slide

let skillInput = document.querySelector(".skills-input");
let addSkill = document.querySelector(".skills-btn");
let skillsList = document.querySelector(".skills-list");
let skillsLimit = 0;
let slide4Para = document.querySelector(".slide4-para");
addSkill.addEventListener("click", () => {
    if (skillsLimit > 11) {
        slide4Para.classList.add("slide4-para-toggle");
        skillInput.value = "";
        return;
    } else {
        if (slide4Para.classList.contains("slide4-para-toggle")) {
            slide4Para.classList.remove("slide4-para-toggle");
        }
    }
    if (skillInput.value == "") alert("First Enter the Skill");
    else {
        let li = document.createElement("li");
        li.classList.add("skills-item");
        let skillElement = document.createElement("span");
        skillElement.classList.add("skills-name");
        let skillNode = document.createTextNode(`${skillInput.value}`);
        skillElement.appendChild(skillNode);
        let skillDel = document.createElement("span");
        skillDel.classList.add("del-skill");
        let skillDelNode = document.createTextNode("x");
        skillDel.appendChild(skillDelNode);
        li.appendChild(skillElement);
        li.appendChild(skillDel);
        skillsList.appendChild(li);
        skillsLimit += 1;
        skillDel.addEventListener("click", (e) => {
            e.path[1].remove();
            skillsLimit -= 1;
            if (slide4Para.classList.contains("slide4-para-toggle")) {
                slide4Para.classList.remove("slide4-para-toggle");
            }
        });
        skillInput.value = "";
        console.log(skillsLimit);
    }
});
skillInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addSkill.click();
    }
});

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Education slide
let educationList = document.querySelector(".education-list");
let addeducation = document.querySelector(".add-education");
addeducation.addEventListener("click", () => {
    let li = document.createElement("li");
    li.classList.add("education-item");
    let inputEducation = document.createElement("input");
    inputEducation.type = "text";
    inputEducation.classList.add("input1");
    inputEducation.classList.add("input-education");
    inputEducation.placeholder = "Matriculation from wisdom in 2018";
    let delEducation = document.createElement("button");
    delEducation.classList.add("del-education");
    let delTextNode = document.createTextNode("x");
    delEducation.appendChild(delTextNode);
    li.appendChild(inputEducation);
    li.appendChild(delEducation);
    educationList.insertBefore(li, educationList.firstChild);
    delEducation.addEventListener("click", (e) => {
        e.path[1].remove();
    });
});
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Project slide
let projectList = document.querySelector(".project-list");
let addproject = document.querySelector(".add-project");
let slide6Para = document.querySelector(".slide6-para");
let inputProject = document.querySelector(".input-project");
let projectLimit = 0;
addproject.addEventListener("click", () => {
    if (projectLimit > 2) {
        slide6Para.classList.add("slide6-para-toggle");
        return;
    } else {
        let li = document.createElement("li");
        li.classList.add("project-item");
        let inputproject = document.createElement("input");
        inputproject.type = "text";
        inputproject.classList.add("input1");
        inputproject.classList.add("input-project");
        inputproject.placeholder = "project link/name";
        let delproject = document.createElement("button");
        delproject.classList.add("del-project");
        let delTextNode = document.createTextNode("x");
        delproject.appendChild(delTextNode);
        li.appendChild(inputproject);
        li.appendChild(delproject);
        projectList.insertBefore(li, projectList.firstChild);
        delproject.addEventListener("click", (e) => {
            if (slide6Para.classList.contains("slide6-para-toggle")) {
                slide6Para.classList.remove("slide6-para-toggle");
                projectLimit--;
            }
            e.path[1].remove();
        });
        projectLimit++;
    }
});
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Certification slide
let certificationList = document.querySelector(".certification-list");
let addcertification = document.querySelector(".add-certification");
let slide7Para = document.querySelector(".slide7-para");
let certificateLimit = 0;
addcertification.addEventListener("click", () => {
    if (certificateLimit > 3) {
        slide7Para.classList.add("slide7-para-toggle");
        return;
    } else {
        let li = document.createElement("li");
        li.classList.add("certification-item");
        let inputcertification = document.createElement("input");
        inputcertification.type = "text";
        inputcertification.classList.add("input1");
        inputcertification.classList.add("input-certification");
        inputcertification.placeholder = "certification link";
        let delcertification = document.createElement("button");
        delcertification.classList.add("del-certification");
        let delTextNode = document.createTextNode("x");
        delcertification.appendChild(delTextNode);
        li.appendChild(inputcertification);
        li.appendChild(delcertification);
        certificationList.insertBefore(li, certificationList.firstChild);
        delcertification.addEventListener("click", (e) => {
            if (slide7Para.classList.contains("slide7-para-toggle")) {
                slide7Para.classList.remove("slide7-para-toggle");
                certificateLimit--;
            }

            e.path[1].remove();
        });
        certificateLimit++;
    }
});

// Extract data & store it in json/object formate.
let companyData = {};
let skillsData = {};
let educationData = {};
let projectData = {};
let certificationData = {};
let contactData = {};
let UserData = {};
// ************************** Slide 1 save data ************
let slide1SaveData = document.querySelector(".slide1-save-data");
let base64String = "";
function imageUploaded() {
    var file = document.querySelector("input[type=file]")["files"][0];

    var reader = new FileReader();
    console.log("next");

    reader.onload = function () {
        base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
    };
    reader.readAsDataURL(file);
}
slide1SaveData.addEventListener("click", () => {
    let userName = document.querySelector(".input-name");
    let profession = document.querySelector(".input-profession");
    if (userName.value && profession.value) {
        UserData.name = `${userName.value}`;
        UserData.profession = `${profession.value}`;
        UserData.imgData = `${"data:image/png;base64," + base64String}`;
        // ********** Go to next slide
        if (curPos < 7 * pos) {
            curPos += pos;
            for (let i = 1; i <= 8; i++) {
                if (curPos == i * pos) {
                    circlesBtn[i].click();
                    curPos -= pos;
                }
            }
            curPos += pos;
        }
    } else {
        return;
    }
});

// ************************** Slide 2 save data ************
let slide2SaveData = document.querySelector(".slide2-save-data");
slide2SaveData.addEventListener("click", () => {
    let summary = document.querySelector(".slide2-input");
    if (summary.value) {
        UserData.summary = `${summary.value}`;
        // ********** Go to next slide
        if (curPos < 7 * pos) {
            curPos += pos;
            for (let i = 1; i <= 8; i++) {
                if (curPos == i * pos) {
                    circlesBtn[i].click();
                    curPos -= pos;
                }
            }
            curPos += pos;
        }
    } else {
        alert("We can't submit empty summary about you");
    }
});

// ************************** Slide 3 save data ************
let slide3SaveData = document.querySelector(".slide3-save-data");
slide3SaveData.addEventListener("click", () => {
    let company = document.querySelectorAll(".company-numbering .company-name");
    let companyTitle = document.querySelectorAll(
        ".company-numbering .company-title"
    );
    // let companyInfo = document.querySelectorAll(
    //     ".company-numbering .company-info"
    // );
    let companyStartDate = document.querySelectorAll(
        ".company-numbering .start-date"
    );
    let companyEndDate = document.querySelectorAll(
        ".company-numbering .end-date"
    );
    let companyWorking = document.querySelectorAll(
        ".company-numbering .check-box"
    );
    for (let i = 0; i < company.length; i++) {
        if (
            company[i].value &&
            companyTitle[i].value &&
            // companyInfo[i].value &&
            companyStartDate[i].value &&
            (companyEndDate[i].value || companyWorking[i].checked)
        ) {
            companyData[i] = {
                Title: `${companyTitle[i].value}`,
                name: `${company[i].value}`,
                // Info: `${companyInfo[i].value}`,
                strDate: `${companyStartDate[i].value}`,
                endDate: `${
                    companyWorking[i].checked
                        ? "Currently Working"
                        : `${companyEndDate[i].value}`
                }`,
            };
            UserData.company = companyData;
            // ********** Go to next slide
            if (curPos < 7 * pos) {
                curPos += pos;
                for (let i = 1; i <= 8; i++) {
                    if (curPos == i * pos) {
                        circlesBtn[i].click();
                        curPos -= pos;
                    }
                }
                curPos += pos;
            }
        } else {
            alert("Please fill the empty fields.");
        }
    }
});
// ************************** Slide 4 save data ************
let slide4SaveData = document.querySelector(".slide4-save-data");
slide4SaveData.addEventListener("click", () => {
    let skillsElm = document.querySelectorAll(".skills-item .skills-name");
    if (skillsElm[0]) {
        // Create object for skills
        for (let i = 0; i < skillsElm.length; i++) {
            skillsData[i] = `${skillsElm[i].innerText}`;
        }
        UserData.skills = skillsData;
        // ********** Go to next slide
        if (curPos < 7 * pos) {
            curPos += pos;
            for (let i = 1; i <= 8; i++) {
                if (curPos == i * pos) {
                    circlesBtn[i].click();
                    curPos -= pos;
                }
            }
            curPos += pos;
        }
    } else {
        alert("Add the skills");
        return;
    }
});
// ************************** Slide 5 save data ************
let slide5SaveData = document.querySelector(".slide5-save-data");
slide5SaveData.addEventListener("click", () => {
    let educationElm = document.querySelectorAll(".input-education");
    // Create object for Education
    for (let i = 0; i < educationElm.length; i++) {
        if (educationElm[i].value) {
            educationData[i] = `${educationElm[i].value}`;
        } else {
            alert("Fill the empty fields");
            return;
        }
    }
    UserData.education = educationData;
    // ********** Go to next slide
    if (curPos < 7 * pos) {
        curPos += pos;
        for (let i = 1; i <= 8; i++) {
            if (curPos == i * pos) {
                circlesBtn[i].click();
                curPos -= pos;
            }
        }
        curPos += pos;
    }
});
// ************************** Slide 6 save data ************
let slide6SaveData = document.querySelector(".slide6-save-data");
slide6SaveData.addEventListener("click", () => {
    let projectElem = document.querySelectorAll(".input-project");
    // Create object for project
    for (let i = 0; i < projectElem.length; i++) {
        if (projectElem[i].value) {
            projectData[i] = `${projectElem[i].value}`;
        } else {
            alert("Fill the empty fields");
            return;
        }
    }
    UserData.project = projectData;
    // ********** Go to next slide
    if (curPos < 7 * pos) {
        curPos += pos;
        for (let i = 1; i <= 8; i++) {
            if (curPos == i * pos) {
                circlesBtn[i].click();
                curPos -= pos;
            }
        }
        curPos += pos;
    }
});
// ************************** Slide 7 save data ************
let slide7SaveData = document.querySelector(".slide7-save-data");
slide7SaveData.addEventListener("click", () => {
    let certificationElm = document.querySelectorAll(".input-certification");
    // Create object for certification
    for (let i = 0; i < certificationElm.length; i++) {
        if (certificationElm[i].value) {
            certificationData[i] = `${certificationElm[i].value}`;
        } else {
            alert("Fill the empty fields");
            return;
        }
    }
    UserData.certification = certificationData;
    // ********** Go to next slide
    if (curPos < 7 * pos) {
        curPos += pos;
        for (let i = 1; i <= 8; i++) {
            if (curPos == i * pos) {
                circlesBtn[i].click();
                curPos -= pos;
            }
        }
        curPos += pos;
    }
});

let slide8SaveData = document.querySelector(".slide8-save-data");
slide8SaveData.addEventListener("click", () => {
    let contactElm = document.querySelectorAll(".input-contacts");
    // Create object for contacts
    for (let i = 0; i < contactElm.length; i++) {
        if (contactElm[i].value) {
            contactData[i] = `${contactElm[i].value}`;
        } else {
            alert("Fill the empty fields");
            return;
        }
    }
    UserData.contact = contactData;
    // ********** Go to next slide
    const jsonUserData = JSON.stringify(UserData);
    console.log(jsonUserData);
    localStorage.setItem("userData", jsonUserData);
    window.location.href = "./resume1/resume.html";
});

/***********
 * let base64String = "";
let img = document.querySelector(".img");

function imageUploaded() {
	var file = document.querySelector(
		'input[type=file]')['files'][0];

	var reader = new FileReader();
	console.log("next");
	
	reader.onload = function () {
		base64String = reader.result.replace("data:", "")
			.replace(/^.+,/, "");
	}
	reader.readAsDataURL(file);
}

function displayString() {
	console.log("Base64String about to be printed");
    img.src= "data:image/png;base64,"+ base64String;
    img.style.display = "block";
}

 */
