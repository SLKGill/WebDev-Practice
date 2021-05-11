function check(){
  //document.write("Never give up!"); this brings you to a new page
  var c=0;
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;
  var q3=document.quiz.question3.value;
  var q4=document.quiz.question4.value;
  var result=document.getElementById("result");
  var quiz=document.getElementById("quiz");
  if(q1=="Javascript"){
    c++;
    resultq1.textContent="Question 1: Correct";
    document.getElementById("resultq1").style.color = 'green';
    }
  else{
    resultq1.textContent="Question 1: Incorrect";
    document.getElementById("resultq1").style.color = 'red';
  }
  if(q2=="Russia"){
    c++;
    resultq2.textContent="Question 2: Correct";
    document.getElementById("resultq2").style.color = 'green';
    }
  else{
    resultq2.textContent="Question 2: Incorrect";
    document.getElementById("resultq2").style.color = 'red';
  }
  if(q3=="Ottawa"){
    c++;
    resultq3.textContent="Question 3: Correct";
    document.getElementById("resultq3").style.color = 'green';
    }
  else{
    resultq3.textContent="Question 3: Incorrect";
    document.getElementById("resultq3").style.color = 'red';
  }
  if(q4=="4"){
    c++;
    resultq4.textContent="Question 4: Correct";
    document.getElementById("resultq4").style.color = 'green';
    }
  else{
    resultq4.textContent="Question 4: Incorrect";
    document.getElementById("resultq4").style.color = 'red';
  }
  //document.write(c); gives # questions correct on a new page
  quiz.style.display="none"; //brings to a new page following css style

  result.textContent=`Total Score: ${c}/4`; //displays # right

  
}