import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

// Configure Mermaid
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  themeVariables: {
    background: '#1a1b26',
    primaryColor: '#00ceff',
    lineColor: '#565f89',
    secondaryColor: '#ffa94d',
    tertiaryColor: '#7c3aed'
  }
});

let idCounter = 0;

export default function Mermaid({ chart }) {
  const [svg, setSvg] = useState('');
  const [error, setError] = useState(null);
  const idRef = useRef(`mermaid-${++idCounter}`);

  useEffect(() => {
    let active = true;
    
    async function renderChart() {
      if (!chart || typeof chart !== 'string' || !chart.trim()) return;
      try {
        // Clean up the text diagram
        const cleanedChart = chart.trim();
        const { svg: renderedSvg } = await mermaid.render(idRef.current, cleanedChart);
        if (active) {
          setSvg(renderedSvg);
          setError(null);
        }
      } catch (err) {
        console.error("Mermaid render error:", err);
        // Reset the element cache in mermaid
        try {
          const badElement = document.getElementById(idRef.current);
          if (badElement) badElement.remove();
        } catch (e) {}
        if (active) {
          setError(err);
        }
      }
    }

    renderChart();
    
    return () => {
      active = false;
    };
  }, [chart]);

  if (error) {
    return (
      <div className="mermaid-error" style={{ padding: '12px', background: 'rgba(255, 0, 0, 0.05)', borderRadius: '6px', border: '1px solid rgba(255, 0, 0, 0.2)', margin: '16px 0' }}>
        <div style={{ color: '#ff6b6b', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '8px' }}>Mermaid Render Failure:</div>
        <pre style={{ margin: 0, overflowX: 'auto', fontSize: '0.8rem', color: '#a9b1d6' }}>
          <code>{chart}</code>
        </pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        Loading diagram...
      </div>
    );
  }

  return (
    <div 
      className="mermaid-chart" 
      dangerouslySetInnerHTML={{ __html: svg }} 
      style={{ display: 'flex', justifyContent: 'center', margin: '24px 0', overflowX: 'auto', background: 'rgba(26, 27, 38, 0.5)', borderRadius: '8px', padding: '16px' }}
    />
  );
}
