for(let i=1; i<=10; i++){
    console.log("i")
}

/*

Error 1: Forgot let before i = 1
Your code probably looked like:
javascriptfor (i = 1; i <= 10; i++) {
    console.log(i);
}
What happened:

Without let, JavaScript creates i as a global variable (available everywhere)
It still works in some cases, but it's bad practice
Modern JavaScript (strict mode) might give an error

The fix: Always use let to create a new variable
javascriptfor (let i = 1; i <= 10; i++) {  // ✅ Good!

Error 2: console.log("i") printed "i" 10 times
Your code looked like:
javascriptfor (let i = 1; i <= 10; i++) {
    console.log("i");  // ❌ Wrong!
}
```

**Output:**
```
i
i
i
i
i
i
i
i
i
i

Why This Happened (SUPER IMPORTANT!):
With quotes "i":
javascriptconsole.log("i");  // Prints the LETTER "i"

The quotes mean: "Print this exact text"
It's just the letter 'i', not the variable

Without quotes i:
javascriptconsole.log(i);  // Prints the VALUE stored in variable i

No quotes mean: "Print the value inside the variable named i"
First loop: i = 1, prints 1
Second loop: i = 2, prints 2
And so on...


The Rule:
Quotes = Literal text
javascriptconsole.log("hello");  // Prints: hello
console.log("5");      // Prints: 5 (the text "5")
No quotes = Variable value
javascriptlet name = "Tom";
console.log(name);     // Prints: Tom (the value inside name)

let num = 5;
console.log(num);      // Prints: 5 (the number stored in num)
*/