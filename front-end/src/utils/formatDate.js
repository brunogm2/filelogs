export default function dateFormat(date) {
    return date
    .replace(/\D/g, '')
    .replace(/^(\d{2})\B/, '$1/')

    .replace(/(\d{2})?(\d{2})(\d{3})/, '$1$2/$3');
}