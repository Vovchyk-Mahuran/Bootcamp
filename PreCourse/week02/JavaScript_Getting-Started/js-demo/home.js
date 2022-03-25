const button = document.getElementById('see-review');

button.addEventListener('click', function () {
    const review = document.getElementById('review');

    review.classList.toggle('d-none');
})