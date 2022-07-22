import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import BackgroundImage from "../components/Main/BackgroundImage";
import ButtonPrimary from "../components/Main/ButtonPrimary";
import Heading from "../components/Main/Heading";

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
                <Heading heading1="THE STORY" heading2="ABOUT US" />
                <div className="flex justify-center flex-col items-start mb-4">
                  <p className="mb-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti quo, velit, nobis nihil officia et adipisci eum
                    tenetur unde autem animi sit possimus ad aliquam sint, ut
                    natus nulla delectus.
                  </p>
                  <ButtonPrimary url="#">CONTACT US</ButtonPrimary>
                </div>
              </div>
              <BackgroundImage url="/cook.jpg" alt="Chicken" />
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden mb-10">
          <div className="container max-w-full px-2 md:px-4 lg:12">
            <div className="flex justify-center items-center flex-col lg:flex-row">
              <BackgroundImage url="/chicken.jpg" alt="Chicken" />
              <div className="flex justify-center flex-col relative w-full h-full lg:w-5/12 lg:max-w-5/12 px-4">
                <Heading heading1="WHAT'S ON" heading2="THE MENU" />
                <div className="flex justify-center flex-col items-start">
                  <p className="mb-12">
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
