import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tharushi</h1>
        <p className={styles.description}>
          I’m a third-year undergraduate at Horizon Campus, pursuing a BSc (Hons) in Information Technology with a focus 
          on Software Development. I’m passionate about web development and UI/UX design, and I’m eager to apply my growing 
          skills in practical environments. Explore my portfolio to see my work and connect with me to learn more about 
          my journey and projects!
        </p>
        <a href="mailto:tharushinimnadee19@gmail.com" className={styles.contactBtn}>
            Contact Me
        </a>
      </div>
      <img 
        src="/My-Portfolio/assets/hero/heroImage1.png"
        alt="Hero image of me" 
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
