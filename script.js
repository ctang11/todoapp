//1. listen for submit on form 
//2. assign variable for text input (get from user, input type text)
//3. do not add item to list if field/variable empty
//4. if not empty, add to list
//5. update list and add new html/css to the item
//6. clear form once submitted 
//7. change empty box to checked box, listen for click on li 
//b - change css border to lighter color

$(function() {

//1. 
	console.log('hello');

	$('form').on('submit', function (e) {

		const $input = $('input[type=text]'); // makes it easier / shorter in the longrun

		e.preventDefault(); //e stands for event, prevent the default refreshing		
		
		console.log('form was submitted');

//2.	
		const todo = $input.val();
		// THAT ALSO MEANS THIS: const todo = $('input[type=text]').val();
		// console.log(todo);

//3.
		if (todo.length > 0) { //this will make sure it doesn't update anything blank

//4.
			console.log(todo); //creates variable that holds new html

//5. 
			const item = //the item is the template literal with html inside it
				`<li>
					<span class="class todo"></span>
					${todo}
				</li>`

			$('ul').append(item); //.append adds the new html in item to the ul 
			
//6.
			$input.val(''); //resets and clears the form to nothing
			// also means this: $('input[type=text]').val('');
		}
	}); //listen for the submit form using on method

//7. 

	$('ul').on('click', 'li', function () { //listen for a click on an li
		console.log('li was clicked');

	});
	
//take off to do class and change to done/completed class to have checked box on list item


}); // document ready - only have one per page 

