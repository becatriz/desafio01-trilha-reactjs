export function makeWhatsAppLink(phone: string, text: string) {
    return `https://api.whatsapp.com/send?phone=${phone}&text=${text}`
  }
  
  export default makeWhatsAppLink