// Initial balance
let balance = 50000;

// Function to handle donation
function handleDonation(cardId, inputId, currentAmountId) {
  const donationInput = document.getElementById(inputId).value;
  const currentAmountElement = document.getElementById(currentAmountId);
  const currentAmount = parseInt(currentAmountElement.textContent.split(' ')[1]);

  // Validate the donation amount
  if (isNaN(donationInput) || donationInput <= 0 || donationInput === "" || donationInput > balance) {
    alert("Invalid input or insufficient balance!");
  } else {
    // Deduct from account balance
    balance -= parseInt(donationInput);
    document.getElementById('balance').textContent = `BDT ${balance}`;

    // Update the card's current donation amount
    const updatedAmount = currentAmount + parseInt(donationInput);
    currentAmountElement.textContent = `BDT ${updatedAmount}`;

    // Add a success notification
    alert(`Congratulations! You have donated successfully: ${donationInput} BDT`);
  }
}

// Attach event listeners for each donation button
document.getElementById('donateNow1').addEventListener('click', function() {
  handleDonation(1, 'donationAmount1', 'currentAmount1');
});
document.getElementById('donateNow2').addEventListener('click', function() {
  handleDonation(2, 'donationAmount2', 'currentAmount2');
});
document.getElementById('donateNow3').addEventListener('click', function() {
  handleDonation(3, 'donationAmount3', 'currentAmount3');
});
