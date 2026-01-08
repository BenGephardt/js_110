/*
Problem:
  - input: nameArr (array of name parts), infoObj ({ title, occupation })
  - output: greeting string
  - rules:
    - join nameArr with spaces to get full name
    - combine infoObj.title and infoObj.occupation with a space
    - use both in the greeting string that matches the example format

Examples / Test Cases
  - Given Example:
      console.log(
      greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
      );
      // logs Hello, John Q Doe! Nice to have a Master Plumber around.
      
  - Test Cases:
      greetings(
        ["William", "'Bill'", "Stanley", "Preston"],
        {title: "Esquire", occupation: "Guitarist"}
      ); // -> Hello, William 'Bill' Stanley Preston! Nice to have a Esquire Guitarist around.
      
      greetings(
        ["Napoleon", "Bonaparte"], 
        {title: "Emperor", occupation: "Commander and Strategist"}
      ); // -> Hello, Napoleon Bonaparte! Nice to have a Emperor Commander and Strategist around.
      
      greetings(
        ["Theodore", "'Ted'", "Theodore", "Logan"], 
        {title: "Slacker", occupation: "Guitarist"}
      ); // -> Hello, Theodore 'Ted' Theodore Logan! Nice to have a Slacker Guitarist around.

Algorithm
  1. Declare a function greetings that accepts two parameters: an array of strings (nameArr), and an object that is immediately destructured to create title and occupation variables.
  2. Initialize a variable fullName by joining the elements of the nameArr with a space.
  3. Initialize a variable role by creating a string that combines the title and occupation variables, separated by a space.
  4. Return a greeting string using a template literal that includes the fullName and role variables.
*/

function greetings(nameArr, { title, occupation }) {
  let fullName = nameArr.join(' ');
  let role = `${title} ${occupation}`;
  return `Hello, ${fullName}! Nice to have a ${role} around.`
}

console.log(
      greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
      );

console.log(greetings(
        ["William", "'Bill'", "Stanley", "Preston"],
        {title: "Esquire", occupation: "Guitarist"}
        )
      );

console.log(greetings(
        ["Theodore", "'Ted'", "Theodore", "Logan"], 
        {title: "Slacker", occupation: "Guitarist"}
        )
      );

console.log(greetings(
        ["Napoleon", "Bonaparte"], 
        {title: "Emperor", occupation: "Commander and Strategist"}
        )
      );