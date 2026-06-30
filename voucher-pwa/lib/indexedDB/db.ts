// Database made by Thandiwe & Tineille


// Database configuration constants
const DB_NAME = "voucher-pwa-db";
const DB_VERSION = 1;

// Object store name for redeemed vouchers
export const REDEEMED_VOUCHERS_STORE = "redeemed-vouchers";


// Opens the IndexedDb database and sets up onject stores on first run or version upgrade
export function openVoucherDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    // Runs when database is first created or upgraded
    request.onupgradeneeded = () => {
      const db = request.result;

      // Store for all vouchers
      if (!db.objectStoreNames.contains("vouchers")) {
        db.createObjectStore("vouchers", { keyPath: "id" });
      }

      // Store for generic history logs
      if (!db.objectStoreNames.contains("history")) {
        db.createObjectStore("history", {
          keyPath: "id",
          autoIncrement: true,
        });
      }

      // Store for redeemed vouchers
      if (!db.objectStoreNames.contains(REDEEMED_VOUCHERS_STORE)) {
        db.createObjectStore(REDEEMED_VOUCHERS_STORE, {
          keyPath: "id",
        });
      }
    };

    // successful database connection
    request.onsuccess = () => {
      resolve(request.result);
    };

    // Error while opening database
    request.onerror = () => {
      reject(request.error);
    };
  });
}

// Inserts or updates a voucher in the vouchers store
export async function storeVoucher(data: Record<string, unknown>) {
  const database = await openVoucherDB();

  return new Promise<void>((resolve, reject) => {
    const transaction = database.transaction("vouchers", "readwrite");
    const voucherStore = transaction.objectStore("vouchers");

    // Add voucher or update voucher
    voucherStore.put(data);

    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

// Retrieves all vouchers from the database
export async function getVouchers(): Promise<any[]> {
  const db = await openVoucherDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction("vouchers", "readonly");
    const store = transaction.objectStore("vouchers");
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Saves a record into the history store
export async function saveHistory(historyItem: Record<string, unknown>) {
  const db = await openVoucherDB();

  return new Promise<void>((resolve, reject) => {
    const transaction = db.transaction("history", "readwrite");
    const store = transaction.objectStore("history");

    store.add(historyItem);

    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

// Retrieves all history records
export async function getHistory(): Promise<any[]> {
  const db = await openVoucherDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction("history", "readonly");
    const store = transaction.objectStore("history");
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Saves or updates a redeemed voucher record
export async function saveRedeemedVoucherRecord(
  voucher: Record<string, unknown>
) {
  const db = await openVoucherDB();

  return new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(REDEEMED_VOUCHERS_STORE, "readwrite");
    const store = transaction.objectStore(REDEEMED_VOUCHERS_STORE);

    store.put(voucher);

    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

//Retrieves all redeemed vouchers from the database
export async function getRedeemedVouchers(): Promise<any[]> {
  const db = await openVoucherDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(REDEEMED_VOUCHERS_STORE, "readonly");
    const store = transaction.objectStore(REDEEMED_VOUCHERS_STORE);
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}