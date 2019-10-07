# Master Mind Project

Mastermind is a vintage family game from my childhood. It is a game that requires a player to use logic, speculation and reasoning skills to determine the sequence of colored pegs. The computer has secretly generated a sequence leaving players having 11 attempts to guess correctly, or the computer wins!

## Link

Can you beat the computer? Find out: [Mastermind](https://fordalex.github.io/master-mind-project/)

## UX
Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

As a user type, I want to perform an action, so that I can achieve a goal.
This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features

Choosing Colours - The user is able to select the colours of the pegs and put them in order on the virtual board to allow the user to guess the computers coloured pegs, and remove them if a mistake is made.

After a while the game doesn't seem to have a reason to keep playing, you can choose between two themes if you get bored. But the user doesn't get anything for doing better than the last round, I am implementing a feature where the player will receive coins. The faster you solve the masters counters and the few guesses it takes you, the more coins you will get. The coins will be used to buy different counters, if you lose the computer will take some coins back off you!

### Features Left to Implement

At the end of the game, if the user wins I would like counters to be generated on the board in a moving pattern and a happy sound to be played, to give positive feed back to the user. If the player loses, all the pegs to turn red and be static, with a bad sound being played.

## Testing

Checking if the counters are marked correctly:
Try clicking the 'check' button with nothing inputted, making sure a black peg will be return if there are any holes.
Try clicking 'Add red counter' four times and press check. making sure the correct pegs are returned.
Try clicking 'Add green counter' four times and press check. making sure the correct pegs are returned.
Try clicking 'Add yellow counter' four times and press check. making sure the correct pegs are returned.
Try clicking 'Add blue counter' four times and press check. making sure the correct pegs are returned.
Try clicking 'Add orange counter' four times and press check. making sure the correct pegs are returned.
Try clicking 'Add white counter' four times and press check. making sure the correct pegs are returned.


On desktop you will be able to see all of the content as its not a very big document. On mobile its broken down into three section you can scroll down for further information.

### Bug

#### Creating the function to mark the players counters

I created a function, which will check the user's coloured counters when the button 'check' calls for this function. The function I had created marks the user's counters, by checking the status of its own variable and then checking the variable of the players in that same location. If this is true the function will return a black peg, if this isn't then the 'if statement' will start to check the remaining three users counters, returning a white peg if it finds the variable is set the same to its own. The 'if statement' will repeat this process for each of the master counters. This I found worked great, until:
[Appendix 1](https://github.com/Fordalex/master-mind-project/blob/master/testing/automatic-marking-problem.png)

The function returned 3 black pegs and 1 white, I knew this couldn't be right. The computer had generated two of the same colour, the user only inputted one of that colour. The 'if statement' didn't take into consideration, that counter had already been marked. I now know that the approach I first took wasn't going to work.

I went back to the drawing board, knowing that there will need to be a boolean variable to tell the 'if statement' not to check that variable if a peg had already been returned for that counter. This worked okay for a while until some further testing showed that if a white peg had already been returned. Then it would ignore that counter, as instructed. If on the second, third or fourth counter the users variable was the same as the masters variable it should return a black peg, but if a white peg had already been returned for that counter it would be ignored. Marking the row incorrectly.

Back to the drawing board. With the knowledge of the last two attempted functions, I now know I will need a boolean variable to tell the 'if statement' when a counter has already been marked but to check for black pegs first, as these should take priority over white pegs.

#### Removing counters problem

I have noticed another bug, when the user removes a counter the value of the hole doesn't change,its only get overridden by the next counter that is selected. This is fine if the user refills the row with counters or holes, but if the user just presses 'check' then it won't reconise that the user wants them spaces that where removed to be holes.

### Resolution

#### Creating the function to mark the players counters

Currently, when the function is now called the 'if statement' will check the first master counter with the user's first counter and return a black peg if these are the same. The 'if statement' will repeat this process for each counter. After knowing which counters have been markered, we can then run another 'if statement' to check for a variable that is the same as the masters variable but just in the wrong location returning a white peg if it finds one. So far I have found no errors with this approach.

#### Removing counters problem

## Credits

### Media

The photos used in this site were taken from:

* [Pexels](https://www.pexels.com/)

Audio was taken from:

* [Free Sounds](https://freesound.org/)


### Acknowledgements

I need some help with some of the git commands:

* [stack overflow](https://stackoverflow.com/questions/10510462/force-git-push-to-overwrite-remote-files)

Adding a modal using Jquery:

* [Bootstrap modal methods and events](https://www.youtube.com/watch?v=1yrTszHY-mQ)

All audio taken from:

* [Adding Audio](https://www.youtube.com/watch?v=p4OHVJxd2FI)


