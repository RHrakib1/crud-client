
import './App.css'

function App() {

  const hendleform = e => {
    e.preventDefault()
    const adddata = e.target
    const name = adddata.name.value
    const email = adddata.email.value
    const objdata = { name, email }
    console.log(objdata)
  }


  return (
    <>
      <h1>hi server</h1>
      <form onSubmit={hendleform}>
        <input type="text" name='name' placeholder='input your name' />
        <input type="email" name='email' placeholder='input your email' />
        <input type="submit" value='add data' />
      </form>
    </>
  )
}

export default App
