pragma solidity ^0.5.0;

contract Tether {
    string public name = 'Tether';
    string public symbol = 'USDT';
    uint256 public totalSupply = 100000000000000000000000; // 1 million tokens
    uint public decimals = 18;
}