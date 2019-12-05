Swal.fire({
  title: "Welcome!",
  text: "Do you want to play Jeopardy?",
  icon: "question",
  confirmButtonText: "Lets go!"
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//create questions
//object that has the category, question, answer, question #
const questions = [
  (meetingGod = {
    category: "Meeting God",
    questionData: [
      (q01 = {
        question:
          "God scolds Homer Simpson for skipping church but then admits Sometimes even I'd rather be watching this sport",
        answer: "FOOTBALL",
        options: ["DISC GOLF", "BASEBALL", "BASKETBALL", "FOOTBALL"],
        questionNum: 1
      }),
      (q02 = {
        category: "Meeting God",
        question:
          "Graham Chapman kneels in this film but God says Oh don't grovel! One thing I can't stand it's people groveling!",
        answer: "MONTY PYTHON AND THE HOLY GRAIL",
        options: [
          "DOGMA",
          "BRUCE ALMIGHTY",
          "ANGELS IN THE OUTFIELD",
          "MONTY PYTHON AND THE HOLY GRAIL"
        ],
        questionNum: 2
      }),
      (q03 = {
        category: "Meeting God",
        question:
          "After reading some complaints in Bruce Almighty God tells this actor I'm not much for blaspheming but that last one made me laugh",
        answer: "JIM CARREY",
        options: [
          "Jennifer Anniston",
          "Steve Carell",
          "Morgan Freeman",
          "Jim Carrey"
        ],
        questionNum: 3
      }),
      (q04 = {
        category: "Meeting God",
        question:
          "The TV show Miracle Workers is set in the offices of Heaven with this actor as God",
        answer: "STEVE BUSCEMI",
        options: [
          "Benjamin Button",
          "Kurt Russel",
          "Andy Kaufman",
          "Steve Buscemi"
        ],
        questionNum: 4
      }),
      (q05 = {
        category: "Meeting God",
        question:
          "As God in Dogma this singer performs a miracle--she gets Jay to be as silent as Bob",
        answer: "ALANIS MORISSETTE",
        options: [
          "Sarah McLachlan",
          "Amy Grant",
          "Lady Gaga",
          "Alanis Morissette"
        ],
        questionNum: 5
      })
    ]
  }),
  (deepStuff = {
    category: "Deep Stuff",
    questionData: [
      (q01 = {
        question:
          "This Star Trek spin-off boldly stayed in place--it took place on a station instead of a ship",
        answer: "DEEP SPACE NINE",
        options: [
          "Discovery",
          "Voyager",
          "The Next Generation",
          "Deep Space Nine"
        ],
        questionNum: 1
      }),
      (q02 = {
        category: "Deep Stuff",
        question:
          "The Internet that has not been indexed by these is the deep web",
        answer: "SEARCH ENGINES",
        options: ["Tor Browser", "Arrays", "Hackers", "Search Engines"],
        questionNum: 2
      }),
      (q03 = {
        category: "Deep Stuff",
        question:
          "This 8-letter type of digitally manipulated video has realistic face swaps like Nicolas Cage's face on Amy Adams' body",
        answer: "DEEPFAKE",
        options: ["Deepswap", "Deeplame", "Deepliar", "Deepfake"],
        questionNum: 3
      }),
      (q04 = {
        category: "Deep Stuff",
        question:
          "In 1947 this Iowa company introduced its DeepFreeze Upright freezer",
        answer: "AMANA",
        options: ["Igloo", "GE", "Frigidaire", "Amana"],
        questionNum: 4
      }),
      (q05 = {
        category: "Deep Stuff",
        question:
          "On airplane flights be sure to walk around every now & then to avoid DVT short for this",
        answer: "DEEP VEIN THROMBOSIS",
        options: [
          "Dolphin Vengence Trap",
          "Demonic Veil Topper",
          "Danger Velocity Tarp",
          "Deep Vein Thrombosis"
        ],
        questionNum: 5
      })
    ]
  }),
  (quotableWomen = {
    category: "Quotable Women",
    questionData: [
      (q01 = {
        question:
          "Concerning her 1949 nude calendar photos this actress said It's not true I had nothing on; I had the radio on",
        answer: "MARILYN MONROE",
        options: [
          "Betty White",
          "Lucille Ball",
          "Audrey Hepburn",
          "Marilyn Monroe"
        ],
        questionNum: 1
      }),
      (q02 = {
        category: "Quotable Women",
        question:
          "Freed from prison in 2005 she said The experience of the last five months... has been life altering and life affirming",
        answer: "MARTHA STEWART",
        options: [
          "Paris Hilton",
          "Felicity Huffman",
          "Lil' Kim",
          "Martha Stewart"
        ],
        questionNum: 2
      }),
      (q03 = {
        category: "Quotable Women",
        question:
          "This primitive artist who began painting in her 70s said Painting's not important. The important thing is keeping busy",
        answer: "GRANDMA MOSES",
        options: [
          "Frida Kahlo",
          "Mary Cassatt",
          "Georgia O'Keeffe",
          "Grandma Moses"
        ],
        questionNum: 3
      }),
      (q04 = {
        category: "Quotable Women",
        question:
          "On August 10 1945 this former First Lady wrote The times now call for mankind as a whole to rise to great heights",
        answer: "ELEANOR ROOSEVELT",
        options: [
          "Nancy Reagan",
          "Martha Washington",
          "Abagail Adams",
          "Eleanor Roosevelt"
        ],
        questionNum: 4
      }),
      (q05 = {
        category: "Quotable Women",
        question:
          "This mademoiselle said As for you archers soldiers gentlemen...who are besieging Orleans depart in God's name",
        answer: "JOAN OF ARC",
        options: [
          "Cher",
          "Queen Elizabeth",
          "Catherine the Great",
          "Joan of Arc"
        ],
        questionNum: 5
      })
    ]
  }),
  (iWontBeInToday = {
    category: "I Won't Be In Today",
    questionData: [
      (q01 = {
        question:
          "To her teachers in Stockholm: I'm starting a strike to protest climate change then sailing to New York; try me on sat phone",
        answer: "GRETA THUNBERG",
        options: [
          "Mikhail Gorbachev",
          "Harriet Tubman",
          "Gloria Steinem",
          "Greta Thunberg"
        ],
        questionNum: 1
      }),
      (q02 = {
        category: "I Won't Be In Today",
        question:
          "From her in 1921: I'm traveling to get presented with a gram of radium by President Harding but I'm available on cell! Au revoir!",
        answer: "MARIE CURIE",
        options: [
          "Elizabeth Holmes",
          "Jane Goodall",
          "Elizabeth Blackwell",
          "Marie Curie"
        ],
        questionNum: 2
      }),
      (q03 = {
        category: "I Won't Be In Today",
        question:
          "From Billy Clanton October 26 1881: Got a dental appointment... with this killer dentist",
        answer: "DOC HOLLIDAY",
        options: ["Frank McLaury", "Virgil Earp", "Wyatt Earp", "Doc Holliday"],
        questionNum: 3
      }),
      (q04 = {
        category: "I Won't Be In Today",
        question:
          "In 1913 from this Jr. capitalist: Working from home in my new mansion at 102 feet the tallest house yet built in New York City",
        answer: "JOHN D. ROCKEFELLER JR.",
        options: [
          "Cornelius Vanderbilt",
          "J. Pierpont Morgan,",
          "Andrew Carnegie",
          "John D. Rockefeller Jr."
        ],
        questionNum: 4
      }),
      (q05 = {
        category: "I Won't Be In Today",
        question:
          "From him around 1400: Fynishd wrytng my Tales & am off to finde a prufreadur; myghte take a whil",
        answer: "CHAUCER",
        options: [
          "John Skelton",
          "Johannes Gutenberg",
          "William Caxton",
          "Geoffrey Chaucer"
        ],
        questionNum: 5
      })
    ]
  }),
  (militaryJargon = {
    category: "Military Jargon",
    questionData: [
      (q01 = {
        question:
          "The Band-Aid is Vietnam-era slang for this important member of a combat unit",
        answer: "A MEDIC",
        options: ["A Pilot", "A Gunner", "A Reservist", "A Medic"],
        questionNum: 1
      }),
      (q02 = {
        category: "",
        question: "Chest candy means these",
        answer: "MEDALS",
        options: ["Nametag", "Dogtags", "Kevlar Vest", "Medals"],
        questionNum: 2
      }),
      (q03 = {
        category: "",
        question:
          "Onboard a U.S. Navy ship pollywogs turn into shellbacks when they've crossed this geographic line",
        answer: "THE EQUATOR",
        options: [
          "The Chow Line",
          "The Congo Line",
          "The Prime Meridian",
          "The Equater"
        ],
        questionNum: 3
      }),
      (q04 = {
        category: "",
        question:
          "Common term referring to the means by which a significant other breaks up with a service member by mail",
        answer: "A DEAR JOHN LETTER",
        options: [
          "Rude",
          "A sad mail",
          "A letter from Jodi",
          "A Dear John Letter"
        ],
        questionNum: 4
      }),
      (q05 = {
        category: "",
        question:
          "Ejecting from an aircraft & using a parachute is called hitting this fabric",
        answer: "THE SILK",
        options: ["The Bar", "The Deck", "The Sheet", "The Silk"],
        questionNum: 5
      })
    ]
  }),
  (sei25 = {
    category: "SEI-25",
    questionData: [
      (q01 = {
        question: "This classmate makes a killer jambalaya",
        answer: "Josh",
        options: ["Dasiane", "Chris", "Eric", "Josh"],
        questionNum: 1
      }),
      (q02 = {
        category: "SEI-25",
        question:
          "This person is probably contractually obligated to name drop Wes Bos at least once a day",
        answer: "Chad",
        options: ["Colton", "Michael", "Josh", "Chad"],
        questionNum: 2
      }),
      (q03 = {
        category: "SEI-25",
        question:
          "This classmate is a dedicated mother...oops I may have said too much",
        answer: "Dasiane",
        options: ["Chris", "Eric", "Colton", "Dasiane"],
        questionNum: 3
      }),
      (q04 = {
        category: "SEI-25",
        question:
          "This classmate had to be forced to go home for Thanksgiving break",
        answer: "Ozzie",
        options: ["Chad", "Michael", "Dasiane", "Ozzie"],
        questionNum: 4
      }),
      (q05 = {
        category: "SEI-25",
        question: "This classmate just finished his presentaion",
        answer: "Chris",
        options: ["Ozzie", "Josh", "Eric", "Chris"],
        questionNum: 5
      })
    ]
  })
];

//create game board
//for each category
let score = 0;
let displayScore = document.querySelector(".score");
for (let i = 0; i < 6; i++) {
  let column = document.createElement("div");
  document
    .querySelector("#board")
    .appendChild(column)
    .classList.add("btn-group-vertical");
  //for each question 1-5
  for (let j = 0; j <= 5; j++) {
    //create button with value of 200 x question
    let tile = document.createElement("button");
    let columnSelector = document.querySelectorAll(".btn-group-vertical");
    tile.type = "button";
    tile.className = "btn btn-primary";
    tile.dataset.toggle = "button";

    if (j === 0) {
      //name category
      tile.classList.add("category");
      columnSelector[i].appendChild(tile).innerText = questions[i].category;
    } else {
      columnSelector[i].appendChild(tile).innerText = j * 200;
      tile.value = j * 200;
      let question = questions[i].questionData[j - 1].question;
      let choices = questions[i].questionData[j - 1].options;
      let answer = questions[i].questionData[j - 1].answer;
      tile.addEventListener("click", function() {
        let button = this.value;
        questionPopUp(button, question, choices, answer);
      });
    }
  }
}

textFit(document.getElementsByClassName("btn"));

let questionPopUp = function(input, question, choice, answer) {
  console.log("input is: ", input);
  console.log("answer is: ", answer);
  console.log("Choices are: ", choice);
  //shuffle(choice);
  const { value: fruit } = Swal.fire({
    title: question,
    input: "select",
    inputOptions: {
      wrong1: choice[0],
      wrong2: choice[1],
      wrong3: choice[2],
      correct: choice[3]
    },
    inputPlaceholder: "Select your answer",
    showCancelButton: false,
    inputValidator: value => {
      return new Promise(resolve => {
        if (value === "correct") {
          alert("Nice job!");
          resolve();
          score += parseInt(input);
          displayScore.textContent = score;
          if (score >= 10000) {
            alert("You win!");
            location.reload();
          }
        } else {
          alert("Sorry that wasn't correct!");
          resolve();
          score -= parseInt(input);
          displayScore.textContent = score;
        }
      });
    }
  });
};
