import Script from 'next/script';

export default function SeoHead() {
  return (
    <>
      <title>Freelancer’s Time Management Toolkit</title>
      <meta name="description" content="End freelance chaos with our free Daily Time-Blocking Planner and full Toolkit!" />
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
          `,
        }}
      />
      {/* Deadline Funnel */}
      <Script
        src="https://cdn.deadlinefunnel.com/scripts/df.js"
        strategy="afterInteractive"
      />
    </>
  );
}
