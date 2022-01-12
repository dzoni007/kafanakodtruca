function validateForm() {
    let x = document.getElementById("ime").value;
    let niz=[,,,,,,];
    console.log(x);
    if (x.length < 2) {
        alert("Ime mora imati bar 2 karaktera");
        
        return false;
    }else niz[1]=x;
        
    
     x = document.getElementById("prezime").value;
    if (x.length < 2) {
        alert("Prezime mora imati bar 3 karaktera");
        
        return false;
    }else niz[2]=x;
    x = document.getElementById("mejl").value;
    if (!proveriMejl(x)) {
        alert("Mejl nije ispravan");
        
        return false;
    } else niz[3]=x;
    x = document.getElementById("broj").value;
    if (!proveriBroj(x)) {
        alert("Broj telefona nije ispravan");
       
        return false;
    }
    x = document.getElementById("poruka").value;
    if (x.length<=1) {
        alert("Unesite poruku!");

        return false;
    }
    if(document.getElementById("checkbox").checked==false){
        alert( "Morate se složiti sa uslovima korišćenja!");

        return false;
    }
    let datum =new Date();
console.log(datum);
     let slazesse=confirm("Da li se slazete sa unetim podacima?"+'\n'+
    "Ime: "+niz[1] 
     +'\n'+"Prezime: "+niz[2]+
     '\n'+"Email: "+niz[3]+'\n');
   if(slazesse){ resetForm();
    alert("Poslali ste poruku!"+'\n'+
    "Vreme slanja poruke: " +datum.getDate()+"."+(datum.getMonth()+1)+"."+(datum.getFullYear())+". "
    +datum.getHours()+":"+datum.getMinutes()+":"+datum.getSeconds());
   
    return true;
   }
   else return false;

    
}
function proveriBroj(broj){

for (let index = 0; index < broj.length; index++){

    if(validateChar(broj[index])){
        return false;
    }
    
}
if (broj.length>15 || broj.length<5) {
return false;
}
return true;
}
function validateChar(char){
    let x="QWERTYUIOPASDFGHJKLZXCVBNMŠĐČĆqwertzuiopšasdfghjklčyxcvbnm,.ŽQWYZqwertyuiop[]asdfghjkl;'zxvbnm,.//*-+.~!@#$%^&*()_+"
    for (let index = 0; index < x.length; index++) {
        if(char==x[index]){
            return true;
        }
        
    }
    return false;
}
function proveriMejl(mail){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
}

function resetForm(){
    document.getElementById("ime").value="";
    document.getElementById("prezime").value="";
    document.getElementById("mejl").value="";
    document.getElementById("broj").value="";
    document.getElementById("poruka").value="";
   
    triggerUslove();
    return true;
}
function triggerUslove(){
    document.getElementById("checkbox").checked = false;
}