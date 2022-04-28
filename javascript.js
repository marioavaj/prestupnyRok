 for(i = 1990; i <=2030; i++) {
    let year = i;
    let leap = isLeapYear(year);

    if (leap == 1){
        if (leap == 1  &&  year%10==0){
            if (leap == 1  &&  year%10==0 && year==2000){
                console.log("P O N " + year)
            }else console.log( "P O " + year)
        } else console.log( "P " + year)
    } else {
    if(year%10==0){
        console.log("O " + year)
    }else console.log(year)
}
 }
 
 function isLeapYear(year){ 
    if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    return 1;
                }
                return 0;
            }
            return 1;
        }
        return 0;
    }