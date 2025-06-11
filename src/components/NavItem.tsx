import type { FC } from "react";

const NavItem: FC<{ title: string }> = ({ title }) => {
  return (
    <li>
      <a
        className="hover:text-[var(--clr-light-green)] duration-300 font-medium text-[16px] text-[var(--clr-text)] leading-[28px]"
        href="#"
      >
        {title}
      </a>
    </li>
  );
};

export default NavItem;
