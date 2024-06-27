let day="Holiday"
switch(day){
    case "Monday":
        console.log("7am");
        break;
        // If we are not using break statement then it prints everything that is present after the given day
    case "Tuesday":
        console.log("7am");
        break;

        // since wednesdat and thurs day have same timing we can alsmo conver the statement as

    // case "Wednesday":
    //     console.log("4am");
    //     break;
    // case "Thursday":
    //     console.log("4am");
    //     break;

    case "Wednesday":
    case "Thursday":
        console.log("4am");
        break;

    case "Friday":
        console.log("9am");
        break;

    case "Saturday":
    case "Sunday":
        console.log("8am");
        break;
    
    //If day are not matching with input then default case will be executed 
    default:
        console.log("Sleep")
}