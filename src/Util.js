export default function mapToHex(colors) {
  const hex = new Map(Object.entries(colors));
  hex.forEach((value, key, map) => map.set(key, value.toString(16)));

  return hex;
}
