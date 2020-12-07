let tbody = document.querySelector('tbody');

function generateRandomNumber(min, max) {
    return Number(Math.random() * (max - min) + min).toFixed();
}

for(let i = 1; i <= 63; i++) { //генерация таблицы
    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    let tdDate = document.createElement('td');
    let tdValue = document.createElement('td');
    let tdTarget = document.createElement('td');

    tdId.textContent = i;
    tdDate.textContent = `2019-${generateRandomNumber(1, 12)}-${generateRandomNumber(1, 31)}`; //рандом дат
    tdDate.classList.add = 'date';
    tdValue.textContent = generateRandomNumber(10000, 30000);
    tdValue.classList.add = 'value';
    tdTarget.textContent = generateRandomNumber(1000, 5000);

    if(i == 1 || i == 21) { //установка одинаковых дат (нужно сложить value 1 и 21 менеджера)
        tdDate.textContent = '2019-3-11';
    }

    tr.appendChild(tdId);
    tr.appendChild(tdDate);
    tr.appendChild(tdValue);
    tr.appendChild(tdTarget);

    tbody.appendChild(tr);
}


const needDate = '2019-3-11';
const trArr = [...document.querySelectorAll('tr')];
let sum = 0;

trArr.map(tr => {
    let arrTdInTr = [...tr.children]; //все ячейки во всех строках
    arrTdInTr.map(td => {
        if(td.textContent === needDate) { // поиск по всем ячейкам нужной даты
            [...tr.children].map(value => { //найдены нужные строки, поиск ячейки с нужным значением 
                if(value.classList.add === 'value') {
                    sum += +value.textContent; //сложение
                }
            })
        }
    })
});

console.log(sum);