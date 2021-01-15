const source = document.getElementById('navigation').innerHTML;

const template = Handlebars.compile(source);

const context = {
  about: 'ABOUT',
  bio: 'BIO',
  contentWarnings: 'CONTENT WARNINGS',
  tropes: 'TROPES',
  pressKit: 'PRESS KIT',
  books: 'BOOKS',
  liar: "THE LIAR'S GUIDE TO THE NIGHT SKY",
  ezra: "KISSING EZRA HOLTZ (AND OTHER THINGS I DID FOR SCIENCE)",
  french: "THE ART OF FRENCH KISSING",
  makeOut: "HOW TO MAKE OUT",
  never: "NEVER NEVER",
  contact: "CONTACT",
  news: "NEWS",
  classes: "CLASSES"
};

const compiledHtml = template(context);

const briannaShrumText = document.getElementById('scream');
briannaShrumText.innerHTML = compiledHtml;