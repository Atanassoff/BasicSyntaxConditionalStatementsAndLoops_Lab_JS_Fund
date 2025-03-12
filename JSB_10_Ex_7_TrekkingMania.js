function trekkingMania(input){
    let groupNumber = 0;
    let p1 = 0; let p2 = 0; let p3 = 0; let p4 = 0; let p5 = 0;
    let total = 0;
    for(let i = 1; i < input.length; i++){
        groupNumber = Number(input[i]);
        total += groupNumber;
        if(groupNumber <= 5){p1 += groupNumber;}
        else if(groupNumber <= 12){p2 += groupNumber;}
        else if(groupNumber <= 25){p3 += groupNumber;}
        else if(groupNumber <= 40){p4 += groupNumber;}
        else if(groupNumber >= 41){p5 += groupNumber;}
    }
    console.log(`${(p1 / total * 100).toFixed(2)}%`);
    console.log(`${(p2 / total * 100).toFixed(2)}%`);
    console.log(`${(p3 / total * 100).toFixed(2)}%`);
    console.log(`${(p4 / total * 100).toFixed(2)}%`);
    console.log(`${(p5 / total * 100).toFixed(2)}%`);
} 

//до 5 - 6 до 12 - 13 до 25 - 26 до 40 - 41 или повече

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])
//1.84% 6.75% 5.21% 31.60% 54.60% 
trekkingMania(["5", "25", "41", "31", "250", "6"]) 
//0.00% 1.70% 7.08% 8.78% 82.44% 