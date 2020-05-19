# Udemy

#### Places to add javascript
- script tag
- within containers
- devtool console in browser
- from external file (src = "file.js")

The last is best because flexibility, modularity.
Plus a lot of htmls can call on this.

#### Console debug in devtools

#### Variables
- _ works
- $ works
- camelCase is preferred

#### Comparison

`var a = 5;`
`var b = 4;`
`var c = "5";`


Now, `a==c` will return `true` because the values inside are the same.


`a===c` will return false since typeof is also different.


`a!=b` will give `true`

`!==` will also return absolute not equal to, ie. typeof is different.

Ternaries are okay `(condition)? opta: optb`

## Array

#### Array properties

- no ()

Like:

- array.length
-


#### Out of bounds indexes

- adds undefined items in between last value and new out of bounds value.

#### Array methods
- `Array.isarray(myarr)`
- `myarr.push(ele)`
- `myarr.pop()`
- `myarr.shift()`
- `myarr.unshift(ele)`
- `myarr.splice(start,num)` - removing!
- `.reverse()`
- `.sort()`
- `myarr.fill(ele, start, stopBefore)` to fill till the end or till stopBefore.
- `myarr.indexOf(ele)` = -1 if not there !
- `.includes(ele)` = bool
- `.slice(start,stopBefore)`
