import React from 'react';

class Footer extends React.Component {

  render() {
    return(
      <footer>
        <div className='container'>

          <div className='social-media'>
            {/* <h2>Nos Réseaux</h2> */}
            <ul>
              <li className='suivez-nous'>Suivez Nous : </li>
              <li><a href='#'><i class="fab fa-facebook-square"></i></a></li>
              <li><a href='#'><i class="fab fa-twitter-square"></i></a></li>
              <li><a href='#'><i class="fab fa-instagram-square"></i></a></li>
              <li><a href='#'><i class="fab fa-youtube-square"></i></a></li>
              <li><a href='#'><i class="fab fa-whatsapp-square"></i></a></li>
            </ul>
          </div>

          <div className='contact'>
            {/* <h2>Contactez Nous</h2> */}
            <div className='form'>
                <input type='text' placeholder='Tape ton nom...' />
                <input type='email' placeholder='email@exemple.com' />
                <textarea type='text' placeholder='message...'></textarea>
                <button >Envoyer</button>
            </div>
          </div>

          {/* <div className='sponsors'>
            <ul>
            <li>Series</li>
            <li>Movies</li>
            <li>Action</li>
            <li>Western</li>
            <li>React JS</li>
            </ul>
          </div> */}

          <div>
            <div className='copyright'>
              <p>© 1990-2020 by HASSAN, Inc.</p>
            </div>
          </div>

        </div>
      </footer>
    );
  }
}
export default Footer;