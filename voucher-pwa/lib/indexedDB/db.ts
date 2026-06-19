const DATABASE_NAME = "VoucherDB";
const DATABASE_VERSION = 1;
const STORE_NAME = "vouchers"

// Initialize IndexDB connection
export function connectDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
const DB_NAME = 'voucher-pwa-db';
const DB_VERSION = 1;

export const REDEEMED_VOUCHERS_STORE = 'redeemed-vouchers';

export function openVoucherDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      // Store vouchers
      if (!db.objectStoreNames.contains("vouchers")) {
        db.createObjectStore("vouchers", { keyPath: "id" });
      }

      // Store redemption history
      if (!db.objectStoreNames.contains("history")) {
        db.createObjectStore("history", {
          keyPath: "id",
          autoIncrement: true,});
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
//Store voucher record 
export async function storeVoucher(data: any) {
  const database = await connectDatabase();

  const transaction = database.transaction(
    STORE_NAME,
    "readwrite"
  );

  const voucherStore =
    transaction.objectStore(STORE_NAME);

  voucherStore.put(data);

  return new Promise<void>((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

// Get All Vouchers
export async function getVouchers(): Promise<any[]> {
  const db = await connectDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction("vouchers", "readonly");
    const store = transaction.objectStore("vouchers");

    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

// Save Redemption History
export async function saveHistory(historyItem: any) {
  const db = await connectDatabase();

  const transaction = db.transaction("history", "readwrite");
  const store = transaction.objectStore("history");

  store.add(historyItem);
}

// Get Redemption History
export async function getHistory(): Promise<any[]> {
  const db = await connectDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction("history", "readonly");
    const store = transaction.objectStore("history");

    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}