import { Header } from "./Header"
import { Content } from "./Content"
import { Footer } from  "./Footer/Footer.jsx"

const data = [
  {
    id: 1,
    zaner: "esej",
    foto: "",
    nazov: "Ako sa z ľudí stávajú sochy",
    autor: "Juraj Briškár",
    obsah: "Jednu z posledných intenzívnych chvíľ som zažila pri osamelom stúpaní zasneženou lesnou krajinou."
  },
  {
    id: 2,
    zaner: "texty",
    foto: "../assets/dummy/hilma.jpg",
    nazov: "Ako sa z ľudí stávajú sochy",
    autor: "Juraj Briškár",
    obsah: "Jednu z posledných intenzívnych chvíľ som zažila pri osamelom stúpaní zasneženou lesnou krajinou."
  },
  {
    id: 3,
    zaner: "texty",
    foto: "",
    nazov: "Ako sa z ľudí stávajú sochy",
    autor: "Juraj Briškár",
    obsah: "Jednu z posledných intenzívnych chvíľ som zažila pri osamelom stúpaní zasneženou lesnou krajinou."
  },
  {
  id: 4,
  zaner: "esej",
  foto: "",
  nazov: "Ako sa z ľudí stávajú sochy",
  autor: "Juraj Briškár",
  obsah: "Jednu z posledných intenzívnych chvíľ som zažila pri osamelom stúpaní zasneženou lesnou krajinou."
  },
  {
  id: 5,
  zaner: "texty",
  foto: "../assets/dummy/hilma.jpg",
  nazov: "Ako sa z ľudí stávajú sochy",
  autor: "Juraj Briškár",
  obsah: "Jednu z posledných intenzívnych chvíľ som zažila pri osamelom stúpaní zasneženou lesnou krajinou."
 },
 {
  id: 6,
  zaner: "esej",
  foto: "",
  nazov: "Ako sa z ľudí stávajú sochy",
  autor: "Juraj Briškár",
  obsah: "Jednu z posledných intenzívnych chvíľ som zažila pri osamelom stúpaní zasneženou lesnou krajinou."
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