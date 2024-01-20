import MenuLi from "@/components/ui/MenuLi"
import { useRouter } from "next/router"

export default function Foods() {
  const router = useRouter();

  const onRedirect = () => {
    router.push('/about')
  }
  return (
    <section>
      <button onClick={onRedirect}>
        To about
      </button>
      <h1>Our Foods</h1>
      <ul>
        <MenuLi address="details/12">
          pizza
        </MenuLi>
      </ul>
    </section>
  )
}
