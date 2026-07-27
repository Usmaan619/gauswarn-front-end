import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import './Breadcrumb.css';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" className="custom-breadcrumb-container">
      <ol className="custom-breadcrumb-list">
        <li className="custom-breadcrumb-item">
          <Link to="/" className="breadcrumb-link home-link" aria-label="Home">
            <Home size={16} />
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const decodedName = decodeURIComponent(name).replace(/-/g, ' ');

          return (
            <React.Fragment key={name}>
              <li className="breadcrumb-separator" aria-hidden="true">
                <ChevronRight size={14} />
              </li>
              <li className={`custom-breadcrumb-item ${isLast ? 'active' : ''}`} aria-current={isLast ? 'page' : undefined}>
                {isLast ? (
                  <span className="breadcrumb-current">{decodedName}</span>
                ) : (
                  <Link to={routeTo} className="breadcrumb-link">
                    {decodedName}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
