


document.addEventListener('click', function() {
  const b = 'https://jsonplaceholder.typicode.com/users'; 

  fetch(b)
      .then(response => response.json())
      .then(data => {
          
          const rows = data.map(user => {
              return `
                  <tr>
                      <td>${user.name}</td>
                      <td>${user.email}</td>
                      <td>${user.phone}</td>
                      <td>${user.website}</td>
                  </tr>
              `;
          })

          
          document.querySelector('#d1 tbody').innerHTML = rows;
      })      
});
