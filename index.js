const options = document.querySelectorAll('.option');
const desc = document.querySelectorAll('.desc_opt');




// for(let i = 0; i < options.length; i++) {
//     options[i].addEventListener('click', function() {
//             desc[i].classList.remove('desc_opt1')
//             desc[i].classList.add('desc_opt')
//     })
// }

for(let i = 0; i < options.length; i++){
    options[i].addEventListener('click', function(){
        for(let i = 0; i < options.length; i++) {
            desc[i].classList.remove('desc_opt1')
        } 
        desc[i].classList.toggle('desc_opt1')
    })
}
