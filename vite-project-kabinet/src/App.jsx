import { Header } from "./Header"
import { Content } from "./Content"
import { Footer } from  "./Footer/Footer.jsx"
import { MenuList } from "./Header/MenuList.jsx"
import { useState } from "react"

const data = [
  {
    id: 1,
    genre: "esej",
    image: "",
    title: "Ako sa z ľudí stávajú sochy",
    author: "Juraj Briškár",
    content: "Jednu z posledných intenzívnych chvíľ som zažila pri osamelom stúpaní zasneženou lesnou krajinou."
  },
  {
    id: 2,
    genre: "texty",
    image: "/assets/dummy/foltynova_krajina.jpg",
    title: "Ako sa z ľudí stávajú sochy",
    author: "Juraj Briškár",
    content: "Jednu z posledných intenzívnych chvíľ som zažila pri osamelom stúpaní zasneženou lesnou krajinou."
  },
  {
    id: 3,
    genre: "esej",
    image: "",
    title: "Ako sa z ľudí stávajú sochy",
    author: "Juraj Briškár",
    content: "Jednu z posledných intenzívnych chvíľ som zažila pri osamelom stúpaní zasneženou lesnou krajinou."
  },
  {
    id: 4,
    genre: "esej",
    image: "/assets/dummy/hilma.jpg",
    title: "Ako sa z ľudí stávajú sochy",
    author: "Juraj Briškár",
    content: "Jednu z posledných intenzívnych chvíľ som zažila pri osamelom stúpaní zasneženou lesnou krajinou."
  },
  {
    id: 5,
    genre: "texty",
    image: "",
    title: "Ako sa z ľudí stávajú sochy",
    author: "Juraj Briškár",
    content: "Jednu z posledných intenzívnych chvíľ som zažila pri osamelom stúpaní zasneženou lesnou krajinou."
  },
  {
    id: 6,
    genre: "esej",
    image: "",
    title: "Ako sa z ľudí stávajú sochy",
    author: "Juraj Briškár",
    content: "Jednu z posledných intenzívnych chvíľ som zažila pri osamelom stúpaní zasneženou lesnou krajinou."
  },
  {
  id: 7,
  genre: "esej",
  image: "/assets/dummy/hilma.jpg",
  title: "Ako sa z ľudí stávajú sochy",
  author: "Juraj Briškár",
  content: "Jednu z posledných intenzívnych chvíľ som zažila pri osamelom stúpaní zasneženou lesnou krajinou."
  },
  {
  id: 8,
  genre: "texty",
  image: "",
  title: "Ako sa z ľudí stávajú sochy",
  author: "Juraj Briškár",
  content: "Jednu z posledných intenzívnych chvíľ som zažila pri osamelom stúpaní zasneženou lesnou krajinou."
  },
  {
  id: 9,
  genre: "esej",
  image: "",
  title: "Ako sa z ľudí stávajú sochy",
  author: "Juraj Briškár",
  content: "Jednu z posledných intenzívnych chvíľ som zažila pri osamelom stúpaní zasneženou lesnou krajinou."
  },
  {
    id: 10,
    genre: "texty",
    image: "",
    title: "Ako sa z ľudí stávajú sochy",
    author: "Juraj Briškár",
    content: "Jednu z posledných intenzívnych chvíľ som zažila pri osamelom stúpaní zasneženou lesnou krajinou."
  },
]

export const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={`app_container ${menuOpen && "menu_open"}`}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      {/* todo: toto bude chtít asi líp napsat + líp nastylovat seznam - padding kolem položek seznamu, ať se líp kliká */}
      {menuOpen && <section className="menu"><MenuList/></section>}

      <Content articles={data}/>
      <Footer/>
    </div>
  )
}