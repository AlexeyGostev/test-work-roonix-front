$.ajax({
  url: 'http://localhost:3000/workers',
  method: 'GET',
  crossDomain: false,
  statusCode: {
    200: (data) => {
      renderMainTable(data.body);
    }
  }
});

function renderMainTable(responseBody) {
  let workers = responseBody.workers;
  let bodyTable = $('#body-workers-table')[0];
  for (let i = 0; i < workers.length; i++) {

    let tr = document.createElement('tr');
    let tdfn = document.createElement('td');
    let tdln = document.createElement('td');
    tdfn.innerHTML = workers[i].firstName;
    tdln.innerHTML = workers[i].lastName;
    tr.appendChild(tdfn);
    tr.appendChild(tdln);
    bodyTable.appendChild(tr);
  }
}