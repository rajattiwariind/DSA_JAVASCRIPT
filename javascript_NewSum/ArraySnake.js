var items = []

var item1 = [1,2,3,4];
var item2 = [4,5,6,7];
var item3 = [8,9,10,11];

items.push(item1);
items.push(item2);
items.push(item3);

// Finding Number of rows
var rows_length = items.length;
console.log("Number of rows : ",rows_length);

// Finding Number of columns
var columns_length = items[0].length;
console.log("Number of columns : ",columns_length);

// Snake Pattern
var bag = "";
for(var row = 0 ; row<rows_length; row++)
{
	if(row%2 == 0)
	{
			for(var col = 0; col<columns_length; col++)
		  {
			   bag = bag + items[row][col] + " ";
		  }
	}

  else
	{
		for(var col = columns_length-1; col>=0; col--)
		  {
			   bag = bag + items[row][col] + " ";
		  }
   }
}

console.log(bag);
