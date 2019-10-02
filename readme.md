# Master Mind Project

This is an old family game I used to play. Mastermind is a game that requires a player to use logic, guesses and reasoning skills to determine the sequence of colored pegs that the computer has secretly generated and the player will have eleven attempts to guess correctly or the computer will win! 

## Link

Can you beat the computer? Find out: [Mastermind](https://fordalex.github.io/master-mind-project/)

## UX
Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

As a user type, I want to perform an action, so that I can achieve a goal.
This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features

Choosing Colours - The user is able to select the colours of the pegs and put them in order on the virtual board to allow the user to guess the computers coloured pegs.

### Features Left to Implement

Computers coloured pegs to be generated.

## Testing

Selecting Colours
Click on four different colors on the right of the board:
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

### Bugs (Solved)

### Bugs (Un-Solved)

Currently, as the computer is marking a row it uses the first location of the master peg and its colour represented as a number to check the user's four coloured pegs to see if the colour is the same as the colour directly above it or if the colour is in that row. If the colour is the same as what the user had inputted and in the right location it will return a black peg and if the colour isn't in the right location but is the same colour as one in that row it will return a white peg. I have found a problem with this logic, if the computer has generated two pegs of the same colour and the user has selected one of said colour then it will return one black and one white. 


