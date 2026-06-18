'use client';

import Link from 'next/link';
import styles from './VoucherCard.module.css';
import { Voucher } from '@/lib/types/voucher';

type Props = { voucher: Voucher };

export default function VoucherCard({ voucher }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{voucher.title}</h3>
        <span className={styles.value}>R{voucher.value}</span>
      </div>

      <p className={styles.company}>{voucher.company} • {voucher.category}</p>
      <p className={styles.meta}>Qty: {voucher.quantity} • Expires: {voucher.expiryDate}</p>

      <div className={styles.actions}>
        <Link href={`/vouchers/${voucher.id}`} className={styles.detailLink}>Details</Link>
        <button className={styles.redeemBtn} aria-label={`Redeem ${voucher.title}`}>Redeem</button>
      </div>
    </div>
  );
}
