var layoutInfo = {
    startTab: "none",
	showTree: true,

    treeLayout: [
        ["cookie"],
        ["blank"],
        ["c", "blank"],
        ["blank", "blank", "blank", "blank"],
        ["blank", "blank", "blank", "blank"],
        ["blank", "blank", "blank", "blank"],
        ["blank", "blank", "blank", "blank"]
    ]

    
}


// A "ghost" layer which offsets other layers in the tree
addNode("blank", {
    layerShown: "ghost",
}, 
)

addNode("cookie", {
    nodeStyle: {"height": "150px", "width": "150px", "background-position": "center", "background-repeat": "no-repeat", "border-radius": "75px"},
    getCookies() {
        a = new Decimal(1);
        if (hasUpgrade("c", 11)) {a = a.mul(2)};
        return a;
    },
    onClick() {
        player.points = player.points.add(this.getCookies())
    },
    canClick() {return true},
    image: "big_cookie.png",
    color: "#7b4c2a",
    tooltip() {
        if (this.getCookies().eq(1)) {return "Click to gain " + this.getCookies() + " cookie"} else {return "Click to gain " + this.getCookies() + " cookies"}
    }
})


addLayer("tree-tab", {
    tabFormat: [["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]]
})