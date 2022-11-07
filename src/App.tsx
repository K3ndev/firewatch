import type { Component } from 'solid-js';
import { Button, Header, Footer } from './components/index'


const App: Component = () => {
  return (
    <>
      <div class='page'>

        {/* header */}
        <Header/>

        {/* main */}
        <main class='page__main'>

          <section class='buy'>
            <h1 class='buy__banner'>AVAILABLE NOW FOR $19.99</h1>

            <div class='buy__internallinks'>
              <div class='buy__internallinks-link'>
                <button>WINDOWS MAC LINUX</button>
                <button>PLAYSTATION 4</button>
              </div>
              <div class='buy__internallinks-link'>
                <button>NINTENDO SWITCH</button>
                <button>XBOX ONE</button>
              </div>
            </div>
          </section>

          <div>
            video
          </div>

          <section>
            <p>Firewatch is a mystery set in the Wyoming wilderness, where your only emotional lifeline is the person on the other end of a handheld radio.</p>
            <p>The year is 1989.</p>
            <p>You are a man named Henry who has retreated from your messy life to work as a fire lookout in the Wyoming wilderness. Perched atop a mountain, it's your job to find smoke and keep the wilderness safe.</p>
            <p>An especially hot, dry summer has everyone on edge. Your supervisor, a woman named Delilah, is available to you at all times over a small, handheld radio—and is your only contact with the world you've left behind.</p>
            <p>But when something strange draws you out of your lookout tower and into the world below, you'll explore a wild and unknown environment, facing questions and making interpersonal choices that can build or destroy the only meaningful relationship you have.</p>
          </section>

          <div>
            <button>SCREENS & TRAILERS</button>
            <button>FIREWATCH FAQ</button>
          </div>

          <section>
            <div>img</div>
          </section>

          <section>
            <p>"AS VISUALLY STRIKING AS ITS UNIQUE PREMISE."</p>
            <p>ENTERTAINMENT WEEKLY</p>
          </section>

          <div>
            <button>TECH SUPPORT</button>
            <button>STREAMING & LET'S PLAYS</button>
            <p>日本語に関する情報</p>
          </div>

        </main>

        {/* footer */}
       <Footer/>

      </div>
    </>
  );
};

export default App;
