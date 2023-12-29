// DetailsPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCategoryDetails } from './detailsThunks';
import { selectDetails, clearDetails } from '../redux-tools/detailsSlice';

const DetailsPage = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(fetchCategoryDetails(categoryName));

    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, categoryName]);

  return (
    <div>
      <h1>Details Page</h1>
      <Link to="/">Go back to Home</Link>
      {details && (
        <div>
          <h2>Name: {details.name}</h2>
          <p>Group: {details.group}</p>
          <p>Category: {details.category}</p>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
