import CoverPage from "@/app/coveropage/page";
import QualificationsPage from "@/app/education/page";
import Skills from "@/app/skills/page";
import Client from '@/app/client/page';
import Business from '@/app/business/page';
import Emo from '@/app/emo/page';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Contact from "@/app/contact/page";

export default function Home() {
  return (
    <>
    <Navbar />
      <CoverPage />
      <QualificationsPage />
      <Business />
      <Skills />
      <Client />
      <Emo />
      <Contact />
      <Footer />
    </>
  );
}
