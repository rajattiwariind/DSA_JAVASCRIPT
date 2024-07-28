var name = "masai";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var output = "";

for(var i=0; i<name.length; i++)
{
	for(var j=0;j<lower.length; j++)
	{
		if(name[i] == lower[j])
		{
			output = output + upper[j];
		}
	}
}

console.log(output);

