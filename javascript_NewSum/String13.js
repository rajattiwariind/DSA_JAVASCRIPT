var names = [”Nobita”, “Naruto”, “Noddy”, “Shinchan”, “Oswald”];
var count = 0;

for(var i=0; i<names.length; i++)
{
	var name = names[i];
	for(var j = 0; j<name.length; j++)
	{
		if(name[j]=='a' || name[j]=='A')
		{
			count++;
			break;
		}
	}
}
console.log(count);

Student Task
