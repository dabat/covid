import Stats from "../components/Stats";
import CountrySelector from "../components/CountrySelector";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  font-family: -apple-system, Roboto, Oxygen, Ubuntu, 'Open Sans',
  'Helvetica Neue',  sans-serif;
  padding: 2rem;
  margin: 1rem;
  border-radius: 2rem;
  text-align: center;
`;

const Link = styled.div`
  font-family: Roboto, "Helvetica Neue", sans-serif;
  font-size: 0.5rem;
`;

export default function IndexPage() {
  return (
    <div>
      <GlobalStyle />
      <Stats url="https://covid19.mathdro.id/api" />
      <CountrySelector />
      <Link>
        The source for this app is Wes Bos'{" "}
        <a href="https://youtu.be/B85s0cjlitE">
          <span>React Hooks Coronavirus API Code Along</span>
        </a>{" "}
        tutorial. Thanks Wes!
      </Link>
    </div>
  );
}
