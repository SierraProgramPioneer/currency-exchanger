import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";



function handleSubmission(event) {
    event.preventDefault();
    console.log("submission");
}

const submitButton = document.querySelector("form");
submitButton.addEventListener("submit", handleSubmission);