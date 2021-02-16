# Random Workout Generator

This is a node.js project that will generate a weekly or daily workout routine at random. It uses data entered in by the user for each muscle group, then randomly selects one workout from each group to create a full body exercise.

## Running the program
Once you have cd into the correct folder, simply run:
```
npm run start
```
---
## Generating a Schedule
The program has two options
- Generate a weekly schedule
- Generate a daily schedule

The two options can be called like so,
```javascript
// Weekly Schedule

workouts.generateWeeklySchedule()

// Daily Schedule 

console.log(workouts.generateDailySchedule())
```
---
## Adding a Workout
Workouts schould be added to each muscle group individually. The function to add the workout is, 
```js
workouts.addWorkout('muscle group', 'workout', 'sets', 'reps', 'amount of rest')
```
**Options for muscle group argument**
- arms
- legs
- shoulders
- back
- chest
- cardio
- abs
---
## Example Output

```
//Sample.. Monday and Sunday are Rest Days

        -------------------------------------------------------------------
        -------------------------------------------------------------------


        Monday: 
        Arms: Rear Flys for 3 sets of 10.
        Legs: squats for 3 sets of 10.
        Shoulders: Flat arm Raise for 3 sets of 5.
        abs: Bicelycle for 3 sets of 2 minutes.
        Back: bar raises for 3 sets of 10.
        Chest: V-Push for 3 sets of 10.
        -------------------------------------------------------------------
        Cardio: Swim for 1 set(s) of 10 minute.


        -------------------------------------------------------------------
        -------------------------------------------------------------------
        

        -------------------------------------------------------------------
        -------------------------------------------------------------------


        Tuesday: 
        Arms: Rear Flys for 3 sets of 10.
        Legs: lunges for 3 sets of 10.
        Shoulders: Standing Press for 3 sets of 5.
        abs: situps for 3 sets of 12.
        Back: pulls for 3 sets of 10.
        Chest: butterflies for 3 sets of 10.
        -------------------------------------------------------------------
        Cardio: Run for 1 set(s) of 10 minute.


        -------------------------------------------------------------------
        -------------------------------------------------------------------
        

        -------------------------------------------------------------------
        -------------------------------------------------------------------


        Thursday: 
        Arms: Hammer curl for 3 sets of 10.
        Legs: lunges for 3 sets of 10.
        Shoulders: OverHead Press for 3 sets of 5, 7, 9.
        abs: Planks for 2 sets of 2 minutes.
        Back: pulls for 3 sets of 10.
        Chest: V-Push for 3 sets of 10.
        -------------------------------------------------------------------
        Cardio: Bike for 1 set(s) of 10 minute.


        -------------------------------------------------------------------
        -------------------------------------------------------------------
        

        -------------------------------------------------------------------
        -------------------------------------------------------------------


        Friday: 
        Arms: barbell raise for 3 sets of 10.
        Legs: squats for 3 sets of 10.
        Shoulders: OverHead Press for 3 sets of 5, 7, 9.
        abs: Planks for 2 sets of 2 minutes.
        Back: pulls for 3 sets of 10.
        Chest: butterflies for 3 sets of 10.
        -------------------------------------------------------------------
        Cardio: Run for 1 set(s) of 10 minute.


        -------------------------------------------------------------------
        -------------------------------------------------------------------
        

        -------------------------------------------------------------------
        -------------------------------------------------------------------


        Saturday: 
        Arms: Rear Flys for 3 sets of 10.
        Legs: one-leg lunges for 3 sets of 10.
        Shoulders: Flat arm Raise for 3 sets of 5.
        abs: Bicelycle for 3 sets of 2 minutes.
        Back: bar raises for 3 sets of 10.
        Chest: V-Push for 3 sets of 10.
        -------------------------------------------------------------------
        Cardio: Run for 1 set(s) of 10 minute.


        -------------------------------------------------------------------
        -------------------------------------------------------------------
```
---

## In the Future


I plan to revisit this project and improve on certain functionalities such as,
- Validating Data types being passed to the functions
- Checking if data already exists
- Output the schedule to a text file with check-boxes for marking when finished
- Adding a calories burned feature
- Allowing the user to choose their own rest days
- Creating a web interface with User specific data


If you would like to add to this project, please feel free to create a pull request. Thanks!