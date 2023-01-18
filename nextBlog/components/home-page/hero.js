import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/webdevtolu.jpg"
          alt="An image showing Tolu"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm webDevTolu</h1>
      <p>
        I blog about web development - especially frontend frameworks like Next
        or React.
      </p>
    </section>
  );
}

export default Hero;
