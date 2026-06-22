"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieBanner({ dict }) {
  return (
    <CookieConsent
      location="bottom"
      buttonText={dict.btnAccept}
      enableDeclineButton
      declineButtonText={dict.btnDecline}
      cookieName="hypermep-cookie-consent"
      style={{ background: "#000", color: "#fff", alignItems: "center", padding: "10px 20px", borderTop: "1px solid #262626" }}
      buttonStyle={{ background: "#fff", color: "#000", fontSize: "14px", fontWeight: "bold", padding: "10px 24px", borderRadius: "2px" }}
      declineButtonStyle={{ background: "transparent", color: "#a3a3a3", fontSize: "14px", padding: "10px 24px", border: "1px solid #404040", borderRadius: "2px" }}
      expires={150}
    >
      {dict.text}
    </CookieConsent>
  );
}