import React from 'react'
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../../assets/logo_nagagiri.png";

const WhatsupButton = () => {
  return (
    <div className="floating-whatsapp">
      <FloatingWhatsApp
        phoneNumber="+919035090689"
        accountName="Nagagiri Comforts Horanadu"
        avatar={logo} 
        statusMessage="Typically replies within 1 hour" // Optional
        chatMessage="Hello! How can I help you?" // Optional
        allowClickAway // Optional
        notification // Optional
        notificationDelay={60000} // Optional
      />
    </div>
  );
}

export default WhatsupButton
