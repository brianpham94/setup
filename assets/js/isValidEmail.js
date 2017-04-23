/*
* @method isValidEmail 
* Takes in an email and checks whether or not it is valid
*
* @parameter {String} email - the email being validated
* @return {Boolean} result - true if the email is valid, false if the email is invalid
*
* A valid email must be in the form [personalized_part]@[domain] 
* where “personalized_part” is a string composed of any combination of alphanumeric characters, 
* the symbols “!, #, $, %, &, ', *, +, -, /, =, ?, ^, _, `, {, |, }, ~”, and the “.” character
* so long as it’s not the first or last character and does not immediately follow another “.”. 
* The “domain” is a string composed of any combination of alphanumeric characters, “-”, and “.” 
*/
export.isValidEmail = function(email)
{
    var pattern = /^\w[-a-zA-Z0-9!#$%&'*+-/=?^_`{|}~.]+\w@[-a-zA-Z0-9.]+$/;
    return pattern.test(email);
};
