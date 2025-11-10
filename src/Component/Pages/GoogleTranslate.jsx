import React, { useEffect } from "react";
 
const GoogleTranslate = () => {
  useEffect(() => {
    const loadGoogleTranslate = () => {
      window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          includedLanguages: "en,hi,mr,gu",
          layout:
            window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        },
        "google_translate_element"
      );
    };
 
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
    document.body.appendChild(script);
 
    window.loadGoogleTranslate = loadGoogleTranslate;
 
    return () => {
      document?.body?.removeChild(script);
    };
  }, []);
 
  return <div id="google_translate_element"></div>;
};
 
export default GoogleTranslate;
 