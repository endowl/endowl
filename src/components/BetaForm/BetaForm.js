import React, { useEffect } from 'react';
import HubspotForm from 'react-hubspot-form';

export default function BetaForm () {  
  
  return (
    <div className="betaForm">
      <HubspotForm
        portalId="8619597"
        formId="26951de3-588c-429d-8765-85dd7bffb69d"
        onSubmit={() => console.log('Submit!')}
        onReady={(form) => console.log('Form ready!')}
        loading={<div>Loading...</div>}
      />
    </div>
  )
}