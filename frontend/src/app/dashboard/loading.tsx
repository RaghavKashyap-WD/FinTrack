"use client";
import { Puff } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Puff color="#00BFFF" height={100} width={100} />
    </div>
  );
}
