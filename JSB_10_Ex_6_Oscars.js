function oscars(input) {
    let actor = input[0];
    let points = Number(input[1]);
    let juryMember = "";
    let juryMemberPoints = 0;
    for (let i = 3; i < input.length; i += 2) {
        juryMember = input[i];
        juryMemberPoints = input[i + 1];
        points += (juryMember.length * juryMemberPoints / 2);
        if (points >= 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    }
    if (points < 1250.5) {
        console.log(`Sorry, ${actor} you need ${(1250.5 - points).toFixed(1)} more!`);
    }
}

oscars(["Zahari Baharov", 205, 4, "Johnny Depp", 45, "Will Smith", 29, "Jet Lee", 10, "Matthew Mcconaughey", 39])
//Sorry, Zahari Baharov you need 247.5 more!     
oscars(["Sandra Bullock", 340, 5, "Robert De Niro", 50, "Julia Roberts", 40.5, "Daniel Day-Lewis", 39.4, "Nicolas Cage", 29.9, "Stoyanka Mutafova", 33])
//Congratulations, Sandra Bullock got a nominee for leading role with 1268.5!