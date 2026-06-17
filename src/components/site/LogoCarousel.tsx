import angular from "../../assets/img/carrusel_logos/icons8-angular-96.png";
import css3 from "../../assets/img/carrusel_logos/icons8-css3-96.png";
import django from "../../assets/img/carrusel_logos/icons8-django-96.png";
import docker from "../../assets/img/carrusel_logos/icons8-estibador-96.png";
import html5 from "../../assets/img/carrusel_logos/icons8-html5-96.png";
import javascript from "../../assets/img/carrusel_logos/icons8-javascript-96.png";
import jenkins from "../../assets/img/carrusel_logos/icons8-jenkins-96.png";
import kubernetes from "../../assets/img/carrusel_logos/icons8-kubernetes-96.png";
import laravel from "../../assets/img/carrusel_logos/icons8-laravel-96.png";
import typescript from "../../assets/img/carrusel_logos/icons8-mecanografiado-96.png";
import mongodb from "../../assets/img/carrusel_logos/icons8-mongodb-96.png";
import mysql from "../../assets/img/carrusel_logos/icons8-mysql-96.png";
import nextjs from "../../assets/img/carrusel_logos/icons8-nextjs-96.png";
import nodejs from "../../assets/img/carrusel_logos/icons8-nodejs-96.png";
import vue from "../../assets/img/carrusel_logos/icons8-ver-js-96.png";
import php from "../../assets/img/carrusel_logos/icons8-php-96.png";
import python from "../../assets/img/carrusel_logos/icons8-python-96.png";
import reactNative from "../../assets/img/carrusel_logos/icons8-reaccionar-nativo-96.png";
import swift from "../../assets/img/carrusel_logos/icons8-rápidamente-96.png";
import symfony from "../../assets/img/carrusel_logos/icons8-symfony-96.png";
import tailwind from "../../assets/img/carrusel_logos/icons8-viento-de-cola-css-96.png";
import ruby from "../../assets/img/carrusel_logos/icons8-oreja-96.png";

const logos = [
  { src: angular, alt: "Angular" },
  { src: css3, alt: "CSS3" },
  { src: django, alt: "Django" },
  { src: docker, alt: "Docker" },
  { src: html5, alt: "HTML5" },
  { src: javascript, alt: "JavaScript" },
  { src: jenkins, alt: "Jenkins" },
  { src: kubernetes, alt: "Kubernetes" },
  { src: laravel, alt: "Laravel" },
  { src: typescript, alt: "TypeScript" },
  { src: mongodb, alt: "MongoDB" },
  { src: mysql, alt: "MySQL" },
  { src: nextjs, alt: "Next.js" },
  { src: nodejs, alt: "Node.js" },
  { src: vue, alt: "Vue.js" },
  { src: php, alt: "PHP" },
  { src: python, alt: "Python" },
  { src: reactNative, alt: "React Native" },
  { src: swift, alt: "Swift" },
  { src: symfony, alt: "Symfony" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: ruby, alt: "Ruby" },
];

export function LogoCarousel() {
  return (
    <section className="logo-carousel" aria-label="Technologies we work with">
      <div className="logo-carousel__track">
        {/* First set */}
        <div className="logo-carousel__slide">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="logo-carousel__img"
            />
          ))}
        </div>
        {/* Duplicated set for seamless loop */}
        <div className="logo-carousel__slide">
          {logos.map((logo) => (
            <img
              key={`dup-${logo.alt}`}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="logo-carousel__img"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
