import React from "react";

import { Header } from "../Header";
import { PostList } from "../PostList";
import { Footer } from "../Footer";

export class Layout extends React.Component {
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    // e executado antes do componente sair da tela
    document.removeEventListener('scroll', this.handleScroll)
    console.log("componentWillUnmount desmonta");

  }

  handleScroll = () => {
    console.log('scrolled....')
  }

  render() {
    return (
      <>
        {/* {undefined.map(item => item)} */}
        <Header />
        <PostList />
        <Footer />
      </>
    );
  }
}
