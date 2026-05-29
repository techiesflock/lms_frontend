/** Parse catalog rating strings like "4.9 (200 Reviews)". */
export function parseCatalogRating(rating: string) {
  const match = rating.match(/^([\d.]+)\s*\(([\d,]+)/);
  return {
    score: match?.[1] ?? rating,
    count: match?.[2]?.replace(/,/g, "") ?? "",
  };
}

export function formatReviewCount(count: string) {
  if (!count) return "";
  const num = Number(count);
  if (Number.isNaN(num)) return count;
  return num.toLocaleString();
}
