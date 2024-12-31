const PHONE_NUMBER = '541166385047';
const DEFAULT_MESSAGE = '¡Hola! Me gustaría hacer un pedido de cookies 🍪';
const PHONE_NUMBER_URL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
)}`;
const DISPLAY_PHONE_NUMBER = '+54 11 6638-5047';
const INSTAGRAM_URL = 'https://www.instagram.com/bcookies.arg/';

export { DISPLAY_PHONE_NUMBER, INSTAGRAM_URL, PHONE_NUMBER, PHONE_NUMBER_URL };
