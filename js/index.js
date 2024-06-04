var quote = document.getElementById("quote");
var author = document.getElementById("author");

var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },

  {
    quote: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },

  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },

  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "― Bernard M. Baruch",
  },

  {
    quote:
      "“You've gotta dance like there's nobody watching,Love like you well never be hurt,Sing like there is nobody listening,And live like it is heaven on earth.”",
    author: "― William W. Purkey",
  },
];

// console.log(quotes);

function getQuote() {
  var iQuote = Math.round(Math.random() * (quotes.length - 1));
  console.log(iQuote);
  if (quote.innerHTML == quotes[iQuote].quote) {
    var iQuote2 = Math.round(Math.random() * (quotes.length - 1 - iQuote));
    quote.innerHTML = quotes[iQuote2].quote;
    author.innerHTML = quotes[iQuote2].author;
    console.log("catch");
  } else {
    quote.innerHTML = quotes[iQuote].quote;
    author.innerHTML = quotes[iQuote].author;
    // console.log(iQuote);
  }
}
