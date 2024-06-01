/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFTs you have created
*/

// Create a variable to hold your NFTs

let baseballCardCollection = [];


function mintNFT(playerName, team, position, year, rarity) {
    const newBaseballCard = {
        playerName,
        team,
        position,
        year,
        rarity
    };

    baseballCardCollection.push(newBaseballCard);
    console.log(`Minted: "${playerName}" from ${team}`);
}


function listNFTs() {
    console.log("\nListing all baseball card NFTs in the collection:\n");
    baseballCardCollection.forEach(card => {
        console.log(`Player Name: ${card.playerName}`);
        console.log(`Team: ${card.team}`);
        console.log(`Position: ${card.position}`);
        console.log(`Year: ${card.year}`);
        console.log(`Rarity: ${card.rarity}`);
        console.log("\n");
    });
}

function getTotalSupply() {
    return baseballCardCollection.length;
}



mintNFT("Babe Ruth", "New York Yankees", "Outfielder", 1927, "Legendary");
mintNFT("Hank Aaron", "Atlanta Braves", "Right Fielder", 1974, "Rare");
mintNFT("Willie Mays", "San Francisco Giants", "Center Fielder", 1965, "Epic");
mintNFT("Jackie Robinson", "Brooklyn Dodgers", "Second Baseman", 1947, "Legendary");
mintNFT("Mickey Mantle", "New York Yankees", "Center Fielder", 1956, "Epic");

listNFTs();

const totalNFTs = getTotalSupply();
console.log(`Total Supply: ${totalNFTs}`);
