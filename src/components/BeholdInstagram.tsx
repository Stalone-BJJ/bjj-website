import Script from "next/script";

export const BeholdInstagram = () => {
  return (
    <div className="mt-20 mb-20">
      <figure data-behold-id="xM3hlt47kIo8RvsODLGZ"></figure>
      <Script
        src="https://w.behold.so/widget.js"
        strategy="afterInteractive"
        type="module"
      />
    </div>
  );
};
