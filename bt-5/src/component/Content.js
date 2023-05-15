import {Component} from 'react';
class User extends Component {
    render() {
        return (
            <div>
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n            .container{\n                display: flex;\n                 align-items: center;\n                justify-content: center;\n                 min-height: 100vh;\n            }\n        "
                    }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-uppercase mb-0">MANAGER USER</h5>
                                </div>
                                <div className="table-responsive">
                                    <table className="table no-wrap user-table mb-0">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="border-0 text-uppercase font-medium pl-4"
                                                />
                                                <th
                                                    scope="col"
                                                    className="border-0 text-uppercase font-medium"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="border-0 text-uppercase font-medium"
                                                >
                                                    Age
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="border-0 text-uppercase font-medium"
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="border-0 text-uppercase font-medium"
                                                >
                                                    Dateofbirth
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="border-0 text-uppercase font-medium"
                                                >
                                                    Manage
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="border-0 text-uppercase font-medium"
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="pl-4">1</td>
                                                <td>
                                                    <h6 className="font-medium mb-0">Daniel Kristeen</h6>
                                                </td>
                                                <td>
                                                    <span className="text-muted">Visual Designer</span>
                                                    <br />
                                                    <span className="text-muted">Past : teacher</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">daniel@website.com</span>
                                                    <br />
                                                </td>
                                                <td>
                                                    <span className="text-muted">15 Mar 1988</span>
                                                    <br />
                                                </td>
                                                <td>
                                                    <select
                                                        className="form-control category-select"
                                                        id="exampleFormControlSelect1"
                                                    >
                                                        <option>Modulator</option>
                                                        <option>Admin</option>
                                                        <option>User</option>
                                                        <option>Subscriber</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                                                    >
                                                        <i className="fa fa-trash" />{" "}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                                                    >
                                                        <i className="fa fa-edit" />{" "}
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pl-4">2</td>
                                                <td>
                                                    <h6 className="font-medium mb-0">Emma Smith</h6>
                                                </td>
                                                <td>
                                                    <span className="text-muted">Visual Designer</span>
                                                    <br />
                                                    <span className="text-muted">Past : teacher</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">daniel@website.com</span>
                                                    <br />
                                                </td>
                                                <td>
                                                    <span className="text-muted">15 Mar 1855</span>
                                                    <br />
                                                </td>
                                                <td>
                                                    <select
                                                        className="form-control category-select"
                                                        id="exampleFormControlSelect1"
                                                    >
                                                        <option>Modulator</option>
                                                        <option>Admin</option>
                                                        <option>User</option>
                                                        <option>Subscriber</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                                                    >
                                                        <i className="fa fa-trash" />{" "}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                                                    >
                                                        <i className="fa fa-edit" />{" "}
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pl-4">3</td>
                                                <td>
                                                    <h6 className="font-medium mb-0">Olivia Johnson</h6>
                                                </td>
                                                <td>
                                                    <span className="text-muted">Visual Designer</span>
                                                    <br />
                                                    <span className="text-muted">Past : teacher</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">daniel@website.com</span>
                                                    <br />
                                                </td>
                                                <td>
                                                    <span className="text-muted">17 Aug 1988</span>
                                                    <br />
                                                </td>
                                                <td>
                                                    <select
                                                        className="form-control category-select"
                                                        id="exampleFormControlSelect1"
                                                    >
                                                        <option>Modulator</option>
                                                        <option>Admin</option>
                                                        <option>User</option>
                                                        <option>Subscriber</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                                                    >
                                                        <i className="fa fa-trash" />{" "}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                                                    >
                                                        <i className="fa fa-edit" />{" "}
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pl-4">4</td>
                                                <td>
                                                    <h6 className="font-medium mb-0">Isabella Williams</h6>
                                                </td>
                                                <td>
                                                    <span className="text-muted">Visual Designer</span>
                                                    <br />
                                                    <span className="text-muted">Past : teacher</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">daniel@website.com</span>
                                                    <br />
                                                </td>
                                                <td>
                                                    <span className="text-muted">26 Mar 1999</span>
                                                    <br />
                                                </td>
                                                <td>
                                                    <select
                                                        className="form-control category-select"
                                                        id="exampleFormControlSelect1"
                                                    >
                                                        <option>Modulator</option>
                                                        <option>Admin</option>
                                                        <option>User</option>
                                                        <option>Subscriber</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                                                    >
                                                        <i className="fa fa-trash" />{" "}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                                                    >
                                                        <i className="fa fa-edit" />{" "}
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pl-4">5</td>
                                                <td>
                                                    <h6 className="font-medium mb-0">Sophia Jones</h6>
                                                </td>
                                                <td>
                                                    <span className="text-muted">Visual Designer</span>
                                                    <br />
                                                    <span className="text-muted">Past : teacher</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">daniel@website.com</span>
                                                    <br />
                                                </td>
                                                <td>
                                                    <span className="text-muted">16 Aug 2001</span>
                                                    <br />
                                                </td>
                                                <td>
                                                    <select
                                                        className="form-control category-select"
                                                        id="exampleFormControlSelect1"
                                                    >
                                                        <option>Modulator</option>
                                                        <option>Admin</option>
                                                        <option>User</option>
                                                        <option>Subscriber</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                                                    >
                                                        <i className="fa fa-trash" />{" "}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                                                    >
                                                        <i className="fa fa-edit" />{" "}
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pl-4">6</td>
                                                <td>
                                                    <h6 className="font-medium mb-0">Charlotte Brown</h6>
                                                </td>
                                                <td>
                                                    <span className="text-muted">Visual Designer</span>
                                                    <br />
                                                    <span className="text-muted">Past : teacher</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">daniel@website.com</span>
                                                    <br />
                                                </td>
                                                <td>
                                                    <span className="text-muted">15 Mar 1988</span>
                                                    <br />
                                                </td>
                                                <td>
                                                    <select
                                                        className="form-control category-select"
                                                        id="exampleFormControlSelect1"
                                                    >
                                                        <option>Modulator</option>
                                                        <option>Admin</option>
                                                        <option>User</option>
                                                        <option>Subscriber</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                                                    >
                                                        <i className="fa fa-trash" />{" "}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                                                    >
                                                        <i className="fa fa-edit" />{" "}
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;