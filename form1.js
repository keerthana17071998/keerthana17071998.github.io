function validate() {
    const firstname = document.getElementById('firstname')
    const lastname = document.getElementById('lastname')
    const zipcode = document.getElementById('zipcode')
    const phonenumber = document.getElementById('phonenumber')
    const address1 = document.getElementById('address1')
    const address2 = document.getElementById('address2')
    const Email = document.getElementById('Email')
    const form = document.getElementById('form')
    const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (firstname.value === '' || firstname.value == null) {
    messages.push('firstName is required')
  }

  if (lastname.value === '' || lastname.value == null) {
    messages.push('lastName is required')
  }

  if (address1.value === '' || address1.value == null) {
    messages.push('address1 is required')
  }

  if (address2.value === '' || address2.value == null) {
    messages.push('address2 is required')
  }

  if (Email.value === '' || Email.value == null) {
    messages.push('Email is required')
  }


  if (phonenumber.value.length >= 10) {
    messages.push('phonenumber must be less than 10 characters')
  }

  if (zipcode.value.length >= 6) {
    messages.push('zipcode must be less than 6 characters')
  }


  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
}