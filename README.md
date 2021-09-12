# Can you Rock, Paper, Scissors, Lizard, Spock?

![image](https://user-images.githubusercontent.com/85314939/132983589-c11d9c0c-9182-48b9-b559-dc5486df44fa.png)

The game, *"Can you Rock, Paper, Scissors, Lizard, Spock?"* is an extension based on the classic Rock, Paper, Scissors game with two additional options. The game design provides an opportunity for children and adults of all ages to play, with an element of chance to win each round against a randomized option from the computer. As the game is against the computer, there is a lesser chance of the round being a draw, and a greater chance of having an outright winner each time. 

## Features:
### Existing Features:
- Header
    * The title of the game features dominantly at the top and center of the page, clearly displaying two options which includes the *restart* button and the *Contact Us* button underneath. This restart option refreshes the page to allow the user to start again adn the contact us option allows the user to submit a response.
    ![image](https://user-images.githubusercontent.com/85314939/132983557-7352fa83-9be6-400c-9946-13f13dfc30cf.png)

- The Game Area
    * The game area provides a simplistic outlook on the overall scheme with consistent images of the five possible options in a different way. The user selects one the button options to begin the game.
    
    ![image](https://user-images.githubusercontent.com/85314939/132983603-21b6cab7-90a1-4c26-bb7c-6f3709054fc0.png)

    * The footer consists of the rules and remains consistant throughout the entire game.
    
    ![image](https://user-images.githubusercontent.com/85314939/132981450-9084861e-3154-4850-b17e-f73f6e626b84.png)

- Game Options
    * Once the game has begun, the user is presented with five individual options which represent the elements of the game: Rock, Paper, Scissors, Lizard, Spock". The user selects one of the options, which then displays the corresponding image into the gameboard area. The computer instantly selects a random option and this in turn displays the corresponding image. The JavaScript then determines who the winner is based on the rules, and increments a point to to the winner.

    ![image](https://user-images.githubusercontent.com/85314939/132981399-678c114b-b08b-4fdf-a6d2-fb719a026930.png)

- Contact Us Form
    * The contact us form consists of a area to include a First Name, Email and a detailed response. The First Name and Email areas are required fields to ensure the correct data validation.

    ![image](https://user-images.githubusercontent.com/85314939/132983653-c713a448-83ba-4be5-befd-020584c5da21.png)

- Additional Features
    * As an additional feature, I would like to add more options for the user and computer to select to expand the game's variation.
    * Also, I would like to include a move tracking system which allows the game to produce an outright winner after a certain number of moves

## Testing

Each responsive item has been tested and each function as expected. However, despite the efforts within the JavaScript file, the allocation of the correct score does not work consistently. At times, the function checkScore() correctly determines what the selection of the player was against the computer and allocates the correct score, however other times this randomly allocates scores.

* The project has been run through Google Chrome's Lighthouse function and returns the following results for Desktop:

![image](https://user-images.githubusercontent.com/85314939/132981667-2f40aa13-81f3-4f6a-9c1a-1aedef1aa097.png)

* And the following results for Mobile:

![image](https://user-images.githubusercontent.com/85314939/132981767-302c0bda-a1fc-4a43-a4b3-82603e4403bc.png)

The site was passed through the official WC3 Validator with one warning raised:
* Section from line 17, column 5; to line 17, column 39 lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.

The site was passed through the official CSS Jigsaw validator with no errors.

The site was passed through the official Javascript validator JSHint and returned the following:

- Metrics
    * There are 5 functions in this file.
    * Function with the largest signature take 2 arguments, while the median is 0.
    * Largest function has 14 statements in it, while the median is 4.
    * The most complex function has a cyclomatic complexity value of 17 while the median is 1.

- Warnings 
* These include that "let", "const" "for of" are available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)
* Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (startGame)
* 'template literal syntax' is only available in ES6 (use 'esversion: 6').
* And there were two unused variables:
    * restart
    * getInTouch

## Deployment
The site was developed using GitPod with a remote connection to Github:

* Once the all the code was added, the repository was saved using CTL+S.
* The changes were then add to the local git using Gitpod's terminal functions. This included "git add ." and git commit -m "Final commit for deployment".
* The Git was then pushed to Github through the terminal function "git push".

A live website from the repository was then created through Github using the following steps:

1. The project was searched for under the repositories section on Github.
2. After selecting the Can You R P S L S repository, navigate to the settings tab
3. Select the "Pages" option located within a self-contained window left on screen
4. Under "Source", select the Branch as "Master", and in this case, the file as "Root" before selecting save. This then generated the live site.

Credits:

## Credit
- Images
    * Image for the generic Rock, Paper, Scissors, Lizard, Spock found from https://www.pngegg.com/en/png-ycasl
    * Individual images of all the playing pieces found on https://www.pngegg.com/en/png-iiamd

- Content
    * Implementation of form validation in Contact Us used from previous MS Project (Champion Cycles)
    * Use of for loop for Buttons taken from Code Institute's "Rock, Paper, Scissors" example game https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+JSE_PAGPPF+2021_Q2/courseware/30137de05cd847d1a6b6d2c7338c4655/c3bd296fe9d643af86e76e830e1470dd/
    * Understanding of adding linear gradient to buttons acquired from: https://css-tricks.com/css3-gradients/

