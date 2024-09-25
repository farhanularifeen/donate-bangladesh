// Initial balance and history
let balance = 50000;
let donationHistory = [];

function handleDonation(cardId, inputId, currentAmountId) {
    const donationInput = document.getElementById(inputId).value;
    const currentAmountElement = document.getElementById(currentAmountId);
    const currentAmount = parseInt(currentAmountElement.textContent.split(' ')[1]);

    if (isNaN(donationInput) || donationInput <= 0 || donationInput === "" || donationInput > balance) {
        showModal("Invalid input or insufficient balance!");
    } else {
        balance -= parseInt(donationInput);
        document.getElementById('balance').textContent = `BDT ${balance}`;

        const updatedAmount = currentAmount + parseInt(donationInput);
        currentAmountElement.textContent = `BDT ${updatedAmount}`;

        // Add to history
        const donationName = currentAmountElement.closest('.flex-1').querySelector('h2').textContent;
        donationHistory.push({ date: new Date().toLocaleString(), amount: donationInput, name: donationName });
        updateHistory();

        showModal(`Congratulations! You have donated successfully: ${donationInput} BDT`);
    }
}

// Function to update history
function updateHistory() {
    const historyContainer = document.getElementById('historyContainer');
    historyContainer.innerHTML = "";

    donationHistory.forEach(transaction => {
        const transactionElement = document.createElement('div');
        transactionElement.className = "border p-4 rounded bg-gray-50";
        transactionElement.textContent = `${transaction.date} - Donated BDT ${transaction.amount} for ${transaction.name}`;
        historyContainer.appendChild(transactionElement);
    });
}

// Show static modal
function showModal(message) {
    document.getElementById('modalMessage').textContent = message;
    document.getElementById('successModal').classList.remove('hidden');
}

// Close modal
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('successModal').classList.add('hidden');
});

const donationButton = document.getElementById('donationButton');
const historyButton = document.getElementById('historyButton');

donationButton.addEventListener('click', function() {
    donationButton.classList.add('bg-blue-600');
    donationButton.classList.remove('bg-blue-500');
    historyButton.classList.remove('bg-gray-400');
    historyButton.classList.add('bg-gray-100');
    document.getElementById('historySection').classList.add('hidden');
    document.getElementById('donationSection').classList.remove('hidden');
});

historyButton.addEventListener('click', function() {
    historyButton.classList.add('bg-blue-600');
    historyButton.classList.remove('bg-gray-100');
    donationButton.classList.remove('bg-blue-600');
    donationButton.classList.add('bg-blue-500');
    document.getElementById('donationSection').classList.add('hidden');
    document.getElementById('historySection').classList.remove('hidden');
});

document.getElementById('donateNow1').addEventListener('click', () => handleDonation(1, 'donationAmount1', 'currentAmount1'));
document.getElementById('donateNow2').addEventListener('click', () => handleDonation(2, 'donationAmount2', 'currentAmount2'));
document.getElementById('donateNow3').addEventListener('click', () => handleDonation(3, 'donationAmount3', 'currentAmount3'));

document.getElementById('blogButton').addEventListener('click', function() {
    window.location.href = 'blog.html';
});
