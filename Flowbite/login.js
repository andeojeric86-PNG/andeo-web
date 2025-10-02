//Andeo, Jeric ID
function login(){
    console.log("You enter the email: " + email)
    console.log("You enter the password: " + password)

    if (email==="Andeojeric86@gmail.com"){
        console.log("Your email is correct.");
        document.getElementById("success-msg").innerHTML = "Your email is corrrect";
   
    }else(email==="Andeojeric86@gamil.com")
    {
        console.log("Your email is incorrect.");
        document.getElementById("error-msg").innerHTML = "Your email is incorrect";
    }

    if(password==="Jericandeo@080505"){
            console.log("Your password is correct");

        }else{
          console.log("Your password is incorrect");
            document.getElementById("error-msg").innerHTML = "Your password is incorrect";  
        }
           
    }

} 