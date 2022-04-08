var _ = require('lodash');
const data = {
    email: "",
    textArea: ""
};
const containItems = function () {
    data.email = form.elements.email.value 
    data.textArea = form.elements.message.value 
}

const form = document.querySelector(".feedback-form")
form.addEventListener("input", _.throttle(() => {    
    containItems();
    localStorage.setItem("feedback-form-state", JSON.stringify(data))       
},500))
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
containItems();
