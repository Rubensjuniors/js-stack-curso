import React from "react";
import { Layout } from "../Layout";
import GlobalStyle from "../../styles/global";
import { ThemeProvider } from "styled-components";
import * as themes from "../../styles/themes/index";
import { ThemeContext, ThemeContextProvider } from "../../context/themeContext";

export class App extends React.Component {
  state = {
    changed: false
  }
  componentDidMount() { //acontece apenas no primero render
    console.log('componentDidMount executed')
  }

  componentDidUpdate(prevProps, prevState) { // acontece toda vez que o componente e atualizado depois de renderizar
    console.log('componentDidMount executed', {
      prevProps,
      prevState
    })
  }

  componentDidCatch(error, info) { // quando acontece um error nos components filhos
    console.log('componentDidCatch executed', {
      error,
      info
    })
  }

  shouldComponentUpdate(nextProps, nextState) { // acontece toda vez que o componente e atualizado antes de renderizar
    console.log('shouldComponentUpdate executed', {
      nextProps,
      nextState
    })

    return true // deve retornar valor boolean true para executar e false para n executar
  }

  componentWillUnmount() { // e executado antes do componente sair da tela
    console.log('componentWillUnmount executed')

  }

  render() {
    console.log('rendered')
    return (
      <ThemeContextProvider>
        <button onClick={() => this.setState({ changed: true })}>Change State</button>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <ThemeProvider theme={themes[theme] ?? themes.light}>
              <GlobalStyle />
              <Layout />
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContextProvider>
    );
  }
}
