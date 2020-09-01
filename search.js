/*
* Code Search Test Skill Shippop company
* By: WANNARAT BOONMA  
* Email: wannarat.blue@gmail.com
*/

function myDatalists() {
	/*get value*/
	var datalists = $('#datalists').val()  
	/*split ',' change to array*/ 
	var resDatalists = datalists.split(","); 
	console.log(resDatalists) 

	/* Check val not null*/ 
	if(datalists){
		document.getElementById("resDatalist").innerHTML = "List: " + resDatalists;
	}else{
		document.getElementById("resDatalist").innerHTML = "List: undefined";
	}

	/*get value*/
	var dataSearch = $('#dataSearch').val()
	console.log(dataSearch)
	
	/* Check val not null*/ 
	if(dataSearch){
		document.getElementById("resDataSearch").innerHTML = "Search: " + dataSearch;
	}else{
		document.getElementById("resDataSearch").innerHTML = "Search: undefined";
	}
	
	/*get value*/
	document.getElementById("Result").innerHTML = "Result:::";
	var searchType = $('#searchType').val()
	console.log(searchType)
	
	/* Check val not null*/ 
	if(resDatalists && dataSearch){
		
		/* Check val searchType*/ 
		if(searchType == 'linearSearch'){
			console.log('function linearSearch')
			/*Call function linearSearch*/
			var resLinear = linearSearch(resDatalists,dataSearch);
			console.log(resLinear)
			/* Return Data to HTML */
			document.getElementById("search").innerHTML = resLinear;
		}else if(searchType == 'binarySearch'){
			console.log('function binarySearch')
			/*Call function binarySearch*/
			var resBinary = binarySearch(resDatalists,dataSearch);
			console.log(resBinary)
			/* Return Data to HTML */
			document.getElementById("search").innerHTML = resBinary;
			
		}else if(searchType == 'bubbleSearch'){
			console.log('function bubbleSearch')
			/*Call function bubbleSearch*/
			var resBubble = bubbleSearch(resDatalists,dataSearch);
			console.log(resBubble)
			/* Return Data to HTML */
			document.getElementById("search").innerHTML = resBubble;
			
		}
	}else{
		document.getElementById("search").innerHTML = "undefined";
	}	
	
}

/*
*	Function linearSearch 
*	Modified from the function of Connor Leech 
*   On the web https://medium.com/employbl/implement-linear-and-binary-search-algorithms-with-javascript-2149997588f0
*/
function linearSearch(resDatalists, dataSearch){
  console.log('linearSearch')
  var arr = new Array();
  for(var i = 0; i < resDatalists.length; i++){
    if(resDatalists[i] === dataSearch) {
		arr[i] = " Round: "+ (i+1) + "===>" + dataSearch +" = "+ resDatalists[i] + " found !!" + '<br>';	
			
		return arr;
	}else{
		arr[i] = " Round: "+ (i+1) + "===>" + dataSearch +" != "+ resDatalists[i] + '<br>';		
	}	
  }
  return arr;
} 

/*
*	Function binarySearch 
*	Modified from the function of Connor Leech 
*   On the web https://medium.com/employbl/implement-linear-and-binary-search-algorithms-with-javascript-2149997588f0
*/
function binarySearch(resDatalists, dataSearch) {
	console.log('binarySearch')
	var arr = new Array();
    var left = 0;
    var right = resDatalists.length - 1;
	var i = 0;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (resDatalists[mid] === dataSearch) {
			arr[mid] = " Round: "+ (i+1) + "===>" + dataSearch +" = "+ resDatalists[mid] + " found !!" + '<br>';
            return arr;
        }
        if (resDatalists[mid] < dataSearch) {
            left = mid + 1;
			arr[mid] = " Round: "+ (i+1) + "===>" + dataSearch +" != "+ resDatalists[mid] + '<br>';	
        } else {
            right = mid - 1;
			arr[mid] = " Round: "+ (i+1) + "===>" + dataSearch +" != "+ resDatalists[mid] + '<br>';	
        }
		i++;
    }
    return arr;
}
/*
*	Function bubbleSearch 
*	Modified from the function of geeksforgeeks 
*   On the web https://www.geeksforgeeks.org/bubble-sort/
*/
function bubbleSearch(resDatalists, dataSearch) {
	console.log('bubbleSearch')
	var arr = new Array();
	var temp = 0;
	for(var i=0; i < resDatalists.length; i++){
		for(var j=1; j < (resDatalists.length-i); j++){
			if(resDatalists[j-1] > resDatalists[j])
			{
				temp = resDatalists[j-1];  
				resDatalists[j-1] = resDatalists[j];  
				resDatalists[j] = temp;  
			}
		}
	}
	console.log(resDatalists)
	for(var i = 0; i < resDatalists.length; i++){
		if(resDatalists[i] === dataSearch){
			arr[i] = " Round: "+ (i+1) + "===>" + dataSearch +" = "+ resDatalists[i] + " found !!" + '<br>';	
		return arr;
		}else{
			arr[i] = " Round: "+ (i+1) + "===>" + dataSearch +" != "+ resDatalists[i] + '<br>';			
		}	
	}
	return arr;
}	
