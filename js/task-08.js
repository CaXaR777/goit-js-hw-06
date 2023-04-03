const result = {};
// const submit = document.querySelector('button')
// console.log(submit)
const form = document.querySelector(".login-form");

form.addEventListener("submit", useForm);

function useForm(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === "" || password.value === "") {
    alert("All fields must be filled!");
  } else {
    // console.log(email, password);

    result.email = email.value;
    result.password = password.value;
    console.log(result);

    form.reset();
  }
}
