// Assign constants for id elements
const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')


// Show Loading
function showLoadingSpinner() {
    loader.hidden = false
    quoteContainer.hidden = true
}


// Hide Loading
function removeLoadingSpinner() {
    if (!loader.hidden) {
        loader.hidden = true
        quoteContainer.hidden = false
    }
}


// Get Quote From API
async function getQuote() {
    showLoadingSpinner()
    const proxyUrl = 'https://whispering-tor-04671.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    const response = await fetch(proxyUrl + apiUrl)
    const data = await response.json()
    try {
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Unknown'
        } else {
            authorText.innerText = data.quoteAuthor
        }
        if (data.quoteText.length > 50) {
            quoteText.classList.add('long-quote')
        } else {
            quoteText.classList.remove('long-quote')
        }
        quoteText.innerText = data.quoteText
        removeLoadingSpinner()
        // console.log(data);
    } catch (error) {
        console.log('woops, no quote returned', error);
    }
}

      
        // Stop Loader, Show Quote


// Tweet Quote
function tweetQuote() {
    const quote = quoteText.innerText
    const author = authorText.innerText
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank')
}
    


// Event Listeners
newQuoteBtn.addEventListener('click', getQuote)
twitterBtn.addEventListener('click', tweetQuote)

// On Load
getQuote()



// // API fields
// quoteAuthor: "Walter Scott "
// quoteLink: "http://forismatic.com/en/c786bd201f/"
// quoteText: "To the timid and hesitating everything is impossible because it seems so. "
// senderLink: ""
// senderName: ""
