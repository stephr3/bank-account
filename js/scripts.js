//business logic

var balance = 0;

function BankAccount (name, initialdeposit, balance, deposit, withdrawal) {
  this.userName = name;
  this.initialdeposit = initialdeposit;
  this.userBalance = balance;
  this.userDeposit = deposit;
  this.userWithdrawal = withdrawal;
}

//set object Prototypes

BankAccount.prototype.addDeposit = function () {
  balance += this.userDeposit;
}

BankAccount.prototype.subtractWithdrawal = function () {
  balance -= this.userWithdrawal;
}

// user Logic
$(function(){
  $("form#register").submit(function(event){
    event.preventDefault();

    var userName = $(".username").val();
    var initialDeposit = parseInt($(".initialDeposit").val());
    balance = initialDeposit;

    var userInfo = new BankAccount(userName, initialDeposit, balance);

    $("#balance").text("$" + balance.toFixed(2));


      $("form#updateBalance").submit(function(event){
        event.preventDefault();
debugger;
        var userDeposit = parseInt($(".deposit").val());
        var userWithdrawal = parseInt($(".withdrawal").val());

        userInfo.userDeposit = userDeposit;

        userInfo.userWithdrawal = userWithdrawal;

        userInfo.addDeposit();
        userInfo.subtractWithdrawal();

        $("#balance").text("$" + balance.toFixed(2));

      });
  });
});
