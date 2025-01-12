const form = document.querySelector("#form");
const nameField = document.querySelector("#name")
const emailField = document.querySelector("#email")
const githubField = document.querySelector("#github")
const errorState = document.querySelector(".error-state")

form.addEventListener("submit", SubmitFormHandler);

function SubmitFormHandler(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const github = formData.get("github");

    if (name == "") { nameField.style.border = "2px solid hsl(7, 71%, 60%)"; }
    if (email == "") { emailField.style.border = "2px solid hsl(7, 71%, 60%)"; }
    if (github == "") { githubField.style.border = "2px solid hsl(7, 71%, 60%)"; }

}

[nameField, emailField , githubField].forEach((elem)=>{
    elem.addEventListener("change" , ()=>{
        elem.style.border = " 1px solid rgba(255, 255, 255, 0.253)";
    })
})

emailField.addEventListener("invalid" , (e)=>{
    e.preventDefault();
    errorState.style.display = "block"
})