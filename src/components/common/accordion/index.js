import React from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import { ReactComponent as ArrowDownIcon } from 'assets/svg/dropdown-arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from 'assets/svg/dropdown-arrow-up.svg';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    const { isOpen } = props;
    this.state = {
      isOpen: isOpen || false,
      isUpdatedProp: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.isUpdatedProp && props.isOpen !== state.isOpen) {
      return {
        isOpen: props.isOpen,
        isUpdatedProp: true,
      };
    }
    return null;
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { id, headerColor, headerChildren, isEdit, children } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={`accordion ${headerColor}`} key={id}>
        <div onClick={this.toggle}>
          <div className={`accordion-header d-flex align-items-center ${headerColor}`}>
            {headerChildren}

            {isOpen ? (
              <ArrowUpIcon className="ml-auto" width={24} height={24} />
            ) : (
              <ArrowDownIcon className="ml-auto" width={24} height={24} />
            )}
          </div>
        </div>
        <Collapse isOpen={isOpen} className={isEdit ? 'is-edit' : ''}>
          <Card>
            <CardBody>{children}</CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Accordion;
