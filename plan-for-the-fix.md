____

# Knowing whats wrong in the JS
- I need to identify causes of error in the JavaScript
____

# Bug fixes

### Bug 1: Allow only one puzzle piece in one drop zone at a time.

In the "drop" function, we need to check if the drop zone already has a puzzle piece. 
If the drop zone already has a puzzle piece, we need to move the dragged piece back to its original position in the drag zone. 
If the drop zone is empty, we need to append the dragged piece to the drop zone.

### Bug 2: Remove pieces from drop zones on reset or choosing a new puzzle.

choose id puzzle-pieces
In this, we need to select all the drop zones and remove their children. 
We also need to select all the drag zones and append their children back to the drag zone.