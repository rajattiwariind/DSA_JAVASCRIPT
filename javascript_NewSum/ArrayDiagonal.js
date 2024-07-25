var items = [
              ['A', 'B', 'C'],
              ['D', 'E', 'F'],
              ['G', 'H', 'I']
            ];

var rows = items.length;
var cols = items[0].length;

var leftDiagonal = [];
var rightDiagonal = [];

for(var father=0; father<=rows-1; father++)
{
  for(var son=0; son<=cols-1; son++)
  {
    if(father==son)
    {
      leftDiagonal.push(items[father][son]);
    }

    if(father+son == rows-1) // or cols-1
    {
      rightDiagonal.push(items[father][son]);
    }
  }
}

console.log(leftDiagonal.join(" "));
console.log(rightDiagonal.join(" "));
