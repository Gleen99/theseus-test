let users = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
    {id:8},
]

// Shuffles the array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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

function randomPeer(users) {
    let shuffledUsers = shuffle(users);
    let pairs = [];
    for(let i = 0; i < shuffledUsers.length; i += 2){
        // If there's an odd number of users, the last group will be a group of 3
        if(i === shuffledUsers.length - 3){
            pairs.push([shuffledUsers[i], shuffledUsers[i+1], shuffledUsers[i+2]]);
            break;
        }
        pairs.push([shuffledUsers[i], shuffledUsers[i+1]]);
    }
    return pairs;
}

console.log(randomPeer(users));
