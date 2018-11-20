let money, time;
function start () {
    money = +prompt("Ваш бюджет на месяц?", 50000);
    time = prompt("Введите дату в формате YYYY-MM-DD", "1989-12-31");

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", 50000);
    }
}
start ();

var appData = {
    budget: money, 
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let item = prompt("введите статью расходов"),
            cost = prompt("во сколько обойдется?");

        if ( (isNaN(item)) && (typeof(item)) != null && (typeof(cost)) != null && 
        item != '' && cost != '' && item.length < 10) {
            console.log("done");
            appData.expenses[item] = cost;
        }  else {
            i--;
        }
    }
}
chooseExpenses();


/*let i = 0;
while (i < 2) {
    let item = prompt("введите статью расходов"),
        cost = prompt("во сколько обойдется?");
        if ( (isNaN(item))=== 'string' && (typeof(item)) != null && (typeof(cost)) != null && 
        item != '' && cost != '' && item.length < 10) {
        console.log("done");
        appData.expenses[item] = cost; 
        i++; 
    } else {
        console.log("error");
    }        
}*/

/*let i = 0;
do {
    let item = prompt("введите статью расходов"),
        cost = prompt("во сколько обойдется?");
        if ( (isNaN(item))=== 'string' && (typeof(item)) != null && (typeof(cost)) != null && 
        item != '' && cost != '' && item.length < 10) {
        console.log("done");
        appData.expenses[item] = cost;
        i++;
    } else {
        console.log("error");   
    }                
} 
while (i < 2);
function detectDayBudget () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет:" + appData.moneyPerDay);
}
detectDayBudget();*/


function detectLevel () {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        }   else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        }   else {
            console.log("Произошла ошибка");
        }
}

detectLevel();
console.log(appData);

function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome); 
    }
}

checkSavings();

function chooseOptExpenses(){
    for(let i = 0; i < 3; i++) {
        let optional = prompt("Статья необязательных расходов?");
    if(typeof(optional)=== 'string' && optional != '' && optional != null) {
        appData.optionalExpenses[i] = optional;
        console.log("good");
        } else {
            i--;
            console.log("error");
        }
    } 
}
chooseOptExpenses();
