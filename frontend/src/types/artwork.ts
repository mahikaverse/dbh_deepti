export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  medium?: string;
  width?: number;
  height?: number;
  price: string | number;
  frameAvailable: boolean;
  isApproved: boolean;
  isAvailable: boolean;
  createdAt: string;

  _count?: {
    inquiries: number;
  };
}