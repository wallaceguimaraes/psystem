import React from 'react';
import Pagination from '../../components/Pagination';

export const Rule = () => {
  return (
    <>
      <form>
        <div className="row col-lg-12">
          <div className="form-group col-lg-4">
            <label className="text-gray-700">Nome:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-lg-4">
            <label className="text-gray-700">Nickname:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-lg-2 align-self-end">
            <button type="submit" className="col-lg-12 btn btn-primary">
              Pesquisar
            </button>
          </div>
          <div className="form-group col-lg-2 align-self-end">
            <button type="submit" className="col-lg-12 btn btn-outline-primary">
              Limpar filtro
            </button>
          </div>
        </div>
      </form>
      <div
        className="table-responsive"
        //   style="max-height: 300px; overflow-y: auto;"
      >
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Primeiro</th>
              <th scope="col">Último</th>
              <th scope="col">Nickname</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </>
  );
};
