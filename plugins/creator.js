const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Klebitz;;;'
                    + 'FN:Klebitz\n' // full name
                    + 'ORG:Klebitz;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6281211006838:+62 812-1100-6838\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Ilman', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
