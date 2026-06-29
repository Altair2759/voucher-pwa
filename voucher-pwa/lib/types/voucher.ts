// Vouchers created by Ethan, Tshiamo, Tineille

export interface Voucher {
  id: number;
  code: string;
  title: string;
  company: string;
  category: string;
  value: number;
  quantity: number;
  expiryDate: string;
  redeemed: boolean;
}

export const vouchers: Voucher[] = [
    {
        id: 1,
        code: "SHX10",
        title: "ShowMax Premium Voucher",
        company: "ShowMAx",
        category: "Entertainment",
        value: 50,
        quantity: 100,
        expiryDate: "2026-11-25",
        redeemed: false,
    },
    {
         id: 2,
        code: "DSY20",
        title: "Disney+ Voucher",
        company: "Disney+",
        category: "Entertainment",
        value: 30,
        quantity: 75,
        expiryDate: "2026-11-15",
        redeemed: false,
    },
    {
         id: 3,
        code: "NTFX30",
        title: "Netflix Premium Voucher",
        company: "Netflix",
        category: "Streaming",
        value: 50,
        quantity: 100,
        expiryDate: "2026-09-01",
        redeemed: false,
    },
    {
         id: 4,
        code: "XBOX40",
        title: "Xbox Game Pass Voucher",
        company: "Xbox",
        category: "Gaming",
        value: 200,
        quantity: 60,
        expiryDate: "2026-10-30",
        redeemed: false,
    },
    {
         id: 5,
        code: "Spotify50",
        title: "Spotify Premium Voucher",
        company: "Spotify",
        category: "Music",
        value: 50,
        quantity: 50,
        expiryDate: "2027-05-04",
        redeemed: false,
    },
    {
         id: 6,
        code: "Takelot60",
        title: "Takelot Voucher",
        company: "Takelot",
        category: "Shopping",
        value: 100,
        quantity: 60,
        expiryDate: "2026-06-20",
        redeemed: false,
    },
    {
         id: 7,
        code: "Amazon70",
        title: "Amazon Gift Card Voucher",
        company: "Amamzon",
        category: "Shopping",
        value: 100,
        quantity: 30,
        expiryDate: "2026-07-15",
        redeemed: false,
    },
    {
         id: 8,
        code: "Uber80",
        title: "Uber Ride Voucher",
        company: "Uber",
        category: "Transportation",
        value: 50,
        quantity: 65,
        expiryDate: "2026-05-23",
        redeemed: false,
    },
    {
         id: 9,
        code: "PSN90",
        title: "PlayStation Store Voucher",
        company: "PlayStation",
        category: "Gaming",
        value: 550,
        quantity: 50,
        expiryDate: "2026-11-31",
        redeemed: false,
    },
]