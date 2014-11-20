#Better Password Prompts

Heavily inspired by http://aerotwist.com/blog/better-password-form-fields/ I wrote my first JQuery plugin.

###Usage
designed to be as simple as possible, theres probably a million and one things I could do to make this better. I was just keen to try implementing a jQuery "plugin"

1. include the minified css and the js file.
 1. `<link rel="stylesheet" type="text/css" href="css/passwordField.min.css">`
 1. `<script src="js/passwordField.min.js"></script>`
1. that's it.

###How it works
plugin appends some elements to the DOM after the password input field.

###Demo
<link rel="stylesheet" type="text/css" href="css/passwordField.min.css">
 <script src="js/passwordField.min.js"></script>
<form>
  <label for="password">Choose a new password</label>
  <input placeholder="Enter your password" type="password" id="password" name="password" />
</form>

###Planned improvements
+ look at setting some options to specify which constraints you want to utilise
+ option to enable / disable tooltips
+ prettier tooltips


