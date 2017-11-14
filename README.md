# Full Stack Hello World Voting Ethereum Dapp Tutorial

1. [Full Stack Hello World Voting Ethereum Dapp Tutorial — Part 1](https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2)

2. [Full Stack Hello World Voting Ethereum Dapp Tutorial — Part 2](https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-2-30b3d335aa1f)

Important note to part2: I've used `Parity` due to `Ropsten` network problems,
so I was able to connect to `Kovan` and it works fine.

To run Parity with IPC enabled, execute:

```bash
nice -n 50 parity --chain kovan --mode passive --rpcapi "eth,net,web3,personal,parity"
```

Second note: if `Parity` is running without `--geth` option (my case),
`unlockAccount` will unlock it only for one request, and time option should be
omitted.

```js
web3.personal.unlockAccount('0x95a94979d86d9c32d1d2ab5ace2dcc8d1b446fa1', 'verystrongpassword')
```

Just accept every transaction manyally on `Signer` tab in `Parity` console :)

`Parity` with `--geth` option would accept time, but it must be encoded into hex
string, so instead of `15000` you must supply `'0x3A98'`.

```js
web3.personal.unlockAccount('0x95a94979d86d9c32d1d2ab5ace2dcc8d1b446fa1', 'verystrongpassword', '0x3A98')
```
