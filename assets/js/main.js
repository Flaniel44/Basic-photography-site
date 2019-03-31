var quotes = [
    "\"Everyone has a plan until they get punched in the face\" - Mike T",
    "\"Laugh Loudly, laugh often, and most importantly, laugh at yourself.\" - Chelsea Handler",
    "\"I have learned over the years that when one's mind is mind up, this diminishes fear.\" - Rosa Parks",
    "\"Sometimes it's worse to win a fight than to lose.\" - Billie Holiday",
    "\"Defining myself, as opposed to being defined by others, is one of the most difficult challenges I face.\" - Carol Mosely-Braun",
    "\"On your deathbed, are you going to be okay with the fact that you didn't step out of your comfort zone and do the thing your heart so desperately wanted to do?\" - Andrea Owen",
    "\"Success usually comes to those who are too busy to be looking for it.\" - Henry David Thoreau",
    "\"Everything you've ever wanted is on the other side of fear.\" - George Addair",
    "\"The true measure of a man is how he treats someone who can do him absolutely no good.\" - Samuel Johnson",
    "\"We must accept finite disappointment, but never lose infinite hope.\" - MLK Jr.",
    "\"The greater danger for most of us lies not in setting our aim too high and falling short, but in setting our aim too low, and acheiving our mark.\" - Michelangelo"
  ];

//11 entries. Random number from 0-10


document.getElementById("header-quote").innerHTML = quotes[getRandomInt(0, 10)];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
