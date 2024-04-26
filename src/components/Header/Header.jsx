import Container from "components/Container/Container";
import { HeaderBlock, List, Link } from "./Header.module";

const Header = () => {
  return (
    <HeaderBlock>
      <Container>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </List>
      </Container>
    </HeaderBlock>
  );
};

export default Header;
