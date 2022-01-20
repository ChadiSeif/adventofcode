//**Hello Ramin this is part 1 of day 3 :D **//
//i am running this online to get the input here : https://www.codechef.com/ide //
process.stdin.resume();
process.stdin.setEncoding('utf8');


process.stdin.on('data', function(data) { 
    
    var test = data.split("\n")
		var zero = 0 ;
	var one = 0 ;
	var gamma= "";
	var epsilon =""
		let i = 0
	 while ( i < test[1].length )  {
		for(let j=0 ; j<test.length ; j++)	{		
		if (test[j][i] === "0"){
			zero += 1
		} else one += 1 
		}
		if ( one > zero ){
		gamma = gamma + "1" ;
		epsilon = epsilon +"0"
			}else {gamma = gamma +"0";
			epsilon = epsilon +"1"}
			;
		one=0 ;
		zero=0
		i++
	 }
	 console.log(parseInt(gamma,2)*parseInt(epsilon,2))
	 
    });
