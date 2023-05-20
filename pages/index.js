import Head from 'next/head';
import { articles } from '../db/articles';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <div id="wrapper">
        <header id="header" className="alt">
          <span className="logo">
            <img src="images/logo.svg" alt="" />
          </span>
          <h1>Stellar</h1>
          <p>
            Just another free, fully responsive site template
            <br />
            built by <a href="https://twitter.com/ajlkn">@ajlkn</a> for{' '}
            <a href="https://html5up.net">HTML5 UP</a>.
          </p>
        </header>

        <nav id="nav">
          <ul>
            <li>
              <a href="#intro" className="active">
                Introduction
              </a>
            </li>
            <li>
              <a href="#first">First Section</a>
            </li>
            <li>
              <a href="#second">Second Section</a>
            </li>
            <li>
              <a href="#cta">Get Started</a>
            </li>
          </ul>
        </nav>

        <div id="main">
          <section id="intro" className="main">
            {/* ARTICLE */}
            {articles.map((article) => {
              return (
                <div className="spotlight">
                  <div className="content">
                    <header className="major">
                      <h2>{article.title}</h2>
                      <span>{article.author}</span>
                    </header>
                    <p>{article.body}</p>
                    <ul className="actions">
                      <li>
                        <a href="generic.html" className="button">
                          Read More
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span className="image">
                    <img src={article.img} alt="" />
                  </span>
                </div>
              );
            })}

            {/* ARTICLE */}
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>You may be interested in</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon solid major style1 fa-wheelchair"></span>
                <h3>fast and furious : fell of the stairs</h3>
                <p>turbocharged wheelchairs is a real thing now...</p>
              </li>
              <li>
                <span className="icon solid major style3 fa-truck"></span>
                <h3>oh shit a truck</h3>
                <p>
                  spider man is paralyzed, he is now using a turbocharged
                  wheelchair
                </p>
              </li>
              <li>
                <span className="icon solid major style5 fa-car"></span>
                <h3>why granny, why</h3>
                <p>my granny is trans...former</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions special">
                <li>
                  <a href="generic.html" className="button">
                    Learn More
                  </a>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>STATISTICS</h2>
              <p>
                here you can see our website's statisticks
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon solid fa-code-branch"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon solid fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon solid fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-gem"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions special">
                <li>
                  <a href="generic.html" className="button">
                    Learn More
                  </a>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <footer className="major">
              <ul className="actions special">
                <li>
                  <a href="generic.html" className="button primary">
                    Get Started
                  </a>
                </li>
                <li>
                  <a href="generic.html" className="button">
                    Learn More
                  </a>
                </li>
              </ul>
            </footer>
          </section>
        </div>

        <footer id="footer">
          <section>
            <h2>Aliquam sed mauris</h2>
            <p>
              Sed lorem ipsum dolor sit amet et nullam consequat feugiat
              consequat magna adipiscing tempus etiam dolore veroeros. eget
              dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula
              erat egestas velit, vitae tincidunt odio.
            </p>
            <ul className="actions">
              <li>
                <a href="generic.html" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h2>Etiam feugiat</h2>
            <dl className="alt">
              <dt>Address</dt>
              <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
              <dt>Phone</dt>
              <dd>(000) 000-0000 x 0000</dd>
              <dt>Email</dt>
              <dd>
                <a href="#">information@untitled.tld</a>
              </dd>
            </dl>
            <ul className="icons">
              <li>
                <a href="#" className="icon brands fa-twitter alt">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-facebook-f alt">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-instagram alt">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-github alt">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-dribbble alt">
                  <span className="label">Dribbble</span>
                </a>
              </li>
            </ul>
          </section>
          <p className="copyright">
            &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}
