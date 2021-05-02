fetch('Components/footer.html')
  .then(response => {
      return response.text();
  })
  .then(data => {
      const body = document.body;
      body.innerHTML = body.innerHTML + data;
  })