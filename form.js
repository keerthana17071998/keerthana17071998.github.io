function validate() { 
        var name = document.forms["RegForm"]["firstname"]; 
        var name = document.forms["RegForm"]["lastname"];
        var email = document.forms["RegForm"]["Email"]; 
        var phone = document.forms["RegForm"]["phonenumber"]; 
        var Zipcode = document.forms["RegForm"]["Zipcode"]; 
        var address1 = document.forms["RegForm"]["address1"]; 
        var address2 = document.forms["RegForm"]["address2"];
  
        if (name.value == "") { 
            window.alert("Please enter your first name."); 
            name.focus(); 
            return false; 
        } 
  
        if (name.value == "") { 
            window.alert("Please enter your last name."); 
            name.focus(); 
            return false; 
        } 
  
        if (email.value == "") { 
            window.alert( 
              "Please enter a valid e-mail address."); 
            email.focus(); 
            return false; 
        } 
  
        if (phone.value == ""|| phone.value >=10) { 
            window.alert( 
              "Please enter your correct telephone number."); 
            phone.focus(); 
            return false; 
        } 
  
        if (Zipcode.value == ""|| Zipcode.value >= 6) { 
            window.alert("Please enter your Zipcode"); 
            Zipcode.focus(); 
            return false; 
        } 

        if (address1.value == "") { 
            window.alert("Please enter your address1"); 
            address1.focus(); 
            return false; 
        } 

        if (address2.value == "") { 
            window.alert("Please enter your address2"); 
            address2.focus(); 
            return false; 
        } 
  
        
  
       
    } 

