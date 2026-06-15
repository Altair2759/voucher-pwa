import {
  openVoucherDB,
  REDEEMED_VOUCHERS_STORE,
} from './db';

export type RedeemedVoucher = {
  id: number;
  title: string;
  description: string;
  value: string;
  redeemedAt: string;
};

export async function saveRedeemedVoucher(
  voucher: RedeemedVoucher
): Promise<void> {
  const db = await openVoucherDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(
      REDEEMED_VOUCHERS_STORE,
      'readwrite'
    );

    const store = transaction.objectStore(REDEEMED_VOUCHERS_STORE);

    const request = store.put(voucher);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

export async function getRedeemedVouchers(): Promise<RedeemedVoucher[]> {
  const db = await openVoucherDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(
      REDEEMED_VOUCHERS_STORE,
      'readonly'
    );

    const store = transaction.objectStore(REDEEMED_VOUCHERS_STORE);

    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result as RedeemedVoucher[]);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}