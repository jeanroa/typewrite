import React from 'react'
import Typewriter from 'typewriter-effect';

function TypingAnimation(props) {

  return (
    <div>
      <Typewriter
        options={{
          strings: ['Profesionales', 'Freelancers', 'Personas', 'a los mejores'],
          autoStart: true,
          loop: true,
        }}/>
    </div>
  )
}

export default TypingAnimation