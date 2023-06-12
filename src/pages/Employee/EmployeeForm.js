import React from 'react';
import './employee.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default function EmployeeForm() {
  return (
    <div className="">
      <div className="px-3">
        <h1 className="h3 mb-4 text-gray-600">Cadastrar Funcionário</h1>
      </div>
      <form className="row col-12">
        <div className="form-group col-12 row align-items-end mr-0 ml-0 ml-md-1 ml-lg-2 mb-3">
          <div className="col-12 simple-card-shadow">
            <div
              className="col-12 row justify-content-between text-align-center selected"
              data-toggle="collapse"
              data-target="#collapsePerson"
              aria-expanded="false"
              aria-controls="collapsePerson"
            >
              <div className="px-3">
                {/* <i
                  className="
                          fas fa-solid fas fa-circle-exclamation fa-beat-fade danger ml-1'"
                ></i> */}
                <i className="fas fa-solid fa-triangle-exclamation fa-fade"></i>
                {/* <FontAwesomeIcon icon={faExclamationTriangle} /> */}
                <span
                  className="font-weight-light ml-2 danger"
                  style={{ color: 'black' }}
                >
                  Dados Pessoais
                </span>
              </div>
            </div>

            <div
              className="form-group col-12 row align-items-end mr-0 mt-3 ml-0 ml-md-1 ml-lg-2 collapse p-2 pr-lg-3"
              id="collapsePerson"
            >
              <div className="form-group col-w-full col-12 col-lg-4 col-md-8 col-sm-6 mb-3 p-1 pl-md-0">
                <label>Nome *:</label>
                <input type="text" className="form-control" maxLength="120" />
                {/* 
                      <small
                        class="text-danger"
                        v-if="!$v.template.holder.fullName.propName"
                        >Permitido somente letras</small
                      >
                      <small
                        class="text-danger"
                        v-if="
                          !$v.template.holder.fullName.required &&
                          $v.template.holder.fullName.$dirty
                        "
                        >Campo obrigatório</small
                      >
                      <small
                        class="text-danger"
                        v-if="!$v.template.holder.fullName.minWords"
                        >Deve conter no mínimo 2 palavras</small
                      > */}
              </div>
              <div className="form-group col-w-full col-12 col-lg-3 col-md-4 col-sm-3 mb-3 p-1">
                <label>CPF *:</label>
                <input
                  type="text"
                  className="form-control"
                  // v-mask="['###.###.###-##']"
                  maxLength="18"
                />
                {/* <small
                        class="text-danger"
                        v-if="
                          !$v.template.holder.taxDocument.required &&
                          $v.template.holder.taxDocument.$dirty
                        "
                        >Campo obrigatório</small
                      >
                      <small
                        class="text-danger"
                        v-if="!$v.template.holder.taxDocument.cpf"
                        >O campo CPF está invalido</small
                      > */}
              </div>

              <div className="form-group col-w-full col-6 col-lg-2 col-md-4 col-sm-3 mb-3 p-1 pl-lg-1 pl-md-0">
                <label>Gênero *:</label>
                <select className="form-control">
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                  <option value="O">Outro</option>
                </select>
              </div>

              <div className="form-group col-w-full col-6 col-lg-3 col-md-4 col-sm-4 mb-3 p-1">
                <label>Nascimento *:</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Informar data inicial"
                />
                {/* <small
                        class="text-danger"
                        v-if="
                          !$v.template.holder.birthDate.required &&
                          $v.template.holder.birthDate.$dirty
                        "
                      >
                        Campo obrigatório
                      </small> */}
              </div>
              <div className="form-group col-w-full col-6 col-lg-3 col-md-4 col-sm-4 mb-3 p-1">
                <label>Celular *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="(99) 99999-9999"
                />
                {/* <small
                  className="text-danger"
                  v-if="
                          !$v.template.holder.mobile.required &&
                          $v.template.holder.mobile.$dirty
                        "
                >
                  Campo obrigatório
                </small> */}
                {/* <small
                  className="text-danger"
                  v-if="
                          !$v.template.holder.mobile.phone &&
                          $v.template.holder.mobile.$dirty
                        "
                >
                  Celular inválido
                </small> */}
              </div>

              <div className="form-group col-lg-3">
                <label>CNPJ:*</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-lg-3">
                <label className="">Ocupação:*</label>
                <select className="form-control">
                  <option value="amex">Psicólogo</option>
                  <option value="banesecard">Fonoaudiólogo</option>
                  <option value="dinersclub">Terapeuta Ocupacional</option>
                  <option value="elo">AT</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group col-12 row align-items-end mr-0 ml-0 ml-md-1 ml-lg-2 mb-3">
          <div className="col-12 simple-card-shadow">
            <div
              className="col-12 row justify-content-between text-align-center selected"
              data-toggle="collapse"
              data-target="#collapseAddress"
              aria-expanded="false"
              aria-controls="collapseAddress"
            >
              <div className="px-3">
                <i
                  className="
                          fas fa-solid fas fa-circle-exclamation fa-beat-fade danger ml-1'"
                ></i>
                <i className="fa-solid fa-triangle-exclamation fa-fade"></i>

                <em
                  className="font-weight-light ml-2 danger"
                  style={{ color: 'black' }}
                >
                  Endereço
                </em>
              </div>
            </div>

            <div
              className="form-group col-12 row align-items-end mr-0 mt-3 ml-0 ml-md-1 ml-lg-2 collapse p-2 pr-lg-3"
              id="collapseAddress"
            >
              <div className="form-group col-w-full col-12 col-lg-4 col-md-8 col-sm-6 mb-3 p-1 pl-md-0">
                <label>Nome *:</label>
                <input type="text" className="form-control" maxLength="120" />
                {/* 
                      <small
                        class="text-danger"
                        v-if="!$v.template.holder.fullName.propName"
                        >Permitido somente letras</small
                      >
                      <small
                        class="text-danger"
                        v-if="
                          !$v.template.holder.fullName.required &&
                          $v.template.holder.fullName.$dirty
                        "
                        >Campo obrigatório</small
                      >
                      <small
                        class="text-danger"
                        v-if="!$v.template.holder.fullName.minWords"
                        >Deve conter no mínimo 2 palavras</small
                      > */}
              </div>
              <div className="form-group col-w-full col-12 col-lg-3 col-md-4 col-sm-3 mb-3 p-1">
                <label>CPF *:</label>
                <input
                  type="text"
                  className="form-control"
                  // v-mask="['###.###.###-##']"
                  maxLength="18"
                />
                {/* <small
                        class="text-danger"
                        v-if="
                          !$v.template.holder.taxDocument.required &&
                          $v.template.holder.taxDocument.$dirty
                        "
                        >Campo obrigatório</small
                      >
                      <small
                        class="text-danger"
                        v-if="!$v.template.holder.taxDocument.cpf"
                        >O campo CPF está invalido</small
                      > */}
              </div>

              <div className="form-group col-w-full col-6 col-lg-2 col-md-4 col-sm-3 mb-3 p-1 pl-lg-1 pl-md-0">
                <label>Gênero *:</label>
                <select className="form-control">
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                  <option value="O">Outro</option>
                </select>
              </div>

              <div className="form-group col-w-full col-6 col-lg-3 col-md-4 col-sm-4 mb-3 p-1">
                <label>Nascimento *:</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Informar data inicial"
                />
                {/* <small
                        class="text-danger"
                        v-if="
                          !$v.template.holder.birthDate.required &&
                          $v.template.holder.birthDate.$dirty
                        "
                      >
                        Campo obrigatório
                      </small> */}
              </div>
              <div className="form-group col-w-full col-6 col-lg-3 col-md-4 col-sm-4 mb-3 p-1">
                <label>Celular *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="(99) 99999-9999"
                />
                {/* <small
                  className="text-danger"
                  v-if="
                          !$v.template.holder.mobile.required &&
                          $v.template.holder.mobile.$dirty
                        "
                >
                  Campo obrigatório
                </small> */}
                {/* <small
                  className="text-danger"
                  v-if="
                          !$v.template.holder.mobile.phone &&
                          $v.template.holder.mobile.$dirty
                        "
                >
                  Celular inválido
                </small> */}
              </div>

              <div className="form-group col-lg-3">
                <label>CNPJ:*</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-lg-3">
                <label className="">Ocupação:*</label>
                <select className="form-control">
                  <option value="amex">Psicólogo</option>
                  <option value="banesecard">Fonoaudiólogo</option>
                  <option value="dinersclub">Terapeuta Ocupacional</option>
                  <option value="elo">AT</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
