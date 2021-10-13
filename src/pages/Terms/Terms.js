import React, { useEffect } from 'react';

import './Terms.css';

export default function Terms () {  
  useEffect(() =>{
    const script = document.createElement('script');

    script.src ="https://app.termly.io/embed-policy.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="terms">
      <div className="iframe">
      <div name="termly-embed" data-id="b0c1764f-6fed-4a04-85f0-f5d1081efc4f" data-type="iframe"></div>
      </div>
    </div>
  )
}