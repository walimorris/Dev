fetch('Components/header.html')
  .then(response => {
      return response.text();
  })
  .then(data => {
      const body = document.body;
      body.innerHTML = data + body.innerHTML;
  })