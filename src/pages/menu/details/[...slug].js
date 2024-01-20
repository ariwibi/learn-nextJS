import { useRouter } from "next/router";
import { useEffect } from "react";
const DetailMenuSlug = () => {
  const router = useRouter()
  useEffect(() => {
    if(!router.query.slug) return;
    const [name, id] = router.query.slug;
    console.log(name, id)

  })
  

    return (
    <section>
      this is your thai tea
    </section>
  )
}

export default DetailMenuSlug;
