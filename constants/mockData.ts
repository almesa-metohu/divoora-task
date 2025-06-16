import { ImageSourcePropType } from 'react-native';

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
    imageUrl: 'https://via.placeholder.com/800x300?text=Try+Wilma%27s+Pizza',
    title: "Try Wilma's Pizza",
    subtitle: 'Authentic wood-fired pies',
  },
  {
    id: 'b3',
    imageUrl: 'https://via.placeholder.com/800x300?text=Maui+Poke+Bowls',
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
  label: string;
  icon: ImageSourcePropType;
}
export const categories: Category[] = [
  { id: 'cat1', label: 'Near Me', icon: require('@/assets/icons/near-me.png') },
  {
    id: 'cat2',
    label: 'Big Promo',
    icon: require('@/assets/icons/big-promo.png'),
  },
  {
    id: 'cat3',
    label: 'Best Seller',
    icon: require('@/assets/icons/best-seller.png'),
  },
  {
    id: 'cat4',
    label: 'Budget Meal',
    icon: require('@/assets/icons/budget-meal.png'),
  },
  {
    id: 'cat5',
    label: 'Healthy Food',
    icon: require('@/assets/icons/healthy-food.png'),
  },
  {
    id: 'cat6',
    label: 'Open 24 Hours',
    icon: require('@/assets/icons/open-24.png'),
  },
  {
    id: 'cat7',
    label: 'Popular Restaurant',
    icon: require('@/assets/icons/popular.png'),
  },
  { id: 'cat8', label: 'More', icon: require('@/assets/icons/more.png') },
];

export interface Cuisine {
  id: string;
  label: string;
  icon: ImageSourcePropType;
}
export const cuisines: Cuisine[] = [
  {
    id: 'cuisine1',
    label: 'Chicken',
    icon: require('@/assets/icons/chicken.png'),
  },
  {
    id: 'cuisine2',
    label: 'Burger',
    icon: require('@/assets/icons/burger.png'),
  },
  { id: 'cuisine3', label: 'Pizza', icon: require('@/assets/icons/pizza.png') },
  {
    id: 'cuisine4',
    label: 'Bakery',
    icon: require('@/assets/icons/bakery.png'),
  },
  { id: 'cuisine5', label: 'Salad', icon: require('@/assets/icons/salad.png') },
  {
    id: 'cuisine6',
    label: 'Dessert',
    icon: require('@/assets/icons/dessert.png'),
  },
  {
    id: 'cuisine7',
    label: 'Asian',
    icon: require('@/assets/icons/asian.png'),
  },
  {
    id: 'cuisine8',
    label: 'Italian',
    icon: require('@/assets/icons/italian.png'),
  },
  {
    id: 'cuisine9',
    label: 'Mexican',
    icon: require('@/assets/icons/mexican.png'),
  },
  {
    id: 'cuisine10',
    label: 'Steak House',
    icon: require('@/assets/icons/steak-house.png'),
  },
  {
    id: 'cuisine11',
    label: 'Seafood',
    icon: require('@/assets/icons/seafood.png'),
  },
  {
    id: 'cuisine12',
    label: 'Vegan',
    icon: require('@/assets/icons/vegan.png'),
  },
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
export const newRestaurants: Restaurant[] = [
  {
    id: 'r1',
    name: 'La Trattoria',
    logoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFB97JfYOwuH-RK6EzMKirmaY9J1h4W_bg8g&s',
    rating: 4.6,
    deliveryTime: 25,
    minOrder: 12,
    tags: ['Italian', 'Pasta'],
  },
  {
    id: 'r2',
    name: 'Maui Poke',
    logoUrl: 'https://img.restaurantguru.com/r364-Maui-Poke-Lugano-logo.jpg',
    rating: 4.8,
    deliveryTime: 30,
    minOrder: 15,
    tags: ['Healthy', 'Seafood'],
  },
  {
    id: 'r3',
    name: 'Burger Bros',
    logoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZegInI0ZfmT6-xbZsBTlxEMGrbsMu-o3p6A&s',
    rating: 4.3,
    deliveryTime: 20,
    minOrder: 10,
    tags: ['Burgers', 'Fries'],
  },
  {
    id: 'r4',
    name: "Wilma's Pizza",
    logoUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/1a/fc/8a/logo.jpg?w=900&h=500&s=1',
    rating: 4.5,
    deliveryTime: 35,
    minOrder: 10,
    tags: ['Pizza', 'Family'],
  },
  {
    id: 'r5',
    name: 'Ahi Poke Bowl',
    logoUrl:
      'https://static.wixstatic.com/media/17a999_86e773435af042cba73a7929f125c8b2~mv2.jpg',
    rating: 4.7,
    deliveryTime: 28,
    minOrder: 12,
    tags: ['Healthy', 'Bowl'],
  },
  {
    id: 'r6',
    name: 'Taco Fiesta',
    logoUrl:
      'https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_300,q_100,fl_lossy,dpr_2.0,c_fit,f_auto,h_300/oxpywb3ibcqd6vtszdfq',
    rating: 4.4,
    deliveryTime: 22,
    minOrder: 8,
    tags: ['Mexican', 'Spicy'],
  },
  {
    id: 'r7',
    name: 'Sushi Zen',
    logoUrl:
      'https://i.redd.it/sushi-zen-logo-design-v0-efdval2tviib1.png?width=1080&format=png&auto=webp&s=d3dd1a9f3ceddfef7c81e5ccd68052a829b8136b',
    rating: 4.9,
    deliveryTime: 40,
    minOrder: 20,
    tags: ['Japanese', 'Sushi'],
  },
  {
    id: 'r8',
    name: 'Green Garden',
    logoUrl:
      'https://images.seeklogo.com/logo-png/6/1/green-garden-logo-png_seeklogo-63143.png',
    rating: 4.6,
    deliveryTime: 25,
    minOrder: 14,
    tags: ['Vegetarian', 'Healthy'],
  },
  {
    id: 'r9',
    name: 'BBQ Masters',
    logoUrl:
      'https://img.freepik.com/premium-vector/barbecue-masters-logo-design_148584-174.jpg',
    rating: 4.2,
    deliveryTime: 45,
    minOrder: 16,
    tags: ['BBQ', 'Meat'],
  },
  {
    id: 'r10',
    name: 'Café Bistro',
    logoUrl:
      'https://cdna.artstation.com/p/assets/images/images/033/198/938/large/val-reinard-dimaano-cafe-bistro.jpg?1608727721',
    rating: 4.1,
    deliveryTime: 18,
    minOrder: 6,
    tags: ['Coffee', 'Breakfast'],
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
    imageUrl:
      'https://kitchenswagger.com/wp-content/uploads/2023/05/margherita-pizza-close.jpg',
  },
  {
    id: 'm2',
    restaurantId: 'r1',
    name: 'Caesar Salad',
    description: 'Romaine, croutons, parmesan',
    price: 8.49,
    imageUrl:
      'https://cookingwithayeh.com/wp-content/uploads/2023/11/Healthy-Caesar-Salad-Without-Anchovies-SQ-5.jpg',
  },
  {
    id: 'm3',
    restaurantId: 'r2',
    name: 'Double Burger',
    description: 'Two patties, special sauce',
    price: 7.49,
    imageUrl:
      'https://d31qjkbvvkyanm.cloudfront.net/images/recipe-images/double-decker-burgers-detail-4ca14827.jpg',
  },
  {
    id: 'm4',
    restaurantId: 'r4',
    name: 'Pepperoni',
    description: 'Spicy pepperoni, mozzarella',
    price: 11.99,
    imageUrl:
      'https://www.allrecipes.com/thmb/ULiSEmH8Tje7Hh-TW1aN2P8dC98=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg',
  },
  {
    id: 'm5',
    restaurantId: 'r3',
    name: 'Ahi Poke Bowl',
    description: 'Fresh tuna, rice, avocado',
    price: 12.99,
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/poke-bowl-221-1550260964.jpg?crop=0.606xw:0.911xh;0.184xw,0.0409xh&resize=1200:*',
  },
  {
    id: 'm6',
    restaurantId: 'r2',
    name: 'Tropical Poke Bowl',
    description: 'Mango, avocado, tuna',
    price: 13.49,
    imageUrl:
      'https://mealpractice.b-cdn.net/210233854504603648/tropical-tofu-poke-bowl-with-pineapple-salsa-and-coconut-rice-c0YFmghodA.webp',
  },
  {
    id: 'm7',
    restaurantId: 'r3',
    name: 'Classic Cheeseburger',
    description: 'Beef patty, cheese, lettuce, tomato',
    price: 6.99,
    imageUrl:
      'https://rhubarbandcod.com/wp-content/uploads/2022/06/The-Classic-Cheeseburger-1-500x500.jpg',
  },
  {
    id: 'm8',
    restaurantId: 'r1',
    name: 'Spaghetti Carbonara',
    description: 'Pasta, pancetta, egg, cheese',
    price: 10.99,
    imageUrl:
      'https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-snippet.jpg',
  },
  {
    id: 'm9',
    restaurantId: 'r4',
    name: 'Tiramisu',
    description: 'Coffee-flavored Italian dessert',
    price: 5.99,
    imageUrl:
      'https://addictedtodates.com/wp-content/uploads/2023/09/vegan-tiramisu-500x375.jpg',
  },
  {
    id: 'm10',
    restaurantId: 'r2',
    name: 'Potato Wedges',
    description: 'Crispy potato wedges with herbs',
    price: 4.99,
    imageUrl:
      'https://bakersroyale.com/wp-content/uploads/2020/05/Potato-Wedges-Bakers-Royale-735x1103.jpg',
  },
];
