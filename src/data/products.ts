export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Citrus Summer Tee",
    price: "$45",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
    category: "Essentials",
    description: "A lightweight, breathable cotton tee in a vibrant citrus hue. Perfect for those long summer days."
  },
  {
    id: 2,
    name: "Zest Linen Trousers",
    price: "$85",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800",
    category: "Bottoms",
    description: "Relaxed fit linen trousers that keep you cool and stylish. Features a comfortable elastic waistband."
  },
  {
    id: 3,
    name: "Naranja Signature Hoodie",
    price: "$120",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
    category: "Outerwear",
    description: "Our iconic hoodie with a premium weight and a soft-brushed interior. Features the calligraphic 'N' logo."
  },
  {
    id: 4,
    name: "Sunset Silk Scarf",
    price: "$35",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=800",
    category: "Accessories",
    description: "A luxurious silk scarf with a gradient sunset pattern. Adds a touch of elegance to any outfit."
  },
  {
    id: 5,
    name: "Oversized Ochre Shirt",
    price: "$65",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80&w=800",
    category: "Men's Apparel",
    description: "A relaxed, oversized shirt in a rich ochre tone. Versatile enough for casual or semi-formal wear."
  },
  {
    id: 6,
    name: "Terracotta Chinos",
    price: "$95",
    image: "https://images.unsplash.com/photo-1473964822462-53351f167b24?auto=format&fit=crop&q=80&w=800",
    category: "Men's Apparel",
    description: "Classic chinos in a warm terracotta shade. Tailored for a modern, slim-fit silhouette."
  },
  {
    id: 7,
    name: "Amber Knit Sweater",
    price: "$110",
    image: "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?auto=format&fit=crop&q=80&w=800",
    category: "Men's Apparel",
    description: "A cozy, textured knit sweater in a deep amber color. Ideal for layering during cooler evenings."
  },
  {
    id: 8,
    name: "Citrus Denim Jacket",
    price: "$145",
    image: "https://images.unsplash.com/photo-1550991152-123c69ffeb91?auto=format&fit=crop&q=80&w=800",
    category: "Men's Apparel",
    description: "A rugged denim jacket with a unique citrus-wash finish. Features custom Naranja-branded buttons."
  }
];
