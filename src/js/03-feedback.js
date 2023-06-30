// const emailInput = document.querySelector("email");
// const message = document.querySelector("message");
import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(
    () => {
        const obj = {
            email: form.email.value,
            message: form.message.value,
        };
        const json = JSON.stringify(obj);
        localStorage.setItem("feedback-form-state", json);
    }, 500
))

const json = localStorage.getItem("feedback-form-state");

if (json) {
    const obj = JSON.parse(json);
    form.email.value = obj.email;
    form.message.value = obj.message;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    localStorage.setItem("feedback-form-state", "");
    const obj = {
        email: form.email.value,
        message: form.message.value,
    };
    console.log(obj);
    form.reset();
})


