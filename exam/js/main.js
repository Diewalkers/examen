function myFunc() {
	var arr = [1, 1, 2, 3];
	var x=0;
	var array=[]
    	for(var i = 0; i < arr.length; i++){
      	for(var j = 0; j < arr.length; j++){
        	if(arr[i]===arr[j]){
          		x++;
        }
      }
      if (x==1) array.push(arr[i])
      	x=0;
    }
    alert(array);
  }

myFunc();