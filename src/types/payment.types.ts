export type CreatePaymentRequest = {
  email: string;
  name: string;
}

export type CreatePaymentIntentRequest = {
  email: string;
  name: string;
  amount: number;
  currency: string;
  productName: string;
}
