any notes in here can be used on the midterm and final

Secure Shell (SSH) connections allow you to remotely connect to a network securely.
to ssh into your production environment server use this console command:<br>
ssh -i documents/cs260/supersecret.pem ubuntu@seniorassassingame.click

Public IP address --> 54.89.219.9 <br>
The DNS (Domain Name System) stores an A record (Address Record) which maps a domain name (seniorassassingame.click) to an IP address (54.89.219.9)
A DNS A record CAN point to IP addresses but NOT another A record
Ports are numerical identifiers that route web traffic to different processes or services.
    HTTP usually uses Port 80
    HTTPS usually uses Port 443
    SSH connections usually use Port 22

DEPLOY FILES
./deployFiles.sh -k ~/Documents/cs260/supersecret.pem -h seniorassassingame.click -s startup

Caddy is a web service that receives an HTTP request and routes it to other stuff. Not really sure how it all works. 

"Let's Encrypt" is a service that issues a web certificate every time someone looks up your domain. This is done in conjunction with the ACME protocol. This verifies that you are in fact the real owner of the domain and website and the site is secure (HTTPS).<br>

GENERAL MISC
    JSON (JavaScript Object Notation) is used to structure data in a readable way. It is often used to exchange data between a server and client
        JSON can be used with many languages, not just JS
        JSON objects contain attribute-value pairs

    Top-level-domain (TLD) is the last part (.click, .com, .org, etc)
    Root-domain is the main domain name + TLD (example.com)
    Subdomains are separate section to a website, with a prefix (blog.example.com)
    Paths are pages within the website (example.com/page1)

TERMINAL and GIT
Common terminal commands:
    • echo - Output the parameters of the command
    • cat - Output the contents of a file
    • cd - Change directory
    • cp - Copy files
    * chmod - controls permissions and access to files or directories 
    • mkdir - Make directory
    • rmdir - Remove directory
    • rm - Remove file(s)
    • mv - Move file(s)
    • ls - List files
        * ls -l Displays detailed information about each file or directory (long format), including permissions, ownership, size, and modification date.
        * ls -a Shows all files, including hidden ones (those starting with a dot).
        * ls -la shows all files (hidden or otherwise) and detailed info about them
    * nano - opens a text editor to edit files in the console
    • curl - Command line client URL browser
    • grep - Regular expression search
    • find - Find files
    • top - View running processes with CPU and memory usage
    • df - View disk statistics
    • less - Interactively output the contents of a file
    • wc - Count the words in a file
    • ps - View the currently running processes
    • kill - Kill a currently running process
    * wget - downloads a file (from HTTPS and whatnot)
    • sudo - Execute a command as a super user (admin)
    • ssh - Create a secure shell on a remote computer
    • scp - Securely copy files to a remote computer
    • history - Show the history of commands
    • ping - Check if a website is up
    • tracert - Trace the connections to a website
    • dig - Show the DNS information for a domain
    • man - Look up a command in the manual
You can also chain the input and output of commands using special characters
    • | - Take the output from the command on the left and pipe, or pass, it to the command on the right
    • > - Redirect output to a file. Overwrites the file if it exists
    • >> - Redirect output to a file. Appends if the file exists

git checkout<SHA> will restore your git files to the SHA version you refer to. git checkout<main/master> goes to the top of the chain
git branch <branch_name> creates a branch
git fetch tells you the latest changes made in GitHub without pulling those changes to your local repo
git status will tell you if you are in sync with GitHub

DNS
Domain Name Servers communicate the IP addresses of your destination. It turns "byu.edu" into an IP address

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

CSS
    MISC
        Padding is the space between the border of an element and any content WITHIN that element.
        Margin is the space between the border of an element and any NEIGHBORING elements OUTSIDE that element
        The CSS BOX MODEL is the model of (inside to outside) content, padding, border, margin.
    DISPLAY
        Block elements always take up the full width available and start on a new line.
            ol, p, ul, table, section, div, footer, header, aside, h1-6, main, AND MORE
        Inline elements do not start on new lines, and only take up as much space as necessary.
            a, button, img, input, span, AND MORE
        An inline elements cannot contain a block, but a block CAN contain an inline element.

    FONTS
    font-family has four major fonts
        serif has fancy things on the end of characters
        sans-serif
        fixed characters are all the same size
        symbol refers to emojis and stuff like that
        
    IMPORTING FONTS
    @font-face {
        font-family: '<font name>';
        src: url();
    }
    
    If you use a free google font you just need to do
    @ import url()
    
    SELECTORS
    A Combinator combines elements to more accurately define where we want CSS rules to be defined. For example, 
    body section {
    }
    would affect any section that is a descendant of body. This is a descendant combinator.
    Combinator | Ex	| Desc
    Descendant | body section	| Any section that is a descendant of body
    Child	| section > p	| Any p that is a DIRECT child of section
    General sibling | div ~ p	| Any p that has a div sibling
    Adjacent sibling | div + p	| Any p that has a ADJACENT div sibling
    
    
    A class is prefixed with a period
    ex .summary will affect anything with the attribute class="summary"
    ex. p.summary will affect any paragraph with class="summary"
    
    An ID refences a unique element. They are prefixed with hashes
    ex #physics
    
    Attribute selectors allow you to target elements with specific attributes
    ex p[class='summary']
    
    A psuedo selector targets elements based on specific relationships like their position, link-visitation status, mouse hover, etc.
    ex. section:hover affects sections once you hover over it.

    ANIMATIONS
    p {
      text-align: center;
      font-size: 200px;
      animation-name: demo;
      animation-duration: 3s;
    }
    
    Elsewhere you would have
    @keyframes demo { //see how this matches animation-name
        from {
            font-size: 0px;
        }
        to {
            font-size: 200px;
        }
    }
    
    In between for and to you could also have something like 95% which indicates what it should look like 95% through the animation
    
    
    RESPONSIVE
    Having responsive websites make it so that stuff is still visible on phones vs desktops 
    You can Inspect (option-command-I) to switch between desktop/phone view in the top-left corner
    
    adding display: flex; to the body will make every child element flex to fit together no matter the size of the frame.
    
    the style attribute flex clarifies how it will flex.
        flex: 0 80px; means it won't grow, and starts at a basis of 80px in height
        flex: 1; means that is has a fractional unit of growth, and if it is the only element with a non-zero growth value, it gets all the remaining space.
        If one element has flex: 1, and another has flex 3, the first will get 25% of the space, and the other gets 75%.
    flex-direction can be row or column and dictates in what direction elements will fit together.
    
    @media (orientation: portrait) {
    }
    detects when a device is in portrait mode. you might want flex-direction in column mode instead of rows if this is the case.
    
    @media (max-height: 700px)
    detects if the frame has a maximum height of 700px. You might want to do display: none; to hide unneeded elements on such a small screen
    
    
JAVASCRIPT
    The <script></script> tag can include JS code itself, or have a src attribute to a JS document
    MISC
        alert(msg) displays msg in a alert box
        you can declare multiple variables at once
            let a = 5, b = 6, c =0;
        objects are like maps, except you can only use strings or symbols as keys (maps can use any data type)
            object.key can access the value
            const person = {
                first_name: "name",
                last_name: "name"
            };
            you can add new key-value pairs with object.key = value or object[key] = value if the key isn't yet in the object
        \ is a escape character, so you can use characters in string you wouldn't be able to otherwise
            "I am a \"Cougar\"" --> I am a "Cougar"
        toUpperCase() and toLowerCase() turns a string all upper/lowercase
        strings are indexed by characters. You can grab specific words with .slice(start char, end char + 1)
        .replace(oldWord, newWord) will replace the first instance of that word
    DATES
        let now = new Date(); creates a Date object
        if you print out "now" --> Mon Oct 22 2023 10:20:30 GMT+0000 (Coordinated Universal Time)
        now.getFullYear() --> 2023
        now.getMonth() --> (0-11)
        now.getDate() --> 22 (day of month)
        now.getHours() --> (0-23)
        now.getMinutes() --> (0-59)
        now.getSeconds() --> (0-59)

        All of these methods have a variant like .setFullYear(2020)
    MATH
        Math.random() returns a decimal from 0-1
        Math.floor(Math.random() * (max - min + 1)) + min; can get a number within a range

        Math.abs(): absolute value
        Math.ceil(): round up
        Math.floor(): round down
        Math.round(): round to nearest integer
        Math.max(): maximum of values
        Math.min(): minimum of values
        Math.sqrt(): square root
        Math.pow(): power function
    TERNARY OPERATORS
        Ternary operators are shorthand if-else statements
        condition ? IfTrue : IfFalse;
    SWITCH BLOCKS
        Switch blocks are a more readable version of if-else blocks

        let fruit = 'apple';
        switch (fruit) {
            case 'banana':
                console.log('Banana is yellow');
                break;
            case 'apple':
                console.log('Apple is red');
                break;
            case 'orange':
                console.log('Orange is orange');
                break;
            default:
                console.log('Unknown fruit');
        }
        default is sort of like else:, it catches everything that wasn't a case.
    MOUSE EVENTS
        onclick	The user clicks on an element
        oncontextmenu	The user right-clicks on an element
        ondblclick	The user double-clicks on an element
        onmousedown	A mouse button is pressed over an element
        onmouseenter	The pointer is moved onto an element
        onmouseleave	The pointer is moved out of an element
        onmousemove	The pointer is moving over an element
        onmouseout	The mouse pointer moves out of an element
        onmouseover	The mouse pointer is moved over an element
        onmouseup	The mouse button is released over an element
    SCOPE
        Scope is the variables that are visible in the current context of execution.
        JS have four different types of scope
            1. Global - visible to all code
            2. Module - visible to all code in a module
            3. Function - visible within a function
            4. Block - visible within a block of code within curly braces
        
        var ignores block scope, so even if you use var within a block to initialize a new variable with the same name as a variable outside of the block, it will just reassign the original variable. Don't use var unless you know what you're doing.
        ex. 
            var x = 10;
            console.log('start', x);
            for (var x = 0; x < 1; x++) {          reassigning x instead of making a new one with same name      
              console.log('middle', x);
            }
            console.log('end', x);
            // OUTPUT: start 10
            //         middle 0
            //         end 1

        let creates a variable that can be accessed in block-scope, meaning it can be used in any nested blocks (like loops)
        but not in any OUTER block beyond where it was declared.

    fn = fn || variables
    this says that fn is equal to itself, unless fn is undefined, in which case it's equal to variables.
    
    the JS line debugger makes an automatic breakpoint for when you run the code
    
    FUNCTIONS
        to initalize a function
        function <name>(parameters)
        You can have inner functions that don't run until called
            function f() {
                function g() {
                return 1;
                }
                g() //called here
            }
            
        An anonymous function doesn't have a name when initialized, it's assigned to one.
        f = function (parameters)
        
        optional parameters
        f = function(a, b, c = 'rat')
        if you don't provide a c (optional) then it'll revert to the default value for it.
        If you provide less than the required number of parameters, it may still run, but some variables will be undefined within the function.
        
        arrow functions are another syntax for anonymous functions (more compact)
        const arrow = (parameters) =>  {
        }
        You can pass an arrow function as a parameter
            function ([1, 2, 3], (i) => i + i)
        if the function is really short you can include it on the same line as the arrow without curly brackets. Without brackets, it automatically returns whatever the statement evaluates to.
        
        A closure is a function with some scope that doesn't disappear where it usually might.
        You don't give it a name so it gets called and then goes to the abyss once it's over.
        
    ARRAYS
        Arrays are within []
            const a = [1, 2, 3]
        .push adds elements to the back of the array
        .unshift adds elements to the front of the array
        .splice() can insert (and delete) elements
            .splice(2, 0, "hello") adds "hello" at index 2. The 0 means its just inserting
            .splice(index, delete_count) deletes a certain number of elements starting at index
        .sort() sorts an array alphabetically or numerically (depending on data type)
        .pop erases the last item in the array
        .slice(start, stop) returns a sublist within the desired range
        .length returns the length
        .find() returns the first item satisfied by a test function
            a.find(i => i < 2)
        .forEach() runs a function on each item
        .filter runs a function to remove items ?
        .every tests if all items match a function
            a.every(i => i < 3)
        .some tests if some items match a function
        
        for (let <something> of <array>) // iterates through the array
        
        myarray.map((n) => n * 100)
        this return a new array where all the original values have been mapped to a new value
        
        myarray.reduce((a, c) => a + c)
        this adds up everything in the array (reducing it to a single value)
        
    REST and SPREAD and DESTRUCTURING
        the rest parameter (...) allows a function to treat an indefinite number of arguments as an array
        
        funtion sum(...args) {
            let sum = 0;
            for (let arg of args) sum += arg
            return sum;
        }
        
        this way you could pass in any number of variables and use them all
        
        the spread operator (...) expands an iterable (like an array) into multiple elements. 
        
        numbers = [1, 2, 3, 4, 5];
        [one, two, ...rest] = numbers
        
        having square brackets on the left side indicate spread being used
        
        Destructuring is pulling some individual variables out of arrays
        a = [1, 2, 3, 4]
        [b, c] = a
        b outputs 1, c outputs 2
        
        [b, c, ...others] = a
        b outputs 1, c outputs 2, others outputs [3, 4]
    
    EXCEPTIONS
        try {
            //attempt this code
        }
        catch {
            //proceed to this code if the try code fails
            //after catch you can include the error code to catch specific errors
        }
    
    MODULES
        Modules allow for the partitioning and sharing of code. They were firstsupported by Node.js to be used in JS. Now, JS supports them too. Node.js modules are CommonJS modules, JS modules are ES modules
        
        You must explicitly export the objects from one file and then import them into another.
        
        within alert.js
        export function alertDisplay(msg) {
            alert(msg);
        }
        
        within main.js
        import { alertDisplay } from './alert.js';
        alertDisplay('called from main.js')
        
        You can only call code from modules while in other modules. Within your HTML, specify that you are using an ES modules by including a type attribute with the value of module in the script tag.
        <script type="module">
          import { alertDisplay } from './alert.js';
          alertDisplay('module loaded');
        </script>
        
        If you want to use a module in the global scope (outside a module), you can either attach an event handler, or adding a function to the global window object. 
        <html>
          <body>
            <script type="module">
              import { alertDisplay } from './alert.js';
              window.btnClick = alertDisplay;
        
              document.body.addEventListener('keypress', function (event) {
                alertDisplay('Key pressed');
              });
            </script>
            <button onclick="btnClick('button clicked')">Press me</button>
          </body>
        </html>
        in this example we expose alertDisplay by attaching it to the window object (global scope)
        
    DOM (DOCUMENT OBJECT MODEL)
        Each element within an HTML file is an object in hierarchal order (parent and child elements).

        document.getElementById("<Id>") allows you to access an element
        document.getElementsByTagName("<tag>") returns a list of elements
        document.getElementsByClassName("<class>") returns a list of elements

        once you have accessed the element, you can modify it's attributes too
            document.getElementByTagName("img").src
        you must route through style to access style attributes
            .style.color
        IMPORTANT: all CSS attributes in JS DOM are in camel-case. font-size becomes fontSize

        .tagName gives the tag name of an element
        .children is an array of the children of an element
        
        listElements = documents.querySelectorAll('p');
            .querySelectorAll is grabbing every p element within "document" (the entire page) and storing it in listElements
        .querySelector returns the first element found
        .querySelector() can take #myID or .myClass to search for elements with specific tags or classes
        .textContent returns all the text content of an element
        
        .createElement() creates a new element
        .textContent can be assigned to a new value
        .appendChild appends a child element within the DOM document
        .removeChild removes an element 
        .innerHTML can be set to a new value to replace whatever used to be there
            const el = document.querySelector('div');
            el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
            (<b> is a bold tag)
            
    EVENT LISTENERS
        event listeners are things you can add to an element to call a function when it gets clicked
            const submitDataEl = document.querySelector('#submitData');
            submitDataEl.addEventListener('click', function (event) {
              console.log(event.type);
            });
        event listeners can also be directly in the HTML
            <button onclick='alert("clicked")'>click me</button>
    
    NODE.JS
        Node.js is an application that lets you deploy JS outside of a browser. 
        
        You can execute a line of JS code in the terminal with the line:
        node -e "<CODE HERE>"
        
        If you have a whole file to execute, just do
        node index.js
        
        If you just run the line
        node 
        It opens node.js in interpretive mode so you can then write separate lines of code 
        type .exit to exit interpretive mode.
        
        To use a 3rd party JS package, you must
            1. Install the package locally using Node Package Manager (NPM). 
            2. Include a require statement in your code that references the package name.
        
        const giveMeAJoke = require('give-me-a-joke');
        giveMeAJoke.getRandomDadJoke((joke) => {
            console.log(joke);
        });

    PROMISES
        HTML rendering takes place on a single thread. This means you CANNOT (as a warning) take a long time processing JS on the main thread. Long running, or blocking tasks, should be executed with the use of a promise. A promise allowws the main thread to continue rendering while some JS action is being executed in the background. Executing asynchronously means that a promise constructor may return before the promise executor function runs. 
        The state of the promise execution is always in one of three states:
            - Pending - currently running
            - Fulfilled - completed successfully
            - Rejected - failed to complete
        
        The promise executor function takes two functions as parameters: resolve and reject. Calling "resolve" sets the promise to fulfilled, calling "reject" sets the promise to rejected.
        ex
            const coinToss = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        resolve('success');
                    }
                    else {
                        reject('error');
                    }
                }, 10000);
            });
            
        coinToss is a function that has a promise. This promise has a setTimeout, which comes with an arrow function that has a 50% chance to call reject or resolve, and waits 10000ms (10s) before executing that function. 
        
        ---
        Promises have functions similar to exception handling. then is called if the promise is fulfilled, catch is called if it is rejected, and finally is always called after all processing it complete.
        
        ex.
            cointToss
                .then((result) => console.log(`Coin toss result: ${result}`))
                // NOTE: ${} is like an f-string, it encloses variables in strings
                // uses backticks `` instead of apostrophes ''
                .catch((err) => console.log('Error: ${err}'))
                .finally(() => console.log('Toss Completed'));
        
        result and err are the values passed by resolve and reject up in coinToss.

REACT
    ROUTERS
        With multiple-page applications, headers, footers, and navbars are often duplicated over each page. A react router can turn your application into a single HTML page, and then use JS to manipulate the DOM and give it the appearance of multiple pages.
        
        There are many react routers to use, we are using react-router-dom version 6. Do not confuse this with regular react-router, nor versions prior to 6.
        
        IMPLEMENTATION
        A BrowserRouter component encapsulates the entire application and controls routing. Link or NavLink captures navigation events (like clicks) and modifies what is rendered by a Routes component by matching to and path attributes.
        
        // Inject the router into the application root DOM element
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          // BrowserRouter component that controls what is rendered
          // NavLink component captures user navigation requests
          // Routes component defines what component is routed to
          <BrowserRouter>
            <div className='app'>
              <nav>
                <NavLink to='/'>Home</Link>
                <NavLink to='/about'>About</Link>
                <NavLink to='/users'>Users</Link>
              </nav>
        
              <main>
                <Routes>
                  <Route path='/' element={<Home />} exact />
                  <Route path='/about' element={<About />} />
                  <Route path='/users' element={<Users />} />
                  <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        );
        
        Notice how the NavLink connects to a Route within Routes. Each path in Route matches the to given by a respective NavLink. 
        
        Each Route has the element attribute which points to the function that returns/renders the elements on the page (a div in the above example).
        