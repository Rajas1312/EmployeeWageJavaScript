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
   let dailywage=wagePerHr*fullDay;
   console.log(dailywage);
}
calculateDailyWage();