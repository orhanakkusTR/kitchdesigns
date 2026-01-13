export function formatPhoneNumber(value: string): string {
  const phone = value.replace(/\D/g, '');

  if (phone.length === 0) return '';

  if (phone.length <= 3) {
    return `(${phone}`;
  }

  if (phone.length <= 6) {
    return `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
  }

  return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
}

export function getUnformattedPhone(value: string): string {
  return value.replace(/\D/g, '');
}
