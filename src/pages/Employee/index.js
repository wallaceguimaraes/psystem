import React from 'react';
import Pagination from '../../components/Pagination';
import './employee.css';
import { NavLink } from 'react-router-dom';

export default function EmployeeList() {
  return (
    <div className="">
      <div className="d-flex justify-content-between col-lg-12">
        <div className="">
          <h1 className="h3 mb-4 text-gray-600">Funcionários</h1>
        </div>
        <div className="">
          <NavLink
            className="btn btn-primary"
            to="/app/cadastro/funcionarios/novo"
          >
            <i className="fas fa-plus-circle mr-2"></i>
            <em>Novo</em>
          </NavLink>
        </div>
      </div>
      <form>
        {' '}
        <div className="row col-lg-12">
          <div className="form-group col-lg-4">
            <label className="text-gray-700">Nome:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-lg-4">
            <label className="text-gray-700">CPF:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-lg-4">
            <label className="text-gray-700">Cargo:</label>
            <select className="form-control">
              <option value="">Todos</option>
              <option value="amex">Psicólogo</option>
              <option value="banesecard">Fonoaudiólogo</option>
              <option value="dinersclub">Terapeuta Ocupacional</option>
              <option value="elo">AT</option>
            </select>
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
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Primeiro</th>
              <th scope="col">Último</th>
              <th scope="col">Nickname</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
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
            </tr> */}
            <tr>
              <th scope="row">3</th>
              <td className="">Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <div className="d-flex align-self-end">
                  <div className="text-center mx-auto">
                    <div className="dropdown text-center mx-auto">
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary btn-pill dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Ações
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="btn btn-sm btn-link text-left dropdown-item">
                            Detalhes
                          </a>
                          <button
                            type="button"
                            className="btn btn-sm btn-link text-left dropdown-item"
                          >
                            Inativar
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-link text-left dropdown-item"
                          >
                            Ativar
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-link text-left dropdown-item"
                            data-toggle="modal"
                          >
                            Excluir
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
}
