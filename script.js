// Swal.fire({
//     title: 'Welcome!',
//     text: 'Do you want to play Jeopardy?',
//     icon: 'question',
//     confirmButtonText: 'Lets go!'
//   })

//create questions
//object that has the category, question, answer, question #
const questions = [
    meetingGod = {
        category: "Meeting God",
        q01: {
            question: "God scolds Homer Simpson for skipping church but then admits Sometimes even I'd rather be watching this sport",
            answer: "FOOTBALL",
            questionNum: 1
        },
        q02: {
            category: "Meeting God",
            question: "Graham Chapman kneels in this film but God says Oh don't grovel! One thing I can't stand it's people groveling!",
            answer: "MONTY PYTHON AND THE HOLY GRAIL",
            questionNum: 2
        },
        q03: {
            category: "Meeting God",
            question: "After reading some complaints in Bruce Almighty God tells this actor I'm not much for blaspheming but that last one made me laugh",
            answer: "JIM CARREY",
            questionNum: 3
        },
        q04: {
            category: "Meeting God",
            question: "The TV show Miracle Workers is set in the offices of Heaven with this actor as God",
            answer: "STEVE BUSCEMI",
            questionNum: 4
        },
        q05: {
            category: "Meeting God",
            question: "As God in Dogma this singer performs a miracle--she gets Jay to be as silent as Bob",
            answer: "ALANIS MORISSETTE",
            questionNum: 5
    }},
    deepStuff = {
        category: "Deep Stuff",
        q01: {
            question: "This Star Trek spin-off boldly stayed in place--it took place on a station instead of a ship",
            answer: "DEEP SPACE NINE",
            questionNum: 1
        },
        q02: {
            category: "Deep Stuff",
            question: "The Internet that has not been indexed by these is the deep web",
            answer: "SEARCH ENGINES",
            questionNum: 2
        },
        q03: {
            category: "Deep Stuff",
            question: "This 8-letter type of digitally manipulated video has realistic face swaps like Nicolas Cage's face on Amy Adams' body",
            answer: "DEEPFAKE",
            questionNum: 3
        },
        q04: {
            category: "Deep Stuff",
            question: "In 1947 this Iowa company introduced its DeepFreeze Upright freezer",
            answer: "AMANA",
            questionNum: 4
        },
        q05: {
            category: "Deep Stuff",
            question: "On airplane flights be sure to walk around every now & then to avoid DVT short for this",
            answer: "DEEP VEIN THROMBOSIS",
            questionNum: 5
    }},
    quotableWomen = {
        category: "Quotable Women",
        q01: {
            question: "Concerning her 1949 nude calendar photos this actress said It's not true I had nothing on; I had the radio on",
            answer: "MARILYN MONROE",
            questionNum: 1
        },
        q02: {
            category: "Quotable Women",
            question: "",
            answer: "",
            questionNum: 2
        },
        q03: {
            category: "Quotable Women",
            question: "This primitive artist who began painting in her 70s said Painting's not important. The important thing is keeping busy",
            answer: "GRANDMA MOSES",
            questionNum: 3
        },
        q04: {
            category: "Quotable Women",
            question: "On August 10 1945 this former First Lady wrote The times now call for mankind as a whole to rise to great heights",
            answer: "ELEANOR ROOSEVELT",
            questionNum: 4
        },
        q05: {
            category: "Quotable Women",
            question: "This mademoiselle said As for you archers soldiers gentlemen...who are besieging Orleans depart in God's name",
            answer: "JOAN OF ARC",
            questionNum: 5
    }},
    iWontBeInToday = {
        category: "I Won't Be In Today",
        q01: {
            question: "To her teachers in Stockholm: I'm starting a strike to protest climate change then sailing to New York; try me on sat phone",
            answer: "GRETA THUNBERG",
            questionNum: 1
        },
        q02: {
            category: "I Won't Be In Today",
            question: "From her in 1921: I'm traveling to get presented with a gram of radium by President Harding but I'm available on cell! Au revoir!",
            answer: "MARIE CURIE",
            questionNum: 2
        },
        q03: {
            category: "I Won't Be In Today",
            question: "From Billy Clanton October 26 1881: Got a dental appointment... with this killer dentist",
            answer: "DOC HOLLIDAY",
            questionNum: 3
        },
        q04: {
            category: "I Won't Be In Today",
            question: "In 1913 from this Jr. capitalist: Working from home in my new mansion at 102 feet the tallest house yet built in New York City",
            answer: "JOHN D. ROCKEFELLER JR.",
            questionNum: 4
        },
        q05: {
            category: "I Won't Be In Today",
            question: "From him around 1400: Fynishd wrytng my Tales & am off to finde a prufreadur; myghte take a whil",
            answer: "CHAUCER",
            questionNum: 5
    }},
    militaryJargon = {
        category: "Military Jargon",
        q01: {
            question: "The Band-Aid is Vietnam-era slang for this important member of a combat unit",
            answer: "A MEDIC",
            questionNum: 1
        },
        q02: {
            category: "",
            question: "Chest candy means these",
            answer: "MEDALS",
            questionNum: 2
        },
        q03: {
            category: "",
            question: "Onboard a U.S. Navy ship pollywogs turn into shellbacks when they've crossed this geographic line",
            answer: "THE EQUATOR",
            questionNum: 3
        },
        q04: {
            category: "",
            question: "Common term referring to the means by which a significant other breaks up with a service member by mail",
            answer: "A DEAR JOHN LETTER",
            questionNum: 4
        },
        q05: {
            category: "",
            question: "Ejecting from an aircraft & using a parachute is called hitting this fabric",
            answer: "THE SILK",
            questionNum: 5
    }},
    sei25 = {
        category: "SEI-25",
        q01: {
            question: "This classmate makes a killer jambalaya",
            answer: "Josh",
            questionNum: 1
        },
        q02: {
            category: "SEI-25",
            question: "This person is probably contractually obligated to name drop Wes Bos at least once a day",
            answer: "Chad",
            questionNum: 2
        },
        q03: {
            category: "SEI-25",
            question: "This classmate is a dedicated mother...oops I may have said too much",
            answer: "Dasiane",
            questionNum: 3
        },
        q04: {
            category: "SEI-25",
            question: "This classmate had to be forced to go home for Thanksgiving break",
            answer: "Ozzie",
            questionNum: 4
        },
        q05: {
            category: "SEI-25",
            question: "This classmate just finished his presentaion",
            answer: "Chris",
            questionNum: 5
        }}
]



//create game board
//for each category
for(let i = 0; i < 6; i++) {
    let column = document.createElement('div');
    document.querySelector('#board').appendChild(column).classList.add("btn-group-vertical");
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
            tile.classList.add("category")
            //tile.classList.remove("btn-primary");
           columnSelector[i].appendChild(tile).innerText = questions[i].category;
        } else {
            columnSelector[i].appendChild(tile).innerText = j * 200;
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