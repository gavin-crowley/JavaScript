/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

// const paragraph = document.querySelector("p");
// paragraph.innerHTML = paragraph.innerText
//   .split(" ")
//   .map((word) =>
//     word.length > 8
//       ? `<span style="background-color: yellow;">${word}</span>`
//       : word
//   )
//   .join(" ");

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/

// my sol 1
// paragraph.innerHTML += `<br /><br /><a href="http://forcemipsum.com" target="_blank">Link to forcemipsum.com</a>`;

// my sol 2
// const link = document.createElement('a');
// link.textContent = 'Link to forcemipsum.com'
// link.setAttribute('href', 'http://forcemipsum.com');
// link.setAttribute('target', '_blank');
// document.body.append(link)

// sol

// const link = document.createElement('a');
// link.href = 'http://forcemipsum.com'
// link.innerText = 'Link to forcemipsum.com';
// document.body.appendChild(link);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

// my sol
// const sentences = document.querySelector('p')
// sentences.innerHTML = sentences.innerText
// .split('.')
// .map((sentence) =>
//     `<span>${sentence}.</span><br />`
//   )

// sol
// const paragraph = document.querySelector("p");
// paragraph.innerHTML = paragraph.innerHTML
// .split(/\.[^\.|<]/)
// // .split(".")
// .join("</p><p>") + '<p>'

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

// const paragraph = document.querySelector("p");
// const wordCount = paragraph.innerText.split(' ').length
// const wordCountElem = document.createElement('div')
// wordCountElem.innerText = `${wordCount} words`
// document.body.insertBefore(wordCountElem, paragraph)




/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

Array.from(document.querySelectorAll('p'))
.forEach(p => {
  p.innerHTML = p.innerHTML
  .replace(/\?/g, '🤔')
  .replace(/\!/g, '😲');
})




