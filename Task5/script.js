document.getElementById('reservationForm').addEventListener('input', function (event) {
    validateForm();
});

function validateForm() {
    // Validate Name
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters long.';
        nameError.style.display = 'block';
        name.setCustomValidity('Invalid');
    } else {
        nameError.style.display = 'none';
        name.setCustomValidity('');
    }

    // Validate Email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        email.setCustomValidity('Invalid');
    } else {
        emailError.style.display = 'none';
        email.setCustomValidity('');
    }

    // Validate Phone (optional, digits only)
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^[0-9]{10}$/;
    if (phone.value && !phonePattern.test(phone.value)) {
        phoneError.textContent = 'Phone number must be 10 digits.';
        phoneError.style.display = 'block';
        phone.setCustomValidity('Invalid');
    } else {
        phoneError.style.display = 'none';
        phone.setCustomValidity('');
    }

    // Validate Number of Guests
    const guests = document.getElementById('guests');
    const guestsError = document.getElementById('guestsError');
    if (guests.value < 1 || guests.value > 20) {
        guestsError.textContent = 'Guests must be between 1 and 20.';
        guestsError.style.display = 'block';
        guests.setCustomValidity('Invalid');
    } else {
        guestsError.style.display = 'none';
        guests.setCustomValidity('');
    }

    // Validate Date (must be in the future)
    const date = document.getElementById('date');
    const dateError = document.getElementById('dateError');
    const currentDate = new Date().toISOString().split("T")[0];
    if (date.value < currentDate) {
        dateError.textContent = 'Reservation date must be in the future.';
        dateError.style.display = 'block';
        date.setCustomValidity('Invalid');
    } else {
        dateError.style.display = 'none';
        date.setCustomValidity('');
    }

    // Validate Time
    const time = document.getElementById('time');
    const timeError = document.getElementById('timeError');
    if (!time.value) {
        timeError.textContent = 'Please select a time for the reservation.';
        timeError.style.display = 'block';
        time.setCustomValidity('Invalid');
    } else {
        timeError.style.display = 'none';
        time.setCustomValidity('');
    }
}

document.getElementById('reservationForm').addEventListener('submit', function (event) {
    validateForm();
    if (!this.checkValidity()) {
        event.preventDefault();
        alert('Please correct the errors in the form.');
    }
});
