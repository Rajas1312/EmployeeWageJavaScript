console.log("welcome to employee wage computation");

const fullTime=1
const partTime=0
const workingDaysPerMonth=20;
const maxHrs=100;
let daily=0;
let wagePerHr=20;
let attendance=0
class EmployeeWage{
    checkAttandance=()=> {
        let random=Math.round(Math.random());
        if(random=1){
            console.log("Employe is present")
            attendance=1;
        }else{
            console.log("Employee is absent")
            attendance=0
        }   
    }
    calculateDailyWage=()=> {
        let fullDay=8;
        let halfDay=4
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
    calculateMonthlyWage=()=>{
        let monthlyWage=workingDaysPerMonth*daily;
        console.log(" monthly wageis "+monthlyWage)
    }
    calculateWagesForCondition=()=>{
        let totalWorkingDays=0;
        let empWage=0;
        let empHrs=0
        let totalEmpWage=0;
        let totalEmpHrs=0;
        while( totalEmpHrs<=maxHrs && totalWorkingDays<workingDaysPerMonth) {
            totalWorkingDays++;
            if(attendance==1){
                let empCheck=Math.round(Math.random());
            switch(empCheck) {
            case fullTime:
                empHrs=8;
            break;
            case partTime:
                empHrs=4;
            break;
            default:
                empHrs=0;
            }
            empWage=empHrs*wagePerHr;
            totalEmpWage+=empWage;
            console.log("employe wage is ",empWage)
            console.log("total employee wage is ",totalEmpWage)
            var wageArray=[empWage,totalEmpWage,totalWorkingDays]
            console.log(wageArray)
        }  
            }
            
    }
}
employeeWage=new EmployeeWage();
module.exports=new EmployeeWage();
