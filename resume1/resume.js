var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

/************************************* DOWNLOAD PDFS ************** */
let r1download = document.querySelector(".r1download-btn");
let r2download = document.querySelector(".r2download-btn");
r1download.style.display = "none";
r2download.style.display = "none";

/*****************************************  RESUME 1 EDITOR *************************/
let resume1 = document.querySelector(".resume1");
resume1.style.display = "none";
let resume2 = document.querySelector(".resume2");
resume2.style.display = "none";
let designs = document.querySelector(".design-templates");
let resume1Btn = document.querySelector(".design1-btn");
let editor1 = document.querySelector(".editor-div1");
let editor2 = document.querySelector(".editor-div2");
editor1.style.display = "none";
editor2.style.display = "none";
resume1Btn.addEventListener("click", () => {
    resume1.style.display = "block";
    designs.style.display = "none";
    editor2.style.display = "none";
    editor1.style.display = "block";

    r1download.style.display = "block";
    r2download.style.display = "none";
});
//***************** downloading files */
r1download.addEventListener("click", () => {
    editor1.style.display = "none";
    r1download.style.display = "none";
    setTimeout(() => {
        let urlData =
            "http://api.pdflayer.com/api/convert?access_key=ad2799407ee5fcad5ee3bb4e23a73969&document_url=https://programmerowais.github.io/OwaisResumeBuilder.github.io/&page_size=A4&delay=3000&creator=MuhammadOwais&author=MuhammadOwais";
        async function apiData(urlData) {
            let response = await fetch(urlData);
            let data = await response.json();
            console.log(data);
        }
        apiData(urlData);
    }, 2000);
});

////////////////////////// colors///////////////////
// color1
let color = document.querySelector(":root");
let mainColor1 = document.querySelector(".r1color1");
mainColor1.placeholder = `${getComputedStyle(color, null).getPropertyValue(
    "--r1Color1"
)}`;
function r1color1Fu(e) {
    color.style.setProperty("--r1Color1", `${e.target.value}`);
}
// color2
let mainColor2 = document.querySelector(".r1color2");
mainColor2.placeholder = `${getComputedStyle(color, null).getPropertyValue(
    "--r1Color2"
)}`;
function r1color2Fu(e) {
    color.style.setProperty("--r1Color2", `${e.target.value}`);
}
// bg-color1
let bgColor1 = document.querySelector(".r1bg-color1");
bgColor1.placeholder = `${getComputedStyle(color, null).getPropertyValue(
    "--r1BgColor1"
)}`;
function r1bgColor1Fu(e) {
    color.style.setProperty("--r1BgColor1", `${e.target.value}`);
}
// bh-color1
let bgColor2 = document.querySelector(".r1bg-color2");
bgColor2.placeholder = `${getComputedStyle(color, null).getPropertyValue(
    "--r1BgColor2"
)}`;
function r1bgColor2Fu(e) {
    color.style.setProperty("--r1BgColor2", `${e.target.value}`);
}
// /////////////////////////////////////// User IMG /////////////////////
let userImg = document.querySelector(".r1-user-img");
console.log(userImg);
let userImgFzPlaceholder = document.querySelector(".r1img-size");
userImgFzPlaceholder.placeholder = `${getComputedStyle(
    userImg,
    null
).getPropertyValue("max-width")}`;
function r1userImgSizeFu(e) {
    userImg.style.maxWidth = `${e.target.value}`;
}

let imgPaddingPlaceholder = document.querySelector(".r1img-padding");
imgPaddingPlaceholder.placeholder = `${getComputedStyle(
    userImg,
    null
).getPropertyValue("padding")}`;
function r1imgPaddingFu(e) {
    userImg.style.padding = `${e.target.value}`;
}
let imgMarginPlaceholder = document.querySelector(".r1img-margin");
imgMarginPlaceholder.placeholder = `${getComputedStyle(
    userImg,
    null
).getPropertyValue("margin")}`;
function r1imgMarginFu(e) {
    userImg.style.margin = `${e.target.value}`;
}

// // HEADING1
let heading1 = document.querySelector(".r1-heading1");
let heading1FzPlaceholder = document.querySelector(".r1heading1-fz");
heading1FzPlaceholder.placeholder = `${getComputedStyle(
    heading1,
    null
).getPropertyValue("font-size")}`;
function r1heading1FzFu(e) {
    heading1.style.fontSize = `${e.target.value}`;
}

let heading1PaddingPlaceholder = document.querySelector(".r1heading1-padding");
heading1PaddingPlaceholder.placeholder = `${getComputedStyle(
    heading1,
    null
).getPropertyValue("padding")}`;
function r1heading1PaddingFu(e) {
    heading1.style.padding = `${e.target.value}`;
}
let heading1MarginPlaceholder = document.querySelector(".r1heading1-margin");
heading1MarginPlaceholder.placeholder = `${getComputedStyle(
    heading1,
    null
).getPropertyValue("margin")}`;
function r1heading1MarginFu(e) {
    heading1.style.margin = `${e.target.value}`;
}
// // HEADING2
let heading2 = document.querySelectorAll(".r1-heading2");
let heading2FzPlaceholder = document.querySelector(".r1heading2-fz");
heading2FzPlaceholder.placeholder = `${getComputedStyle(
    heading2[0],
    null
).getPropertyValue("font-size")}`;
function r1heading2FzFu(e) {
    for (let i = 0; i < heading2.length; i++) {
        heading2[i].style.fontSize = `${e.target.value}`;
    }
}

let heading2PaddingPlaceholder = document.querySelector(".r1heading2-padding");
heading2PaddingPlaceholder.placeholder = `${getComputedStyle(
    heading2[0],
    null
).getPropertyValue("padding")}`;
function r1heading2PaddingFu(e) {
    for (let i = 0; i < heading2.length; i++) {
        heading2[i].style.padding = `${e.target.value}`;
    }
}
let heading2MarginPlaceholder = document.querySelector(".r1heading2-margin");
heading2MarginPlaceholder.placeholder = `${getComputedStyle(
    heading2[0],
    null
).getPropertyValue("margin")}`;
function r1heading2MarginFu(e) {
    for (let i = 0; i < heading2.length; i++) {
        heading2[i].style.margin = `${e.target.value}`;
    }
}

// // Paragraph
let para = document.querySelectorAll(".r1-para");
let paraFzPlaceholder = document.querySelector(".r1para-fz");
paraFzPlaceholder.placeholder = `${getComputedStyle(
    para[0],
    null
).getPropertyValue("font-size")}`;
function r1paraFzFu(e) {
    for (let i = 0; i < para.length; i++) {
        para[i].style.fontSize = `${e.target.value}`;
    }
}

let paraPaddingPlaceholder = document.querySelector(".r1para-padding");
paraPaddingPlaceholder.placeholder = `${getComputedStyle(
    para[0],
    null
).getPropertyValue("padding")}`;
function r1paraPaddingFu(e) {
    for (let i = 0; i < para.length; i++) {
        para[i].style.padding = `${e.target.value}`;
    }
}
let paraMarginPlaceholder = document.querySelector(".r1para-margin");
paraMarginPlaceholder.placeholder = `${getComputedStyle(
    para[0],
    null
).getPropertyValue("margin")}`;
function r1paraMarginFu(e) {
    for (let i = 0; i < para.length; i++) {
        para[i].style.margin = `${e.target.value}`;
    }
}
// // Links & items ,skills
let item = document.querySelectorAll(".r1item");
let itemFzPlaceholder = document.querySelector(".r1item-fz");
itemFzPlaceholder.placeholder = `${getComputedStyle(
    item[0],
    null
).getPropertyValue("font-size")}`;
function r1itemFzFu(e) {
    for (let i = 0; i < item.length; i++) {
        item[i].style.fontSize = `${e.target.value}`;
    }
}

let itemPaddingPlaceholder = document.querySelector(".r1item-padding");
itemPaddingPlaceholder.placeholder = `${getComputedStyle(
    item[0],
    null
).getPropertyValue("padding")}`;
function r1itemPaddingFu(e) {
    for (let i = 0; i < item.length; i++) {
        item[i].style.padding = `${e.target.value}`;
    }
}
let itemMarginPlaceholder = document.querySelector(".r1item-margin");
itemMarginPlaceholder.placeholder = `${getComputedStyle(
    item[0],
    null
).getPropertyValue("margin")}`;
function r1itemMarginFu(e) {
    for (let i = 0; i < item.length; i++) {
        item[i].style.margin = `${e.target.value}`;
    }
}

/*****************************************  RESUME 2 EDITOR *************************/

let resume2Btn = document.querySelector(".design2-btn");
resume2Btn.addEventListener("click", () => {
    resume2.style.display = "block";
    designs.style.display = "none";
    editor1.style.display = "none";
    editor2.style.display = "block";
    r1download.style.display = "none";
    r2download.style.display = "block";
});
r2download.addEventListener("click", () => {
    editor2.style.display = "none";
    r2download.style.display = "none";
    setTimeout(() => {
        let urlData =
            "http://api.pdflayer.com/api/convert?access_key=ad2799407ee5fcad5ee3bb4e23a73969&document_url=https://programmerowais.github.io/OwaisResumeBuilder.github.io/&page_size=A4&delay=3000&creator=MuhammadOwais&author=MuhammadOwais";
        async function apiData(urlData) {
            let response = await fetch(urlData);
            let data = await response.json();
            console.log(data);
        }
        apiData(urlData);
    }, 2000);
});
////////////////////////// colors///////////////////
// color1
// let color = document.querySelector(":root");
let r2mainColor1 = document.querySelector(".r2color1");
r2mainColor1.placeholder = `${getComputedStyle(color, null).getPropertyValue(
    "--r2Color1"
)}`;
function r2color1Fu(e) {
    color.style.setProperty("--r2Color1", `${e.target.value}`);
}
// color2
let r2mainColor2 = document.querySelector(".r2color2");
r2mainColor2.placeholder = `${getComputedStyle(color, null).getPropertyValue(
    "--r2Color2"
)}`;
function r2color2Fu(e) {
    color.style.setProperty("--r2Color2", `${e.target.value}`);
}
// bg-color1
let r2bgColor1 = document.querySelector(".r2bg-color1");
r2bgColor1.placeholder = `${getComputedStyle(color, null).getPropertyValue(
    "--r2BgColor1"
)}`;
function r2bgColor1Fu(e) {
    color.style.setProperty("--r2BgColor1", `${e.target.value}`);
}
// bh-color1
let r2bgColor2 = document.querySelector(".r2bg-color2");
r2bgColor2.placeholder = `${getComputedStyle(color, null).getPropertyValue(
    "--r1BgColor2"
)}`;
function r2bgColor2Fu(e) {
    color.style.setProperty("--r1BgColor2", `${e.target.value}`);
}
/////////////////////////////////////// User IMG /////////////////////
let r2userImg = document.querySelector(".r2-user-img");
console.log(r2userImg);
let r2userImgFzPlaceholder = document.querySelector(".r2img-size");
r2userImgFzPlaceholder.placeholder = `${getComputedStyle(
    r2userImg,
    null
).getPropertyValue("max-width")}`;
function r2userImgSizeFu(e) {
    r2userImg.style.maxWidth = `${e.target.value}`;
}

let r2imgPaddingPlaceholder = document.querySelector(".r2img-padding");
r2imgPaddingPlaceholder.placeholder = `${getComputedStyle(
    r2userImg,
    null
).getPropertyValue("padding")}`;
function r2imgPaddingFu(e) {
    r2userImg.style.padding = `${e.target.value}`;
}
let r2imgMarginPlaceholder = document.querySelector(".r2img-margin");
r2imgMarginPlaceholder.placeholder = `${getComputedStyle(
    r2userImg,
    null
).getPropertyValue("margin")}`;
function r2imgMarginFu(e) {
    r2userImg.style.margin = `${e.target.value}`;
}
// HEADING1
let r2heading1 = document.querySelector(".r2-heading1");
let r2heading1FzPlaceholder = document.querySelector(".r2heading1-fz");
r2heading1FzPlaceholder.placeholder = `${getComputedStyle(
    r2heading1,
    null
).getPropertyValue("font-size")}`;
function r2heading1FzFu(e) {
    r2heading1.style.fontSize = `${e.target.value}`;
}

let r2heading1PaddingPlaceholder = document.querySelector(
    ".r2heading1-padding"
);
r2heading1PaddingPlaceholder.placeholder = `${getComputedStyle(
    r2heading1,
    null
).getPropertyValue("padding")}`;
function r2heading1PaddingFu(e) {
    r2heading1.style.padding = `${e.target.value}`;
}
let r2heading1MarginPlaceholder = document.querySelector(".r2heading1-margin");
r2heading1MarginPlaceholder.placeholder = `${getComputedStyle(
    r2heading1,
    null
).getPropertyValue("margin")}`;
function r2heading1MarginFu(e) {
    r2heading1.style.margin = `${e.target.value}`;
}
// HEADING2
let r2heading2 = document.querySelectorAll(".r2-heading2");
let r2heading2FzPlaceholder = document.querySelector(".r2heading2-fz");
r2heading2FzPlaceholder.placeholder = `${getComputedStyle(
    r2heading2[0],
    null
).getPropertyValue("font-size")}`;
function r2heading2FzFu(e) {
    for (let i = 0; i < r2heading2.length; i++) {
        r2heading2[i].style.fontSize = `${e.target.value}`;
    }
}

let r2heading2PaddingPlaceholder = document.querySelector(
    ".r2heading2-padding"
);
r2heading2PaddingPlaceholder.placeholder = `${getComputedStyle(
    r2heading2[0],
    null
).getPropertyValue("padding")}`;
function r2heading2PaddingFu(e) {
    for (let i = 0; i < r2heading2.length; i++) {
        r2heading2[i].style.padding = `${e.target.value}`;
    }
}
let r2heading2MarginPlaceholder = document.querySelector(".r2heading2-margin");
r2heading2MarginPlaceholder.placeholder = `${getComputedStyle(
    r2heading2[0],
    null
).getPropertyValue("margin")}`;
function r2heading2MarginFu(e) {
    for (let i = 0; i < r2heading2.length; i++) {
        r2heading2[i].style.margin = `${e.target.value}`;
    }
}
// Paragraph
let r2para = document.querySelectorAll(".r2-para");
let r2paraFzPlaceholder = document.querySelector(".r2para-fz");
r2paraFzPlaceholder.placeholder = `${getComputedStyle(
    r2para[0],
    null
).getPropertyValue("font-size")}`;
function r2paraFzFu(e) {
    for (let i = 0; i < r2para.length; i++) {
        r2para[i].style.fontSize = `${e.target.value}`;
    }
}

let r2paraPaddingPlaceholder = document.querySelector(".r2para-padding");
r2paraPaddingPlaceholder.placeholder = `${getComputedStyle(
    r2para[0],
    null
).getPropertyValue("padding")}`;
function r2paraPaddingFu(e) {
    for (let i = 0; i < r2para.length; i++) {
        r2para[i].style.padding = `${e.target.value}`;
    }
}
let r2paraMarginPlaceholder = document.querySelector(".r2para-margin");
r2paraMarginPlaceholder.placeholder = `${getComputedStyle(
    r2para[0],
    null
).getPropertyValue("margin")}`;
function r2paraMarginFu(e) {
    for (let i = 0; i < para.length; i++) {
        r2para[i].style.margin = `${e.target.value}`;
    }
}
// Links & items ,skills
let r2item = document.querySelectorAll(".r2-item");
let r2itemFzPlaceholder = document.querySelector(".r2item-fz");
r2itemFzPlaceholder.placeholder = `${getComputedStyle(
    r2item[0],
    null
).getPropertyValue("font-size")}`;
function r2itemFzFu(e) {
    for (let i = 0; i < r2item.length; i++) {
        r2item[i].style.fontSize = `${e.target.value}`;
    }
}

let r2itemPaddingPlaceholder = document.querySelector(".r2item-padding");
r2itemPaddingPlaceholder.placeholder = `${getComputedStyle(
    r2item[0],
    null
).getPropertyValue("padding")}`;
function r2itemPaddingFu(e) {
    for (let i = 0; i < r2item.length; i++) {
        r2item[i].style.padding = `${e.target.value}`;
    }
}
let r2itemMarginPlaceholder = document.querySelector(".r2item-margin");
r2itemMarginPlaceholder.placeholder = `${getComputedStyle(
    r2item[0],
    null
).getPropertyValue("margin")}`;
function r2itemMarginFu(e) {
    for (let i = 0; i < r2item.length; i++) {
        r2item[i].style.margin = `${e.target.value}`;
    }
}
