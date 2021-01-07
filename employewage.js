console.log("welcome to employee wage computation");
function checkAttandance() {
    let random=Math.round(Math.random());
    if(random=1){
        console.log("Employe is present")
    }else{
        console.log("Employee is absent")
    }   
}
checkAttandance();
function calculateDailyWage() {
    let wagePerHr=20;
    let fullDay=8;
    let halfDay=4
    const fullTime=1
    const partTime=0
    let random=Math.round(Math.random());
    switch(random){
        case fullTime:
            let dailywage=wagePerHr*fullDay;
            console.log(dailywage);
            break
        case partTime:
            let dailywage1=wagePerHr*halfDay;
            console.log(dailywage1);
            break;
        default :
        console.log("invalid") 
    }    
}
calculateDailyWage();