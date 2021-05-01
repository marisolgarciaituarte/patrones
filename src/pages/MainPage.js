import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <main>
      <section
        style={{
          width: '100%',
          height: 320,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }}
      />
      <section className="d-flex flex-row flex-wrap justify-content-center">
        <Link to="/patrones/patron-1">
          <div className="card">
            <img
              alt="patron-1"
              src="https://source.unsplash.com/300x300/?clothing"
            />
            <p>Patron 1</p>
          </div>
        </Link>
        <Link to="/patrones/patron-2">
          <div className="card">
            <img
              alt="patron-2"
              src="https://source.unsplash.com/300x300/?clothes"
            />
            <p>Patron 2</p>
          </div>
        </Link>
        <Link to="/patrones/patron-3">
          <div className="card">
            <img
              alt="patron-3"
              src="https://source.unsplash.com/300x300/?clothe"
            />
            <p>Patron 3</p>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default MainPage;
