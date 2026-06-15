const DB_NAME = 'voucher-pwa-db';
const DB_VERSION = 1;

export const REDEEMED_VOUCHERS_STORE = 'redeemed-vouchers';

export function openVoucherDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(REDEEMED_VOUCHERS_STORE)) {
        db.createObjectStore(REDEEMED_VOUCHERS_STORE, {
          keyPath: 'id',
        });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}