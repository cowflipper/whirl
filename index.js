const options = document.querySelectorAll('.option');
const desc = document.querySelector('.desc_opt');


options.forEach(option => {
    option.addEventListener('click', function() {
        desc.classList.toggle('desc_opt1')
    })
})

