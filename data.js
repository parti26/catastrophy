




let toExport;

try {
    toExport = [
        {name: "countPositives", content: countPositives, type: "function"},
        {name: "removeChar", content: removeChar, type: "function"},
        {name: "youngestCat", content: youngestCat, type: "function"},
        {name: "createId", content: createId, type: "function"},
        {name: "foodTime", content: foodTime, type: "function"},
        {name: "searchCat", content: searchCat, type: "function"},
        {name: "removeCats", content: removeCats, type: "function"},
        {name: "similarCatNames", content: similarCatNames, type: "function"},
        {name: "catNames", content: catNames, type: "array"}
    ]
} catch (error) {
    toExport = {error: error.message}
}

export {toExport};
