import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import selectTableHOC from 'react-table/lib/hoc/selectTable';

const SelectTable = selectTableHOC(ReactTable);

const Table = props => {
  const { keyField } = props;

  const [select, setSelect] = useState({
    selectAll: false,
    selection: [],
  });

  let checkboxTable = useRef();

  const toggleSelection = (key, _shift, _row) => {
    let selection = [...select.selection];

    const keyIndex = selection.indexOf(key);

    if (keyIndex === -1) {
      selection.push(key);
    } else {
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1),
      ];
    }

    setSelect({ ...select, selection });
  };

  const toggleAll = () => {
    const selectAll = !select.selectAll;

    const selection = [];

    if (selectAll) {
      const wrappedInstance = checkboxTable.getWrappedInstance();

      const currentRecords = wrappedInstance.getResolvedState().sortedData;

      currentRecords.forEach(item => {
        selection.push(`select-${item._original[keyField]}`);
      });
    }

    setSelect({ selectAll, selection });
  };

  const isSelected = key => select.selection.includes(`select-${key}`);

  return !props.selectable ? (
    <ReactTable {...props} />
  ) : (
    <SelectTable
      {...props}
      selectType="checkbox"
      keyField={keyField}
      ref={r => (checkboxTable = r)}
      toggleSelection={toggleSelection}
      toggleAll={toggleAll}
      isSelected={isSelected}
      selectAll={select.selectAll}
    />
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  keyField: PropTypes.string.isRequired,
  selectable: PropTypes.bool,
};

export default Table;
