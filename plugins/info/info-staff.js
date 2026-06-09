//plugin by Giuse
let handler = async (m, { conn }) => {

    // Newsletter globale ChatUnity
    const cuContext = {
        isForwarded: true,
        forwardingScore: 999,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363259442839354@newsletter',
            serverMessageId: 100,
            newsletterName: `THE PUNISHER-BOT ✦ Staff Ufficiale`
        }
    };

    // Schede di contatto (vCard)
    const vcards = [
        { vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;Vale | CEO;;;\nFN:Vale | CEO\nORG:THE PUNISHER-BOT\nTITLE:CEO\nitem1.TEL;waid=393773842461:+39 377 384 2461\nitem1.X-ABLabel:Cellulare\nEND:VCARD` },
        { vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;Diego;;;\nFN:Diego\nORG:THE PUNISHER-BOT\nTITLE:Staff\nitem1.TEL;waid=393520583119:+39 352 058 3119\nitem1.X-ABLabel:Cellulare\nEND:VCARD` },
        { vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;Matte;;;\nFN:Matte\nORG:THE PUNISHER-BOT\nTITLE:Staff\nitem1.TEL;waid=66621409462:+66 62 140 9462\nitem1.X-ABLabel:Cellulare\nEND:VCARD` },
        { vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;Giuse;;;\nFN:Giuse\nORG:THE PUNISHER-BOT\nTITLE:Staff\nitem1.TEL;waid=393291944932:+39 329 194 4932\nitem1.X-ABLabel:Cellulare\nEND:VCARD` }
    ];

    // Testo elegante con i numeri in chiaro
    let testo = `
୧・︶ ✦ THE PUNISHER-BOT ✦ ︶・୨
꒷꒦ ‧₊ 🛡️ 𝐒 𝐓 𝐀 𝐅 𝐅 🛡️ ₊‧ ꒷꒦
୧・︶ : ︶ : ︶ : ︶ : ︶ : ︶・୨

✦ 👑 +39 320 603 219O ~ The Punisher
✦ 👨‍💻 +39 378 440 9415 ~ Elixir



👑 _Il team dietro THE PUNISHER-BOT._
୧・︶ : ︶ ꒷꒦ ‧₊ ୧`.trim();

    // 1. Invia le schede contatto (rubrica)
    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: 'Staff THE PUNISHER-BOT',
            contacts: vcards
        },
        contextInfo: cuContext
    }, { quoted: m });

    // 2. Invia il testo stilizzato
    await conn.sendMessage(m.chat, {
        text: testo,
        contextInfo: cuContext
    });

};

handler.help = ['staff', 'owner', 'creatori'];
handler.tags = ['info'];
handler.command = /^(staff|owner|creatori|founder)$/i;

export default handler;