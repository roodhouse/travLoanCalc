// Listen on submit button
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// calc results
function calculateResults(e) {
     // UI Vars

     const amount = document.getElementById('amount');
     const interest = document.getElementById('interest');
     const years = document.getElementById('years');
     const monthlyPayment = document.getElementById('monthly-payment');
     const totalPayment = document.getElementById('total-payment');
     const totalInterest = document.getElementById('total-interest');

     const principal = parseFloat(amount.value);
     const calculatedInterest = parseFloat(interest.value) / 100 / 12;
     const calculatedPayments = parseFloat(years.value) * 12;

     // Compute Monthly Payments
     const x = Math.pow(1 + calculatedInterest, calculatedPayments);
     const monthly = (principal * x * calculatedInterest)/(x-1);

     if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
     } else {

        console.log('Please check your numbers')

     }

    e.preventDefault();
}
