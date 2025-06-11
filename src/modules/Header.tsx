import { MenuIcon, ModeIcon } from "../assets/icons";
import logo from "../assets/images/logo.svg";
import Button from "../components/Button";
import NavItem from "../components/NavItem";
const Header = () => {
  const navlist = ["Product", "Customers", "Pricing", "Resources"];
  const handleModeIconCick = () => document.body.classList.toggle("mode");

  return (
    <header className="py-[17px] sm:py-[18px]">
      <div className="containers flex items-center justify-between">
        <a className="flex items-center gap-4" href="">
          <img src={logo} alt="Size Logo" width={40} height={36} />
          <strong className="text-[var(--clr-text)] text-[30px] leading-[28px]">
            Product
          </strong>
        </a>

        <div className="flex items-center gap-[24px]">
          {" "}
          <ul className="hidden md:flex items-center gap-[40px]">
            {navlist.map((item, index) => (
              <NavItem title={item} key={index} />
            ))}
          </ul>
          <Button
            extraClass="!bg-transparent  !border-[#BCD0E5] !text-[var(--clr-text)]"
            title="Sign In"
            type="button"
          />
          <Button title="Sign Up" type="button" />
          <button
            onClick={handleModeIconCick}
            className="hidden sm:block bg-[#F3F3F3] cursor-pointer text-[var(--clr-light-green)] p-[4px] rounded-full"
          >
            <ModeIcon />
          </button>
          <button className="md:hidden text-[var(--clr-text)]">
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
