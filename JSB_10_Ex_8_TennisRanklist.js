function tennisRanklist(input){
    let allTournaments = Number(input[0]);
    let start = Number(input[1]);
    let currentPoins = 0;
    let tournament = "";
    let wins = 0;
    for(let i = 2; i < input.length; i++){
        tournament = input[i];
        switch(tournament){
            case "W": start += 2000; currentPoins += 2000; wins++; break; 
            case "F": start += 1200; currentPoins += 1200; break; 
            case "SF": start += 720; currentPoins += 720; break;
        }
    }
    console.log(`Final points: ${start}`);
    console.log(`Average points: ${Math.floor(currentPoins / allTournaments)}`);
    console.log(`${(wins / allTournaments * 100).toFixed(2)}%`);
}

//W - 2000 F - 1200 SF - 720

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]) 
//Final points: 8040 
//Average points: 1328 
//40.00% 
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]) 
//Final points: 6190 
//Average points: 1360 
//50.00% 
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]) 
//Final points: 11040 
//Average points: 1405 
//42.86%