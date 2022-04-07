var _ = require('lodash');
const data = {
    email: "",
    textArea: ""
};
const form = document.querySelector(".feedback-form")
form.addEventListener("input", (e) => {
    const ContainInput = function () {        
        if (e.target.type === "email") { data.email = e.target.value }
        if (e.target.type === "textarea") {data.textArea = e.target.value}
        return data
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(ContainInput()))
    
    console.log("storage:       "+localStorage.getItem("feedback-form-state"))
})
