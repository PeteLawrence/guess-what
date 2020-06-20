import React from 'react';

class AboutPage extends React.Component {

  /**
   * Renders the Marker component
   * @return {[type]} [description]
   */
  render() {
    return (
      <>
        <h1>About</h1>

        <p>Thank you to Pete Lawrence, Joel Cunningham, Dave Bloxham and Angela Collins for helping me create this revision tool!</p>

        <p>Wrapping your head around the clinical applications of flow cytometry can take some time. Remembering surface markers and small differences between conditions can be even harder. </p>

        <p>I therefore tried to develop a revision tool to make the learning process easier and hopefully also more fun. The idea came from Angela Collins, who always explained flow cytometry as being just like a game of Guess Who, you establish the presence or absence of characteristics (CD markers rather than glasses and hats) until you reach the final diagnosis by building up a picture of the disease. With additional help from Joel Cunningham and Dave Bloxham, I created a simple board game.</p>

        <img src="/images/game.jpg" class="rounded mx-auto my-3 d-block" />

        <p>And it worked! We managed to learn the flow cytometry markers for the main haematological disorders and were having fun at the same time. It seemed such a good revision tool that I wanted to share it with others, we thought about making more boards but at a time when meeting up for board games or even revision sessions became impossible, due to the Covid-19 pandemic, we had to think of an alternative. Thank you to Pete Lawrence for creating this electronic version for us!</p>

        <h2>How to play</h2>
        <p>It's easy!</p>

        <ol>
          <li>Find a friend</li>
          <li>At the top of the page is the card for your opponent to guess.</li>
          <li>Take it in turns to ask about the abscence or presence of a marker to narrow down your diagnosis.</li>
          <li>Click on the cards of the condition you have eliminated until only one card remains.</li>
          <li>The final step is to identify the condition on the card you have left. For those less familiar with haematological conditions it is possible to toggle all cards so the conditions are all visible.</li>
          <li>Scroll to the bottom to select new game to shuffle all cards and start again.</li>
        </ol>

        <p>Hope you enjoy playing this is much as we do in our department,</p>

        <p>
          Charlotte Hellmich (<a href="https://twitter.com/c_hellmich" target="_blank">@c_hellmich</a>)
          <br />
          Haematology Registrar
        </p>
      </>
    );
  }
}
export default AboutPage;
