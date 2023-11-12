export const modal = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModalBtn");
    const modalContainer = document.getElementById("modalContainer");
    const myForm = document.getElementById("form__modal");
    const ageContainer = document.getElementById("ageContainer");
    const genderMale = document.getElementById("male");
    const genderFemale = document.getElementById("female");

    openModalBtn.addEventListener("click", function () {
      modalContainer.style.display = "block";
    });

    window.addEventListener("click", function (event) {
      if (event.target === modalContainer) {
        modalContainer.style.display = "none";
      }
    });

    genderMale.addEventListener("change", function () {
      ageContainer.style.display = genderMale.checked ? "block" : "none";
    });

    const botToken = "6037128965:AAFLmI1biwh--7nNrJXOAIfdpApFkJM6Qig";
    const chatId = "-1001541711508";

    function checkFormFields() {
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;

      return email !== "" && phone !== "";
    }

    myForm.addEventListener("submit", function (event) {
      event.preventDefault();
      clearErrors();

      if (!validateForm()) {
        return;
      }
      if (checkFormFields()) {
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const gender = document.querySelector(
          'input[name="gender"]:checked'
        ).value;
        const age = document.getElementById("age").value;

        const text = `<b>E-mail:</b> ${email}\n<b>Телефон:</b>${phone}\n<b>Пол:</b>${gender}\n<b>Возраст:</b>${age} `;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${encodeURIComponent(
          text
        )}`;

        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);

        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            form.reset();
            modalContainer.style.display = "none";
          } else {
            closeModal();
          }
        };

        xhr.send();
      } else {
        alert("Заполните все обязательные поля.");
      }
      modalContainer.style.display = "none";
      setTimeout(function () {
        modalContainer.style.display = "block";
        modalContainer.innerHTML =
          '<div class="modal-content"><h2>Успешно отправлено!</h2></div>';
      }, 3000);
    });

    function validateForm() {
      let isValid = true;

      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const genderError = document.getElementById("genderError");
      const ageError = document.getElementById("ageError");

      if (!isValidEmail(email.value)) {
        displayError("emailError", "Введите корректный email");
        isValid = false;
      }

      if (!isValidPhone(phone.value)) {
        displayError("phoneError", "Введите корректный номер телефона");
        isValid = false;
      }

      if (!genderMale.checked && !genderFemale.checked) {
        displayError("genderError", "Выберите пол");
        isValid = false;
      }

      if (
        genderMale.checked &&
        isNaN(parseInt(document.getElementById("age").value))
      ) {
        displayError("ageError", "Введите корректный возраст");
        isValid = false;
      }

      return isValid;
    }

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    function isValidPhone(phone) {
      const phoneRegex =
        /^((7|8|\+7)[\- ]?)?(\(?\d{3,5}\)?[\- ]?)?[\d\- ]{5,15}$/;
      return phoneRegex.test(phone);
    }

    function displayError(errorId, errorMessage) {
      const errorContainer = document.getElementById(errorId);
      errorContainer.textContent = errorMessage;
    }

    function clearErrors() {
      const errorElements = document.getElementsByClassName("error-message");
      for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = "";
      }
    }
  });
};
