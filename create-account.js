/*
Write a function called ***createAccount*** which creates a bank account given a PIN number and an initial deposit amount. 
The return value should be an object with four methods on it:

- ***checkBalance***: Given the correct PIN, return the current balance. (If the PIN is invalid, return “Invalid PIN.”)
- ***deposit***: Given the correct PIN and a deposit amount, increment the account balance by the amount. 
                 (If the PIN is invalid, return “Invalid PIN.”)
- ***withdraw***: Given the correct PIN and a withdrawal amount, decrement the account balance by the amount. 
                  You also shouldn’t be able to withdraw more than you have. (If the PIN is invalid, return “Invalid PIN.”)
- ***changePin***: Given the old PIN and a new PIN, change the PIN number to the new PIN. (If the old PIN is invalid, return “Invalid PIN.”)
*/

function createAccount(pin, amount = 0) {
    return {
        checkBalance(numPin) {
            if (pin !== numPin) return "Invalid PIN."
            return `Current balance: $${amount}.`;
        },
        deposit(numPin, depAmount) {
            if (pin !== numPin) return "Invalid PIN."
            amount += depAmount;
            return `Succesfully deposited $${depAmount}. Current balance: $${amount}.`;
        },
        withdraw(numPin, wdAmount) {
            if (pin !== numPin) return "Invalid PIN."

            if (wdAmount  > amount) return "Withdrawal amount exceeds account balance. Transaction cancelled."

            amount -= wdAmount;
            return `Succesfully withdrew $${wdAmount}. Current balance: $${amount}.`;
        },
        changePin(numPin, newPin) {
            if (pin !== numPin) return "Invalid PIN."
            pin = newPin;
            return "PIN successfully changed!";
        }
    }
}





let account = createAccount("1234", 100);

console.log(account.checkBalance("oops")); // "Invalid PIN."
console.log(account.deposit("1234", 250)); // "Succesfully deposited $250. Current balance: $350."
console.log(account.withdraw("1234", 300)); // "Succesfully withdrew $300. Current balance: $50."
console.log(account.withdraw("1234", 100)); // "Withdrawal amount exceeds account balance. Transaction cancelled."
console.log(account.changePin("1234", "5678")); // "PIN successfully changed!"