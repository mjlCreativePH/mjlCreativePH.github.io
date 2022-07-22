import Link from "next/link";

const NavLink = (props) => {
  return (
    <li className={props.className}>
      <Link href={props.url}>
        <a className="font-Oswald font-semibold block hover:text-red-600 cursor-pointer py-2">{props.children}</a>
      </Link>
    </li>
  );
};

export default NavLink;
