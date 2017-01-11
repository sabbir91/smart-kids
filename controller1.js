
$(document).ready(function () {
	
var questionNumber=0;
var questionBank=new Array();
var stage="#game1";
var stage2=new Object;
var questionLock=false;
var numberOfQuestions;
var score=0;
		 

		 
		 
		 

 
 		$.getJSON('activity1.json', function(data) {

		for(i=0;i<data.quizlist.length;i++){ 
			questionBank[i]=new Array;
			questionBank[i][0]=data.quizlist[i].question;
			questionBank[i][1]=data.quizlist[i].option1;
			questionBank[i][2]=data.quizlist[i].option2;
			questionBank[i][3]=data.quizlist[i].option3;
			questionBank[i][4]=data.quizlist[i].option4;
			questionBank[i][5]=data.quizlist[i].option5;
			questionBank[i][6]=data.quizlist[i].option6;

		}
		 numberOfQuestions=questionBank.length; 
		
		  
		displayQuestion();
		})//gtjson
 

fillDB();



function displayQuestion(){
 var rnd=Math.random()*3;
rnd=Math.ceil(rnd);
 var q1;
 var q2;
 var q3;
 var q4;
 var q5;
 var q6;


if(rnd==1){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];}
if(rnd==2){q2=questionBank[questionNumber][1];q3=questionBank[questionNumber][2];q1=questionBank[questionNumber][3];}
if(rnd==3){q3=questionBank[questionNumber][1];q1=questionBank[questionNumber][2];q2=questionBank[questionNumber][3];}

if(rnd==4){q4=questionBank[questionNumber][1];q5=questionBank[questionNumber][2];q6=questionBank[questionNumber][3];}
if(rnd==5){q5=questionBank[questionNumber][1];q6=questionBank[questionNumber][2];q4=questionBank[questionNumber][3];}
if(rnd==6){q6=questionBank[questionNumber][1];q4=questionBank[questionNumber][2];q5=questionBank[questionNumber][3];}

 $(stage).append('<div  class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="pix"><img src="img/'+q1+'"></div><div id="2" class="pix"><img src="img/'+q2+'"></div><div id="3" class="pix"><img src="img/'+q3+'"></div>');

 $('.pix').click(function(){
	 var audio = new Audio('y.mp3');
	 var audio2 = new Audio('z.mp3');
	 

  if(questionLock==false){questionLock=true;	
  //correct answer
  if(this.id==rnd){
	 
   $(stage).append('<div class="feedback1">CORRECT</div>'); 
   //code for pla
   audio.play();
  
   score++;
   }
  //wrong answer	
  if(this.id!=rnd){
   $(stage).append('<div class="feedback2">WRONG</div>');
    //code for play audio 
	audio2.play();
  }
  setTimeout(function(){changeQuestion()},1000);
 }})
}//display question <button class="">Exit</button>
d
	
	
	function changeQuestion(){
		
		questionNumber++;
	
	if(stage=="#game1"){stage2="#game1";stage="#game2";}
		else{stage2="#game2";stage="#game1";}
	
	if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}
	
	 $(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
	 $(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
	}//change question
	

	
	
	function displayFinalSlide(){
		
		$(stage).append('<div class="questionText"><b>You have finished the quiz!<br><br>Total questions: '+numberOfQuestions+'<br>Correct answers: '+score+'</div>');
		$(stage).append('<br><a href="menu.html"><input type="image" src="img/home.png" name="image" width="60" height="60"></a>');
		$(stage).append('<span class="exit"><a href="quizlevel.html"><input type="image" src="img/exit.png" name="image" width="60" height="60"></a></span>');

	}//display final slide
	
	
	});//doc ready