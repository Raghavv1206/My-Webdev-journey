import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {


  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="card 1" description="card 2 desc" />
        <Card title="card 1" description="card 2 desc"/>
        <Card title="card 1" description="card 2 desc"/>
        <Card title="card 1" description="card 2 desc"/>
     </div>
      <Footer />
    </>
  )
}

export default App
