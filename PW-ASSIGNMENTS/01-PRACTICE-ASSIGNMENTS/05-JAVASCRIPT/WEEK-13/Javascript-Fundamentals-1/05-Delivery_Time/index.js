// Program to display the delivery time accordting to selected package ------------>


let package = "standard"

switch (package) {
    case "standard":
        console.log("As per your selected package, it'll take you 3-5 Days for delivery!");
        break;
    case "express":
        console.log("As per your selected package, it'll take you 1-2 Days for delivery!");  
        break;
    case "overnight":
        console.log("As per your selected package, it'll be delivered to you the next day!");      
        break;
    default:
        console.log("Please! Select a valid package.");
        break;
}