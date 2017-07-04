# Doctor Finder 7/4/2017


#### **By Jordan Loop**

## Description

User enters a symptom and a list of nearby doctors that are qualified to treat inputted symptom is returned.

## Behavior, Inputs, and Output

| Behavior handled<br>By this program: | Input example<br>When it receives: | Output example<br>It should return:                                     |
|--------------------------------------|------------------------------------|-------------------------------------------------------------------------|
| User can successfully search.        | "Back Pain"                        | A list of up to 20 doctors first/last name is returned.                 |
| User can fail a search               | "Pants"                            | "No results to display for 'Pants'." is displayed.                      |
| User can successfully search.        | "Back Pain"                        | A list of up to 20 doctors first/last name and an image is returned.    |
| User can successfully search.        | "Back Pain"                        | A list of up to 20 doctors first/last name, image, and bio is returned. |

## Setup/Installation Requirements

* Open you computer's terminal and navigate to desktop.
* While located in desktop execute the following command in the terminal:
  <pre>git clone https://github.com/Jordloop/Doctor-project.git</pre>
* Navigate to the cloned repository (should be on desktop).
* While in the top level of the cloned repository's directory execute the following two commands:
  <pre>bower install</pre>
  <pre>npm install</pre>
* Finally open index.html in any modern browser.


## Known Bugs

* No known bugs

## Support and contact details

If you have any issues or have questions, ideas, concerns, or contributions please contact through Github.

## Technologies Used

* JavaScript
* jQuery
* HTML
* CSS
* BootStrap
* BetterDoctor API


### License
Copyright (c) 2017 Jordan Loop, Epicodus
