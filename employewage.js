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
let wagePerHr=20;
let fullDay=8;
let halfDay=4
let daily=0;
const fullTime=1
const partTime=0
function calculateDailyWage() {
   
    let random=Math.round(Math.random());
    switch(random){
        case fullTime:
            let dailywage=wagePerHr*fullDay;
            daily=dailywage;
            console.log(dailywage);
            break
        case partTime:
            let dailywage1=wagePerHr*halfDay;
            console.log(dailywage1);
            daily=dailywage1;
            break;
        default :
        console.log("invalid") 
    }    
}
calculateDailyWage();

function calculateMonthlyWage(){
    let workingDaysPerMonth=20;
    let monthlyWage=workingDaysPerMonth*daily;
    console.log(" monthly wageis "+monthlyWage)
}
calculateMonthlyWage();