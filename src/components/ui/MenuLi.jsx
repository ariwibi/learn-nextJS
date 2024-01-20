import Link from "next/link"

const MenuLi = ({children, address}) => {
  return (
    <Link href={address} className="liMenu">{children}</Link>
  ) 
}

export default MenuLi;
