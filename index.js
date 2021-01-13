const submitBtn = document.querySelector("#submitBtn");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content");
const closeBtn = document.querySelector("#closeBtn");
const nameElem = document.querySelector("#name");
const form = document.querySelector("#form");
const education = document.querySelector("#education");
const date = document.querySelector("#date");
const age = document.querySelector("#age");
const errorAge = document.querySelector("#error-age");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const errorName = document.querySelector("#error-name");

  if (validation(nameElem, errorName) && numberValidation(age, errorAge)) {
    openModal();
    showInfo(nameElem.value, gender, education.value, date.value, age.value);
  }
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const errorName = document.querySelector("#error-name");

  if (numberValidation(age, errorAge) && validation(nameElem, errorName)) {
    openModal();
    showInfo(nameElem.value, gender, education.value, date.value, age.value);
  }
});

closeBtn.addEventListener("click", () => {
  closeModal();
});

modal.addEventListener("click", (event) => {
  if (!event.target.closest(".modal__wrapper")) {
    closeModal();
  }
});

age.addEventListener("keyup", () => {
  numberValidation(age, errorAge);
});

//=========================functions============================
function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
  form.reset();
}

function showInfo(name, gender, education, date, age) {
  modalContent.innerHTML = `<p>Name: ${name}</p>
<p>Gender: ${gender}</p>
<p>Education: ${education}</p>
<p>Date of Birth: ${date}</p>
<p>Age: ${age}</p>`;
}

function validation(elem, error) {
  if (elem.value === "") {
    elem.style.outline = "3px solid red";
    error.style.display = "block";
    return false;
  } else {
    elem.style.outline = "none";
    error.style.display = "none";
    return true;
  }
}

function numberValidation(age, error) {
  if (+age.value && age.value != "") {
    age.style.color = "green";
    error.style.display = "none";
    return true;
  } else {
    age.style.color = "red";
    error.style.display = "block";
    return false;
  }
}
