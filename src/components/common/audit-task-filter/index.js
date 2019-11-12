/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/sort-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as FiltersIcon } from 'assets/svg/filter.svg';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
import { debounce } from 'lodash';

import {
  Button,
  Modal,
  // ModalHeader,
  ModalBody,
  ModalFooter,
  // Form,
  FormGroup,
  Label,
  Input,
  // FormText,
} from 'reactstrap';

// import './style.scss';

const Premises = ['Apartment', 'HDB'];

const Divisions = ['Ang Mo Kio', 'Aljunied', 'Eunos'];

const Statuses = ['Pending Audit', 'Show Cause'];

class AuditTaskFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      premises: [],
      divisions: [],
      statuses: [],
      filteredPremises: Premises,
      filteredDivisions: Divisions,
    };

    this.filterPremises = debounce(this.filterPremises, 500);
    this.filterDivisions = debounce(this.filterDivisions, 500);
  }

  filterPremises = event => {
    const text = event.target.value;
    const filteredPremises = Premises.filter(item => item.toLowerCase().includes(text.toLowerCase()));

    this.setState({
      filteredPremises,
    });
  };

  filterDivisions = event => {
    const text = event.target.value;
    const filteredDivisions = Divisions.filter(item => item.toLowerCase().includes(text.toLowerCase()));

    this.setState({
      filteredDivisions,
    });
  };

  onChangePremise = id => {
    const { premises } = this.state;
    const temp = premises;
    const i = temp.indexOf(id);
    if (i >= 0) {
      temp.splice(i, 1);
    } else {
      temp.push(id);
    }
    this.setState({
      premises: temp,
    });
  };

  onChangeDivision = id => {
    const { divisions } = this.state;
    const temp = divisions;
    const i = temp.indexOf(id);
    if (i >= 0) {
      temp.splice(i, 1);
    } else {
      temp.push(id);
    }
    this.setState({
      divisions: temp,
    });
  };

  onChangeStatus = id => {
    const { statuses } = this.state;
    const temp = statuses;
    const i = temp.indexOf(id);
    if (i >= 0) {
      temp.splice(i, 1);
    } else {
      temp.push(id);
    }
    this.setState({
      statuses: temp,
    });
  };

  onClear = () => {
    const { onChange, toggle } = this.props;
    const data = {
      premises: [],
      divisions: [],
      statuses: [],
    };
    this.setState({
      ...data,
      filteredPremises: Premises,
      filteredDivisions: Divisions,
    });
    toggle();
    onChange(data);
  };

  onApply = () => {
    const { onChange, toggle } = this.props;
    const { premises, divisions, statuses } = this.state;
    toggle();
    onChange({ premises, divisions, statuses });
    this.setState({
      filteredPremises: Premises,
      filteredDivisions: Divisions,
    });
  };

  render() {
    const { className, isShowFilter, toggle, statusFilter } = this.props;
    const { premises, divisions, statuses, filteredPremises, filteredDivisions } = this.state;
    return (
      <div className={`filterCont ${className}`}>
        <div id="FilterPopover" onClick={toggle}>
          Filter
          <FiltersIcon />
        </div>
        <Modal isOpen={isShowFilter} toggle={toggle} size="lg">
          {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
          <ModalBody>
            <div className="row">
              <div className={statusFilter ? 'col-md-4' : 'col-md-6'}>
                Premise
                <div className="searchWrapper">
                  <input
                    type="text"
                    className="searchTextfield"
                    placeholder="Keyword for premise"
                    onChange={this.filterPremises}
                  />
                  <SearchIcon className="searchIcon" />
                </div>
                <div style={{ height: 150, overflowY: 'scroll' }}>
                  {filteredPremises.map((item, index) => (
                    <FormGroup check key={`premise__${index.toString()}`}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={premises.includes(item)}
                          onChange={() => this.onChangePremise(item)}
                        />
                        {item}
                      </Label>
                    </FormGroup>
                  ))}
                </div>
              </div>
              <div className={statusFilter ? 'col-md-4' : 'col-md-6'}>
                Division
                <div className="searchWrapper">
                  <input
                    type="text"
                    className="searchTextfield"
                    placeholder="Keyword for division"
                    onChange={this.filterDivisions}
                  />
                  <SearchIcon className="searchIcon" />
                </div>
                <div style={{ height: 150, overflowY: 'scroll' }}>
                  {filteredDivisions.map((item, index) => (
                    <FormGroup check key={`devision__${index.toString()}`}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={divisions.includes(item)}
                          onChange={() => this.onChangeDivision(item)}
                        />
                        {item}
                      </Label>
                    </FormGroup>
                  ))}
                </div>
              </div>
              <div className="col-md-4" hidden={!statusFilter}>
                Status
                {Statuses.map((item, index) => (
                  <FormGroup check key={`status__${index.toString()}`}>
                    <Label check>
                      <Input
                        type="checkbox"
                        checked={statuses.includes(item)}
                        onChange={() => this.onChangeStatus(item)}
                      />
                      {item}
                    </Label>
                  </FormGroup>
                ))}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.onClear} size="lg">
              Clear
            </Button>
            <Button color="primary" onClick={this.onApply} size="lg">
              Apply
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

AuditTaskFilter.defaultProps = {
  statusFilter: true,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuditTaskFilter);
