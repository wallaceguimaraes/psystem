import React, { useState } from 'react';
import ReactLoading from 'react-loading';

export default function Home() {
  const [loading, setLoading] = useState(null);

  return (
    // {
    // loading?(
    <div className="center" style={{ height: '100vh' }}>
      <ReactLoading type="spin" color="#2065D1" />
    </div>
    // ): <div>Home</div>;
    // }
  );
}
