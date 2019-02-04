```bash
$ react-scripts test --verbose
 PASS  src/components/__tests__/Display.test.js
  The Display component
    √ renders the display (25ms)
    The header
      √ renders the player (49ms)
      √ renders the inning (24ms)
    The scorecard
      √ renders the scorecard for team1 (19ms)
      √ renders the score for team1 3rd inning (14ms)
      √ renders the scorecard for team2 (16ms)
      √ renders the score for team1 8th inning (19ms)
    The current batter
      √ shows the number of balls (24ms)
      √ shows the number of strikes (19ms)
      √ shows the number of outs (20ms)

 PASS  src/components/__tests__/Dashboard.test.js
  The Dashboard component
    √ renders the dashboard (69ms)
    The ball button
      √ increases ball count (77ms)
      √ resets to 0 after ball 3 (48ms)
    The Strikes button
      √ increases the strikes count (29ms)
      √ causes an "Out" after 3 strikes (54ms)
    The foul button
      √ causes a strike for the first two fouls if no strikes (47ms)
      √ does not add strikes when there are already 2 (70ms)
    The Hit button
      √ resets balls/strikes/fouls to 0 (71ms)
    The Run button
      √ adds to the score for team1 inning1 (35ms)
      √ changes the player (41ms)
      √ resets balls/strikes/fouls (54ms)

 PASS  src/App.test.js
  √ renders without crashing (22ms)

Test Suites: 3 passed, 3 total
Tests:       22 passed, 22 total
Snapshots:   0 total
Time:        5.931s
Ran all test suites.
```
