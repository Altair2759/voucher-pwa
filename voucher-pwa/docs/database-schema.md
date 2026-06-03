User ={
    id: string;
    name: string;
    email: string;
    password: string;
};

Voucher = {
    id: string;
    title: string;
    description: string;
    expiryDate: string;
};

Redemption = {
    id: string;
    userId: string;
    voucherId: string;
    date: string;
};
