import { Header } from "./Header"
import { Content } from "./Content"
import { Footer } from  "./Footer/Footer.jsx"

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
]

export const App = () => {

  return (
    <>
      < Header />
      < Content articles={data} />
      < Footer />
    </>
  )
}