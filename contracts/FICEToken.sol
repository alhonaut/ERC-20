// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FICEToken is ERC20 {
    constructor() ERC20("FICEToken", "FCT") {
        _mint(msg.sender, 10000 * (10 ** uint256(decimals())));
    }
}
