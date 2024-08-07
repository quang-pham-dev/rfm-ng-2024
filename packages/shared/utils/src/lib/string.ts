export function titleCase(text: string) {
  return text.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export function textLimit(text: string, limit: number) {
  if (text.length > limit) {
    return `${text.substring(0, limit)}...`;
  }

  return text;
}
