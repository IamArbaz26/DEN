
const quotes = [
    {
        quote: "The ultimate aim of the ego is not to see something, but to be something.",
        author: "Muhammad Iqbal"
    },

    {
        quote: "To be, or not to be: that is the question.",
        author: "William shakespeare"
    },

    {
        quote: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },

    {
        quote: "A Meaningful Silence Is Always Better Than Meaningless Word.",
        author: "Unknown"
    },
	
    {
        quote: "Imagination is more important than knowledge.",
        author: "Albert Einstein"
    }
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to change background color
function changeBackgroundColor() {
    const colors = ['#ffeb3b', '#8bc34a', '#03a9f4', '#8CD790', '#AAFCB8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Function to update the displayed quote
function displayQuote() {
    const randomQuote = getRandomQuote();
    document.getElementById("quote").textContent = randomQuote.quote;
    document.getElementById("author").textContent = `— ${randomQuote.author}`;
    changeBackgroundColor();
}


document.getElementById("quote").textContent = "Ready for some inspiration? Click below!";
document.getElementById("author").textContent = "";


document.getElementById("new-quote").addEventListener("click", displayQuote);
