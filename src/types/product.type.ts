export interface Product {
  id?: number;
  name: string;
  stock: number;
  price: number;
  image?: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
