const convertHTML = str => {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str
        .split("")
        .map(entity => htmlEntities[entity] ? htmlEntities[entity] : entity)
        .join("");
}

console.log(convertHTML("Dolce & Gabbana"));