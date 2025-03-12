function cleverLily(age, washMachine, toyPrice) {
    /*
    let age = input[0];
    let washMachine = input[1];
    let toyPrice = input[2];
    */
    let money = 0;
    let counterMoneyYears = 0;
    let toyMoney = 0;
    
    for(let i = 1; i <= age; i++){
        if(i % 2 === 0){
            counterMoneyYears++;
            money += (counterMoneyYears * 10);
            money--;
        }
        else{
            toyMoney += toyPrice;
        }
    }

    let total = money + toyMoney;
    let diff = Math.abs(total - washMachine);
    if(washMachine <= total){
        console.log(`Yes! ${diff.toFixed(2)}`);
    }
    else{
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

cleverLily(10, 170.00, 6) 
//Yes! 5.00 
cleverLily(21, 1570.98, 3) 
//No! 997.98