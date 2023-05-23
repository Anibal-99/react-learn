import { useState } from "react"

const TURNS = {

  X: 'x',
  O: 'o'

}

const Square = ({ children, updateBoard, index })=>{
  return (
    <div className="square">
      {children}
    </div>
  )
}

function App() {
  // a board lo vamos a usar como estado, un estado cada ves que cambie va a volver a renderizar el componente
  const [board, setBoard] = useState(['o', 'x','x','o','x','x','o','o','x']) // creo un tablero de 9 posiciones, tiene 2 parametros, uno es el board(valor actual que toma) y otra forma para setear ese valor
  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {
            board.map((_, index) =>{ // _ representa al valor actual y el index es el indice del bucle
            return (
              <Square
                  key = {index}
                  index= {index}
                >
                  {board[index]}
              </Square>
            )
          })
        }
      </section>
    </main>

  )
}

export default App
