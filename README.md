# defi-stacking-app


## Truffle console to check transfer
Get tether deployed smart contract and get name of smart contract
```
tether = await Tether.deployed()
tether.name() 
```

Get accounts using web3 utility methods
```
accounts = await web3.eth.getAccounts() 
```

Get balance of account 
```
balance = await tether.balanceOf(accounts[1])
convertBalance = web3.utils.fromWei(balance)
```