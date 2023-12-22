import { Navbar, NavbarBrand } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';

export default function Header() {
  return (
    <Navbar className="p-2" maxWidth="full">
      <NavbarBrand>
        <Link href="/" className="uppercase font-bold w-full justify-center">
          <h6>Jake Boychenko</h6>
        </Link>
      </NavbarBrand>
    </Navbar>
  );
}
