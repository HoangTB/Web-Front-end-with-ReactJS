import { Component } from 'react'
import Header from './Header';
import MainMenu from './MainMenu';
import ListProduct from './ListProduct';
import ListContent from './ListContent';
import Foofer from './Footer';
class Content extends Component {
  render() {
    return (
      <div>
        {/* Header  */}
        <Header />
        {/* MainMenu */}
        <MainMenu />
        {/* ListProduct */}
        <ListProduct />
        {/* ListContent */}
        <ListContent />
        <ListContent />
        {/* Footer area */}
        <Foofer />
      </div>

    )
  }
}
export default Content;