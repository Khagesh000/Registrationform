
function fun(){
    if(valname()){
      return;
    }
    return false;
  }
  
  function valname(){
    var name = document.form.sname.value;
    var name1 = document.form.fname.value;
    var name2 = document.form.useradress.value;
    var name3 = document.form.pincode.value;
    var name4 = document.form.useremail.value;
    var name5 = document.form.userdate.value;
    var name6 = document.form.usernumber.value;
           
    var data = /^[A-Za-z ]+$/
    var data1 = /^[a-zA-z0-9- /.,]+$/;
    var data2 = /^[0-9]{6}$/;
    var data3 = /^([a-z0-9A-Z\.-]+)@([a-z0-9-]+).([a-z]{2,8})([.[a-z]]$)/;
    var data4 = /^[0-9]{10,12}$/;
    if(name == "")
    {
        document.getElementById("demo").innerHTML="Please fill out this field"
        return false;
    }
    else if(name.length<3){
        document.getElementById("demo").innerHTML="atleast 4 characters are required";
        return false;
    }
    else if(!name.match(data)){
        document.getElementById("demo").innerHTML="Must be characeters"
        return false;
    }
    else if(name.match(data)){
        document.getElementById("demo").innerHTML=""
        
    }


    if(name1 == ""){
        document.getElementById("demo1").innerHTML="Blanks are not allowed";
        return false;
    }
    else if(name1.length<4){
        document.getElementById("demo1").innerHTML="Atleast 4 characters are required";
        return false;
    }
    else if(!name1.match(data)){
        document.getElementById("demo1").innerHTML="Must be characters";
        return false;
    }
    else if(name1.match(data)){
        document.getElementById("demo1").innerHTML="";
    }


    if(name2 == ""){
        document.getElementById("demo2").innerHTML="Must be filled";
        return false;
    }
    else if(name2.length<8){
        document.getElementById("demo2").innerHTML="invalid";
        return false;
    }
    else if(!name2.match(data1)){
        document.getElementById("demo2").innerHTML="Enter correct format";
        return false;
    }
    else if(name2.match(data1)){
        document.getElementById("demo2").innerHTML="";
    }

    
    if(name3 == ""){
        document.getElementById("demo4").innerHTML="Must be filled";
        return false;
    }
    else if(name3.length<6){
        document.getElementById("demo4").innerHTML="Enter correct pincode";
        return false;
    }
    else if(!name3.match(data2)){
        document.getElementById("demo4").innerHTML="invalid";
        return false;
    }
    else if(name3.match(data2)){
        document.getElementById("demo4").innerHTML="";
    }

    if(name4 == ""){
        document.getElementById("demo5").innerHTML="Must be filled";
        return false;
    }
  

    if(name6 == ""){
        document.getElementById("demo7").innerHTML="Must be filled";
        return false;
    }
    else if(!name6.match(data4)){
        document.getElementById("demo7").innerHTML="Invalid";
        return false;
    }
    else if(name6.match(data4)){
        document.getElementById("demo7").innerhtml="";
        return true;
    }

    

  }
