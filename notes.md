any notes in here can be used on the midterm and final

to ssh into your production environment server use this console command:<br>
ssh -i documents/cs260/supersecret.pem ubuntu@seniorassassingame.click

Public IP address --> 54.89.219.9 <br>
DNS (Domain Name System) connects the domain seniorassasin.click to that IP address 

Caddy is a web service that receives an HTTP request and routes it to other stuff. Not really sure how it all works. 

"Let's Encrypt" is a service that issues a web certificate every time someone looks up your domain. This is done in conjunction with the ACME protocol. This verifies that you are in fact the real owner of the domain and website and the site is secure (HTTPS).<br>


HTML
All html files should have <!DOCTYPE html> at the top to tell the browser what type of html is running.
Common input tags include:
    form 
    fieldset - labeled input grouping
    input - <input type="">
    selection - dropdown menu
    optgroup - grouped selection dropdown
        option
    textarea - multiline text input
    label - individual input label
    ouput - output for input
    meter - display value within known range
    button - does stuff (like submit)

Input element
    text - single line text
    passcode - obscured passcode
    email 
    tel - phone number
    url 
    number
    checkbox - inclusive selection
    radio - exclusive selection
    range - range limited number
    date - year, month, day
    datetime-local - date and time
    month - year, month
    week - week of year
    color
    file
    submit

example: 
<label for="checkbox1">Check me</label> <input type="checkbox" name="varCheckbox" value="checkbox1" checked />
**notice how the "for" in label and "type" in input match**


Attributes for input elements
    name - this is submitted as the name of the input if used in a form
    disabled - disables the ability for the user to interact with the input
    value - the initial value of the input (colors must be in hex)
    require - value is required in order to be valid

Some inputs validate that the input they receive works. For example, a number input will only accept a number.
Some inputs have the "pattern" attribute which lets you use a Regular Expression to only allow certain inputs to match in order to be valid

HTML MEDIA
<img src="">
<audio controls src=""></audio>
    autoplay is an attribute, strongly discouraged
    if "controls" is not included there is no visual representation of the audio. 
    loop is an attribute
<video controls scr=""></video>
    you may need to include the attribute crossorigin="anonymous" if the video comes from a different domain than the one serving your content
    Autoplay is an attribute
<svg></svg> is a Scalable Vector Graphics which lets you create an image within your HTML
<canvas> is another within-HTML image creator that uses JavaScript

