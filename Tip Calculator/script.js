let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
  let billAmount = document.getElementById('bill_amount').value;
  let tipPercentage = document.getElementById('tip_percentage').value;

  let tipAmount = document.getElementById('tip_amount').value = (tipPercentage/100*billAmount).toFixed(2);

  document.getElementById('total_bill').value= (parseFloat(billAmount)+parseFloat(tipAmount)).toFixed(2);
  //need parseFloat to be actual calculation
  //.toFixed rounds to decimal points
  
  //test
  //console.log(billAmount);
})