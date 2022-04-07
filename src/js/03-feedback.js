var _ = require('lodash');
const data = {
    email: "",
    textArea: ""
};

const form = document.querySelector(".feedback-form")
form.addEventListener("input", (e) => {       
        if (e.target.type === "email") { data.email = e.target.value }
        if (e.target.type === "textarea") {data.textArea = e.target.value}           
    localStorage.setItem("feedback-form-state", JSON.stringify(data))        
})
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(data)
    form.reset()
    localStorage.clear()
})
if (localStorage.getItem("feedback-form-state")) {
    form[0].value = JSON.parse(localStorage.getItem("feedback-form-state")).email
    form[1].value = JSON.parse(localStorage.getItem("feedback-form-state")).textArea
}

