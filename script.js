array= [1, 2, 3, 4, 5, 6, 7, 8, 9];

var map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
  [7, 'seven'],
  [8, 'eight'],
  [9, 'nine']
]);

function display(array) {
for(let i = 0;i < array.length; ++i){
	document.getElementById(i).innerHTML = array[i];
    document.getElementById(i).classList.remove(document.getElementById(i).classList.item(1));
    document.getElementById(i).classList.add(map.get(array[i]));
}
}


function myLoad() {
  for(let i = 0;i < array.length; ++i){
      document.getElementById(i).innerHTML = array[i];
      document.getElementById(i).classList.add(map.get(array[i]));
  }
}

function shuffle() {
  arrayShuffled = array.sort(() => 0.5 - Math.random());
  display(arrayShuffled);
}

function short() {
 arrayShort = array.sort((a,b) => a-b);
 display(arrayShort);
}