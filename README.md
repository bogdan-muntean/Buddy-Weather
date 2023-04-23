# Buddy-Weather
I have created an application for checking the weather for the current day as well as for the next 7 days or 24 hours.

In variables.scss I used variables to make the code cleaner, efficient and easy to modify.
In global.scss it addresses the App component.

I applied modularization and structured the components separately, each component with its own scss to be easier to follow and modify.
The components are divided into form (which serve the inputs in the application) and ui (serve the display of information after the input and the application of the functions)

The functions are divided into data (that process data from the server) and useful (that serve the needs)

The pictures are added to the public folder so that they can be downloaded at the time of deployment. The pictures are dynamically imported and are representative of the weather code for that hour or day.

I used Luxon node package to translate from dt format (date timestamp) or ISO format, to custom format.

###
In the end, I did the following to deploy:
-package.json: added at "scripts", "deploy": "gh-pages -d dist"
- I created the deploy.sh file
- I installed node packages for github pages
-in compiler: npm run build + npm run deploy