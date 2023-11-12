const openModalBtn = document.getElementById('openModalBtn');
const modalContainer = document.getElementById('modalContainer');

window.addEventListener('click', function (event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
  if (event.target === openModalBtn) {
    modalContainer.style.display = 'block';
  }
});


export const sendFormFooter = () => {

  const botToken = "6037128965:AAFLmI1biwh--7nNrJXOAIfdpApFkJM6Qig";
  const chatId = "-1001541711508";

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form__modal");

    function checkFormFields() {
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;


      return email !== "" && phone !== "";
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (checkFormFields()) {

        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        const text = `<b>Имя:</b> ${email}\n<b>Телефон:</b>${phone}\n<b>Сообщение:</b> `;
        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${encodeURIComponent(text)}`;


        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);

        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            form.reset()
            closeModal()

          } else {
            alert("Заполните все обязательные поля.");
          }
        };

        xhr.send();
      } else {
        alert("Заполните все обязательные поля.");
      }
    });

  });

}
