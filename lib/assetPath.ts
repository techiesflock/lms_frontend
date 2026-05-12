/** Public URL for a file under `/public/assets/`. */
export function assetPath(relativeToAssets: string): string {
  const p = relativeToAssets.replace(/^\/+/, "");
  return `/assets/${p}`;
}
