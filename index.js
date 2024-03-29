//contract address and abi
const contractAddress = "0x8c59117A723F410644297Ac22b876941dfd77CF8";
const contractABI =[
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            }
        ],
        "name": "TransferBatch",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "TransferSingle",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "value",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "URI",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "createRoom",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "msgSender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "successful",
                "type": "bool"
            }
        ],
        "name": "faucet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "bool",
                        "name": "_activate",
                        "type": "bool"
                    },
                    {
                        "internalType": "string",
                        "name": "_currentPlayer",
                        "type": "string"
                    },
                    {
                        "internalType": "string[]",
                        "name": "_options",
                        "type": "string[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "_finalWinOption",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "address",
                        "name": "_player1address",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_player2address",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_playerCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "_winer",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_player1Bet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_player2Bet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_rewardAmount",
                        "type": "uint256"
                    }
                ],
                "indexed": false,
                "internalType": "struct TickTackToe.GameInfo",
                "name": "gameinfo",
                "type": "tuple"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "joinRoom",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "next",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "nextUesrStr",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "nextUser",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "nextUser",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "resetUI",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "player1Address",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "showFirstPlayer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "result",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "showResult",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "message",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "player1",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "player2",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "startGame",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string[]",
                "name": "options",
                "type": "string[]"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "updateUI",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "TTT1155Token",
        "outputs": [
            {
                "internalType": "contract ERC1155",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "TTTToken",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "accounts",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            }
        ],
        "name": "balanceOfBatch",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "burnFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "a",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "b",
                "type": "string"
            }
        ],
        "name": "compareStrings",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "betAmount",
                "type": "uint256"
            }
        ],
        "name": "createGameRoom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "faucetToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "gameInformation",
        "outputs": [
            {
                "internalType": "bool",
                "name": "_activate",
                "type": "bool"
            },
            {
                "internalType": "string",
                "name": "_currentPlayer",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_player1address",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_player2address",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_playerCount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_winer",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_player1Bet",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_player2Bet",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_rewardAmount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllGameInformation",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "bool",
                        "name": "_activate",
                        "type": "bool"
                    },
                    {
                        "internalType": "string",
                        "name": "_currentPlayer",
                        "type": "string"
                    },
                    {
                        "internalType": "string[]",
                        "name": "_options",
                        "type": "string[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "_finalWinOption",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "address",
                        "name": "_player1address",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_player2address",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_playerCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "_winer",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_player1Bet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_player2Bet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_rewardAmount",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct TickTackToe.GameInfo[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllMoney",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getExcessBalance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "getFinalWinOption",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "getGameInformation",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "bool",
                        "name": "_activate",
                        "type": "bool"
                    },
                    {
                        "internalType": "string",
                        "name": "_currentPlayer",
                        "type": "string"
                    },
                    {
                        "internalType": "string[]",
                        "name": "_options",
                        "type": "string[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "_finalWinOption",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "address",
                        "name": "_player1address",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_player2address",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_playerCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "_winer",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_player1Bet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_player2Bet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_rewardAmount",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct TickTackToe.GameInfo",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "getoption",
        "outputs": [
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "betAmount",
                "type": "uint256"
            }
        ],
        "name": "joinGame",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "minBetAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "restartGame",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeBatchTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "treasury",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "treasuryFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "uri",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "input",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "userInput",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "validateRestartPlayer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const TTTTokenAddress = "0x927E818dDCaB12d025495B228A4ce1dAE82798Ec";
const TTTTokenABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tradeOpen",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "whitelisted",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
// const buyTokenAddress = "0xE18f0d4380BC679Ed352540eD71451eef04d3158";
// const buyTokenABI = [
//     {
//         "inputs": [],
//         "stateMutability": "nonpayable",
//         "type": "constructor"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "amount",
//                 "type": "uint256"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "address",
//                 "name": "buyer",
//                 "type": "address"
//             }
//         ],
//         "name": "topUpSuccessful",
//         "type": "event"
//     },
//     {
//         "inputs": [],
//         "name": "TTTToken",
//         "outputs": [
//             {
//                 "internalType": "contract IERC20",
//                 "name": "",
//                 "type": "address"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "buyTTTToken",
//         "outputs": [],
//         "stateMutability": "payable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "newRate",
//                 "type": "uint256"
//             }
//         ],
//         "name": "changeEXCTRate",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "exchangeRate",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "owner",
//         "outputs": [
//             {
//                 "internalType": "address",
//                 "name": "",
//                 "type": "address"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     }
// ];

// declare call contract element and crate contract object
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const writeGameContract = new ethers.Contract(contractAddress, contractABI, signer);
const readGameContract = new ethers.Contract(contractAddress, contractABI, provider);
const defaultAddress = "0x0000000000000000000000000000000000000000";
const oneEther = 1000000000000000000;
const writeTokenContract = new ethers.Contract(TTTTokenAddress, TTTTokenABI, signer);
const readTokenContract = new ethers.Contract(TTTTokenAddress, TTTTokenABI, provider);
const { ethereum } = window;

// const writebuyTokenContract = new ethers.Contract(buyTokenAddress, buyTokenABI, signer);
// const readbuyTokenContract = new ethers.Contract(buyTokenAddress, buyTokenABI, provider);


let CurrentUserAddress;//store current user address

let gameIndex;  //store game array
let gameLength; //current game array length


//get the game data
async function getGameLength(){
    gameIndex = await readGameContract.getAllGameInformation();
    gameLength = gameIndex.length;
    console.log("length is : " + gameLength)
}
//set create room button listener
document.getElementById("createGame").onclick = () =>{
    let userInputValid = false;
    let betAmount;


    betAmount = prompt("How much token you want to bet?\nAt least 10" );
    if (betAmount !== null && isNaN(betAmount)) {
        // User did not enter a number, display an error message
        alert("Please enter a valid number.");
        
    }
    if (betAmount < 10 && !(isNaN(betAmount))) {
        // User did not enter a number, display an error message
        alert("At least put 10 token.");
    } 

    if(!(isNaN(betAmount)) && betAmount >= 10){
        console.log("should out")
        userInputValid = true;
    }

    if(userInputValid){
        createNewRoom(betAmount);
    }
}

//set listener when new room create and reflash the page    
readGameContract.on("createRoom",async (gameID)=>{
    let id = ethers.utils.formatUnits(gameID, 0)
    // console.log("trigger")
    // console.log(id)
    // console.log(gameLength)
    if(gameLength - 1 < id){
        //console.log("inside")
        gameLength = id;
        setTimeout(function() {
            location.reload();
          }, 5000);
        //console.log(gameLength)
    }
})

//if the room is ready to play. inform the player who in this game and play
readGameContract.on("joinRoom",(gameinfo, gameID)=>{
    console.log(gameinfo)
    //get player address
    let player1 = gameinfo._player1address;
    let player2 = gameinfo._player2address;
    console.log(player1.toLowerCase())
    console.log(player2.toLowerCase())
    //if match then pop up the message to player
    if(player1.toLowerCase() == CurrentUserAddress || player2.toLowerCase() == CurrentUserAddress){
        const goGamepage = confirm(`Your game start. Do you want to join the game ${parseInt(gameID) + 1} now?`);
        if(goGamepage){
            goToGamePage(gameID);
        }
    }
    
})
//call create room function on smart contract
async function createNewRoom(amount){
    const amountInWei = ethers.utils.parseEther(amount.toString());
    
    if(await checkPlayerBalance(amount)){
        //if balance enough
        console.log("condition true")
        writeTokenContract.approve(contractAddress, amountInWei)
        .then((transaction) => {
            console.log("Transaction hash:", transaction.hash);
            return transaction.wait();
        })
        .then((receipt) => {
            console.log("Transaction confirmed. Gas used:", receipt.gasUsed.toString());
            writeGameContract.createGameRoom(amountInWei);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    } else {
        //balance not enough. need to claim the token to play
        console.log("condition false")
        alert("you balance is not enough");
        let userInput = confirm("Do you want to go to claim token?");
        if(userInput){
            claimToken();
        }
    }
}
//call join game function on smart contract
async function joinGame(index, amount){

    const amountInWei = ethers.utils.parseEther(amount.toString());

    if(await checkPlayerBalance(amount)){
        //if balance enough
        console.log("condition true")
        writeTokenContract.approve(contractAddress, amountInWei)
        .then((transaction) => {
            console.log("Transaction hash:", transaction.hash);
            return transaction.wait();
        })
        .then((receipt) => {
            console.log("Transaction confirmed. Gas used:", receipt.gasUsed.toString());
            writeGameContract.joinGame(index, amountInWei);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    } else {
        //balance not enough. need to claim the token to play
        console.log("condition false")
        alert("you balance is not enough");
        let userInput = confirm("Do you want to go to claim token?");
        if(userInput){
            claimToken();
        }
    }
    
}
// set event listener to each block
document.addEventListener("DOMContentLoaded", async function() {
    // Sample content array
    let gameInfoALL = await readGameContract.getAllGameInformation();
    console.log(gameInfoALL);
  
    // Get the block container
    const blockContainer = document.getElementById("blockContainer");
  
    // Generate blocks dynamically
    gameInfoALL.forEach((gameinfo, index) => {
        //set the information to block
        const block = document.createElement("div");
        const gamedtatus = document.createElement("div");
        gamedtatus.classList.add("currentState");
        block.classList.add("block");
        block.classList.add("relative");
        const roomIndex = document.createElement("p");
        const player1address = document.createElement("p");
        const player2address = document.createElement("p");
        const betToken = document.createElement("p");
        const gameStatus = document.createElement("p");

        //set information to block
        roomIndex.textContent = `TTT Room ${parseInt(index) + 1}`; 
        player1address.textContent = "Player 1: " + gameinfo._player1address;
        player2address.textContent = "Player 2: " + gameinfo._player2address;
        if(gameinfo._player2address.toLowerCase() == defaultAddress){
            betToken.textContent = "Need bet " + gameinfo._player1Bet/oneEther + " TTT Tokens to join the game";
        } else if (gameinfo._winer == defaultAddress){
            betToken.textContent = "Game reward is " + gameinfo._rewardAmount*2/oneEther + " TTT Tokens";
        } else {
            if(gameinfo.player1address == gameinfo._winer){
                betToken.textContent = "player 1 win " + gameinfo._rewardAmount*2/oneEther + " TTT Tokens";
            } else {
                betToken.textContent = "player 2 win " + gameinfo._rewardAmount*2/oneEther + " TTT Tokens";
            }
        }
        
        if(gameinfo._player2address == defaultAddress){
            gameStatus.textContent = "Waiting Player 2 join";
            gamedtatus.textContent = "Waiting Player 2 join";
        } else if(gameinfo._winer == defaultAddress) {
            gameStatus.textContent = "Playing Game"
            gamedtatus.textContent = "Playing Game"
        } else {
            if(gameinfo._winer == gameinfo._player1address){
                gameStatus.textContent = `Winer is player 1 ${gameinfo._winer}`
                gamedtatus.textContent = `Winer is player 1`
            } else {
                gameStatus.textContent = `Winer is player 2 ${gameinfo._winer}`
                gamedtatus.textContent = `Winer is player 2`
            }
            
        }
        // Add click event listener to each block
        block.addEventListener("click", () => {
            if(gameinfo._player1address.toLowerCase() == CurrentUserAddress || gameinfo._player2address.toLowerCase() == CurrentUserAddress){
                goToGamePage(index);
            }
            else{
                if(gameinfo._player2address == defaultAddress){
                    //ask user want to join this game
                    const userResponse = confirm(`Do you want to join the game? You need to bet ${gameinfo._player1Bet/oneEther} token`);
                    if (userResponse) {
                        joinGame(index, (gameinfo._player1Bet/oneEther));
                    }
                } else {
                    //ask user want to watch this game
                    const userResponse = confirm(`Go to room ${parseInt(index) + 1} and player are: \n${gameinfo._player1address}\n${gameinfo._player2address}`);
                    if (userResponse) {
                        goToGamePage(index);
                    }
                }
            }            
        });
        //append information to block
        block.appendChild(roomIndex);
        block.appendChild(player1address);
        block.appendChild(player2address);
        block.appendChild(betToken);
        block.appendChild(gameStatus);
        block.appendChild(gamedtatus);
        // Append the block to the container
        blockContainer.appendChild(block);
    });
});


//redirect to game page
function goToGamePage(index){
    window.location.href = `gamePage.html?param1=${index}`;
}


//get the current user's wallet address
async function onInit() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log("current address: "+account);
    CurrentUserAddress = account;

    //  window.ethereum.on('accountsChanged', function (accounts) {
    //     // Time to reload your interface with accounts[0]!
    //     console.log(accounts[0])
    //     CurrentUserAddress = accounts[0];
    //    });
}

const faucetButton = document.getElementById("faucet");
faucetButton.onclick = () =>{
    claimToken();
}

async function claimToken(){
    //claim token
    try {
        await writeGameContract.faucetToken();
    } catch (e) {
        err = e.data.message;
        alert(err);
    }
    
    //display message according the transfer status
    readGameContract.on("faucet",(msgSender, successful)=>{
        if(msgSender.toLowerCase() == CurrentUserAddress){
            if(successful){
                alert("token claim successful")
            } else {
                alert("Something worng. Pls try again")
            }
        }
    })
}


initPage();
function initPage(){
    onInit();
    getGameLength();
    checkNetwork();
}

async function checkPlayerBalance(amount){
    let balance = 0;
    try {
        console.log("address is " + CurrentUserAddress)
        //balance = ethers.utils.parseEther((await readTokenContract.balanceOf(CurrentUserAddress)).toString());
        balance = await readTokenContract.balanceOf(CurrentUserAddress);
        console.log("now got " + balance.toString());

        if(amount > (balance/oneEther) || balance <= 0){
            console.log("condition false")
            return false;
        } else {
            console.log("condition true")
            return true;
        }

    } catch (error) {
        console.log(error)
    } 
}
//check the network 
function checkNetwork(){
    // Check if MetaMask is installed and enabled
    if (typeof ethereum !== 'undefined' && ethereum.isMetaMask) {
        //get current chain id
        ethereum.request({ method: 'eth_chainId' })
        .then(chainId => {
            // Check if the network is the maal testnet or other
            console.log("this is "+chainId)
            if (chainId !== '0x1eb4') { //0x1eb4 is maal testnet chain ID
                // Prompt the user to switch networks
                if (confirm('Please switch to the Maal testnet to continue.')) {
                    SwitchChainToMaal();
                } else {
                    alert("You need to switch to Maal testnet to contunue.")
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        // MetaMask is not installed or not enabled
        alert('Please install MetaMask to use this feature.');
    }
}
//if not maal test net then switch to maal test net
async function SwitchChainToMaal(){
    try {
        //switch the netword to maal testnet network
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x1eb4' }],
        });
        //after change refresh the page
        location.reload();
    } catch (switchError) {
      if (switchError.code === 4902) { // 4902 mean the network not at wallet
        //request to add the chain to wallet here
        if(confirm("Maal testnet Chain hasn't been added to the wallet! Do you want to add it now?")){
            addMaalTestNetwork();
        }
      }
    }
}
//if no in wallet, add network to wallet
async function addMaalTestNetwork() {
    try {
        //add maal testnet network to user wallet
        const result = await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{
            chainId: "0x1eb4",
            rpcUrls: ["https://rpc-bntest.maalscan.io"],
            chainName: "MaalChain Testnet",
            nativeCurrency: {
                name: "MAAL",
                symbol: "MAAL",
                decimals: 18
            },
            blockExplorerUrls: ["https://testnet.maalscan.io/"]
            }]
        });
        alert("Add network successfully")
        location.reload();
    } catch (error){
        alert("Something wrong " + error)
    }
}    

// buyTokenButton.onclick = () => {
//     buyToken();
// }
// async function buyToken(){
//     //get the exchange rate from smart contract
//     let exchangeRate = await readbuyTokenContract.exchangeRate();
//     let userInput = 0;
//     //check the user input. that must be number and greater than 1 

//     userInput = prompt(`1 Maal = ${exchangeRate}  Minimum 1 Maal\nPlease enter your amount you want to buy:`);

//     // Check if the user entered a number
//     if (userInput !== null && isNaN(userInput)) {
//         // User did not enter a number, display an error message
//         alert("Please enter a valid number.");
//     }
//     if (userInput <= 0) {
//         // User did not enter a number, display an error message
//         alert("At least put 1 Maal.");
//     }
//     // Amount of ether to send (in wei)
//     const amountToSend = ethers.utils.parseEther(userInput.toString());

//     writebuyTokenContract.buyTTTToken({ value: amountToSend });
//     readbuyTokenContract.on("topUpSuccessful",(amount, buyer)=>{
//         if(buyer.toLowerCase() == CurrentUserAddress){
//             alert("Buy token successful!\n You get "+ amount + " TTT Token")
//         }
        
//     })
// }
