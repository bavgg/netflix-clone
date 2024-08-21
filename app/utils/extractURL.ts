export function extractURL(text: string) {
  const start = text.indexOf('btoa("') + 6;
  const end = text.indexOf('")', start);

  const extractedUrl = text.substring(start, end);
  return extractedUrl;
}
