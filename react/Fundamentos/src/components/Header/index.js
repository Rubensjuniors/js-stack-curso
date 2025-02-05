import React from "react";
import { Container } from "./styled";
// import PropTypes from "prop-types";
import { ThemeContext } from "../../context/themeContext";


export class Header extends React.Component {
  // static propTypes = {
  //   theme: PropTypes.string.isRequired,
  //   toggleTheme: PropTypes.func.isRequired,
  // };

  render() {
    return (
      <Container>
        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => (
            <>
              <h1>JS Blog</h1>
              <button type="button" onClick={() => toggleTheme()}>
                {theme === "dark" ? "🌞" : "🌑"}
              </button>
            </>
          )}
        </ThemeContext.Consumer>
      </Container>
    );
  }
}

// Header.propTypes = {
//   theme: PropTypes.string.isRequired,
//   toggleTheme: PropTypes.func.isRequired
// }
