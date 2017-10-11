var Bank = function() {
  this.accounts = []
}

Bank.prototype = {
  addAccount: function(account) {
    this.accounts.push(account)
  },

  totalValue: function() {
    var total = this.accounts.reduce(function(total, account) {
      return total + account.value
    }, 0)

    return total
  },

  accountByName: function (name) {
    var account = this.accounts.find(function(account) {
      return account.name === name
    })

    return account
  },

  largestAccount: function () {
    var largestAccount = this.accounts.reduce(function(largest, current){
      if (current.value > largest.value) return current
      else return largest
    })

    return largestAccount
  },

  averageValue: function () {
    var totalValue = this.totalValue()
    return totalValue / this.accounts.length
  },

  businessAccounts: function () {
    var businessAccounts = this.accounts.filter(function(account) {
      return account.type === "business"
    })

    return businessAccounts
  }
}

module.exports = Bank
