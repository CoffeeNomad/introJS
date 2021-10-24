let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Splitting story string into individual words
const storyWords = story.split(" ");


// Removing unnecessaryWords from storyWords
const betterWords = storyWords.filter(storyWord => unnecessaryWords.includes(storyWord) === false);

// counting the number of times and overused word is used

let reallyCount = 0;
let veryCount =  0;
let basicallyCount = 0;

for (word of storyWords){
  if(word === "really"){
    reallyCount++;
  }else if(word === "very"){
    veryCount++;
  }else if(word === "basically"){
    basicallyCount++;
  }
};

//counting how many sentenses are in the paragraph
let sentencesCount = 0;

for (word of storyWords){
 if(word[word.length -1] === '.' || word[word.length -1] === '!'){
   sentencesCount++;
 }
}


// logging word count, sentnce count, number of time each overused 
// word appears
console.log('Total number of words: ', storyWords.length)
console.log('Number of sentences: ', sentencesCount)
console.log('Over used word "really": ', reallyCount)
console.log('Over used word "very": ', veryCount)
console.log('Over used word "basically": ', basicallyCount)

// logging betterWords array to a single string 

console.log(betterWords.join(" "))





