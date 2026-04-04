// Category-specific image placeholders
const categoryImages = {
  clothes: [
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400",
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400"
  ],
  electronics: [
    "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
    "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400",
    "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400"
  ],
  furniture: [
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400"
  ],
  shoes: [
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400"
  ],
  miscellaneous: [
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
  ]
};

// Default fallback images
const defaultImages = [
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400"
];

export function getProductImage(product) {
  // If product already has a valid image, use it
  if (product.images && product.images[0] && product.images[0].startsWith('http')) {
    return product.images[0];
  }
  
  // Get category name and normalize it
  const categoryName = product.category?.name?.toLowerCase() || "";
  let imageArray;
  
  // Select image array based on category
  if (categoryName.includes("cloth") || categoryName.includes("clothe")) {
    imageArray = categoryImages.clothes;
  } else if (categoryName.includes("electronic")) {
    imageArray = categoryImages.electronics;
  } else if (categoryName.includes("furniture")) {
    imageArray = categoryImages.furniture;
  } else if (categoryName.includes("shoe")) {
    imageArray = categoryImages.shoes;
  } else {
    imageArray = categoryImages.miscellaneous;
  }
  
  // Use product ID to get consistent image for the same product
  const imageIndex = product.id % imageArray.length;
  return imageArray[imageIndex];
}

// Alternative: Generate random image from all available
export function getRandomProductImage(product) {
  const allImages = [
    ...categoryImages.clothes,
    ...categoryImages.electronics,
    ...categoryImages.furniture,
    ...categoryImages.shoes,
    ...categoryImages.miscellaneous,
    ...defaultImages
  ];
  
  const imageIndex = product.id % allImages.length;
  return allImages[imageIndex];
}