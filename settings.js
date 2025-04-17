const fs = require('fs')
const chalk = require('chalk')

global.sessionID = process.env.SESSIONID || "KAVI-X-SESSION-ID~~~GxB2GYRT#adD6RdYP-0lRaYXxd7m2NU9neSSgB6CffHwNpQg9mno"
global.botname = process.env.BOTNAME || "KAVI-X"
global.ownernumber = process.env.OWNERNUMBER || "94702128378"
global.ownername = process.env.OWNERNAME || "Cyber Kavi"
global.websitex = process.env.WEBSITEX || ""
global.wagc = process.env.WAGC || ""
global.botscript = process.env.BOTSCRIPT || ""
global.packname = process.env.PACKNAME || "KAVI-X"
global.author = process.env.AUTHOR || "Cyber Kavi"
global.creator = process.env.CREATOR || ""
global.botprefix = process.env.BOTPREFIX || "."
global.restart = process.env.RESTART || true
global.mongoDB = process.env.MONGODB_URI || "mongodb+srv://kavishka:KAVImihi321@whatsapp-bot.ssmxc2a.mongodb.net/testing?retryWrites=true&w=majority&appName=whatsapp-bot"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
