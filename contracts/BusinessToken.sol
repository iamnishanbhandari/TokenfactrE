// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract BusinessTokenLogic is ERC20 {
    //address of the contract that generated this contract
    address public creator;
    //business owner
    address public contractOwner;
    uint orderCount ; 

   


    mapping(address => bool) public referred;

    //mapping to store marketer's referral history
    mapping(address => address[]) public referralHistory;

    uint256 public maxTokensPerReferral = 10;

    
    event Referral(
        address indexed referrer,
        address indexed referredUser,
        uint256 amount
    );

    struct Order{
        address customer; 
        uint amount ;
        uint orderCode;
    }
    mapping(address => Order[]) public OrderList ;

    mapping(address => uint256) public loyaltyScores;
    mapping(address => uint256) public purchaseAmounts;

    event Purchase(address indexed customer, uint256 amount);
    event Orders(address indexed customer, uint256 amount);
    event claimedReward(
        address indexed customer,
        uint loyaltyAmount,
        uint ReferralAmount,
        uint time
    );

    // event tokenDistributed(uint franchiseCount,uint totalSupply,uint time);

    constructor(
        string memory name,
        string memory symbol,
        uint _initialSupply,
        address businessOwner,
        address _creator
    ) ERC20(name, symbol) {
        creator = _creator;
        contractOwner = businessOwner;
        _mint(address(this), _initialSupply);
    }

    modifier onlyBusinessOwner() {
        require(msg.sender == contractOwner, "only business owner is allowed");
        _;
    }




    function mintToken(address to, uint amount) public {
        require(msg.sender == creator, "only creator is allowed to mint");
        _mint(to, amount);
    }



    function makePurchase(uint256 _amount) public payable {
        require(msg.value >= uint(_amount ), "less amount sent");
        purchaseAmounts[msg.sender] += _amount;
        // transfer(msg.sender, _amount); // transfer function has bugs 
        _mint(msg.sender, _amount);
        _burn(address(this), _amount);
        emit Purchase(msg.sender, _amount);
    }

    function makeOrder(uint256 _amount) public payable {
        require(balanceOf(msg.sender) >= (_amount), "less amount sent");
        loyaltyScores[msg.sender] = purchaseAmounts[msg.sender] / 20; // divide by 20 is just a scale down

        _mint(address(this), _amount);
        _burn(msg.sender, _amount);
        orderCount++ ; 
        OrderList[msg.sender].push(Order(msg.sender , _amount , orderCount));
        emit Orders(msg.sender, _amount);
    }



    function refer(address _user) public {
        require(!referred[_user], "User already referred");
        referred[_user] = true;
        referralHistory[msg.sender].push(_user);
        emit Referral(msg.sender, _user, maxTokensPerReferral);
    }

    //for future
    //     function tokenDistribution(address[] memory franchises,uint[] memory amount) external onlyBusinessOwner {
    // require(franchises.length == amount.length,"mismatch franschises and amount count");

    // uint suppliedAmount = 0;

    //   for (uint256 i = 0; i < franchises.length; i++) {
    //             require(franchises[i] != address(0), "Payee address cannot be 0x0");
    //             require(amount[i] > 0, "amount should be greater than 0");

    //             transfer(franchises[i],amount[i]);
    //             suppliedAmount += amount[i];

    //         }
    // emit tokenDistributed(franchises.length,suppliedAmount,block.timestamp)

    //     }

    function calculateYourReward() public view returns (uint, uint) {
        uint referralReward = 0;
        uint loyaltyReward = 0;

        //calculate referral reward
        for (uint i = 0; i < referralHistory[msg.sender].length; i++) {
            address referredUser = referralHistory[msg.sender][i];

            if (purchaseAmounts[referredUser] > 0) {
                uint reward = (purchaseAmounts[referredUser] * 2) / 100;

                if (reward > maxTokensPerReferral)
                    reward = maxTokensPerReferral;

                referralReward += reward;
            }
        }
        //calculate loyaltyReward
        uint loyaltyScore = loyaltyScores[msg.sender];
        if (loyaltyScore > 0) {
            loyaltyReward = (loyaltyScore * 1) / 100; // 1% of the loyalty score
        }

        return (referralReward, loyaltyReward);
    }

    function claimYourRewards() external {
        require(msg.sender != address(0));
        (uint referReward, uint loyaltyReward) = calculateYourReward();

        //reset marketer's referral history
        referralHistory[msg.sender] = new address[](0);
//weired error using transfer function 
        // (bool sent, ) = payable(msg.sender).call{value: loyaltyReward}("");
        // require(
        //     sent && transfer(msg.sender, referReward),
        //     "error in sending rewards"
        // );
        uint totalReward = loyaltyReward + referReward ; 

        _mint(msg.sender, totalReward );
        _burn(address(this), totalReward);
        emit claimedReward(
            msg.sender,
            loyaltyReward,
            referReward,
            block.timestamp
        );
    }

    function withDrawDesposits() external onlyBusinessOwner {
        require(address(this).balance > 0, "insufficient balance");
        bool sent = payable(contractOwner).send(address(this).balance);
        require(sent, " withdraw failed");
    }
}