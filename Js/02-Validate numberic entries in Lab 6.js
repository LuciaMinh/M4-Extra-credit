let investment, rate, years;

// Validate investment amount
while (true) {
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'))
    if (!isNaN(investment) && investment > 0) {
        break // Valid input, exit the loop
    } else {
        console.log('Please enter a valid numeric investment amount greater than 0.')
    }
}

// Validate interest rate
while (true) {
    rate = parseFloat(prompt('Enter interest rate as xx.x (between 0 and 6)'))
    if (!isNaN(rate) && rate >= 0 && rate <= 6) {
        break // Valid input, exit the loop
    } else {
        console.log('Please enter a valid numeric interest rate between 0 and 6.')
    }
}

// Validate number of years
while (true) {
    years = parseInt(prompt('Enter the number of years you want to invest for (between 1 and 30)'))
    if (!isNaN(years) && years >= 1 && years <= 30) {
        break; // Valid input, exit the loop
    } else {
        console.log('Please enter a valid number of years between 1 and 30.')
    }
}

// Display the validated inputs
console.log(`Investment: $${investment}`)
console.log(`Interest Rate: ${rate}%`)
console.log(`Years: ${years}`)