// ----------- about section -----------
let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");


function opentab(tabname) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ----------- for responsive -----------

let sideMenu = document.getElementById("sideMenu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-300px";
}

// ----------- Message from my website -----------

const scriptURL = 'https://script.google.com/macros/s/AKfycbx99wUpNj7t4NzHhMhhFLWEUlSIeqoISfDUVqQ73p2iTvIDkGLEm8zsEhRSkDo2o04u/exec';
const form = document.forms['submit-to-google-sheet'];

const msg = document.getElementById("msg")


form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function() {
            msg.innerHTML = ""
        }, 5000);

        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
});

