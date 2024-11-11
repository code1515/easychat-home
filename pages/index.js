import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Testimonials from "../components/ui/Testimonials";
import ToolKit from "../components/ui/ToolKit";

export default function Home() {
  return (
    <>
      <Head>
        {/*<meta name='robots' content='index' />*/}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-21QW02NCV4"></script>
          <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-21QW02NCV4');
          </script>
          <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-21QW02NCV4');
          </script>
        <meta name="google-site-verification" content="QbP4MzNmvuKgFZhZ9EU2_cJD9PTd1OWNplhmdvHGUGU" />
      </Head>
      <Hero />
      <LogoGrid />
      <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      <ToolKit />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <FooterCTA />
    </>
  );
}
