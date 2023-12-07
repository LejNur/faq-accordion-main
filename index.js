let questions = document.querySelectorAll('.question');
let answers = document.querySelectorAll('.answer');
let plusIcon = document.querySelectorAll('.icon-plus');
let minusIcon = document.querySelectorAll('.icon-minus');

questions.forEach(function (q, index) {

    q.addEventListener('click', function() {

        answers[index].classList.toggle('hidden');
        plusIcon[index].classList.toggle('hidden');
        minusIcon[index].classList.toggle('hidden');


        answers.forEach(function(answer, answerIndex) {

            if (answerIndex !== index) {

                answer.classList.add('hidden');
                plusIcon[answerIndex].classList.remove('hidden');
                minusIcon[answerIndex].classList.add('hidden');
                
                
            }
        })

    })

})