import React from 'react';
import CategoryCard from './category_card';

class CategoryCardList extends React.Component {
  constructor() {
    super();
    this.state = {clicked: null};
  }

  render() {
    return (
      <div className="category-list-container">
        <CategoryCard icon={() => (<i className="fa-2x fa fa-home" aria-hidden="true"></i>)} text="All Events"></CategoryCard>
        <CategoryCard icon={() => (<i className="fa-2x fa fa-futbol-o" aria-hidden="true"></i>)} text="Sports"></CategoryCard>
        <CategoryCard icon={() => <i className="fa-2x fa fa-microphone" aria-hidden="true"></i>} text="Concerts"></CategoryCard>
        <CategoryCard icon={() => (<i className="fa-2x fa fa-smile-o" aria-hidden="true"></i>)} text="Theater &amp; Comedy"></CategoryCard>
      </div>
    )
  }
};

export default CategoryCardList;