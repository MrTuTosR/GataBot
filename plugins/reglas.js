let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*╭┅〘 ⚠️ 𝗢𝗯𝗲𝗱𝗲𝗰𝗲 𝗹𝗮𝘀 𝗿𝗲𝗴𝗹𝗮𝘀 ⚠️ 〙*
➽❌ 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐥𝐥𝐚𝐦𝐚𝐫 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐒𝐩𝐚𝐦 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐍𝐨 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐑𝐞𝐬𝐩𝐞𝐭𝐚 𝐥𝐨𝐬 𝐭𝐞𝐫𝐦𝐢𝐧𝐨𝐬 𝐲 𝐜𝐨𝐧𝐝𝐢𝐜𝐢𝐨𝐧𝐞𝐬
*╰═┅ৡৢ͜͡✦═╡ 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 ╞═┅ৡৢ͜͡✦═╯*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🐈 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈', 'status@broadcast')
}
handler.command = /^(reglas|normas)$/i

module.exports = handler
