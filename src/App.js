import React  from    'react';

import About  from    './About/About';
import Cars   from    './Cars/Cars';

const App = () => {
  return (
    <div>

      <nav className={'nav'}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </nav>

      <hr/>

      <About />

      <Cars />

    </div>
  )
}
export default App;