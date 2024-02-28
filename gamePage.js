// contract address and abi
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

const defaultAddress = "0x0000000000000000000000000000000000000000";
const oneEther = 1000000000000000000;

// declare call contract element and crate contract object
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const writeGameContract = new ethers.Contract(contractAddress, contractABI, signer);
const readGameContract = new ethers.Contract(contractAddress, contractABI, provider);
const writeTokenContract = new ethers.Contract(TTTTokenAddress, TTTTokenABI, signer);
const readTokenContract = new ethers.Contract(TTTTokenAddress, TTTTokenABI, provider);
let CurrentUserAddress; //store current user address

const cells = document.querySelectorAll(".cell"); //
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const joinBtn = document.getElementById("joinGame");

//get the parameter from index
const params = new URLSearchParams(window.location.search); 
const gameId = params.get('param1');




console.log(`this is game ${parseInt(gameId)+1}`);

//call initial page function 
initializePage();

//set event listener for join game button
document.getElementById("joinGame").addEventListener('click',() => {
    joinGame();
})

//call the smart contract to join the game
async function joinGame(){
    const gameInfo = await readGameContract.getGameInformation(gameId);
    console.log(gameInfo._player1Bet);
    const userResponse = confirm(`Do you want to join the game? You need to bet ${gameInfo._player1Bet/oneEther} token`);
    if (userResponse) {
        // //call contract
        joinGameContract(gameId, (gameInfo._player1Bet/oneEther));
    }
}

//initialize Page
async function initializePage(){
    restartBtn.disabled = true;
    //get the current wallet address
    onInit();
    //get game information from smart contract and store into object
    const gameInformation = await readGameContract.getGameInformation(gameId);
    let gameInfo = {
        activate: gameInformation._activate,
        currentPlayer: gameInformation._currentPlayer,
        finalWinOption: gameInformation._finalWinOption,
        options: gameInformation._options,
        player1address: gameInformation._player1address,
        player2address: gameInformation._player2address,
        playerCount: ethers.utils.formatUnits(gameInformation._playerCount, 0),
        winer: gameInformation._winer,
    };
    //get current player address
    let player1address = gameInfo.player1address;
    let player2address = gameInfo.player2address;
    // get current player
    let player = gameInfo.currentPlayer;

    //display current player turn
    statusText.textContent = `${player}'s turn`;

    console.log(gameInformation);
    console.log(gameInfo);
    //set event listener to button
    restartBtn.addEventListener("click", restartGame);
    // read the current options array data at smart contract
    let contractOptions = gameInfo.options;
    //display array content on UI
    for(let i = 0; i < contractOptions.length; i++){
        const targetCell = document.querySelector(`.cell[cellIndex="${i}"]`);
        targetCell.textContent = contractOptions[i];
    }
    //allow restart the game when the game is not playing
    if(gameInfo.activate){
        //if game activate depen on got player two or not to display the join button
        if(gameInfo.player2address != defaultAddress){
            joinBtn.disabled = true;
        }
        //disable restart button
        restartBtn.disabled = true;
        document.getElementById("tips").textContent = "Game is Starting";
        if(player == "X"){
            alert("Player 1 Round!");
        }else{
            alert("Player 2 Round!");
        }
    } else {
        //allow player join if player 2 are not exist
        if(gameInfo.player2address == defaultAddress){
            joinBtn.disabled = false;
            document.getElementById("tips").textContent = "Waiting for player 2 join";
        }else if(gameInfo.winer == defaultAddress){
            //if player are the player1 or player2 in the game and is draw, then allow restart
            //if gameInfo.winer == defaultAddress meaning is draw 
            //check the player is player 1 or player 2
            if(CurrentUserAddress == player1address.toLowerCase() || CurrentUserAddress == player2address.toLowerCase()){
                restartBtn.disabled = false;
                document.getElementById("tips").textContent = "You can restart the game and play again";
            } else {
                restartBtn.disabled = true;
                document.getElementById("tips").textContent = "Wait player restart the game and play again";
            }
        } else {
            restartBtn.disabled = true;
            joinBtn.disabled = true;
            document.getElementById("tips").textContent = "Game Over";
            if(gameInfo.winer == gameInfo.player1address){
                statusText.textContent = `Player 1 wins!`;
            } else {
                statusText.textContent = `Player 2 wins!`;
            }
            
        }
        
    }
    //display user address
    if(player1address == "0x0000000000000000000000000000000000000000"){
        document.getElementById("player1address").textContent = "Waiting";
    }else{
        document.getElementById("player1address").textContent = "X Player1: " + player1address;
    }

    if(player2address == "0x0000000000000000000000000000000000000000"){
        document.getElementById("player2address").textContent = "Waiting";
    }else{
        document.getElementById("player2address").textContent = "O Player2: " + player2address;
    }

    //if current user are the player in this match, allow the user to click the grid
    if(player == "X"){
        if(CurrentUserAddress == player1address.toLowerCase()){
            cells.forEach(cell => cell.addEventListener("click", cellClicked));
        }
    }else{
        if(CurrentUserAddress == player2address.toLowerCase()){
            cells.forEach(cell => cell.addEventListener("click", cellClicked));
        }
    }
    // check game finish and display the win result
    const finalWinOption = gameInfo.finalWinOption;
    if(finalWinOption.length = 3){
        for(let i = 0; i < 9;i++){
            if(i == finalWinOption[0] || i == finalWinOption[1] || i == finalWinOption[2]){
                const targetCell = document.querySelector(`.cell[cellIndex="${i}"]`);
                targetCell.style.backgroundColor = 'lightgreen';
            }
        }
    }
    
    
    //set smart contract listener
    //when game start will run this function
    readGameContract.on("startGame",async (message,player1address,player2address,gameID)=>{
        if(checkGame(gameID)){
            //according to the uesr wallet address to display the corresponding content
            if(player1address.toLowerCase() == CurrentUserAddress){
                alert(message + "\nYour Round!");
                cells.forEach(cell => cell.addEventListener("click", cellClicked));
                disableBtnJoin();
            }else if(player2address.toLowerCase() == CurrentUserAddress){
                alert(message + "\nWaiting player 1");
                disableBtnJoin();
            }else{
                alert("Game already start" + "\nWaiting player 1 and 2 finish this game");
                disableBtnJoin();
            }
            let gameinfo = await readGameContract.getGameInformation(gameID);
            console.log(gameinfo)
            statusText.textContent = `${gameinfo._currentPlayer}'s turn`;

            document.getElementById("player1address").textContent = "X Player1: " + player1address;
            document.getElementById("player2address").textContent = "O Player2: " + player2address;
        }
    });

    //when new option store in to smart contract
    readGameContract.on("showFirstPlayer",(player1Address, gameID)=>{
        if(checkGame(gameID)){
            document.getElementById("player1address").textContent = "X Player1: " + player1Address;
        }
    })
    //update the user interface
    readGameContract.on("updateUI",(options, gameID)=>{
        if(checkGame(gameID)){
            for(let i = 0; i < options.length; i++){
                const targetCell = document.querySelector(`.cell[cellIndex="${i}"]`);
                targetCell.textContent = options[i];
            }
        }
    })
    // display the result and according to result to enable button
    readGameContract.on("showResult",async (result, gameID)=>{
        console.log("restart log start")
        console.log("game result: "+result)
        console.log("game id: " + gameID)
        console.log("index is: " + gameId)
        if(checkGame(gameID)){
            console.log("in side the condition check")
            const gameInformation = await readGameContract.getGameInformation(gameId); 
            //display the message content 
            if(result == "Draw"){
                console.log("in draw")
                statusText.textContent = `Draw!`;
                restartBtn.disabled = false;
                document.getElementById("tips").textContent = "You can restart the game and play again";
                alert("This game draw and you can click the restart button to play again");
            }else{
                console.log("got winner")
                statusText.textContent = `Player ${result} wins!`;
                document.getElementById("tips").textContent = "Game Over";
                if(gameInformation._winer.toLowerCase() == CurrentUserAddress){
                    alert(`you win ${gameInformation._rewardAmount/oneEther} token`)
                }    
            }
            //get the win result if got, and display
            const finalWinOption = gameInformation._finalWinOption;
            console.log(finalWinOption)
            if(finalWinOption.length = 3){
                for(let i = 0; i < 9;i++){
                    if(i == finalWinOption[0] || i == finalWinOption[1] || i == finalWinOption[2]){
                        const targetCell = document.querySelector(`.cell[cellIndex="${i}"]`);
                        targetCell.style.backgroundColor = 'lightgreen';
                    }
                }
            }

            //remove cell listener to avoid player continue to play
            cells.forEach(cell => cell.removeEventListener("click", cellClicked));
        }
        console.log("restart log end")
    })

    //change html content when user change
    readGameContract.on("nextUesrStr",(next, gameID)=>{
        if(checkGame(gameID)){
            statusText.textContent = `${next}'s turn`;
        }
    })

    //inform the user and add listener to grid when it's their turn
    //remove the listener when it is not their turn
    readGameContract.on("nextUser",(nextUser, gameID)=>{
        if(checkGame(gameID)){
            disableBtnJoin();
            if(nextUser.toLowerCase() == CurrentUserAddress){
                cells.forEach(cell => cell.addEventListener("click", cellClicked));
                alert("Your Round!");
            }else{
                cells.forEach(cell => cell.removeEventListener("click", cellClicked));
            }
        }
    })
    // reset all of the element
    readGameContract.on("resetUI", async (gameID)=>{
        if(checkGame(gameID)){
            statusText.textContent = "X's turn";
            cells.forEach(cell => cell.textContent = "");
            restartBtn.disabled = true;
            joinBtn.disabled = true;
            for(let i = 0; i < 9; i++){
                const targetCell = document.querySelector(`.cell[cellIndex="${i}"]`);
                targetCell.style.backgroundColor = 'white';
            }
            let gameinfo = await readGameContract.getGameInformation(gameID);
            if(CurrentUserAddress == gameinfo._player1address.toLowerCase()){
                cells.forEach(cell => cell.addEventListener("click", cellClicked));
                alert("Your Round!");
            }
        }
    })
}
// disable the button and set the message 
function disableBtnJoin(){
    restartBtn.disabled = true;
    joinBtn.disabled = true;
    document.getElementById("tips").textContent = "Game is starting";
}
//get the current user's wallet address
async function onInit() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(account);
    CurrentUserAddress = account;

    //  window.ethereum.on('accountsChanged', function (accounts) {
    //     // Time to reload your interface with accounts[0]!
    //     console.log(accounts[0])
    //     CurrentUserAddress = accounts[0];
    //    });
}
//get user input and send to smart contract
async function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    console.log(cellIndex);
    try{
        await writeGameContract.userInput(cellIndex,gameId);
    } catch(e){
        //catch the error message and show it
        err = e.data.message;
        alert(err);
    }
}
// call the smart contract to reset game 
function restartGame(){
    try{
        writeGameContract.validateRestartPlayer(gameId);
    } catch(e){
        alert(e.data.message);
    }
    
}
//check game and receive data is same match 
function checkGame(index){
    if(index == gameId){
        return true;
    } else{
        return false;
    }
}
//redirect to home page
function goToHomePage() {
    window.location.href = "index.html";
}

//set on click listener
const faucetButton = document.getElementById("faucet");
faucetButton.onclick = async() =>{
    claimToken();
}


//call join game function on smart contract
async function joinGameContract(index, amount){

    const amountInWei = ethers.utils.parseEther(amount.toString());

    if(await checkPlayerBalance(amount)){
        //if balance enough
        //set approve amount of the contract
        writeTokenContract.approve(contractAddress, amountInWei)
        .then((transaction) => {
            console.log("Transaction hash:", transaction.hash);
            return transaction.wait();
        })
        .then((receipt) => {
            console.log("Transaction confirmed. Gas used:", receipt.gasUsed.toString());
            //call join function
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
//check player token balance
async function checkPlayerBalance(amount){
    let balance = 0;
    try {
        console.log("address is " + CurrentUserAddress)
        //balance = ethers.utils.parseEther((await readTokenContract.balanceOf(CurrentUserAddress)).toString());
        balance = await readTokenContract.balanceOf(CurrentUserAddress);
        console.log("now got " + balance.toString());
        //player input amount must > their balance and balance must more than 0
        if(amount > (balance/oneEther) || balance <= 0){
            console.log("condition false")
            return false;
        } else {
            console.log("condition true")
            return true;
        }

    } catch (error) {
        //display error message
        console.log(error)
    } 
}
// let player get free token
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
