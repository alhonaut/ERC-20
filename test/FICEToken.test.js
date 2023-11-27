const { expect } = require("chai");

describe("Token contract", function () {
    let hardhatToken, owner, test_address1, ownerBalance, amount;
    beforeEach(async () => {
        [owner, test_address1] = await ethers.getSigners();
        hardhatToken = await ethers.deployContract("FICEToken");
        amount = 1000;
    })

    it("Deployment should assign the total supply of tokens to the owner", async () => {
        ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });

    it("Should make transactions between accounts", async () => {
        const transfer = await hardhatToken.transfer(test_address1.address, amount);
        expect(transfer).to.changeTokenBalances(hardhatToken, [owner, test_address1], [-amount, amount]);
    });

    it("Should emit Transfer event", async () => {
        await expect(hardhatToken.transfer(test_address1.address, amount)).to
            .emit(hardhatToken, "Transfer")
            .withArgs(owner.address, test_address1.address, amount);
    });

    it("Should revert error when address don't have enough money", async () => {
        expect(await hardhatToken.transfer(test_address1.address, 10001)).to.be.revertedWith("Not enough funds!");
    });
});