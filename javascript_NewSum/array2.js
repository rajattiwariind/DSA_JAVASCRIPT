function reverseArrayTraversal(n, arr){
    //write code here
    let reverse=0;
    let bag=""
    for(let i=n-1;  i>=0; i--){
        reverse=reverse+arr[i];
        bag+=arr[i]+" ";
    }
    console.log(bag);
}
