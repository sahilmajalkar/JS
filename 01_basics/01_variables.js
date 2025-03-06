const accountId = 12345
let accountEmail = "sahil@gmail.com"
var accountPass = "123456"
accountCity = "Mumbai"
let accountState

//accountId = 1 // not allowed
accountEmail = "sid@gmail.com"
accountPass = "654321"
accountCity = "Goa"

//console.log(accountId, accountEmail);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPass, accountCity, accountState])
