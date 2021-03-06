// eslint-disable-next-line no-unused-vars
const stringCatalogue = [
  "The Catcher in the Rye by J.D. Salinger (10)",
  "Dracula by Bram Stoker (0)",
  "Between the Assassinations by Aravind Adiga (9)",
  "Wolf Hall by Hilary Mantel (33)",
  "Bring Up The Bodies by Hilary Mantel (31)",
  "A Place of Greater Safety by Hilary Mantel (11)",
  "Giving Up the Ghost by Hilary Mantel (8)",
  "The Assassination of Margaret Thatcher by Hilary Mantel (43)",
  "The Yellow Wallpaper by Charlotte Perkins Gilman (12)",
  "Conversations With Friends by Sally Rooney (1)",
  "Normal People by Sally Rooney (2)",
  "Everything I Never Told You by Celeste Ng (6)",
  "2666 by Robert Bolaño (17)",
  "By Night In Chile by Robert Bolaño (8)",
  "A Tale of Two Cities by Charles Dickens (3)",
  "Oliver Twist by Charles Dickens (7)",
  "Great Expectations by Charles Dickens (1)",
  "The Blind Assassin by Margaret Atwood (8)",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson (19)",
  "The Origin of Species by Charles Darwin (50)"
];

//Convert string version of catalogue to object version
function parseCatalogue(catalogue) {
  const newCatalogue = [];
  for (let book in catalogue) {
    let byPosition = catalogue[book].indexOf(" by ");
    let numPositionStart = catalogue[book].indexOf("\(");
    let numPositionEnd = catalogue[book].indexOf("\)");

    let title = catalogue[book].substring(0, byPosition);
    let author = catalogue[book].substring(byPosition + 4, numPositionStart - 1);
    let quantity = parseInt(catalogue[book].substring(numPositionStart + 1, numPositionEnd));

    newCatalogue.push({title,author,quantity});
  }
  return newCatalogue;
}

//Set catalogue as object version
const catalogue = parseCatalogue(stringCatalogue);

function countBooksByAuthor(author) {
  return catalogue.filter(book => book.author === author).length;
}

function checkBookByTitle(title) {
  return catalogue.filter(book => book.title === title).length > 0; 
}

function countBooksByFirstLetter(letter) {
  return catalogue.filter(book => book.title[0].toLowerCase() === letter.toLowerCase()).length;
}

function getQuantity(title) {
  const foundBook = catalogue.find(book => book.title === title);
  return foundBook ? foundBook.quantity : 0;
}

function getBooksByAuthor(author) {
  return catalogue.filter(book => book.author === author);
}

function checkQuantity(title, quantity) {
  return catalogue.filter(book => book.title === title && book.quantity >= quantity).length > 0;
}

module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};
