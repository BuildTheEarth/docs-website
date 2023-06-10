export function highlightLink(
  active: string,
  toCheck: string,
  breadcrumps: any[]
): boolean {
  if (active.slice(-1) == "/") active.slice(0, -1);
  active.replace("//", "/");

  if (toCheck.slice(-1) == "/") toCheck.slice(0, -1);
  toCheck.replace("//", "/");

  const activeArr = active.split("/");
  const toCheckArr = toCheck.split("/");
  const bcArr = breadcrumps.map((bc) => bc.href);

  if (active.toLowerCase() == toCheck.toLowerCase()) return true;

  if (active.includes("/category/")) {
    for (const bc of bcArr) {
      if (bc.toLowerCase() == toCheck.toLowerCase()) {
        return true;
      }
    }
  }

  for (let i = 0; i < activeArr.length; i++) {
    if (
      activeArr
        .slice(0, i + 1)
        .join("/")
        .toLowerCase() == toCheck.toLowerCase()
    ) {
      return true;
    }

    if (
      ("/docs/category/" + activeArr[i]).toLowerCase() == toCheck.toLowerCase()
    ) {
      return true;
    }
  }
  return false;
}
