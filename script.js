 
 function go() {
   var circle = window.document.getElementById('circleprogress'); 
   var number = window.document.getElementById('numberprogress').value;

   document.querySelector('.number').innerHTML = number + '%';
   circle.style.strokeDashoffset = 440 - (440 * number) / 100;


 }