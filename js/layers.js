addLayer("c", {
    name: "cursors", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "c", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#efefef",
    image: "cursor.png",
    nodeStyle: {"background-position": "center", "background-repeat": "no-repeat"},
    requires: new Decimal(15), // Can be a function that takes requirement increases into account
    resource: "cursors", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "custom", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    getResetGain() {return 1},
    getNextAt() {return Math.floor(15*Math.pow(1.15, player[this.layer].points))},
    prestigeButtonText() {return "Spend " + this.getNextAt() + " cookies to gain 1 Cursor"},
    canReset() {if (this.getNextAt() < this.baseAmount()) {return true} else {return false}},
    resetsNothing() {return true},
    onPrestige() {player.points = player.points.sub(new Decimal(this.getNextAt()))},
    upgrades: {
        rows: 7,
        cols: 2,
        11: {
            title: "<img src=\"cc_icons/cc_icon_0000.png\"></img><br />Reinforced index finger",
            description: "The mouse and cursors are <b>twice</b> as efficient.<br /><em>\"prod prod\"</em>",
            cost: 100,
            unlocked() {if (player[this.layer].points.gte(1)) {return true} else {return false}},
            currencyInternalName: "points",
            currencyDisplayName: "cookies"
        }
    },
    cps() {
        a = 0.1;
        a = a*player[this.layer].points
        if (hasUpgrade("c", 11)) {a = a*2};
        return a;
    }
})