
function validatemail(event){
    event.preventDefault()  
    if(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(event.target.value))
        return true;
    alert("you have enterd an invalid emial");
    return false
}