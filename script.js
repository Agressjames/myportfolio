// JavaScript (script.js)

// Random Sentences Array
const sentences = [
  'I create stunning websites.',
      'I love building web applications.',
      'I am passionate about web development.'
];

let activeSentenceIndex = 0;

// Function to rotate through the random sentences
function rotateSentences() {
  // Get the element that displays the random sentence
  const randomSentencesElement = document.querySelector('.random-sentences');
  
  // Update the active sentence index
  activeSentenceIndex = (activeSentenceIndex + 1) % sentences.length;
  
  // Set the new sentence as the text content of the element
  randomSentencesElement.textContent = sentences[activeSentenceIndex];
}

// Call the rotateSentences function every 0.5 seconds
setInterval(rotateSentences, 1000);


// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
