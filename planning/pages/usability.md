Usability
===========

We will go over the functionality of each feature and button in this markdown.
It will be used as a good middle ground between planning and developmet, as well
as provide a good standard when developing tests.

# Run time features
The following are features that begin running on page load

## Save Storage every *x* seconds
- Save all sessions into local storage

## Pull jobs from local storage
1. Check Local Storage for jobs array
2. If no jobs array in local storage load test jobs
3. Set up an initial state timer for each job

## Check for already running Sessions
- If theres a running timer in session storage, Resume the timer
- Otherwise use jobs array jobs

# Individual Job Features
The following are features that will be displayed on each individual job

## Start Button
1. Begin timer
2. Set Start time in interval array
3. Stop time for same interval will be *false*
4. Save session in local storage

### Interaction
- Tap the left side to start the timer
- Tap the timer as a toggle start/stop

## Stop Button
1. Pause Timer
2. Add Stop time interval in replace of *false*
3. Change Start Button to Resume Button
4. Save session in local storage

### Interaction
- Tap the right side to stop the timer
- Tap the timer as a toggle start/stop

## Resume Button
1. Pushes new interval object into the interval Array
2. Sets the start time in the last index of the array
3. Sets the stop time in the last index to be *false*
4. Resumes the timer

### Interaction
- Will take the place as the start button

## Reset Button
1. Completely clear the Session and Session Local Storage
2. Clear and stops the timer
3. Essesntially returns the timer to it's initial state

### Interaction
- Swipe away timer

## Log Button
1. Logs the current interval array into Local Storage
2. Runs the Reset Button functionality

### Interaction
- Tap lock button
- Swipe to log
- Tap and hold

## Remove Job
1. Runs the Reset Button functionality
2. Find the index of the job in the jobs array
3. Remove that index and re-form the array

### Interaction
- Tap x in corner
- *Pinch Motion*, commonly used as zoom out

