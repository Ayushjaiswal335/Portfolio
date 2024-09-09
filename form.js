const scriptURL = 'https://script.google.com/macros/s/AKfycbwYT7VwFMP3-KJjbbZBtmOPyPYL6cF-Zlpr4eOo9s6pYoBxR_HU6qZyJVIuUJA5hdTg/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
            msg.innerHTML="Message sent Successfully"
            setTimeout(() => {
                msg.innerHTML=""
        }, 3000);
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})