var amazon = [
  {name : "Speaker", price : 5400, rating: 4},
  {name : "cooker", price : 1400, rating: 3},
  {name : "playstation", price : 20000, rating: 4},
  {name : "sony", price : 10000, rating: 3},
  {name : "Walkman", price : 10000, rating: 4},
  {name : "sony", price : 20000, rating:4}

];

// **Task 1 : Find All products of soni**
for(var i=0; i<amazon.length; i++)
{
  if(amazon[i].name == "sony")
  {
    console.log(amazon[i]);
  }
}

// **Task 2 : Find All products of having price <=10000**
for(var i=0; i<amazon.length; i++)
{
  if(amazon[i].price <= 10000)
  {
      console.log(amazon[i]);
  }
}

// **Task 3 : Find All products of having rating >= 3**
for(var i=0; i<amazon.length; i++)
{
  if(amazon[i].rating >= 3)
  {
    console.log(amazon[i]);
  }
}

// **Task 4 : Find All products of having price between 5000 and 15000**
for(var i=0; i<amazon.length; i++)
{
  if(amazon[i].price >= 5000 && amazon[i].price <= 15000)
  {
    console.log(amazon[i]);
  }
}
