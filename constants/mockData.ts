export interface Banner {
  id: string;
  imageUrl: string;
  title: string;
  subtitle?: string;
}
export const banners: Banner[] = [
  {
    id: 'b1',
    imageUrl: 'https://via.placeholder.com/800x300?text=Free+Delivery',
    title: 'Free Delivery Today',
    subtitle: 'On orders over $15',
  },
  {
    id: 'b2',
    imageUrl: 'https://via.placeholder.com/800x300?text=New+in+Town',
    title: 'Try Wilma’s Pizza',
    subtitle: 'Authentic wood-fired pies',
  },
  {
    id: 'b3',
    imageUrl: 'https://via.placeholder.com/800x300?text=Healthy+Eats',
    title: 'Maui Poke Bowls',
    subtitle: 'Fresh & tasty',
  },
  {
    id: 'b4',
    imageUrl: 'https://via.placeholder.com/800x300?text=Weekend+Specials',
    title: 'Burger Bros Deals',
    subtitle: 'Save on family meals',
  },
  {
    id: 'b5',
    imageUrl: 'https://via.placeholder.com/800x300?text=Italian+Delights',
    title: 'La Trattoria Specials',
    subtitle: 'Pasta, pizza & more',
  },
];

export interface Category {
  id: string;
  title: string;
  icon: string;
}
export const categories: Category[] = [
  { id: 'c1', title: 'All', icon: '🍽️' },
  { id: 'c2', title: 'Burgers', icon: '🍔' },
  { id: 'c3', title: 'Pizza', icon: '🍕' },
  { id: 'c4', title: 'Salads', icon: '🥗' },
];

export interface Restaurant {
  id: string;
  name: string;
  logoUrl: string;
  rating: number;
  deliveryTime: number;
  minOrder: number;
  tags: string[];
}
export const restaurants: Restaurant[] = [
  {
    id: 'r1',
    name: 'La Trattoria',
    logoUrl: 'https://via.placeholder.com/120?text=Trattoria',
    rating: 4.6,
    deliveryTime: 25,
    minOrder: 12,
    tags: ['Italian', 'Pasta'],
  },
  {
    id: 'r2',
    name: 'Burger Bros',
    logoUrl: 'https://via.placeholder.com/120?text=Burger+Bros',
    rating: 4.3,
    deliveryTime: 20,
    minOrder: 10,
    tags: ['Burgers', 'Fries'],
  },
  {
    id: 'r3',
    name: 'Maui Poke',
    logoUrl: 'https://via.placeholder.com/120?text=Poke+Co',
    rating: 4.8,
    deliveryTime: 30,
    minOrder: 15,
    tags: ['Healthy', 'Seafood'],
  },
  {
    id: 'r4',
    name: 'Wilma’s Pizza',
    logoUrl: 'https://via.placeholder.com/120?text=Wilma’s',
    rating: 4.5,
    deliveryTime: 35,
    minOrder: 10,
    tags: ['Pizza', 'Family'],
  },
];

export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
export const menuItems: MenuItem[] = [
  {
    id: 'm1',
    restaurantId: 'r4',
    name: 'Margherita',
    description: 'Tomato, mozzarella, basil',
    price: 9.99,
    imageUrl: 'https://via.placeholder.com/200?text=Margherita',
  },
  {
    id: 'm2',
    restaurantId: 'r4',
    name: 'Pepperoni',
    description: 'Spicy pepperoni, mozzarella',
    price: 11.99,
    imageUrl: 'https://via.placeholder.com/200?text=Pepperoni',
  },
  {
    id: 'm3',
    restaurantId: 'r2',
    name: 'Double Burger',
    description: 'Two patties, special sauce',
    price: 7.49,
    imageUrl: 'https://via.placeholder.com/200?text=Double+Burger',
  },
  {
    id: 'm4',
    restaurantId: 'r3',
    name: 'Ahi Poke Bowl',
    description: 'Fresh tuna, rice, avocado',
    price: 12.99,
    imageUrl: 'https://via.placeholder.com/200?text=Poke+Bowl',
  },
];
