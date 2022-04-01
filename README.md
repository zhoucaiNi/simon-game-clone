# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Zhoucai Ni**

Time spent: **4.5** hours spent in total

Link to project: https://glitch.com/edit/#!/marmalade-shadowed-lan

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] User can decide how long the pattern is
- [x] Dark mode

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
### Random Pattern, Lives and Styling
![Random Pattern, Lives and Styling](http://g.recordit.co/mY58xRPbvE.gif)

### Dark Mode
![Dark Mode](http://g.recordit.co/HOz0JPgmDx.gif)


## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   
   Random number
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  
   For the switch 
   https://www.w3schools.com/howto/howto_css_switch.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   The biggest problem that I encountered while creating this submission was creating the dark mode feature. I had a lot of trouble trying to stylize the switch toggle input and eventually ended up using the internet for help. After styling the switch toggle, I had to link it with javascript to conditionally format the css. It was fairly simple but I ran into a problem where the border color for the active button was still white instead of black while in dark mode. At first I was trying to use javascript to change the classes of all the active buttons but it felt very tedious. I thought to myself that there had to be a better way to implement conditional css. After doing some quick research, I found that you can use variables in css. This made it so much easier as I was able to simply change the variables instead of classes for every single button. I overcame this challenge through numerous trials and errors. However, I love the feeling of rejuvenation and satisfaction from solving these coding challenges. The art of problem solving is one of the biggest reasons I decided to major in Computer Science. Using what I learned from the pre-work and dark mode, it was easy to implement the rest of the extra features.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

 
   After completing the submission, it made me realize the possibilities of web development. There are countless tools that people have created since the start of the internet and the possibilities are endless. If there’s an idea, you can create it through web development. I want to gain more experience in web development by materializing my ideas into reality. While I was amazed at the possibilities of web development, I also have some questions. What are some of the limitations of web development? What does the daily lives of a web developer look like? Do web developers enjoy doing their jobs and what they do outside of their jobs? How do I get better at web development? I also want to experience web development in a team setting and working with other people. I’m currently taking a full stack development course this term and am very excited to learn more about web development!

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   If I had a few more hours, I would add more color schemes and sound variation to the project. Giving the users the options to choose their own colors and sounds would be a good feature also.Another idea would be to stylize the page to make the game look like the actual Simon game. For example, making the game area round just like the physical electronic game. I also want to make the website be able to track and remember high scores along with a challenge mode where it will add additional buttons as the game goes on. There could be global and daily leaderboards to bring a little competition into the page which could increase traffic on the website. I could also generate a unique daily pattern to which the users can come back to everyday for a new challenge. Additional features to track some statistics and data of the user would also be great as everyone loves seeing their data visualized. 


## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.youtube.com/watch?v=BT_GOQnWfPM)

## License

    Copyright [Zhoucai Ni]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
