import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#FF8042'];
const TOKENS = ['BTC', 'ETH', 'SOL'];

export default function Chart() {
  const [data, setData] = useState([]);
  const [selectedToken, setSelectedToken] = useState(TOKENS[0]);

  useEffect(() => {
    async function fetchVotes(token) {
      const { data: votes, error } = await supabase.from('votes').select('*').eq('token', token);
      if (error) {
        console.error('Supabase fetch error:', error.message);
        setData([]);
        return;
      }
      const bullish = votes.filter(v => v.sentiment === 'bullish').length;
      const bearish = votes.filter(v => v.sentiment === 'bearish').length;
      setData([
        { name: 'Bullish', value: bullish },
        { name: 'Bearish', value: bearish }
      ]);
    }
    fetchVotes(selectedToken);
  }, [selectedToken]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Crypto Pulse — Vote Chart</h1>
      <label>
        Select Token:{' '}
        <select value={selectedToken} onChange={(e) => setSelectedToken(e.target.value)}>
          {TOKENS.map(token => <option key={token} value={token}>{token}</option>)}
        </select>
      </label>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <PieChart width={400} height={400} style={{ marginTop: 24 }}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </div>
  );
}
