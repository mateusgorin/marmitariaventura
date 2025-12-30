
export interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Popular' | 'Fit' | 'Premium';
}

export interface VideoItem {
  id: number;
  title: string;
  thumbnail: string;
  url: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
