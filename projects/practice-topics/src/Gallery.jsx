function Profile(){
  return (
      <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
  );
}

export function Avatar(){
  return(
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}

export function AvatarDos(){

  const src = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';

  return (

    <img
      src={src}
      alt={description}
      />
  )

}

export function TodoList(){
  const name = 'francisca';

  return (
    <h1>{name}</h1>
  );
}

// css como un objeto por parametro

export function TodoListCss(){
  return (
    <ul style={{
      background: 'black',
      color: 'pink',
    }}>
      <li>Anibal</li>
      <li>Alvarez</li>
    </ul>

  );
}

const person = {
  name: 'anibal',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  }
}

export function Selva(){
  return (
    <div style={person.theme}>
      <h1>{person.name} Alvarez</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

function Gallery(){
    return (
    <section>

      <h1>Amazing scientists</h1>
      {/* <TodoListCss /> */}
      <Selva />
    </section>
  );
}

export default Gallery
