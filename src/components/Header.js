import MenuLi from "./ui/MenuLi";

const Header = () => {
  return (
    <header>
      <MenuLi address="/">
        <img src="/images/logo/logo.svg" width="50"/>
      </MenuLi>
      <MenuLi address="/about">
        about
      </MenuLi>

      <MenuLi address="/contact-us">
        contact
      </MenuLi>
       <MenuLi address="/menu/foods">
        foods
      </MenuLi>
       <MenuLi address="/menu/drinks">
        drink
      </MenuLi>


    </header>
  )
}

export default Header;
