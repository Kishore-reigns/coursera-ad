var arr = ["james","reigns","kane","thomas","John"] ;

for (var i = 0 ; i < arr.length ; i++){
	if(arr[i][0] == 'j' || arr[i][0] == 'J'){
		console.log("Goodbye "+arr[i]);
	}
	else {
		console.log("Hello "+arr[i]);
	}
}