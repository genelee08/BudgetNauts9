// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('a').click(function(e) {
    console.log("hi");
	});
//	$('#remove').click(function(e){
	//	$.get("/data",removeRow);
//	});
	$('.btn').click(function(e){
		//alert('clicked');
		e.preventDefault();
		$(this).closest('tr').addClass('removeNow');
		//$.get('/data', removeRow);
		console.log('button working')
		$(this).closest('tr').remove();
		console.log('clicked');
	});

	$('#add').click(function(e){
		ga("send", "event", "List of Spending" , "click");
	});
	// $('#editBudget').click(function(e){
	// 	e.preventDefault();
	// 	var r= $('<button type = "button" class = "btn" id="remove">Remove</button>');
	// $("#removeButton").html(r);
	// });

 $('.btn').toggle();

 $('#hideshow').on('click', function(event) {
	 var toggle = document.getElementById('hideshow').textContent;
	 if(toggle == 'edit'){
		 $('#hideshow').html('Done');
	 }
	 else{
		 $('#hideshow').html('edit');
	 }
	   $('.btn').toggle('slow');
	 });

//	$.get('/data', sortDate);
}

// function removeRow(result){
// 	console.log(result);
// 	var purchases = result['purchase'];
// 	console.log(purchases);
// 	console.log(purchases[0]);
// 	const div = document.createElement('div');
// 	var testElement = document.getElementsByClassName('tableID');
// 	console.log(testElement[0]);
//  	for(var i = 0; i < testElement.length; i++);
// 	 	if (testElement[i].classList.contains('removeNow')) {
// 	 		testElement[i].splice(0,);
// 	 	}
// }
//
// function custom_sort(a,b){
// 	console.log("works");
// 	return new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime();
// }
//
// function sortDate(result){
// 	var purchases = result['purchase'];
// 	console.log(purchases);
// }
