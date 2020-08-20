import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getServices, deleteService } from "../../actions/services";

export class Services extends Component {
  static propTypes = {
    services: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getServices();
  }

  render() {
    return (
      <div>
        <Fragment>
          <h2>Services</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.services.map((service) => (
                <tr key={service.id}>
                  <td>{service.id}</td>
                  <td>{service.name}</td>
                  <td>{service.email}</td>
                  <td>{service.message}</td>
                  <td>
                    <button
                      onClick={this.props.deleteService.bind(this, service.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  services: state.services.services,
});

export default connect(mapStateToProps, { getServices, deleteService })(
  Services
);
