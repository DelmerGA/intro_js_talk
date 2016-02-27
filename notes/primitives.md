# Javascript Primitives
## Intro to Programming fundamentals


## Objectives

| Objectives |
| :----- |
| To manipulate datatypes and create expressions in JS |


## Agenda
* Brainstorm (Ruby v. Javascript)
* History of Javascript
* Understand Data Types
  * Comments
  * Numbers
  * Strings
  * Values & Expressions
  * Objects everywhere
    * Arrays
    * Objects
  * Conditionals
  * Reference Types
  * Undefined
  * False
  * Javascript Object Literal


## Comments

Comments come in two forms

  * line comments

   ```
   // descriptive stuff
   ```
  * multiline comments

  ```
  /**
    These
    are
    comments on
    many lines
  */

  ```

## Numbers

Numbers are one of the *types* of **values** we want to be able to interact and play with in JS.

* Integers

  ```
   ..., -1,0, 2, 3, 4, 5, ...
  ```
* Floats (or Decimal numbers)

  ```
   2.718, 3.14, .5, .25, etc
  ```

In JS these are the same **type** of object, which it calls *Numbers*, so if you know floats and integers don not go looking for them.

## Strings

Strings are collections of letters and symbols known as **Characters**, and we use them to deal with words and text in Javascript. Strings are just another type of **value** in Javascript.

```
"John", or  'Jane'
```



## Values and Expressions

Types of values like `Number` or `String` are not very useful without being able to form **Expressions** or **Combinations**.

* Try your favorite number operators

  ```
  1 + 1;
  => 2
  2 - 1;
  => 1
  (1 + 2 + 2)*2;
  => 10
  ```

* You can suprise yourself sometimes...

  ```
  0.2 + 0.1;
  => ?
  ```


* You can also create expressions with strings using addition

  ```
  "Hello, " + "world!";
  => "Hello, world!"
  ```

  This is called **String Concatentation.**


### Special Number Operators

Javascript can be a little cheap with the number of operations it allows you to do. For example, how is someone supposed to square a number or cube a number easily? Luckily there is a special `Math` object with some very useful methods.

* Taking a number to some `power`? Then just use `Math.pow`

  ```
  // 3^2 becomes
  Math.pow(3,2);
  => 9
  // 2^4 becomes
  Math.pow(2,4);
  => 16
  ```
* Taking a square root

  ```
  // √(4) becomes
  Math.sqrt(4);
  => 2
  ```
* Need a `random` number? Then use `Math.random`.

  ```
  // The following only returns a random decimal
  Math.random();
  => .229375290430
  /**
    The following will return a
    random number between 0 and 10
  */
  Math.random()*10;
  ```

* Since Numbers can be **Floats** or **Integers** we often want to get rid of remaining decimal places, which can be done using `Math.floor`.

  ```
  // Remove the decimal
  Math.floor(3.14);
  => 3
  Math.floor(3.9999);
  => 3
  ```

## Variables and Keywords

Having made some expressions it becomes evident we want to store these values.

```
var myNumber = 1;
// or also

var myString = "Greetings y'all!";
```

The main note to make here is that these variables should always have the `var` keyword and use `camelCase`

## Objects Everywhere

In Javascript we just discussed two types of values we can use. We call these values objects, which for now just means that in addition to storing some data you also get to use some helpful methods when you are working with them.

* If you want to turn a number into a string you can use a helpful method
  called `toString`.

  You can convert a **Number** to a **String**

  ```
  (1).toString();
  => "1"
  ```

  Be careful though, since numbers can be floats JavaScript might
  **misunderstand you**.

  ```
  1.toString();
  => Float Error
  ```

  But, the following works?

  ```
  1..toString();
  ```

### Arrays

Unfortunately, strings and numbers are not enough for most programming purposes.
What is needed are collections of data that we can use efficiently, **Arrays**.

Arrays are great for:

* Storing data
* Enumerating data, i.e. using an index to find them.
* Quickly reordering data

```
var friends = ['Moe', 'Larry', 'Curly'];
=> ['Moe', 'Larry', 'Curly']
```

**Items** or **values** in an array are stored in sequential order, and indexed starting at `0` and ending at `length - 1`.

```
// First friend
var firstFriend = friends[0];
 => 'Moe'
// Get the last friend
var lastFriend = friends[2];
=> 'Curly'
```

### Strings like Arrays

```
var friend = "bobby bottleservice";

// pick out first character

friend[0]
//=> 'b'

friend.length
//=> 19
```

### Exercises

This section is *a little tough* and you won't everything you need to complete
it. This is by design. The hope is that you'll go searching for the **right
tools** to help you get it done. If you look through **Google** results try to
stick to **MDN** resources.

1.) Try the following with the `friends` array.

  * Find the *last* name in the array. How would turn this into a relavant
 question?
    * *How do you find the **last item** in an **array**?*
    * Hint: Try Googling: **last item array JavaScript**.
  * Add your name to the end of  `friends`.
  * Add another name to beginning.
  * Change the `Elizabeth` to `Liz`.

  ```
  var friends = [
      'Moe',
      'Larry',
      'Curly',
      'Jane',
      'Emma',
      'Elizabeth',
      'Elinor',
      'Mary',
      'Darcy',
      'Grey',
      'Lydia',
      'Harriet'
  ];
  ```

**2.**) Go to **MDN** and lookup `Array.sort`. Sort the list of `friends` above

**3.**) Challenge Problem:


* Find the `median` age in the following `ages` array.
  * **Note**: the **median** is the **middle index** of the **sorted** array.
* **CLUE**: Try `ages.sort()` in your console.
  * Does that work? (It doesn't.)
  * How do you sort arrays of **numbers** in JavaScript then?
  * **Hint**: Lookup up on **MDN** the `Array.sort` for **numbers**, and use the
   length of the Ages.

  ```
  var ages = [
      83,
      53,
      37,
      29,
      60,
      30,
      66,
      19,
      59,
      41,
      9,
      64,
      19,
      80,
      24,
      53,
      70,
      1,
      53,
      40,
      92,
      4,
      71,
      65,
      8,
      2,
      51,
      80,
      94,
      37,
      80,
      64,
      19,
      6,
      14
  ];
  ```

4.) There are a list of names in a string, below.

* How could we sort them? Hint: use string and array methods.
* List all the `friends` in reverse alphabetical order.

  ```
  var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,\
    "Elinor,Mary,Darcy,Grey,Lydia,Harriet";
  ```


6.) We have two lists of friends below:

  * How would we combine them into one list and sort them.

  ```
  var myFriends = [
      'Rickon',
      'Meera',
      'Hodor',
      'Jojen',
      'Osha',
      'Rickard',
      'Maester',
      'Rodrik',
      'Jory',
      'Septa',
      'Jon'
  ];

  var yourFriends = [
      'Bilbo',
      'Boromir',
      'Elrond',
      'Faramir',
      'Frodo',
      'Gandalf',
      'Legolas',
      'Pippin'
  ];
  ```

7.) I made a mistake with my favorite foods.

* How can I find the index of `Donuts` and remove it?
* **(Hint: look up `splice`)**

  ```
  var foods = [
      'Popcorn',
      'Potato chips',
      'Shrimp',
      'Chicken rice',
      'Poutine',
      'Tacos',
      'Toast',
      'French Toast',
      'Crab',
      'Pho',
      'Lasagna',
      'Brownie',
      'Lobster',
      'Donuts',
      'Ice cream',
      'Hamburger',
      'Sushi',
      'Chocolate',
      'Pizza'
  ];
  ```

8.) My friends want to know what my `5`th to `10`th favorite foods are.

9.) How would you create an array that efficiently stored the following information:

```
  'Moe' is 18
  'Larry' is 19
  'Curly' is 20
  'Jane' is 20
  'Emma' is 21
  'Elizabeth' is 18
  'Elinor' is 23
  'Mary' is 25
  'Darcy' is 24
  'Grey' is 18
  'Lydia' is 24
  'Harriet' is 18

```

### Objects

Why use objects to store `key` and `value` pairs? They are like arrays except that  data is not stored in any sorted order and keys do not have to numbered indexes.


#### Creating

```
var friend = { name: 'john' };

```

#### Accessing

```
friend['name'];
//=> 'john'
```

### Exercise

1.) How would you represent the following using an object literal. Then update `john's` address to `1234 Park ln`.

````

John, Doe, 36, 1234 Park st.

````
**(Hint: think in terms of firstname, lastname, age, address. Note that there's more than one way to store this data. Each with their own pluses and minuses.)**


2.) Using a combination of Objects and Array, how would you represent the following:


```
  Moe, Doe, 31, 1234 Park st.
  Larry, Doe, 36, 1234 Spark st.
  Curly, Doe, 36, 1239 Park st.
  Jane, Doe, 32, 1239 Spark st.
  Emma, Doe, 34, 1235 Spark st.
  Elizabeth, Doe, 36, 1234 Park st.
  Elinor, Doe, 35, 1230 Park st.
  Mary, Doe, 31, 1231 Park st.
  Darcy, Doe, 32, 1224 Park st.
  Grey, Doe, 34, 1214 Park st.
  Lydia, Doe, 30, 1294 Park st.
  Harriet, Doe, 32, 1324 Park st.

```

### RegExp

### Convenient Methods

* Strings
  * `split`, `join`
* Arrays
  * `.pop`, `.push`, `.concat`, `.slice`, `.reverse`













