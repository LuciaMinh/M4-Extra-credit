let again;

// Loop to prompt for valid input
while (true) {
    again = window.prompt('Repeat entries (y/n)', 'y')

    // Convert input to lowercase for case-insensitive comparison
    if (again.toLowerCase() === 'y' || again.toLowerCase() === 'n') {
        break // Exit the loop
    } else {
        console.log("Please enter 'y' or 'n'.")
    }
}
// Proceed based on user input
if (again.toLowerCase() === 'y') {
    console.log('You chose to repeat the entry.')
} else {
    console.log('You chose not to repeat the entry.')
}