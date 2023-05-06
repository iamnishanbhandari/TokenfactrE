// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "./BusinessToken.sol";

///@notice this contract handles token (generation,minting,charging(percentage fee scheme): later(tier structured fee scheme)

contract TokenGenerator {
    uint256 dummy;
    //platform will be the contract Owner responsible for only defining distribution and charge strucrure
    address public Owner;
    uint256 public Fee;

    struct BusinessToken {
        string symbol;
        string imageURL;
        address tokenAddress;
    }

    //holds addresses of business ower(accounts) that generated tokens
    address[] public tokenHolders;
    //to track generator's(account's) token information
    mapping(address => BusinessToken) public trackToken;

    event tokenPurchase(
        string tokenName,
        address buyer,
        uint256 amount,
        uint256 time
    );
    event tokenCreated(
        address businessOwner,
        uint256 initialSupply,
        uint256 time
    );

    constructor(uint256 _Fee) {
        Fee = _Fee;
        Owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == Owner, "only Owner is allowed");
        _;
    }

    function CreateToken(
        string memory _name,
        string memory _symbol,
        uint256 _initialSupply,
        string memory imgURL
    ) public payable returns (address) {
        bool paymentSuccess;
        uint256 price = priceCalculator(_initialSupply);
        require(msg.value >= price, "insufficient balance");
        paymentSuccess = true;

        require(paymentSuccess, "unsucessful payment");
        require(
            trackToken[msg.sender].tokenAddress == address(0),
            "token has already been assigned to this address"
        );

        BusinessTokenLogic BT = new BusinessTokenLogic(
            _name,
            _symbol,
            _initialSupply,
            msg.sender,
            address(this)
        );
        BusinessToken memory tokenData = BusinessToken({
            symbol: _symbol,
            imageURL: imgURL,
            tokenAddress: address(BT)
        });

        trackToken[msg.sender] = tokenData;
        tokenHolders.push(msg.sender);
        emit tokenCreated(msg.sender, _initialSupply, block.timestamp);
        return address(BT);
    }

    /*
     * @param amount : Business Token in quantity
     * @param _isST:   true represents ST payment
     *                    false represents native payment
     * @notice send value(0) for this function's execution regarding st payment
     */

    function purchaseToken(uint256 amount) external payable {
        require(msg.sender != address(0), "caler can't be zero address");
        require(
            trackToken[msg.sender].tokenAddress != address(0),
            "no tokens generated previously"
        );

        uint256 price = priceCalculator(amount);
        require(msg.value >= price, "insufficient balance");

        BusinessTokenLogic BT = BusinessTokenLogic(
            trackToken[msg.sender].tokenAddress
        );

        //mint BT tokens to the caller

        BT.mintToken(msg.sender, amount);
        emit tokenPurchase(
            trackToken[msg.sender].symbol,
            msg.sender,
            amount,
            block.timestamp
        );
    }

    //-------------------------------------------------------------------------------------------------------------------------------------

    function priceCalculator(uint256 amount)
        public
        view
        returns (uint256 chargeAmount)
    {
        chargeAmount = (amount * Fee) / 100;

        return (chargeAmount);
    }

    // function updateFees() public onlyOwner {}
    // function updateSystemTokenAddress() public onlyOwner {}

    // function setNewOwner() public onlyOwner {}
}
