import cmHero from "@/assets/sparkle_cat.gif";

const HomeIntro = () => {
  return (
    <section className="flex items-center justify-center px-6 py-16 md:py-24">
      <img
        src={cmHero}
        alt="Cattail Media Co logo with cat on laptop"
        className="
          w-full
          max-w-xl
          md:max-w-2xl
          lg:max-w-3xl
          h-auto
        "
      />
    </section>
  );
};

export default HomeIntro;
