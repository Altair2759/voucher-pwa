// Vocuher redemption Store made by Tineille

import { getRedeemedVouchers as readRedeemedVouchers, saveRedeemedVoucherRecord } from './db';

export type RedeemedVoucher = {
  id: number;
  title: string;
  description: string;
  value: string;
  redeemedAt: string;
};

// Saves redeemed vouchers
export async function saveRedeemedVoucher( voucher: RedeemedVoucher ): Promise<void> {
  await saveRedeemedVoucherRecord(voucher);
}

// Retrieves redeemed vouchers
export async function getRedeemedVouchers(): Promise<RedeemedVoucher[]> {
  return readRedeemedVouchers();
}

// Check if voucher is redeemed or not redeemed
export async function isVoucherRedeemed( voucherId: number ): Promise<boolean> {
  const redeemedVouchers = await getRedeemedVouchers();
  return redeemedVouchers.some((voucher) => voucher.id === voucherId);
}