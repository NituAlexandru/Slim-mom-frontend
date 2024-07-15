import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <picture>
        <source
          srcSet="https://i.ibb.co/4N2fQCG/logo-d.png"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="https://i.ibb.co/ZT8jGXP/logo-t.png"
          media="(min-width: 768px)"
        />
        <img
          src="https://i.ibb.co/0nn9VKD/logo-m.png"
          alt="Logo"
          className={styles.logoImage}
        />
      </picture>
    </div>
  );
};

export default Logo;
