import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row bg-stone-50 text-stone-900 items-center justify-center gap-8">
      <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl">
        <Image
          src="/images/site/my baby.jpg"
          alt="a rare picture of WebDevTolu"
          width={300}
          height={400}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="text-center flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-bold">Hi, I'm WebDevTolu</h1>
        <p className="text-lg font-medium">
          A full stack developer building experiences to make your life easier.
        </p>
      </div>
    </section>
  );
};

export default Hero;
