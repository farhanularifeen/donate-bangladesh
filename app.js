// Initial balance
let balance = 50000;
let donationHistory = [];

function handleDonation(cardId, inputId, currentAmountId, donationName) {
    const donationInput = document.getElementById(inputId).value;
    const currentAmountElement = document.getElementById(currentAmountId);
    const currentAmount = parseInt(currentAmountElement.textContent.split(' ')[1]);

    if (isNaN(donationInput) || donationInput <= 0 || donationInput === "" || donationInput > balance) {
        alert("Invalid input or insufficient balance!");
    } else {
        balance -= parseInt(donationInput);
        document.getElementById('balance').textContent = `BDT ${balance}`;

        const updatedAmount = currentAmount + parseInt(donationInput);
        currentAmountElement.textContent = `BDT ${updatedAmount}`;

        // Add transaction to history
        const now = new Date();
        const transactionTime = now.toLocaleString();
        donationHistory.push({
            time: transactionTime,
            amount: donationInput,
            name: donationName,
        });

        alert(`Congratulations! You have donated successfully: ${donationInput} BDT`);
    }
}

document.getElementById('donateNow1').addEventListener('click', function () {
    handleDonation(1, 'donationAmount1', 'currentAmount1', "Flood at Noakhali");
    displayHistory();
});
document.getElementById('donateNow2').addEventListener('click', function () {
    handleDonation(2, 'donationAmount2', 'currentAmount2', "Injured Protestors Crisis");
    displayHistory();
});
document.getElementById('donateNow3').addEventListener('click', function () {
    handleDonation(3, 'donationAmount3', 'currentAmount3', "Cyclone Victims");
    displayHistory();
});

// Display Donation History
function displayHistory() {
    const historyContainer = document.getElementById('historyContainer');
    historyContainer.innerHTML = ''; // Clear existing history
    donationHistory.forEach((transaction) => {
        const historyEntry = document.createElement('div');
        historyEntry.className = 'bg-white p-4 rounded shadow';
        historyEntry.innerHTML = `<strong>${transaction.time}</strong>: Donated BDT ${transaction.amount} for ${transaction.name}`;
        historyContainer.appendChild(historyEntry);
    });
}

document.getElementById('historyButton').addEventListener('click', function () {
    document.getElementById('donationSection').classList.add('hidden');
    document.getElementById('historySection').classList.remove('hidden');
    document.getElementById('blogButton').classList.remove('hidden');
});

document.getElementById('donationButton').addEventListener('click', function () {
    document.getElementById('donationSection').classList.remove('hidden');
    document.getElementById('historySection').classList.add('hidden');
    document.getElementById('blogButton').classList.add('hidden');
});
