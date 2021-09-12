# Can you Rock, Paper, Scissors, Lizard, Spock?

![image](https://user-images.githubusercontent.com/85314939/132981531-941a64af-c445-4330-95f4-0e808d6139c5.png)

The game, *"Can you Rock, Paper, Scissors, Lizard, Spock?"* is an extension based on the classic Rock, Paper, Scissors game with two additional options. The game design provides an opportunity for children and adults of all ages to play, with an element of chance to win each round against a randomized option from the computer. As the game is against the computer, there is a lesser chance of the round being a draw, and a greater chance of having an outright winner each time. 

## Features:
### Existing Features:
- Header
    * The title of the game features dominantly at the top and center of the page, clearly displaying the game with the *restart* button underneath. This option refreshes the page to allow the user to start again.
    ![image](https://user-images.githubusercontent.com/85314939/132981375-6d806b43-4fe6-4916-bcf1-b2ec79b8521a.png)

- The Game Area
    * The game area provides a simplistic outlook on the overall scheme with consistent images of the five possible options in a different way. The user selects one the button options to begin the game.
    
    ![image](https://user-images.githubusercontent.com/85314939/132981394-58e18810-fa29-4ad3-89da-6698ff7ff300.png)

    * The footer consists of the rules and remains consistant throughout the entire game.
    
    ![image](https://user-images.githubusercontent.com/85314939/132981450-9084861e-3154-4850-b17e-f73f6e626b84.png)

- Game Options
    * Once the game has begun, the user is presented with five individual options which represent the elements of the game: Rock, Paper, Scissors, Lizard, Spock". The user selects one of the options, which then displays the corresponding image into the gameboard area. The computer instantly selects a random option and this in turn displays the corresponding image. The JavaScript then determines who the winner is based on the rules, and increments a point to to the winner.

    ![image](https://user-images.githubusercontent.com/85314939/132981399-678c114b-b08b-4fdf-a6d2-fb719a026930.png)

- Additional Features
    * As an additional feature, I would like to add more options for the user and computer to select to expand the game's variation.

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

https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/
https://css-tricks.com/css3-gradients/

