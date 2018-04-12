let form = $('#create-department')[0];

form.onsubmit = function(e) {
  e.preventDefault();
  let title = e.target['input-title'].value;
  $.ajax({
    url: 'http://localhost:3000/departments',
    method: 'POST',
    data: {
      title: title
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