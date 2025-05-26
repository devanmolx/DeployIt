export function generateId(length = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const id = Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  id.toLowerCase();
  return id;
}