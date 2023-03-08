function jelentkezes() {  
    var yes = document.getElementById("jobb");  
    var no = document.getElementById("bal");  
    if (yes.checked == true && no.checked == true){  
      document.getElementById("error").innerHTML = "Kérlek csak 1 lehetőséget válassz!";  
    }  
    else if (yes.checked == true){  
      var y = document.getElementById("jobb").value;  
      document.getElementById("result").innerHTML = y;   
    }   
    else if (no.checked == true){  
      var n = document.getElementById("bal").value;  
      document.getElementById("result").innerHTML = n;  
    }  
    else {  
    document.getElementById("error").innerHTML = "Kérlek jelöld meg az egyik lehetőséget!";  
    }  
}  