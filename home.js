

function validateemail(){

	//validations on email
    var reg=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    var email=document.getElementById("email").value;
    if(reg.test(email))
    {
      document.getElementById("lbemail").innerHTML="Valid email";
      document.getElementById("lbemail").style.visibility="visible";
      document.getElementById("lbemail").style.color="white";
      return true;
    }
    else{
    	document.getElementById("lbemail").innerHTML="Invalid email";
      document.getElementById("lbemail").style.visibility="visible";
      document.getElementById("lbemail").style.color="red";
      return false;
    }


}

