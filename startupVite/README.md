# startup2024 - Assassin

## Specification Deliverable
### Elevator Pitch
A popular event for High School seniors across the country is Senior Assassin, in which dozens of students are assigned targets among each other who they have to 'eliminate' (with nerf guns) in a certain time period (ex. a week). Whoever lasts longest without being eliminated is declared winner. Usually one or more students organizes this game themselves, taking it upon themselves to assign new targets manually each week. This application is meant to do that work for them, assigning targets and then tracking user submissions of which participants have been eliminated. 

### Design
![Design mockup for main application page.](public/260applicationMockup.jpg)

### Key Features
* Secure login to prevent unwanted eyes seeing your target
* Leaderboard ranking "Assassins" who have eliminated their targets the quickest
* Basic chat functionality with other participants (trading information, establishing alliances, etc)
* Basic notes (which are persistently stored after leaving the application) that participants can use to keep track of information (ideas of where/when/how to get their target, suspicions of who might have _them_ as a target)
* Realtime countdown displaying either the time remaining to eliminate your target, or the time until you get a new target
* A list displaying all Assassins, stylized to show which have been eliminated and a datestamp of when they were eliminated

### Technologies
I will use the required technologies in these ways:
* **HTML -** Uses correct HTML structure for application. One page with all key features, another page for logging in. Main page only displays target and notes once logged in.
* **CSS -** Styling that works on multiple screen sizes, color and font choice that fits with the "Assassin" theme. Spacing is such that the page doesn't become too cluttered or busy when viewing.
* **React -** Allows for interactive elements like logging in, sending chats, and other stuff I haven't decided on.
* **Web Service -** Remote functions include allowing chatting with other agents, saving your elimination status, and saving notes.
* **DB/Login -** Stores login information, without which most features aren't available. Stores chats and notes.
* **WebSocket -** Renders latest Agent Statuses (who has been eliminated), displaying a realtime countdown, and displaying chats with other agents.

## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- [x] **HTML pages** - Four HTML pages: Home, Chats, Leaderboard, and Notes.
- [x] **Links** - Nav bar has links to all different pages of the website. A link can take you to a registration page. I may end up restricting certain links to after login has been completed, but haven't implemented that yet.
- [x] **Text** - Throughout the website text explains what different pages are for, placeholders, and examples of what they might display.
- [x] **Images** - Haven't created a permanent site image, but I used a random AI image to show that I know how to implement an image in HTML.
- [x] **DB/Login** - Input box and submit button for login. Created a database placeholder in leaderboard.html to show how that might be used eventually.
- [x] **WebSocket** - Created a placeholder in the chat.html page to show where that technology might be used in the future.

## CSS deliverable

For this deliverable I built the CSS to make my application LOOK pretty much like what it will in its final version.

- [x] **Header, footer, and main content body** - Structure and CSS for these elements are present on each page.
- [x] **Navigation elements** - Every page has a bootstrap navbar which is styled differently depending on what display is used.
- [x] **Responsive to window resizing** - Application looks good on both desktop and mobile (max-width: 400px) displays
- [x] **Application elements** - I chose colors, sizing, and positioning that looks good on different displays.
- [x] **Application text content** - Consistent fonts and styling.
- [x] **Application Images** - Images aren't really a part of my application but I have one image on the homepage as a placeholder for target image. This image IS styled with CSS.

## React deliverable

I used JavaScript and React to bundle the whole website onto one html page. Functionality added where possible. 

- [x] **Bundled and transpiled** - done!
- [x] **Components** - Home, login/registration, leaderboard, chat, and notes are all components with mocks for login and target elimination, and places for WebSocket to be used in the future.
  - [x] **login** - For aesthetic purposes, my page displays info as if user is already logged in. After we learn login, this will change so that the home page is blank until they log in. If I need to do so to align with the rubric, I can have the login be the first thing you see (like with simon) instead of how I have it in the navbar right now.
  - [x] **database** - I have mock code to display the leaderboard, targets, notes, and chat messages. Later, a database will persistently store this for multiple users across multiple sessions.
  - [x] **WebSocket** - Hardcoded elements display examples of the leaderboard, current targets, and chat messages. In the future this will be stored with WebSocket instead.
  - [x] **application logic** - Page components "speak" to one another through Router logic.
- [x] **Router** - Routing between all page components is completed.
- [x] **Hooks** - I used a useState hook to control privacy filters on the target photo/name, as well as to open and close a popup window.

## Service deliverable

For this deliverable I added backend endpoints and frontend requests to dynamically update my application with information from APIs.

- [x] **Node.js/Express HTTP service** - done!
- [x] **Static middleware for frontend** - done!
- [x] **Calls to third party endpoints** - Home has a fetch call to a 3rd party API that provides weather information, in order to display the current temperature. It updates every hour. (Note: it takes like 30 seconds, so give TEMP a minute to render)
- [x] **Backend service endpoints** - Placeholders for login that stores the current user on the server. Endpoints provided for updating and rendering the leaderboard.
- [x] **Frontend calls service endpoints** - I used onClick handlers in Home upon clicking "Eliminate Target" to call backend service endpoints that update the leaderboard. The leaderboard is also tracked as a state variable in Leaderboard and is continuously rendered with a useEffect hook every time someone updates the leaderboard. 

## DB/Login deliverable

For this deliverable I made account creation and login functional and stored user info persistently in MongoDB. I also made functions to store and retrieve leaderboard information from the database.

- [x] **MongoDB Atlas database created** - done!
- [x] **Stores data in MongoDB** - done!
- [x] **User registration** - Creates a new account in the database.
- [x] **existing user** - Allows existing users to log in and out. 
- [x] **Use MongoDB to store credentials** - Stores user information such as email, password, and authentication token.
- [x] **Restricts functionality** - Created a secureApiRouter that only allows logged in users to update the leaderboard. Furthermore, users must be authenticated before the home page will even render.

## WebSocket deliverable

For this deliverable I used webSocket to create a Chat feature.

- [x] **Backend listens for WebSocket connection** - done!
- [x] **Frontend makes WebSocket connection** - done!
- [x] **Data sent over WebSocket connection** - done!
- [x] **WebSocket data displayed** - You can chat with other users in real time! Very cool.