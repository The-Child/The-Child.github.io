function AttackOnWater() {
   
    var txtNumber = document.getElementById("scoreHP2");
    var newNumber = parseInt(txtNumber.innerHTML) - (Math.floor(Math.random() * 6) + 3) ;
    if (newNumber >= 0) {
   txtNumber.innerHTML = newNumber;
    } else alert('Wizard 1 wins!');
    }
  
  
  function MagicOnWater() {
     
    var txtNumber = document.getElementById("scoreHP2");
    //
    var txtNumber2 = document.getElementById("scoreMP1");
    //
    var newNumber = parseInt(txtNumber.innerHTML) - (Math.floor(Math.random() * 10) + 1) ;
    if (newNumber >= 0) {
   txtNumber.innerHTML = newNumber;
    } else alert('Wizard 1 wins!');
    //
    var newNumber2 = parseInt(txtNumber2.innerHTML) - (Math.floor(Math.random() * 10) + 1) ;
    if (newNumber2 >= 0) {
   txtNumber2.innerHTML = newNumber2;
    } else alert('Wizard 1 is out of magic!');
    //
    }
  
  //AntiMagicOnWater
  
  function AntiMagicOnWater() {
     
    var txtNumber = document.getElementById("scoreHP1");
    //
    var txtNumber2 = document.getElementById("scoreMP1");
    //
    var txtNumber3 = document.getElementById("scoreMP2");
    //
    var newNumber = parseInt(txtNumber.innerHTML) - (Math.floor(Math.random() * 6) + 3) ;
    if (newNumber >= 0) {
   txtNumber.innerHTML = newNumber;
    } else alert('Wizard 2 wins!');
    //
    var newNumber2 = parseInt(txtNumber2.innerHTML) - (Math.floor(Math.random() * 6) + 3) ;
    if (newNumber2 >= 0) {
   txtNumber2.innerHTML = newNumber2;
    } else alert('Wizard 1 is out of magic!');
    //
    var newNumber3 = parseInt(txtNumber3.innerHTML) - 10;
    if (newNumber3 >= 0) {
   txtNumber3.innerHTML = newNumber3;
    } else if (newNumber3 <= 10) {
      txtNumber3.innerHTML = 0 ;
      alert('Wizard 2 is out of magic!');
    } else return newNumber3;
    //
    }
  
  
  //
  /*
  function flipACoinForFire () {
     if (Math.random() * 10 >= 5) {
       var txtNumber = document.getElementById("scoreHP2");
    var newNumber = parseInt(txtNumber.innerHTML) - 15;
    if (newNumber >= 0) {
   txtNumber.innerHTML = newNumber;
    } else alert('Wizard 1 wins!');
   }
    else var txtNumber = document.getElementById("scoreHP1");
    var newNumber = parseInt(txtNumber.innerHTML) - 15;
    if (newNumber >= 0) {
   txtNumber.innerHTML = newNumber;
    } else alert('Wizard 2 wins!');
  }
    */
  //
  
  
  
  function AttackOnFire() {
     
    var txtNumber = document.getElementById("scoreHP1");
    var newNumber = parseInt(txtNumber.innerHTML) - (Math.floor(Math.random() * 6) + 3) ;
    if (newNumber >= 0) {
   txtNumber.innerHTML = newNumber;
    } else alert('Wizard 2 wins!');
    }
  
  // 
  
  function MagicOnFire() {
     
    var txtNumber = document.getElementById("scoreHP1");
    //
    var txtNumber2 = document.getElementById("scoreMP2");
    //
    var newNumber = parseInt(txtNumber.innerHTML) - (Math.floor(Math.random() * 10) + 1) ;
    if (newNumber >= 0) {
   txtNumber.innerHTML = newNumber;
    } else alert('Wizard 2 wins!');
    //
    var newNumber2 = parseInt(txtNumber2.innerHTML) - (Math.floor(Math.random() * 10) + 1) ;
    if (newNumber2 >= 0) {
   txtNumber2.innerHTML = newNumber2;
    } else alert('Wizard 2 is out of magic!');
    //
    }
  
  //AntiMagicOnWater
  
  function AntiMagicOnWater() {
     
    var txtNumber = document.getElementById("scoreHP2");
    //
    var txtNumber2 = document.getElementById("scoreMP2");
    //
    var txtNumber3 = document.getElementById("scoreMP1");
    //
    var newNumber = parseInt(txtNumber.innerHTML) - (Math.floor(Math.random() * 6) + 3) ;
    if (newNumber >= 0) {
   txtNumber.innerHTML = newNumber;
    } else alert('Wizard 1 wins!');
    //
    var newNumber2 = parseInt(txtNumber2.innerHTML) - (Math.floor(Math.random() * 6) + 3) ;
    if (newNumber2 >= 0) {
   txtNumber2.innerHTML = newNumber2;
    } else alert('Wizard 2 is out of magic!');
    //
    var newNumber3 = parseInt(txtNumber3.innerHTML) - 10;
    if (newNumber3 >= 0) {
   txtNumber3.innerHTML = newNumber3;
    } else if (newNumber3 <= 10) {
      txtNumber3.innerHTML = 0 ;
      alert('Wizard 1 is out of magic!');
    } else return newNumber3;
    //
    }
  
  //
  //Reset Button
  function NewGame() {
     var txtNumber1 = document.getElementById("scoreHP1");
    //
    var txtNumber2 = document.getElementById("scoreMP1");
    //
    var txtNumber3 = document.getElementById("scoreHP2");
    
    var txtNumber4 = document.getElementById("scoreMP2");
    
    txtNumber1.innerHTML = 50;
    txtNumber2.innerHTML = 30;
    txtNumber3.innerHTML = 50;
    txtNumber4.innerHTML = 30;
  }
  
  