import Header from "./components/components/Header"
import Section from "./components/components/Section"

const App = () => {
  return (
    <div className='w-full flex flex-col min-h-screen bg-center bg-no-repeat object-cover' style={{backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/05/28/00/06/gift-1420830_1280.jpg)', backgroundSize: 'cover'}}>
      <Header />
      <div className="h-screen grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-center mx-auto w-full px-5 lg:px-20">
        <Section />
      </div>
    </div>
  )
}

export default App