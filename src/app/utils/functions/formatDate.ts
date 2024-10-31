export default function formatDate(isoDateString: string): string {
  const date = new Date(isoDateString);

  return date.toLocaleString("en-US", {
    month: "short", // "Apr"
    day: "numeric", // "30"
    year: "numeric", // "2020"
  });
}
