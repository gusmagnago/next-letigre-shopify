const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN;
const collection = process.env.SHOPIFY_COLLECTION_RINGS;

async function callShopify(query) {
  const fetchUrl = `https://${domain}/api/2021-01/graphql.json`;

  const fetchOptions = {
    endpoint: fetchUrl,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) =>
      response.json()
    );
    return data;
  } catch (error) {
    throw new Error("Could not fetch products!");
  }
}

export async function getAllProductsInRingsCollection() {
  const query = `{
      collectionByHandle(handle: "${collection}") {
        id
        title
        products(first: 250) {
          edges {
            node {
              id
              title
              description
              handle
              images(first: 250) {
                edges {
                  node {
                    id
                    originalSrc
                    height
                    width     
                    altText             
                  }
                }
              }
              variants(first: 250) {
                edges {
                  node {
                    id
                    title
                    price                
                  }
                }
              }
            }
          }
        }
      }
    }`;
  const response = await callShopify(query);

  const allProducts = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : [];

  return allProducts;
}

export async function getProductSlugs() {
  const query = `{
      collectionByHandle(handle: "${collection}") {
        products(first: 250) {
          edges {
            node {
              handle              
            }
          }
        }
      }
    }`;
  const response = await callShopify(query);

  const slugs = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : [];

  return slugs;
}

export async function getProduct(handle) {
  const query = `{
      productByHandle(handle: "${handle}") {
        id
        title
        handle
        description
        images(first: 250) {
          edges {
            node {
              id
              originalSrc
              height
              width     
              altText             
            }
          }
        }
        variants(first: 250) {
          edges {
            node {
              id
              title
              price                
            }
          }
        }
      }
    }`;
  const response = await callShopify(query);

  const product = response.data.productByHandle
    ? response.data.productByHandle
    : [];

  return product;
}
