Swal.fire({
    title: 'Welcome!',
    text: 'Do you want to play Jeopardy?',
    icon: 'question',
    confirmButtonText: 'Lets go!'
  })


//create game board

//for each category
for(let i = 1; i <= 6; i++) {
    //name category
    console.log("cat" + i);
    //for each question 1-5
    for(let j = 1; j <= 5; j++) {
        //create button with value of 200 x question
        console.log(j * 200);
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