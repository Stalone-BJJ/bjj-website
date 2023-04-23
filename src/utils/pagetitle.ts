export default function pagetitle(title = "") {
  const siteTitle = "Stalone BJJ Academy";
  return [siteTitle, title].filter(Boolean).join(" | ");
}
