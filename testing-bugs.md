## Testing

For testing purposes, if you set your players name to 'cheat' with no capitals, you'll be given 8000 Coins to start the game with.

### Checking if the counters are marked correctly:

I have been removing the masters cover by adding class 'd-none' and making sure that the pegs returned from the computer have been correct. 

Try clicking the 'check' button with nothing inputted, making sure a black peg will be return if there are any holes.

Repeat this for each of the coulored counters. 

After making thiat all the pges have been returned correctly refresh and start fresh.

This time, Try clicking the 'check' with all the same coloured counters that mastermind has generated just in a different order.

It should return four white pegs.

Play the game mulitple times making should no incorrect patterns happen.


### Buying new counters:

Try clicking on 'fruit' in the accessory shop, after the item will show in the inventory section. The value of the counter that was purchased should be removed from the value of the player's coins. Also, the padlock in the inventory should disappear indicating that you have purchased this item.

Try clicking on 'swirl' in the accessory shop, after the item will show in the inventory section. The value of the counter that was purchased should be removed from the value of the player's coins. Also, the padlock in the inventory should disappear indicating that you have purchased this item.

Try clicking on 'gems' in the accessory shop, after the item will show in the inventory section. The value of the counter that was purchased should be removed from the value of the player's coins. Also, the padlock in the inventory should disappear indicating that you have purchased this item.

### Selecting different counters from your inventory:

Try clicking on the different counters before the game has started. The counters should match the ones being generated at the top of the board.

Try clicking on the ones that still have pad locks on, nothing should happen.

### Checking the themes can be brought and added to the inventory:

Try clicking on the fruit theme in the store, the theme should now show in the themes inventory, removing the pad lock and the value of that theme should be deducted from the players coins in the top right.

Try clicking on the pink theme in the store, the theme should now show in the themes inventory, removing the pad lock and the value of that theme should be deducted from the players coins.

Try clicking on the ice theme in the store, the theme should now show in the themes inventory, removing the pad lock and the value of that theme should be deducted from the players coins.

After they have all been brought, when pressed again these should not deduct the value from the players coins anymore.

### Making sure that the themes change correctly when selected in the inventory:

Try clicking on the fruit theme in the inventory, the background image, icons colour, background on counters section and the players name should change colour.

Try clicking on the pink theme in the inventory, the background image, icons colour, background on counters section and the players name should change colour.

Try clicking on the ice theme in the inventory, the background image, icons colour, background on counters section and the players name should change colour.

Try clicking on the classic theme in the inventory, the background image, icons colour, background on counters section and the players name should change colour.

Repeat this in different orders, making sure that they still change correectly.

The code is built using a mobile first appoach, to see more of the content the user just scrolls down the page. For the desktop view the board is on the left and the other content such as the accessory shop and the players stats are on the right. There are a few drop down section to keep the game looking simple, not too overwhelm the user. There is not loads of content with this project so the layout was a easy problem to solve.

## Bugs

#### Creating the function to mark the players counters

I created a function, which will check the user's coloured counters when the button 'check' calls for this function. The function I had created marks the user's counters, by checking the status of its own variable and then checking the variable of the players in that same location. If this is true the function will return a black peg, if this isn't then the 'if statement' will start to check the remaining three users counters, returning a white peg if it finds the variable is set the same to its own. The 'if statement' will repeat this process for each of the master counters. This I found worked great, until:
[Appendix 1](https://github.com/Fordalex/master-mind-project/blob/master/testing/automatic-marking-problem.png)

The function returned 3 black pegs and 1 white, I knew this couldn't be right. The computer had generated two of the same colour, the user only inputted one of that colour. The 'if statement' didn't take into consideration, that counter had already been marked. I now know that the approach I first took wasn't going to work.

I went back to the drawing board, knowing that there will need to be a boolean variable to tell the 'if statement' not to check that variable if a peg had already been returned for that counter. This worked okay for a while until some further testing showed that if a white peg had already been returned. Then it would ignore that counter, as instructed. If on the second, third or fourth counter the users variable was the same as the masters variable it should return a black peg, but if a white peg had already been returned for that counter it would be ignored. Marking the row incorrectly.

Back to the drawing board. With the knowledge of the last two attempted functions, I now know I will need a boolean variable to tell the 'if statement' when a counter has already been marked but to check for black pegs first, as these should take priority over white pegs.

#### Removing counters problem

I have noticed another bug, when the user removes a counter the value of the hole doesn't change,its only get overridden by the next counter that is selected. This is fine if the user refills the row with counters or holes, but if the user just presses 'check' then it won't reconise that the user wants them spaces that where removed to be holes.

### Resolutions

#### Creating the function to mark the players counters

Currently, when the function is now called the 'if statement' will check the first master counter with the user's first counter and return a black peg if these are the same. The 'if statement' will repeat this process for each counter. After knowing which counters have been markered, we can then run another 'if statement' to check for a variable that is the same as the masters variable but just in the wrong location returning a white peg if it finds one. So far I have found no errors with this approach.

#### Removing counters problems

Easy fix, i just made sure that the user cannot press 'check' until the row is complete.

## Current Bugs

* If the computer wins the stats aren't updated with anything

* If the player doesn't enter a name, then nothing is shown where i would like 'Player' to be shown

* 

