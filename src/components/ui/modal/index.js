import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.scss';
import SystemModal from './SystemModal';
import ActionModal from './ActionModal';

class CustomModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: this.props.show
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <Modal isOpen={this.state.isOpen} toggle={this.toggle} className={this.props.className}>
                {
                    this.props.type === 'system-modal' ? (
                        <SystemModal />
                    ) : this.props.type === 'action-modal' ? (
                        <ActionModal />
                    ) : <SystemModal />
                }
            </Modal>
        )
    }
}

export default CustomModal;
