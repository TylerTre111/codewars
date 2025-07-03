/*Define a method hello that returns "Hello, Name!" 
to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to 
return a name with a first capital letter (Xxxx)*/

//My solution

function hello(name) {
  if (name === undefined || name === null || name.trim() === "") {
    return "Hello, World!";
  } else {
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${formattedName}!`;
  }
}