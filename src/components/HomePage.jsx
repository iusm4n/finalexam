// HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllCategories } from './categoriesThunks';
import { selectCategories } from '../redux-tools/categoriesSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    // Fetch all categories using the fetchAllCategories thunk when the component mounts
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      {/* Map through the categories and display them as links */}
      {categories.map((category) => (
        <div key={category.name}>
          <Link to={`/details/${category.name}`}>{category.category}</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
