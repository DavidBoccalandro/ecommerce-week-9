export interface ProductCartResponse {
  data: {
    id?: number;
    user_id?: number;
    number?: number;
    status?: number;
    total?: string;
    total_items?: string;
    completed_at?: string;
    created_at?: string;
    items: ProductCartItem[];
  };
}

export interface ProductCartItem {
  id?: number;
  quantity?: number;
  product_variant_id?: number;
  product_id?: number;
  order_id?: number;
  total?: string;
  price?: string;
  name?: string;
  description?: string;
  promotion?: string;
}
