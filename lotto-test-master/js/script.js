//slumptal mellan 1 och 39
//OBS dålig kod,inte optimerad, men ger inte duplikat


function lottoRad() {
	
	var checker=0;
	var checker1=0;
	var checker2=0;
	var checker3=0;
	var checker4=0;
	var checker5=0;
	var checker6=0;
	
	for (var i=0; i<=6; i++) {

		let lottery = Math.floor(Math.random() * 38)+1;
	 	
		
		
		//console.log(checker);
		
	if (i==0){
			 while ( lottery==checker1 || lottery==checker2 || lottery==checker3 || lottery==checker4 || lottery==checker5 || lottery==checker6){
			
			 lottery = Math.floor(Math.random() * 38)+1;
			//console.log(lottery);
		}
		} else if (i==1){
			 while (lottery==checker ||  lottery==checker2 || lottery==checker3 || lottery==checker4 || lottery==checker5 || lottery==checker6){
			
			 lottery = Math.floor(Math.random() * 38)+1;
			//console.log(lottery);
		}
		}else if (i==2){
			 while (lottery==checker || lottery==checker1 ||  lottery==checker3 || lottery==checker4 || lottery==checker5 || lottery==checker6){
			
			 lottery = Math.floor(Math.random() * 38)+1;
			//console.log(lottery);
		}
		}else if (i==3){
			 while (lottery==checker || lottery==checker1 || lottery==checker2 ||  lottery==checker4 || lottery==checker5 || lottery==checker6){
			
			 lottery = Math.floor(Math.random() * 38)+1;
			//console.log(lottery);
		}
		}else if (i==4){
			 while (lottery==checker || lottery==checker1 || lottery==checker2 || lottery==checker3 ||  lottery==checker5 || lottery==checker6){
			
			 lottery = Math.floor(Math.random() * 38)+1;
			//console.log(lottery);
		}
		}else if (i==5){
			 while (lottery==checker || lottery==checker1 || lottery==checker2 || lottery==checker3 || lottery==checker4 ||  lottery==checker6){
			
			 lottery = Math.floor(Math.random() * 38)+1;
			//console.log(lottery);
		}
		}else{
			 while (lottery==checker || lottery==checker1 || lottery==checker2 || lottery==checker3 || lottery==checker4 || lottery==checker5 ){
			
			 lottery = Math.floor(Math.random() * 38)+1;
			//console.log(lottery);
		}
			//console.log(checker6);
		}
		
		if (i==0){
			 checker = lottery;
		//console.log(checker);
		} else if (i==1){
			 checker1 = lottery;
		}else if (i==2){
			 checker2 = lottery;
		}else if (i==3){
			 checker3 = lottery;
		}else if (i==4){
			 checker4 = lottery;
		}else if (i==5){
			 checker5 = lottery;
		}else{
			 checker6 = lottery;
			//console.log(checker6);
		}
		
		console.log(checker);
		document.getElementById ("lotto_" + i).innerHTML = lottery;
		
	}
	
	
	
}
