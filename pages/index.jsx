import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import BackgroundImage from "../components/Main/BackgroundImage";
import ButtonPrimary from "../components/Main/ButtonPrimary";
import TitlePrimary from "../components/Main/TitlePrimary";
import TitleSecondary from "../components/Main/TitleSecondary";
import cook from '/assets/images/cook.jpg';
import chicken from '/assets/images/chicken.jpg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MJL Kitchen</title>
      </Head>
      <header className="mb-10">
        <Header />
      </header>
      <main>
        <section className="relative overflow-hidden mb-10">
          <div className="container max-w-full px-2 md:px-4 lg:12">
            <div className="flex justify-center items-center flex-col lg:flex-row">
              <div className="flex justify-center flex-col relative w-full h-full lg:w-5/12 lg:max-w-5/12 px-4">
                <div className="flex justify-center flex-col text-center border-y border-y-personal-neutralLight mb-12 py-4">
                  <TitlePrimary title="ABOUT US" />
                  <TitleSecondary title="OUR TEAM" />
                </div>
                <div className="flex justify-center flex-col items-start mb-4 md:mb-0">
                  <p className="mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti quo, velit, nobis nihil officia et adipisci eum
                    tenetur unde autem animi sit possimus ad aliquam sint, ut
                    natus nulla delectus.
                  </p>
                  <ButtonPrimary url="#">CONTACT US</ButtonPrimary>
                </div>
              </div>
              <BackgroundImage url={cook.src} alt="Chicken" />
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden mb-10">
          <div className="container max-w-full px-2 md:px-4 lg:12">
            <div className="flex justify-center items-center flex-col lg:flex-row">
              <BackgroundImage url={chicken.src} alt="Chicken" />
              <div className="flex justify-center flex-col relative w-full h-full lg:w-5/12 lg:max-w-5/12 px-4">
                <div className="flex justify-center flex-col text-center border-y border-y-personal-neutralLight mb-12 py-4">
                  <TitleSecondary title="WHAT'S ON" />
                  <TitlePrimary title="THE MENU" />
                </div>
                <div className="flex justify-center flex-col items-start">
                  <p className="mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti quo, velit, nobis nihil officia et adipisci eum
                    tenetur unde autem animi sit possimus ad aliquam sint, ut
                    natus nulla delectus.
                  </p>
                  <ButtonPrimary url="#">VIEW MENU</ButtonPrimary>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
