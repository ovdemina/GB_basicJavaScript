//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;
var answers = [];

question (works.a00, works.a1, works.a2, works.a0);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        question (works.b00, works.b1, works.b2, works.b0);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                question (works.d00, works.d1, works.d2, works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        question (works.c00, works.c1, works.c2, works.c0);
        switch (event) {
            case 1: // Второе действие
            case 2: // Второе действие
                question (works.d00, works.d1, works.d2, works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
var number = +prompt ("Какой по счету вопрос Вам понравился больше всего?");
switch(number){
    case 1:
        alert(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры\n' + 'Ваш ответ: ' + answers[0]);
        break;
    case 2:
        if(answers[0] == 1){
            alert(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры\n' + 'Ваш ответ: ' + answers[1]);
            break;
        } 
        else {
            alert(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры\n' + 'Ваш ответ: ' + answers[1]);
            break;
        }
    case 3:
            alert(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры\n' + 'Ваш ответ: ' + answers[2]);
            break;     
}
//alert(answers);

//------------------------------------------
function question (a, b, c, d) {
    do {
        ok = false;
        event = +prompt(a + b + c + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(d, event);
            
        }
    } while (!ok);
}


function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    answers.push(event);
	return true, answers;
    
}

