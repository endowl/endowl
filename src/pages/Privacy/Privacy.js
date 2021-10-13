import React, { useEffect } from 'react';

import './Privacy.css';

export default function Privacy () {  
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
    <div className="privacy">
      <div className="iframe" >
        <div name="termly-embed" data-id="5faaacef-c640-49f3-ac7e-8a09b7e684f4" data-type="iframe"></div>
      
      </div>
    </div>
  )
}