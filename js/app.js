// UI
const boxes = document.querySelectorAll('.box');
// console.log(boxes);



checkboxes(); //for start point view firstly function recall

window.addEventListener('scroll',checkboxes);


function checkboxes(){

	let innerheight = window.innerHeight / 2;  //for viewing the remove photo left effects, reduce the innerheight
		// console.log(innerheight);


		boxes.forEach(box=>{
			// console.log(box);

			const boxtop = box.getBoundingClientRect().top;  // + values for viewing remove photo effects

			console.log(boxtop);

			//e.g  0    <   200
			if(boxtop < innerheight){
				box.classList.add('show');
			}else{
				box.classList.remove('show');
			}

		});


}