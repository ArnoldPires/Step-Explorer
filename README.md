<h1>Step Explorer</h1>
<br>
Necessary Deliverables
1) Project Planning
A project consists of more than just code.

This project requires planning organized within a Trello board with the following lists:

Icebox: Holds user stories that have yet to be moved to the Current/MVP list. All user stories are originally put into the Icebox, including both MVP and wish list stories.
Current/MVP: Holds user stories that must be completed to meet the minimum project requirements (MVP). Once the MVP has been met, additional user stories may be moved from the Icebox.
Completed: Hold completed user stories.
Wireframes: Sketches of each screens's user interface for the major functionality of the application.
Entity-Relationship-Diagram (ERD): A diagram of the app's models (one per data entity) and the relationships between them.
User stories need to be formed properly using this template:
As a <role>, I want <feature> so that <reason>. The reason is optional if it's patently obvious.


2) Project Source Control & README
The project's source code for both your Express Backend and React Frontend must be hosted on a personal GitHub repository.

The repo is to contain frequent commits dated from the beginning of the project through its completion.

The project must include a README.mdfile with the following sections:

Introduction: A paragraph used to introduce interested parties to the project and needs to include one or more screenshots.
Technologies Used: A list of all technologies, libraries, APIs, etc. used in the project.
Getting Started: Links to the project's planning (Trello board) and the deployed app.
Unsolved Problems: List any unsolved issues.
Future Enhancements: Identify future features and enhancements planned for the project.

3) Application Technical Requirements/Deliverables
A functioning full-stack, single-page application for (Express) and a CDN service for (React).
Incorporate the technologies of the MERN-stack:

MongoDB/Mongoose
Express
React
Node
Have a well-styled interactive front-end that communicates with the Express backend via AJAX.
Implement token-based authentication - "...a user can sign-up, log in & log out".
Implement authorization by restricting functionality to authenticated users.
Navigation should respond to the login status of the user.
One User data entity minimum, which will be used for Auth; other data entities can be added and related if desired but are not required.
Have a comprehensive feature-set.

Full CRUD distributed across all Data Entities

Or

One of the following features instead:

(Easy) - Consume a third-party API and display API data in components.
(Moderate) - Include an admin interface w/features.
(Hard) - Utilize multi-user, real-time communications (difficult and time consuming)

4) Project Presentation
You will have 7 minutes to present and demonstrate the following:

Introduce your project by paraphrasing its README.
Click the link in the README to open the deployed app.
Demonstrate the application's authentication features by signing up a new user, logging out that user, then logging in with your preferred user.
Demonstrate your app's main features.
Share/discuss the following code (not line-by-line):

The main/central Mongoose model
Your "favorite" Express controller method
Your "favorite" React component
The client-side routing
Share the experience by answering the following:

What was your biggest challenge?
What are your key learnings/takeaways?
Following your presentation, there will be a brief Q & A period and optional instructor feedback.


Project Assistance
At this stage of SEIR, being able to find the the answers to your development issues is of paramount importance.
Feel free to use all resources available and collaborate with others.
If you do seek assistance in Slack, explain the issue, include screenshots, and explain what you've done to solve the issue on your own.


Suggestions to Get Started
Don’t get too caught up in too many awesome features – simple is better. Favor fewer features that look/feel impressive over numerous clunky/sloppy features.
Implement the Usermodel and authentication first. Then implement the "As a visitor, when I browse to the app, I want..." user story.
Prioritize user stories and code them accordingly.
When implementing a feature, think through the steps that it takes in plain language first. If necessary, write and/or diagram the steps to help guide your coding.
Follow the steps we've done in class to implement features, beginning with the user's interaction, identifying the proper route, etc.
Read the docs for whatever technologies / frameworks / API’s you use.

Best Practices
Write DRY code.
In a SPA, communication with the backend is via AJAX. Build RESTful APIs to CRUD your data entities (resources) and perform other functionality via AJAX. In a React app, those AJAX calls should be made from "service" modules, not components.
Be consistent with your code style.
Clearly name variables and functions - remember, variables are usually named as nouns and functions as verbs.
Write well-formatted HTML/CSS/JS. Properly formatting your code makes it more readable. Improperly formatted code infers sloppiness.
Comment your code where it makes sense. Most code is self-documenting, however, comments help explain complicated code.
If you have any questions regarding these requirements, please feel free to contact your instructional team!
