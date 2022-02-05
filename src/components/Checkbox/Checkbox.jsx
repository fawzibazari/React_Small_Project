import PropTypes from 'prop-types';
import React from 'react';
import "./Checkbox.css";

// import style from "./Checkbox.module.css";

export default function CheckBox({ checked, onChange}) {
  
  return (
    <div className="checkbox">
    <div className="border" onClick={() => onChange(!checked)}>
    <div data-testid="checkbox" className={`indicator ${checked ? "checked" : ""}`} />
      </div>
    </div>
  )
}
CheckBox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
};