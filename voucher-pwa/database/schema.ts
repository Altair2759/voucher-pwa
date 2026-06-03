export type User ={
    id: string;
    name: string;
    email: string;
    password: string;
};

export type Voucher = {
    id: string;
    title: string;
    description: string;
    expiryDate: string;
};

export type Redemption = {
    id: string;
    userId: string;
    voucherId: string;
    date: string;
};



