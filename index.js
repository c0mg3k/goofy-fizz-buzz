var obj = {
  fizz: 3,
  buzz: 5,
  bizz: 7
}


var keys = Object.keys(obj);

var count = 100;

for(var i = 0; i <= count; i++) {
	var output = "";	
	for(var j = 0; j < keys.length; j++){
    if(i % obj[keys[j]] == 0){
    	output+= keys[j];
    }
  }
  if(!output){
  	output = i;
  }
  console.log(`output: ${output}`);
}