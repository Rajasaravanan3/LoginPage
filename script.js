function validate(){
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    //console.log(username+" "+password);
    event.preventDefault();
    if(validUserName(username)==true&&validPassword(password)==true){
        alert(`LoggedIn successfully`);
    }
    else if(!validUserName(username)){
        alert(`invalid Username`);
    }
    // else{
    //     alert(`Invalid Password`);
    // } 
}
function validUserName(username){
    if(username.length==0){
        console.log(`Enter Username`);
        return false;
    }
    else if(/[a-zA-Z0-9/.]/.test(username)==true&&/[&/=/_/'/-/+/*/,/</>/(/)/{/}]/.test(username)==false){
        console.log(`Valid Username`);
        return true;
    }
    console.log(`Invalid Username`);
    return false;
    /*if(username.length==0){
        console.log(`Enter an email Id`)
        return false;
    }
    var regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (regEx.test(username) == false) 
    {
        //console.log(`${regEx}+" "+${username}`);
        return false;
    }
    console.log(`valid email Id`)
    return true;*/
}
function validPassword(password){
    if(password.length<8){
        alert(`Enter atleast eight characters as password`);
        return false;
    }
    if(/[a-z]/.test(password)==false){
        alert(`Password should have atleast one Lowercase letter`);
        return false;
    }
    if(/[A-Z]/.test(password)==false){
        alert(`Password should have atleast one Uppercase letter`)
        return false;
    }
    if(/[0-9]/.test(password)==false){
        alert(`Password should have atleast one Numeric value`)
        return false;
    }
    if(/[~/!/@/#/$/%/^/&/+/-/*]/.test(password)==false){
        alert(`Password should have atleast one special character`)
        return false;
    }
    console.log(`valid password`);
    return true;
}