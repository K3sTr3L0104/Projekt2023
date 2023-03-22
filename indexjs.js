function jelentkezes() {  
  //bekérni hogy jobb vagy bal kezes
    var yes = document.getElementById("jobb");  
    var no = document.getElementById("bal");  
    if (yes.checked == true && no.checked == true){  
      document.getElementById("result").innerHTML = "Kérlek csak 1 lehetőséget válassz!";  
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
    document.getElementById("result").innerHTML = "Kérlek jelöld meg az egyik lehetőséget!";  
    }  
    //bekérni a magasságát
    var height = document.getElementById("magassag");
    //bekérni a mozgékonyságát
    var igen = document.getElementById("igen");  
    var nem = document.getElementById("nem");
    if (igen.checked == true && nem.checked == true){  
      document.getElementById("error").innerHTML = "Kérlek csak 1 lehetőséget válassz!";  
    }  
    else if (igen.checked == true){  
      var yy = document.getElementById("igen").value;  
      document.getElementById("error").innerHTML = yy;   
    }   
    else if (nem.checked == true){  
      var nn = document.getElementById("nem").value;  
      document.getElementById("error").innerHTML = nn;  
    }  
    else {  
    document.getElementById("error").innerHTML = "Kérlek jelöld meg az egyik lehetőséget!";  
    } 
    //eldönteni magassága, mozgékonysága alapján, hogy milyen posztra lenne jó
    if (height < 175 && (igen.checked == true)) {
      var libero = "Liberó";
    }
    else if (height < 175 && (nem.checked == true) {
      var felado = "Feladó";
    }
    else if (height < 182 && (igen.checked == true)) {
      var uto = "Szélső ütő";
    }
    else if (height < 190 && (igen.checked == true)) {

    }
    else {
      var center = "Center";
    }
}  