import React, { useEffect } from "react";
import web from "../img/web.webp";
import SosialIcons from "../components/SosialIcons";
import BottonBack from "../components/BottonBack";
function Show_about() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header>
        <BottonBack />
      </header>
      <main className='show-about'>
        <img src={web} alt='dummy' className='img-top-main' />
        <section className='show-about-article container'>
          <article className='side-content'>
            <div className='hero'>
              <p className='about-introduce'>
                <span className='hi-about'>Hi there👋</span>
                <span className='intro-about'>
                  I'm <strong className='name-about'>Arif triana</strong>
                </span>
                <span className='tag-about'>Web Developer</span>
              </p>
            </div>
            <SosialIcons className={"show-about"} />
          </article>
          <article className='main-content'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              labore eius neque, autem tempore velit nesciunt, ea rem quidem
              inventore eum asperiores deserunt ducimus iure reprehenderit
              incidunt delectus. Saepe, ab.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              incidunt inventore nostrum voluptas at eveniet, corrupti
              consequatur? Ipsa, quidem ex laudantium dignissimos libero quae
              ducimus, iste neque saepe veritatis voluptas a dolorum vel
              doloribus alias ratione? Soluta voluptatum nulla recusandae
              debitis cum vero similique fuga, natus facilis. Optio, quis?
              Doloremque neque distinctio ratione incidunt excepturi soluta
              consequatur, similique dolorem accusantium repudiandae culpa sit
              iusto maxime itaque. Saepe sequi minima inventore. Voluptates
              iusto mollitia suscipit unde, beatae ab maiores labore a culpa
              accusamus, soluta dolorem nisi possimus maxime corporis similique
              nobis laudantium eligendi accusantium officiis odit! Delectus
              exercitationem harum suscipit eum nobis, ratione eos dolor
              voluptate fuga incidunt molestiae in, ad, non minus odit error
              sunt enim accusamus optio explicabo voluptas quibusdam voluptates?
              Fugit provident a voluptate eaque dolorum officiis repellendus
              officia dolor? Odio accusantium, laudantium amet possimus
              excepturi numquam rem soluta fugit ducimus dolor neque vero
              reprehenderit aperiam aut perferendis dicta. Nihil molestiae
              temporibus molestias repudiandae provident odit. Blanditiis quia
              excepturi molestias! Ut sunt qui nobis rem, quos aperiam porro
              atque illum commodi consequatur quisquam! Dolores sint incidunt
              atque aut veniam? Sapiente illo aperiam dignissimos ipsa! Iste
              fugiat mollitia quasi hic neque repellendus! Quae dolorem
              consectetur, minus ea aspernatur ex.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default Show_about;
