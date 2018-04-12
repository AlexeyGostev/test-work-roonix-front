let form = $('#create-worker')[0];

form.onsubmit = function(e) {
  e.preventDefault();
  let firstName = e.target['input-firstName'].value;
  let lastName = e.target['input-lastName'].value;
  let patronymic = e.target['input-patronymic'].value;
  let sex = e.target['input-sex'].value;
  let pay = +e.target['input-pay'].value;
  $.ajax({
    url: 'http://localhost:3000/workers',
    method: 'POST',
    data: {
      firstName,
      lastName,
      patronymic,
      sex,
      pay
    },
    statusCode: {
      200: (data) => {
        console.log(data);
      },
      400: (data) => {
        console.log(data);
      },
      500: (data) => {
        console.log(data);
      }
    }
  });
}