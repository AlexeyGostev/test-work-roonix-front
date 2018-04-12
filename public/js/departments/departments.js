$.ajax({
  url: 'http://localhost:3000/tables/departments',
  method: 'GET',
  crossDomain: false,
  statusCode: {
    200: (data) => {
      renderDepartmentsTable(data.body);
    },
    500: (data) => {
      alert('Выполните запрос позже, сервер временно не доступен');
    }
  }
});

function renderDepartmentsTable(responseBody) {
  let departments = responseBody.departments;
  let bodyTable = $('#body-departments-table')[0];
  for (let i = 0; i < departments.length; i += 1) {

    let tr = document.createElement('tr');
    let tdTitle = document.createElement('td');
    let tdCountWorkers = document.createElement('td');
    let tdMaxPay = document.createElement('td');
    let tdEditButton = document.createElement('td');
    let tdDeleteButton = document.createElement('td');

    tdTitle.innerHTML = departments[i].title;
    tdCountWorkers.innerHTML = departments[i].countworkers;
    tdMaxPay.innerHTML = departments[i].maxpay;
    tdEditButton.innerHTML = 
      '<a class="btn btn-primary" href="/departments/'
      + departments[i].id + '" role="button">Редактировать</a>';
    tdDeleteButton.innerHTML = 
      '<a class="btn btn-primary" href="#" role="button">Удалить</a>';
    tdDeleteButton.onclick = deleteDepartment(departments[i].id);

    tr.appendChild(tdTitle);
    tr.appendChild(tdCountWorkers);
    tr.appendChild(tdMaxPay);
    tr.appendChild(tdEditButton);
    tr.appendChild(tdDeleteButton);
    bodyTable.appendChild(tr);
  }
}

function deleteDepartment(id) {
  return function() {
    $.ajax({
      url: 'http://localhost:3000/departments/' + id,
      method: 'DELETE',
      crossDomain: false,
      statusCode: {
        200: (data) => {
          document.location.href = "/departments";
        },
        400: (data) => {
          alert('Нельзя удалить отдел в котором есть сотрудники');
        },
        500: (data) => {
          alert('Выполните запрос позже, сервер временно не доступен');
        }
      }
    });
  }
}