import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
            this.reqInterceptors = axios.interceptors.request.use(res => {
                this.setState({ error: null });
                return res;
            }, error => {
                this.setState({ error: error.toString() });
            })

            this.resInterceptors = axios.interceptors.response.use(res => {
                this.setState({ error: null });
                return res;
            }, error => {
                this.setState({ error: error.toString() });
            })

        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptors);
        }
        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} hideHandler={this.errorConfirmedHandler}>{this.state.error}</Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;