let handler = async (m, { conn, command, text, usedPrefix }) => {
let fetch = require('node-fetch')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = 'https://i.imgur.com/BfsbCOR.jpg'
let menu =`
โญโโใ ๐โก๏ธ๐โก๏ธ๐โก๏ธ๐ ใโโโฎ
โโ ๐๐๐ฉ๐๐ฝ๐ค๐ฉ | ๐๐๐ฉ๐ ๐ฟ๐๐ค๐จ
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โโ๏ธ *ยก๐ola! ${username}* โ๏ธ
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โ๐ฐ *Creadora/Editora: Gata Dios* 
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฐโโใ ๐โก๏ธ๐โก๏ธ๐โก๏ธ๐ ใโโโฏ
โโโโโโโโโโโโโโโโโโโโ
โ *INFORMACIรN|MENUS*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ โ๏ธ _${usedPrefix}donar_
โฃ โ โ๏ธ _${usedPrefix}creditos_
โฃ โ โ๏ธ _${usedPrefix}infobot_
โฃ โ โ๏ธ _${usedPrefix}grupos_
โฃ โ โ๏ธ _${usedPrefix}reglas_
โฃ โ โ๏ธ _${usedPrefix}menuaudios_
โฃ โ โ๏ธ _${usedPrefix}menu2_
โฃ โ โ๏ธ _${usedPrefix}estado_
โฃ โ โ๏ธ _ยฟQuรฉ es un Bot?_
โฃ โ โ๏ธ _Codigos para audios_
โฃ โ โ๏ธ _Tรฉrminos y condiciones_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *OBTENER A GATABOT*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐ _${usedPrefix}instalarbot_
โฃ โ ๐ _${usedPrefix}procesobot_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *REPORTA FALLOS DE COMANDOS*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โ *Reporta cualquier comando que falle*   
โ *para poder solucionarlo*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐ฎ _${usedPrefix}bug *tal comando con fallas*_
โฃ โ ๐ฎ _${usedPrefix}report *tal comando con fallas*_
โฃ โ ๐ฎ _${usedPrefix}reporte *tal comando con fallas*_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *NรMERO DEl PROPIETARIO/A*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐ _${usedPrefix}owner_
โฃ โ ๐ _${usedPrefix}contacto_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *UNE UN BOT A TU GRUPO*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐ค _${usedPrefix}join *enlace del grupo*_
โฃ โ ๐ค _${usedPrefix}unete *enlace del grupo*_ 
โฃ โ ๐ค _${usedPrefix}bots *ver bots*_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *TOPS*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐๏ธ _${usedPrefix}top10gays | topgay_
โฃ โ ๐๏ธ _${usedPrefix}toplind@s | toplind@_
โฃ โ ๐๏ธ _${usedPrefix}topput@s | toppt_
โฃ โ ๐๏ธ _${usedPrefix}toppajer@s | toppajeros_
โฃ โ ๐๏ธ _${usedPrefix}topotakus | toptakus_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *JUEGOS*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐งฉ _${usedPrefix}math | mates | matemรกticas *modo*_
โฃ โ ๐พ _${usedPrefix}ttt | tictactoe *nombre del la sala*_
โฃ โ ๐งฉ _${usedPrefix}delttt *nombre del la sala*_
โฃ โ ๐พ _${usedPrefix}gay2 *@tag*_
โฃ โ ๐พ _${usedPrefix}gay2 *yo*_
โฃ โ ๐งฉ _${usedPrefix}gay *@tag / nombre*_
โฃ โ ๐พ _${usedPrefix}lesbi *@tag / nombre*_
โฃ โ ๐งฉ _${usedPrefix}pajero *@tag / nombre*_
โฃ โ ๐พ _${usedPrefix}pajera *@tag / nombre*_
โฃ โ ๐งฉ _${usedPrefix}puta *@tag / nombre*_
โฃ โ ๐พ _${usedPrefix}puto *@tag / nombre*_
โฃ โ ๐งฉ _${usedPrefix}rata *@tag / nombre*_
โฃ โ ๐พ _${usedPrefix}manco *@tag / nombre*_
โฃ โ ๐งฉ _${usedPrefix}manca *@tag / nombre*_
โฃ โ ๐พ _${usedPrefix}formarpareja | pareja5_
โฃ โ ๐งฉ _${usedPrefix}dado_
โฃ โ ๐พ _${usedPrefix}simsimi | simi | bot *texto*_
โฃ โ ๐งฉ _${usedPrefix}formartrio_
โฃ โ ๐พ _${usedPrefix}love *@tag / nombre*_
โฃ โ ๐งฉ _${usedPrefix}amigorandom | amigo | amistad_
โฃ โ ๐พ _${usedPrefix}slot *cantidad*_
โฃ โ ๐งฉ _${usedPrefix}ppt *piedra / papel / tijera*_
โฃ โ ๐พ _${usedPrefix}prostituta *@tag / nombre*_
โฃ โ ๐งฉ _${usedPrefix}prostituto *@tag / nombre*_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *DESCARGAS*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ โ๏ธ _${usedPrefix}imagen | image | gimage *texto*_
โฃ โ โ๏ธ _${usedPrefix}ytsearch *texto*_
โฃ โ โ๏ธ _${usedPrefix}dlaudio *link yt*_
โฃ โ โ๏ธ _${usedPrefix}dlvid *link yt*_
โฃ โ โ๏ธ _${usedPrefix}ytmp3 *link yt*_
โฃ โ โ๏ธ _${usedPrefix}ytmp4 *link yt*_
โฃ โ โ๏ธ _${usedPrefix}play *titulo del audio*_
โฃ โ โ๏ธ _${usedPrefix}play2 *titulo del video*_
โฃ โ โ๏ธ _${usedPrefix}play3 *titulo del audio/video*_
โฃ โ โ๏ธ _${usedPrefix}letra *nombredelacanciรณn*_
โฃ โ โ๏ธ _${usedPrefix}google *texto*_
โฃ โ โ๏ธ _${usedPrefix}googlef *texto*_
โฃ โ โ๏ธ _${usedPrefix}pinterestvideo | pintvid *linkPinterest*_
โฃ โ โ๏ธ _${usedPrefix}tiktokaudio *link del tiktok*_
โฃ โ โ๏ธ _${usedPrefix}tiktok *link*_
โฃ โ โ๏ธ _${usedPrefix}tiktok2 | Tiktok2 *link del tiktok*_
โฃ โ โ๏ธ _${usedPrefix}acortar | reducir *link*_
โฃ โ โ๏ธ _${usedPrefix}pinterest | pinterest2 *texto*_
โฃ โ โ๏ธ _${usedPrefix}ssweb | capturar | captura *link*_
โฃ โ โ๏ธ _${usedPrefix}animeinfo *nombre del anime*_
โฃ โ โ๏ธ _${usedPrefix}wpanime | fondoanime_
โฃ โ โ๏ธ _${usedPrefix}verinstagram | verig |igver *usuario*_
โฃ โ โ๏ธ _${usedPrefix}ighistorias|historiasig *usuario*_
โฃ โ โ๏ธ _${usedPrefix}twittervideo | twvid *link de twitter*_
โฃ โ โ๏ธ _${usedPrefix}wikipedia | wiki | internet *texto*_
โฃ โ โ๏ธ _${usedPrefix}spotify | spotimusica *autor, cancion*_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *GESTION DE GRUPOS* 
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐ _${usedPrefix}admins *texto*_ 
โฃ โ ๐ _${usedPrefix}aรฑadir *numero*_ (desactivado)
โฃ โ ๐ _${usedPrefix}sacar @tag_ (desactivado)
โฃ โ ๐ _${usedPrefix}save *@tag + nombre de contacto*_
โฃ โ ๐ _${usedPrefix}daradmin | darpoder *@tag*_
โฃ โ ๐ _${usedPrefix}quitaradmin | quitarpoder *@tag*_
โฃ โ ๐ _${usedPrefix}grupo *abierto / cerrado*_
โฃ โ ๐ _${usedPrefix}enable welcome_
โฃ โ ๐ _${usedPrefix}disable welcome_
โฃ โ ๐ _${usedPrefix}enable antilink_ *(WhatsApp)*
โฃ โ ๐ _${usedPrefix}disable antilink_ 
โฃ โ ๐ _${usedPrefix}enable antilink2_ *(https:)*
โฃ โ ๐ _${usedPrefix}disable antilink2_
โฃ โ ๐ _${usedPrefix}enable delete_
โฃ โ ๐ _${usedPrefix}disable  delete_ 
โฃ โ ๐ _${usedPrefix}link_
โฃ โ ๐ _${usedPrefix}notificar | hidetag *texto*_
โฃ โ ๐ _${usedPrefix}setname *Nuevo nombre del grupo*_
โฃ โ ๐ _${usedPrefix}setdesc *Nueva descripciรณn grupo*_
โฃ โ ๐ _${usedPrefix}infogrupo_
โฃ โ ๐ _${usedPrefix}invocar *texto*_
โฃ โ ๐ _${usedPrefix}del *responder a un mensaje del bot*_
โฃ โ ๐ _${usedPrefix}fantasmas_
โฃ โ ๐ _${usedPrefix}banchat_
โฃ โ ๐ _${usedPrefix}unbanchat_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *CREADORES*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐จ _${usedPrefix}s_
โฃ โ ๐จ _${usedPrefix}sticker_
โฃ โ ๐จ _${usedPrefix}semoji | emoji_
โฃ โ ๐จ _${usedPrefix}wasted_
โฃ โ ๐จ _${usedPrefix}stonks_
โฃ โ ๐จ _${usedPrefix}trash *Responda a una foto*_
โฃ โ ๐จ _${usedPrefix}sgay *Responda a una foto*_
โฃ โ ๐จ _${usedPrefix}circle *Responda a una foto*_
โฃ โ ๐จ _${usedPrefix}stickermaker_
โฃ โ ๐จ _${usedPrefix}attp *texto*_
โฃ โ ๐จ _${usedPrefix}attp2 | s1 | sa *texto*_
โฃ โ ๐จ _${usedPrefix}stickerfilter | cs2_
โฃ โ ๐จ _${usedPrefix}tomp3 | mp3 *responde a un video*_
โฃ โ ๐จ _${usedPrefix}toimg | img *responde a un sticker*_
โฃ โ ๐จ _${usedPrefix}togif | gif *responde a sticker/video*_
โฃ โ ๐จ _${usedPrefix}ytcomentario | ytcomentar *texto*_
โฃ โ ๐จ _${usedPrefix}blur *responde a una imagen*_
โฃ โ ๐จ _${usedPrefix}jaal *Responda a una foto*_
โฃ โ ๐จ _${usedPrefix}swm *imagen | video | gif*_
โฃ โ ๐จ _${usedPrefix}tovideo *responde a una nota de voz*_
โฃ โ ๐จ _${usedPrefix}wanted *Responda a una foto*_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *ESTILOS DE TEXTOS*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โ *ยกUna gran variedad de estilos de textos!*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐ช _${usedPrefix}style *texto*_
โฃ โ ๐ช _${usedPrefix}estilo *texto*_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *SUBIR ESTADOS A GATABOT*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โ *ยกSube estados a la cuenta de GataBot!*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐ธ _${usedPrefix}subirestado *texto / video|imagen*_
โฃ โ ๐ธ _${usedPrefix}subirestado *texto / gif*_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *RANDOM|EXTRAS*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐ฏ _${usedPrefix}randomwallpaper_
โฃ โ ๐ฒ _${usedPrefix}compartirfoto_
โฃ โ ๐ณ _${usedPrefix}futbol_
โฃ โ ๐ฏ _${usedPrefix}Messi_
โฃ โ ๐ฒ _${usedPrefix}animal_
โฃ โ ๐ณ _${usedPrefix}meme_
โฃ โ ๐ฏ _${usedPrefix}meme2_
โฃ โ ๐ฒ _${usedPrefix}meme3_
โฃ โ ๐ณ _${usedPrefix}cat | gato | gata_
โฃ โ ๐ฏ _${usedPrefix}dog | perro | perra_
โฃ โ ๐ฒ _${usedPrefix}pikachu_
โฃ โ ๐ณ _${usedPrefix}waifu_
โฃ โ ๐ฏ _${usedPrefix}blackpink_
โฃ โ ๐ฒ _${usedPrefix}reto_
โฃ โ ๐ณ _${usedPrefix}verdad_
โฃ โ ๐ฏ _${usedPrefix}imagenrandom | random | epico_
โฃ โ ๐ฒ _${usedPrefix}neko_
โฃ โ ๐ณ _${usedPrefix}lolivid_
โฃ โ ๐ฏ _${usedPrefix}iqtest | iq | inteligencia_
โฃ โ ๐ฒ _${usedPrefix}kpopitzy_
โฃ โ ๐ณ _${usedPrefix}navidad_
โฃ โ ๐ฏ _${usedPrefix}loli_
โฃ โ ๐ฒ _${usedPrefix}gawrgura_
โฃ โ ๐ณ _${usedPrefix}miku_
โฃ โ ๐ฏ _${usedPrefix}nyan_
โฃ โ ๐ฒ _${usedPrefix}pat_
โฃ โ ๐ณ _${usedPrefix}itachi_
โฃ โ ๐ฏ _${usedPrefix}slap_
โฃ โ ๐ฒ _${usedPrefix}pat_
โฃ โ ๐ณ _${usedPrefix}perfil_
โฃ โ ๐ฏ _${usedPrefix}scan | datos | escaneo_
โฃ โ ๐ฒ _${usedPrefix}kpop_
โฃ โ ๐ณ _${usedPrefix}qr *texto*_
โฃ โ ๐ฏ _${usedPrefix}afk | aviso | informo *motivo*_
โฃ โ ๐ฒ _${usedPrefix}CristianoRonaldo_
โฃ โ ๐ณ _${usedPrefix}pregunta *pregunta*_
โฃ โ ๐ฏ _${usedPrefix}mention | mensaje *texto*_
โฃ โ ๐ฒ _${usedPrefix}spamchat *texto*_
โฃ โ ๐ณ _${usedPrefix}traducir es *texto*_
โฃ โ ๐ฏ _${usedPrefix}zodiac | zodiaco *AAAA MM DD*_
โฃ โ ๐ฒ _${usedPrefix}readmore | leermas *texto1| texto2*_
โฃ โ ๐ณ _${usedPrefix}calc | calculadora *expresiรณn mat.*_ 
โฃ โ ๐ฏ _${usedPrefix}spamwa *numero|texto|cantidad*_
โฃ โ ๐ฒ _${usedPrefix}readqr *responde a un cรณdigo QR*_
โฃ โ ๐ณ _${usedPrefix}anime *random / waifu / husbu /neko*_
โฃ โ ๐ฏ _${usedPrefix}agendar *@tag + nombre contacto*_
โฃ โ ๐ฒ _${usedPrefix}guardar *@tag + nombre contacto*_
โฃ โ ๐ณ _${usedPrefix}spam *numero|texto|cantidad*_ 
โฃ โ ๐ฏ _${usedPrefix}spoiler | hidetext *texto1| texto2*_
โฃ โ ๐ฒ _${usedPrefix}experiencia | exp
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *COMANDOS +18*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โ *Usalo si el grupo te lo permite*
โ *NO nos hacemos responsables*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐ _${usedPrefix}labiblia_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *EFECTOS PARA AUDIOS*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โ *Responde a un audio o nota de voz*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐ค _${usedPrefix}bass_
โฃ โ ๐ค _${usedPrefix}deep_
โฃ โ ๐ค _${usedPrefix}earrape_
โฃ โ ๐ค _${usedPrefix}fast_
โฃ โ ๐ค _${usedPrefix}fat_
โฃ โ ๐ค _${usedPrefix}nightcore_
โฃ โ ๐ค _${usedPrefix}reverse_
โฃ โ ๐ค _${usedPrefix}robot_
โฃ โ ๐ค _${usedPrefix}slow_
โฃ โ ๐ค _${usedPrefix}tupai
โฃ โ ๐ค _${usedPrefix}smooth_
โฃ โ ๐ค _${usedPrefix}blown_
โฃ โ ๐ค _${usedPrefix}vibracion *cantidad*_
โฃ โ ๐ค _${usedPrefix}tovn *audio a nota de voz*
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *AUDIOS|MENU* 
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐ _${usedPrefix}menu2_
โฃ โ ๐ _${usedPrefix}menuaudios_
โฃ โ ๐ _${usedPrefix}audios_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *CAJA DE ALMACENAMIENTO* 
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐ฆ _${usedPrefix}caja_
โฃ โ ๐ฆ _${usedPrefix}almacen_
โฃ โ ๐ฆ _${usedPrefix}cjalmacen_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *CHAT ANONIMO*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โ *ยกEscribe con alguien de forma anรณnima!* 
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐ค _${usedPrefix}chatanonimo | anonimochat_
โฃ โ ๐ค _${usedPrefix}anonimoch_
โฃ โ ๐ค _${usedPrefix}start_
โฃ โ ๐ค _${usedPrefix}next_
โฃ โ ๐ค _${usedPrefix}leave_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *CONVIERTETE EN BOT*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ โ๏ธ _${usedPrefix}stop_
โฃ โ โ๏ธ _${usedPrefix}jadibot | serbot_
โฃ โ โ๏ธ _${usedPrefix}getcode_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *LOGOS PERSONALIZADOS*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐ช _${usedPrefix}lolice_
โฃ โ ๐ _${usedPrefix}simpcard_
โฃ โ ๐ช _${usedPrefix}hornycard_ 
โฃ โ ๐ _${usedPrefix}lblackpink_
โฃ โ ๐ช _${usedPrefix}logocorazon_
โฃ โ ๐ _${usedPrefix}tahta *texto*_
โฃ โ ๐ช _${usedPrefix}nulis | notas *texto*_
โฃ โ ๐ _${usedPrefix}nulis2 | notas2 *texto*_
โฃ โ ๐ช _${usedPrefix}lolice *@tag*_
โฃ โ ๐ช _${usedPrefix}simpcard *@tag*_
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *LISTA DE LOGOS PERSONALIZADOS*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐ฎ _${usedPrefix}logos_ *(lista)*
โโโโโโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโโโโโ
โ *PROPIETARIO/A DEL BOT*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โ ๐ _${usedPrefix}boost | acelerar_
โฃ โ ๐ _${usedPrefix}restart_
โฃ โ ๐ _${usedPrefix}banlist_
โฃ โ ๐ _${usedPrefix}virtext1 | traba1_
โฃ โ ๐ _${usedPrefix}actualizar | update_
โฃ โ ๐ _${usedPrefix}bc *texto*_
โฃ โ ๐ _${usedPrefix}bcgc *texto*_
โฃ โ ๐ _${usedPrefix}bcbot *texto*_
โฃ โ ๐ _${usedPrefix}setbye *@tag*_
โฃ โ ๐ _${usedPrefix}banuser *@tag*_
โฃ โ ๐ _${usedPrefix}enable *public*_
โฃ โ ๐ _${usedPrefix}disable *public*_
โฃ โ ๐ _${usedPrefix}unbanuser *@tag*_
โฃ โ ๐ _${usedPrefix}listgroup_
โฃ โ ๐ _${usedPrefix}enable *restrict*_
โฃ โ ๐ _${usedPrefix}enable *autoread*_
โฃ โ ๐ _${usedPrefix}setwelcome *@tag*_
โฃ โ ๐ _${usedPrefix}enable *autoread*_
โฃ โ ๐ _${usedPrefix}disable *autoread*_
โฃ โ ๐ _${usedPrefix}bcbot *texto*_
โฃ โ ๐ _${usedPrefix}bcgc *texto*_
โโโโโโโโโโโโโโโโโโโโ`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
*โๅฝก:๏ฝฅ;.*:๏ฝฅ*ใ๏ฝฅใ.ใโๅฝก*
`.trim(), menu, 'ยกHOLA! ๐ธ', `Hola`, 'MENร DE AUDIOS ๐', `#menuaudios`, 'MENร NUEVO โก๏ธ', `#menu`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^prueba?$/i
module.exports = handler
