/*
Configure uma estrutura ReactJS do zero com Babel, Webpack e Webpack Dev Server. Além
disso, utilize as ferramentas ESLint, EditorConfig e Prettier durante o desenvolvimento desse
projeto.

Nesse projeto você desenvolverá um feed de posts estilo Facebook. Crie um layout tentando
chegar o mais próximo possível da imagem abaixo:

REGRAS
O Header deve ser um componente separado;
O Post deve ser um componente separado;
O header do post aonde estão o avatar, nome e tempo do post devem estar em um
componente separado chamado PostHeader;
Os posts devem estar armazenado no estado (state) do arquivo principal App.js;
Você deve passar a informação dos posts como uma única propriedade para o
componente de Post quando realizar o map no state de posts: ;
*/
import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Header from "../src/Components/Header";
import Post from "../src/Components/Post";
import "./scss/App.scss";

class App extends Component {
  state = {
    posts: [
      {
        author: "Matheus Germano",
        time: "há 5 min",
        avatar: "https://ui-avatars.com/api/?name=Valdir+Coxev",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        author: "Marina Ponce",
        time: "há 5 min",
        avatar: "https://ui-avatars.com/api/?name=Diego+Schell",
        text:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        author: "Mimi Morais Ponce",
        time: "há 50 min",
        avatar:
          "https://i.pinimg.com/originals/da/1e/b6/da1eb6fc3cbcb2d88dde19ba0da7ad2e.jpg",
        text: "It is a long established fact that a read.",
      },
    ],
  };

  carregaPosts = () => {
    const { posts } = this.state;
    return posts.map((post) => (
      <Post
        avatar={post.avatar}
        author={post.author}
        time={post.time}
        text={post.text}
      />
    ));
  };
  render() {
    return (
      <div className="main">
        <Fragment>
          <Header />
          {this.carregaPosts()}
        </Fragment>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
