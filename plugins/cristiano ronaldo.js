const axios = require('axios')
 let handler = async(m, { conn }) => {
let les = await axios.get('https://meme-api.herokuapp.com/gimme/Cristianoronaldo')
            conn.sendFile(m.chat, `${les.data.url}`, '', `${les.data.title}
🐈 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈`, m)
  }
handler.help = ['CristianoRonaldo']
handler.tags = ['images']
handler.command = /^(cristianoronaldo|CristianoRonaldo|CRISTIANORONALDO)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
