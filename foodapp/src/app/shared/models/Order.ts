import { LatLng } from "leaflet";
import { CartItem } from '../../../../../frontend/src/app/shared/models/CartItem';

export class Order {
  id!: number;
  items!: CartItem[];
  totalPrice!: number;
  name!: string;
  address!: string;
  addressLantLng?: LatLng
  paymentId!: string;
  createdAt!: string;
  status!: string;
}
