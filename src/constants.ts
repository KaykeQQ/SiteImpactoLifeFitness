export const PHONE_NUMBER = '5511952171468';
export const PHONE_DISPLAY = '(11) 95217-1468';
export const ADDRESS = 'R. Oscarito, 506 - Jardim Sonia Maria, Mauá - SP, 09380-428';
export const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=R.+Oscarito,+506+-+Jardim+Sonia+Maria,+Mau%C3%A1+-+SP,+09380-428';

export const buildWhatsAppUrl = (message: string) => {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};
