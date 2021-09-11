# Can you Rock, Paper, Scissors, Lizard, Spock?

The game, *"Can you Rock, Paper, Scissors, Lizard, Spock?"* is an extension based on the classic Rock, Paper, Scissors game with two additional options. The game design provides an opportunity for children and adults of all ages to play, with an element of chance to win each round against a randomized option from the computer. As the game is against the computer, there is a lesser chance of the round being a draw, and a greater chance of having an outright winner at the end. 

## Features:
### Existing Features:
- Header
    * The title of the game features dominantly at the top and center of the page, clearly displaying the game. The question mark, creates a personal feel the user as if the game is asking: *"Can you win this game"*
    * The *Start Game* option is designed to allow the user more flexibility with what is displayed. It allows the rules to be visible when first accessing the site, but not once the game has begun.
    * The two options stationed directly underneath the title allows the user to navigate the game. By selecting *restart*, the user will be taken to the beginning of the game, with all scores and move numbers reset.
    ![header](https://user-images.githubusercontent.com/85314939/132958449-cfc2bd95-20ee-4a94-82d8-2f62c8358024.PNG)

- The Game Area
    * The game area provides a simplistic outlook on the overall scheme with consistent images of the five possible options in a different way. This area includes the rules to game and which option would win against which.
    
    ![game-area](https://user-images.githubusercontent.com/85314939/132958463-964cc373-d3d4-4085-862c-edff5e6681d6.PNG)

- Game Options
    * Once the game has begun, the user is presented with five individual options which represent the elements of the game: Rock, Paper, Scissors, Lizard, Spock". The user selects one of the options, which then displays the corresponding image into the gameboard area. The computer instantly selects a random option and this in turn displays the corresponding image. The JavaScript then determines who the winner is based on the rules, and increments a point to to the winner. The one with the most points after 21 moves wins. The use of an odd number ensures that the game cannot be ended on a draw.

    ![game-in-action](https://user-images.githubusercontent.com/85314939/132958568-18d2ac8c-acee-47a7-bfb7-e4faefd534d4.PNG)

- Additional Features
    * As an additional feature, I would like to add more options for the user and computer to select to expand the game's variation.

## Testing

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

