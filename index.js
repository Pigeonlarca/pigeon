// index.js

const { encryptMessage, decryptMessage } = require('crypto-utility-xid');

// Function to convert currency amount from one currency to another
function convertCurrency(amount, fromCurrency, toCurrency) {
    // Here you can implement actual conversion logic
    return `${amount} ${fromCurrency} converted to ${toCurrency}`;
}

// Function to encrypt currency transaction details
function encryptTransactionDetails(transaction, key) {
    return encryptMessage(JSON.stringify(transaction), key);
}

// Function to decrypt currency transaction details
function decryptTransactionDetails(encryptedTransaction, key) {
    const decryptedMessage = decryptMessage(encryptedTransaction, key);
    return JSON.parse(decryptedMessage);
}

module.exports = {
    convertCurrency,
    encryptTransactionDetails,
    decryptTransactionDetails
};
