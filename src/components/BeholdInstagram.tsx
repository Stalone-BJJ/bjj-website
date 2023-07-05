import Script from "next/script";
declare global {
  interface Window {
    beholdWidgets: {
      initialize: () => void;
    };
  }
}

export const BeholdInstagram = () => {
  const onReady = () => {
    if (window) {
      window.beholdWidgets.initialize();
    }
  };

  return (
    <div className="mt-10 mb-20">
      <figure data-behold-id="xM3hlt47kIo8RvsODLGZ"></figure>
      <Script
        onReady={onReady}
        src="https://w.behold.so/widget.js"
        strategy="afterInteractive"
        type="module"
      />
    </div>
  );
};