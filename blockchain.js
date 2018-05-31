var i = 1;
var i2 = 0;
var blockchain = [];


function setup() {
  createCanvas(400, 400);
	blockchain.push(getGenesisBlock());
	console.log(blockchain);
}

function draw() {
  background(220);
	//console.log(blockchain.length);


	if(i % 300 == 0) {
		i = 0;
		i2++;
		blockchain.push(generateNextBlock("transactions go here"));
		console.log(blockchain[blockchain.length-1]);
	}
	i++;
	text(i,10,20);

	text("Index: " + blockchain[blockchain.length-1].index,10,100);
	text("last hash: " + blockchain[blockchain.length-1].previousHash,10,120);
	text("Timestamp: " + blockchain[blockchain.length-1].timestamp,10,140);
	text("Data: " + blockchain[blockchain.length-1].data,10,160);
	text("Hash: " + blockchain[blockchain.length-1].hash,10,180);

}


function Block(index, previousHash, timestamp, data, hash) {
	this.index = index;
  this.previousHash = previousHash.toString();
  this.timestamp = timestamp;
  this.data = data;
  this.hash = hash.toString();

}

function generateNextBlock(blockData) {

		var previousBlock = getLatestBlock();
    var nextIndex = previousBlock.index + 1;
    var nextTimestamp = round(new Date().getTime() / 1000);
    var nextHash = calculateHash(nextIndex, previousBlock.hash, nextTimestamp, blockData, false);

    return new Block(nextIndex, previousBlock.hash, nextTimestamp, blockData, nextHash);
}

function getLatestBlock() {
		return blockchain[blockchain.length - 1];
}

function getGenesisBlock() {
    return new Block(0, "0", round(new Date().getTime() / 1000), "Genesis block", "0000000000");
}

function calculateHash(input, seed, timestamp, data, asString) {

		var uh = str(input) + str(timestamp) + str(data);
    var i, l, hval = (seed === undefined) ? 0x811c9dc5 : seed;

    for (i = 0, l = uh.length; i < l; i++) {
        hval ^= uh.charCodeAt(i);
        hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }

    if(asString) {
        // Convert to 8 digit hex string
        return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
    }
    return hval >>> 0;
}
