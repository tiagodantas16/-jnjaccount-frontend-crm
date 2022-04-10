const BASEURL = "https://jnjaccount-backend-crm.herokuapp.com/";

async function addNewToSend() {
  const form = document.querySelector('form');

  const formData = {
    email: form.email.value,
    send: form.status.value,
  }
  axios.post(BASEURL, formData)
    .then(response => console.log(response.data))
    .catch(error => error);

  document.getElementById('form1').reset();
}