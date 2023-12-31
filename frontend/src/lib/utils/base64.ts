export function base64ToImgUrl(base64: string) {
  const mimeType = base64.match(/^data:(.*);base64,/)?.[1];

  if (!mimeType) {
    throw new Error('Invalid base64 string');
  }

  const byteCharacters = atob(base64.split(',')[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  const blob = new Blob([byteArray], { type: mimeType });

  if (window.URL) {
    const url = URL.createObjectURL(blob);
    return url;
  } else {
    throw new Error('Your browser does not support creating object URLs');
  }
}
