const withPWA = require("next-pwa");

module.exports = withPWA({
  /* future: { webpack5: true }, */
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  env: {
    siteTitle: "Le Tigre Jewelry",
    siteDescription: "Buy good quality jewels",
    siteKeywords: "jewelry, le tigre, stainless steel",
    siteUrl: "https://letigrestore.com/",
    siteImagePreviewUrl: "/images/main.jpg",
    twitterHandle: "@lLeTigreStore",
    instaToken:
      "IGQVJXWF9nSTlUanJydi1GX3E3aW5mcFVTY3NhcEFrVS1INklWdEUxZAHd6ZAl9KVXFVUmYwczBYQTlRbkp0c2JtMnVObzlrQmtqN3RtYmV4cG5fU3dMelhuOEFYVjBRYm02NUNBLURMQVdiUVFWczdCVgZDZD",
  },
  images: {
    domains: ["cdn.shopify.com"],
  },
});
