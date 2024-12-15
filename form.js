function login()
{
    let uname=document.querySelector("#cs1").value;
    let pass=document.querySelector("#cs2").value;
     
    if(uname=="abc" && pass=="123")
    {
        alert("login successful");
    }
    else
    {
        alert("login failed");
    }

}

function show(){
    let pass=document.querySelector("3cs2")
    if(pass.type=="password")
    {
        pass.type="text";
    }
    else{
        pass.type="password"
    }
}