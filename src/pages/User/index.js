import { Form } from 'react-bootstrap';

export const User = () => {
  return (
    <div className="">
      <h1 className="h3 mb-4 text-gray-600">Cadastrar usuarios</h1>
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-1">
          <div className="card-body p-0">
            <div className="row">
              {/* <div className="col-lg-5 d-none d-lg-block bg-register-image"></div> */}
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Create an Account!
                    </h1>
                  </div>
                  <Form class="user">
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <Form.Control
                          type="text"
                          class="form-control form-control-user"
                          id="exampleFirstName"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-sm-6">
                        <Form.Control
                          type="text"
                          class="form-control form-control-user"
                          id="exampleLastName"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <Form.Control
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <Form.Control
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                      </div>
                      <div className="col-sm-6">
                        <Form.Control
                          type="password"
                          class="form-control form-control-user"
                          id="exampleRepeatPassword"
                          placeholder="Repeat Password"
                        />
                      </div>
                    </div>
                    <a
                      href="login.html"
                      className="btn btn-primary btn-user btn-block"
                    >
                      Register Account
                    </a>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
