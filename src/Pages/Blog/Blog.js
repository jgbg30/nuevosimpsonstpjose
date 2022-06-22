import React from 'react'
import './Blog.css'
import carrousel2 from './img/carrousel-2.jpg'
import meme2 from './img/meme-2.jpg'

const Blog = () => {
  return (
    <div className="container">
      <h2>Los Simpson Temporada 5</h2>
<img src={carrousel2} width="200px" height="200px" alt="cont" />
  <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur id tellus vitae ultricies. Curabitur ligula turpis, dignissim sit amet enim non, feugiat pulvinar ante. Sed ac turpis eget ante egestas pulvinar. Pellentesque eros purus, porttitor eget viverra id, mattis a elit. Pellentesque sed dapibus velit. In vestibulum ac ipsum sed facilisis. Phasellus sapien sapien, convallis et nisi auctor, molestie egestas ex. Sed volutpat risus ac mi rhoncus tincidunt nec id risus. Sed tempus fermentum metus ut fermentum.
</p>

<h2>Bart golpea a homero con una silla - Temporada 6 Episodio -104</h2>
<img src={meme2} width="200px" height="200px" alt="cont" />
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur id tellus vitae ultricies. Curabitur ligula turpis, dignissim sit amet enim non, feugiat pulvinar ante. Sed ac turpis eget ante egestas pulvinar. Pellentesque eros purus, porttitor eget viverra id, mattis a elit. Pellentesque sed dapibus velit. In vestibulum ac ipsum sed facilisis. Phasellus sapien sapien, convallis et nisi auctor, molestie egestas ex. Sed volutpat risus ac mi rhoncus tincidunt nec id risus. Sed tempus fermentum metus ut fermentum.
</p>

    </div>
  )
}

export default Blog