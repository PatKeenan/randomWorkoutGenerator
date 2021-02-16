const workouts = {
    _muscleGroups: {
        shoulders : [],
        arms : [],
        back : [],
        chest : [],
        abs : [],
        legs : [],
        cardio : [],
    },
    // getters 
    get shoulders(){
        return this._muscleGroups.shoulders;
    },
    get arms(){
        return this._muscleGroups.arms;
    },
    get back(){
        return this._muscleGroups.back;
    },
    get chest(){
        return this._muscleGroups.chest;
    },
    get abs(){
        return this._muscleGroups.abs;
    },
    get legs(){
        return this._muscleGroups.legs;
    },
     get cardio(){
        return this._muscleGroups.cardio;
    },
    get allMuscles(){
        return this.muscleGroups
    },
    get allWorkouts(){
        if (!this._muscleGroups){
            return this._muscleGroups.forEach(workout => {
            console.log(workout)
        });
        }else{
            console.log("No Workouts Added Yet")
        }
        
    },
    
    //Setters
    set shoulders(data){
        this._muscleGroups.shoulders = data;
    },
    set arms(data){
         this._muscleGroups.arms = data;
    },
    set back(data){
         this._muscleGroups.back = data;
    },
    set chest(data){
         this._muscleGroups.chest = data;
    },
    set legs(data){
         this._muscleGroups.legs = data;
    },
    set abs(data){
         this._muscleGroups.abs = data;
    },
    set cardio(data){
         this._muscleGroups.cardio = data;
    },

    //Methods

    //Add a Workout to a Muscle Group
    addWorkout(muscleGroup, workOutName, workOutSets, workOutReps, workOutRestBetweenSets){
        const workout = {
            name : workOutName,
            sets: workOutSets,
            reps: workOutReps,
            rest: workOutRestBetweenSets
        }
        return this._muscleGroups[muscleGroup].push(workout)
    },

    //Generate Random Workouts Per Group First

    generateRadnomWorkoutForGroup(data){
        const workout = this._muscleGroups[data]
        const randomIndex = Math.floor(Math.random() * workout.length);
        return workout[randomIndex]
    },
    generateDailySchedule(day){
        const arms = this.generateRadnomWorkoutForGroup("arms");
        const legs = this.generateRadnomWorkoutForGroup("legs");
        const shoulder = this.generateRadnomWorkoutForGroup("shoulders");
        const back= this.generateRadnomWorkoutForGroup("back");
        const abs = this.generateRadnomWorkoutForGroup("abs");
        const chest = this.generateRadnomWorkoutForGroup("chest");
        const cardio = this.generateRadnomWorkoutForGroup("cardio");
        return `
        -------------------------------------------------------------------
        -------------------------------------------------------------------


        ${day}: 
        Arms: ${arms.name} for ${arms.sets} sets of ${arms.reps}.
        Legs: ${legs.name} for ${legs.sets} sets of ${legs.reps}.
        Shoulders: ${shoulder.name} for ${shoulder.sets} sets of ${shoulder.reps}.
        abs: ${abs.name} for ${abs.sets} sets of ${abs.reps}.
        Back: ${back.name} for ${back.sets} sets of ${back.reps}.
        Chest: ${chest.name} for ${chest.sets} sets of ${chest.reps}.
        -------------------------------------------------------------------
        Cardio: ${cardio.name} for ${cardio.sets} set(s) of ${cardio.reps}.


        -------------------------------------------------------------------
        -------------------------------------------------------------------
        `
    },
    generateWeeklySchedule(){
        const days = ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday']
        days.forEach(day => {
            console.log(this.generateDailySchedule(day));
        })
    },

    //helper Method
    help(){
        console.log()
        console.log('To add a workout, use the workouts.addWorkout("Muscle Group, "Workout Name", "Sets", "Reps", "Rest Between Sets")')
        console.log()
        console.log("To see all workouts in a muscle group, use the workouts.(muscleGorup) function. You have the choice between, arms, shoulders, legs, chest, back, abs, cardio")
        console.log()
        console.log()
        console.log()

    }

}   
workouts.addWorkout('shoulders', 'Standing Press', '3', '5', '5 minutes rest')
workouts.addWorkout('shoulders', 'OverHead Press', '3', '5, 7, 9', '5 minutes rest')
workouts.addWorkout('shoulders', 'Flat arm Raise', '3', '5', '5 minutes rest')

workouts.addWorkout('abs', 'situps', '3', '12', '5 minutes rest')
workouts.addWorkout('abs', 'Planks', '2', '2 minutes', '5 minutes rest')
workouts.addWorkout('abs', 'Bicelycle', '3', '2 minutes', '5 minutes rest')

workouts.addWorkout('chest', 'pushups', '3', '10', '5 minutes rest')
workouts.addWorkout('chest', 'butterflies', '3', '10', '5 minutes rest')
workouts.addWorkout('chest', 'V-Push', '3', '10', '5 minutes rest')

workouts.addWorkout('back', 'pulls', '3', '10', '5 minutes rest')
workouts.addWorkout('back', 'bar raises', '3', '10', '5 minutes rest')

workouts.addWorkout('legs', 'lunges', '3', '10', '5 minutes rest')
workouts.addWorkout('legs', 'squats', '3', '10', '5 minutes rest')
workouts.addWorkout('legs', 'one-leg lunges', '3', '10', '5 minutes rest')

workouts.addWorkout('arms', 'barbell raise', '3', '10', '5 minutes rest')
workouts.addWorkout('arms', 'Hammer curl', '3', '10', '5 minutes rest')
workouts.addWorkout('arms', 'Rear Flys', '3', '10', '5 minutes rest')

workouts.addWorkout('cardio', 'Run', '1', '10 minute', '5 minutes rest')
workouts.addWorkout('cardio', 'Bike', '1', '10 minute', '5 minutes rest')
workouts.addWorkout('cardio', 'Swim', '1', '10 minute', '5 minutes rest')



// Weekly Schedule
workouts.generateWeeklySchedule();
// Daily Schedule 
/* console.log(workouts.generateDailySchedule()) */
