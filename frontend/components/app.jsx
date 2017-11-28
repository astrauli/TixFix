import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import CategoryCardList from './categories/category_card_list';
import EventsListContainer from './events/events_list_container';
import EventShowPageContainer from './events/event_show_page_container';
import SubCategoryListContainer from './categories/subcategory_list_container';
import SubCategoryPageContainer from './categories/subcategory_page_container';
import CFooter from './footer/footer';


class App extends React.Component {

  componentWillReceiveProps(newProps) {

  }

  render() {

    return (
      <div>
        <div className="nav-bar-background"></div>
        <NavBarContainer></NavBarContainer>
        <Route path="/events/:eventId" component={EventShowPageContainer} />

        <Switch>
          <Route exact path="/"component={CategoryCardList}/>
          <Route path="/category"component={CategoryCardList}/>
        </Switch>

        <Switch>
          <Route exact path="/" component={EventsListContainer}/>
          <Route path="/category/:id" component={EventsListContainer}/>
        </Switch>

        <Route path="/subcategory/:id" component={SubCategoryPageContainer} />
        <Route path="/category/:id" component={SubCategoryListContainer} />
        <Route path="/" component={CFooter}/>
      </div>
    )
  }
}


export default App;
