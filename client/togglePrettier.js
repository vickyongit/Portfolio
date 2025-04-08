const fs = require("fs");

const configFile = ".prettierrc";
fs.readFile(configFile, "utf8", (err, data) => {
    if (err) return console.error("Error reading Prettier config:", err);

    let config = JSON.parse(data);

    // Toggle tab width (2 → 4) to shift alignment
    config.tabWidth = config.tabWidth === 2 ? 4 : 2;

    fs.writeFile(configFile, JSON.stringify(config, null, 2), err => {
        if (err) return console.error("Error writing Prettier config:", err);
        console.log("Prettier alignment toggled!");
    });
});
