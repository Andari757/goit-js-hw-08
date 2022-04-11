
import throttle from "lodash.throttle";
const savedData = localStorage.getItem("feedback-form-state") 
const data = {
    email: "",
    textArea: ""
};
const containItems = function () {
    data.email = form.elements.email.value 
    data.textArea = form.elements.message.value 
}

const form = document.querySelector(".feedback-form")
form.addEventListener("input", throttle(() => {    
    containItems();
    localStorage.setItem("feedback-form-state", JSON.stringify(data))       
},500))
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(data)
    form.reset()
    localStorage.clear()
})
if (savedData) {   
    form[0].value = JSON.parse(savedData).email
    form[1].value = JSON.parse(savedData).textArea
}
containItems();
