function histogram(input){
    let n = input[0];
    let p1 = 0; let p2 = 0; let p3 = 0; let p4 = 0; let p5 = 0;
    for(let i = 1; i <= n; i++){
        if(input[i] < 200){p1++;}
        else if(input[i] <= 599){p3++;}
        else if(input[i] <= 399){p2++;}
        else if(input[i] <= 799){p4++;} 
        else if(input[i] >= 800){p5++;} 
    }
    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
    console.log(`${(p4 / n * 100).toFixed(2)}%`);
    console.log(`${(p5 / n * 100).toFixed(2)}%`);

}

//200 - 200 … 399 - 400 … 599 - 600 … 799 - 800 

histogram([3, 1, 2, 999])
//66.67% 0.00% 0.00% 0.00% 33.33% 
histogram([7, 800, 801, 250, 199, 399, 599, 799]) 
//14.29% 28.57% 14.29% 14.29% 28.57% 
histogram([9, 367, 99, 200, 799, 999, 333, 555, 111, 9]) 
//33.33% 33.33% 11.11% 11.11% 11.11% 
histogram([14, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200]) 
//57.14% 14.29% 7.14% 14.29% 7.14%
