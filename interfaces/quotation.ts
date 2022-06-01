export interface BestQuotationResponse {
  id: number;
  user_id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  user: UserQuotation;
  products: ProductQuotation[];
  likes: Like[];
}

export interface Like {
  name: string;
  id: number;
}

export interface ProductQuotation {
  id: number;
  shopProductId: number;
  name: string;
  shop: string;
  shopId: number;
  price: number;
  createdAt: string;
}

export interface UserQuotation {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  profilePhoto: string;
  createdAt: string;
  updatedAt: string;
}
