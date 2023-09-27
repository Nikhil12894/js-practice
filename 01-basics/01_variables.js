const accountId = 12435;
let accoutEmail = "nalin@github.com";
var accountPassword = "434543";
accountCity = "Delhi";
let accountState;
// accountId = 34; // not allowed

accoutEmail = "nk@github.com";

accountPassword = "rwtre5433245245";

accountCity = "Noida";

console.log(accountId);

/**
 * 
 * preferd not to use var
 * because of issue in block scope and functional scope
 * 
 */
console.table([accountId,accoutEmail,accountPassword,accountCity,accountState])