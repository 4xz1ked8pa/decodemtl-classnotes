### Array Functions
> When you need to depend on the order of the elements in the collection, use Arrays, when order is not important, use objects. Order is not guaranteed in objects, but they provide for fast key-value pair lookups.

| Function       | Parameters                    | Purpose                                                                                      |
| :------------- |:------------------------------| :--------------------------------------------------------------------------------------------|
| **.map**       | `function`                    | Apply a function to every element of an array.                                               |
| **.indexOf**   | `value`, `index`              | See if an element is inside an array.                                                        |
| **.slice**     | `begin`, `end`                | Returns a portion of an array into a new array.                                              |
| **.join**      | `seperator`                   | Joins all elements of an array into a string.                                                |
| **.push**      | `element`                     | Adds element(s) to the end of an array and returns the new length of the array.              |
| **.find**      | `function`                    | Returns a value of the element(s) that satisfy the function being provided.                  |
| **.some**      | `function`                    | Tests whether some elements in the array pass the test provided by the function.             |      
| **.every**     | `function`                    | Tests whether all elements in the array pass the test provided by the function.              |      
| **.sort**      | `function`                    | Sorts an array according to a function or by unicode characters order by default.            |
| **.reverse**   |                               | Reverses the order of every element of an array.                                             |
| **.shift**     |                               | Removes the first element from an array and returns that element.                            |
| **.pop**       |                               | Removes the last element from an array and returns that element.                             |
| **.filter**    | `callback`                    | Creates a new array with all elements that pass a test.                                      |
| **.map**       | `callback`                    | Calls a function on every element of an array and creates a new array.                       |
| **.reduce**    | `callback`, `init val`        |                                       |




### Primitives vs Objects
> When you need to depend on the order of the elements in the collection, use Arrays, when order is not important, use objects. Order is not guaranteed in objects, but they provide for fast key-value pair lookups.

| Primitives       | Object                    |
| :----------------|:--------------------------|
| `Numbers`        | `Array`                   |
| `String`         |             |
| `Boolean`        |             |
| `Funcition`       |            |



### SQL Statements
| Statements                                                                                                                   |
| :--------------------------------------------------------------------------------------------------------------------------- |
| **SELECT** `*` **FROM** `table_name` **WHERE** `id=1`;                                                                       |
| **INSERT INTO**  `table_name`  **(** `email` **) VALUES (** `charles@cursuum.com` **)**, **(** `geoffroy@cursuum.com` **)**; |
| **UPDATE** `email` **FROM** `table_name` **WHERE** `id=1`;                                                                       |
