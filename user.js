const data = {
    name: 'Tushar Bhavsar',
    email: 'Tusharbhavsar@example.com',
    phone: '123-456-7890'
  };
  
  fetch('http://localhost:3000/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        console.log('Data inserted successfully');
      } else {
        console.error('Data insertion failed');
      }
    })
    .catch(error => {
      console.error(error);
    });


