import React from 'react';

export default function Pagination() {
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
            Anterior
          </a>
        </li>
        <li className="page-item active" aria-current="page">
          <a className="page-link" href="#">
            1 <span className="sr-only">(Página atual)</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Próxima
          </a>
        </li>
      </ul>
    </nav>
  );
}
