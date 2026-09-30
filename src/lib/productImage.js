// Finds the first image asset on a Contentful product entry, whatever the
// field ID is (image, productImage, photo, ...). PDFs like the MSDS are skipped
// because they are not image/* content types.
// Kept free of imports so it can be used in both server and client components.

function toImage(asset, fallbackAlt) {
  const file = asset?.fields?.file;
  if (!file?.url || !file.contentType?.startsWith("image/")) return null;

  const url = file.url.startsWith("//") ? `https:${file.url}` : file.url;
  return {
    url,
    alt: asset.fields.title || fallbackAlt || "",
    width: file.details?.image?.width,
    height: file.details?.image?.height,
  };
}

export function getProductImage(fields = {}) {
  for (const value of Object.values(fields)) {
    // single asset field
    const single = toImage(value, fields.title);
    if (single) return single;

    // multiple-media field: take the first image
    if (Array.isArray(value)) {
      for (const item of value) {
        const img = toImage(item, fields.title);
        if (img) return img;
      }
    }
  }
  return null;
}