function salary(input) {
    let sal = Number(input[1]);
    let tub = "";
    for (let i = 2; i < input.length; i++) {
        tub = input[i];
        switch (tub) {
            case "Facebook":
                sal -= 150;
                break;
            case "Instagram":
                sal -= 100;
                break;
            case "Reddit":
                sal -= 50;
                break;
            default:
                break;
        }
        if (sal <= 0) {
            console.log(`You have lost your salary.`);
            break;
        }
    }
    if (sal > 0) {
        console.log(sal);
    }
}

salary([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])
//You have lost your salary.
salary([3, 500, "Github.com", "Stackoverflow.com", "softuni.bg"])
//500 
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])
//350