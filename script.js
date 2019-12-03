// Swal.fire({
//     title: 'Welcome!',
//     text: 'Do you want to play Jeopardy?',
//     icon: 'question',
//     confirmButtonText: 'Lets go!'
//   })


//create game board

//for each category
let container = document.createElement('div');
document.body.appendChild(container).classList.add("container");
for(let i = 0; i < 6; i++) {
    let column = document.createElement('div');
    document.body.appendChild(column).classList.add("btn-group-vertical");
    console.log("cat" + i);
    //for each question 1-5
    for(let j = 0; j <= 5; j++) {
        //create button with value of 200 x question
        let tile = document.createElement('button');
        let columnSelector = document.querySelectorAll('.btn-group-vertical');
        tile.type = "button";
        tile.className = "btn btn-primary"
        tile.dataset.toggle = "button"
        
        if (j === 0) {
            //name category
            columnSelector[i].appendChild(tile).innerText = "Cat" + i;
        } else {
            columnSelector[i].appendChild(tile).innerText = j * 200;
            console.log(j * 200);
    }
}
}







// let timerInterval
// Swal.fire({
//   title: 'Auto close alert!',
//   html: 'I will close in <b></b> milliseconds.',
//   timer: 15000,
//   timerProgressBar: true,
//   onBeforeOpen: () => {
//     Swal.showLoading()
//     timerInterval = setInterval(() => {
//       Swal.getContent().querySelector('b')
//         .textContent = Swal.getTimerLeft()
//     }, 100)
//   },
//   onClose: () => {
//     clearInterval(timerInterval)
//   }
// }).then((result) => {
//   if (
//     /* Read more about handling dismissals below */
//     result.dismiss === Swal.DismissReason.timer
//   ) {
//     console.log('I was closed by the timer') // eslint-disable-line
//   }
// })