import { useRouter } from "next/router";
import { useEffect } from "react";
const DetailMenu = () => {
  const router = useRouter()
  const {id} = router.query;
  

  useEffect(() => {
    if(!id) return
    console.log(id)
  }, [router.query])
  return (
    <section>
      this is your pizza
    </section>
  )
}

export default DetailMenu;
