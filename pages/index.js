import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Crypto Pulse Frame</h1>
      <p>A mini-app for Farcaster — use the links below to explore.</p>
      <ul>
        <li><Link href="/chart">Vote Chart (Bullish vs Bearish)</Link></li>
        <li><Link href="/api/frame">Frame API (placeholder)</Link></li>
      </ul>
    </div>
  );
}
