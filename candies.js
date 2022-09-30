var distributeCandies = function(candies, num_people) {
    //New Variable 
    let people = new Array(num_people).fill(0) 
    
    //Running through a for loop
    
    for(let i = 0; candies > 0; i++){
        const take = Math.min(i + 1, candies)
        people[i % people.length] += take
    }
    return people;
 
};