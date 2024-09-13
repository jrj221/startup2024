# startup2024 - Assassin

## Specification Deliverable
### Elevator Pitch
A popular event for High School seniors across the country is Senior Assassin, in which dozens of students are assigned targets among each other who they have to 'eliminate' (with nerf guns) in a certain time period (ex. a week). Whoever lasts longest without being eliminated is declared winner. Usually one or more students organizes this game themselves, taking it upon themself to assign new targets manually each week. This application is meant to do that work for them, assigning targets and then tracking user submissions of which participants have been eliminated. 

### Design
![Design mockup for main application page.]

### Key Features
* Secure login to prevent unwanted eyes seeing your target
* Leaderboard ranking "Assassins" who have eliminated their targets the quickest
* Basic chat functionality with other participants (trading information, establishing alliances, etc)
* Basic notes (which are persistenly stored after leaving the application) that participants can use to keep track of information (ideas of where/when/how to get their target, suspicions of who might have _them_ as a target)
* Realtime countdown displaying either the time remaining to eliminate your target, or the time until you get a new target
* A list displaying all Assassins, stylized to show which have been eliminated and a datestamp of when they were eliminated

### Technologies
I will use the required technologies in these ways:
* **HTML -** Uses correct HTML stucture for application. One page with all key features, another page for logging in. Main page only displays target and notes once logged in.
* **CSS -** Styling that works on multiple screen sizes, color and font choice that fits with the "Assassin" theme. Spacing is such that the page doesn't become too cluttered or busy when viewing.
* **React -** Allows for interactive elements like logging in, sending chats, and other stuff I haven't decided on.
* **Web Service -** Remote functions include allowing chatting with other agents, saving your elimination status, and saving notes.
* **DB/Login -** Stores login information, without which most features aren't available. Stores chats and notes.
* **WebSocket -** Renders latest Agent Statuses (who has been eliminated), displaying a realtime countdown, and displaying chats with other agents.
