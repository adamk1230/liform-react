import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Field } from 'redux-form'
import _ from 'lodash'

const renderSelect = field => {
    const className = classNames([
        'form-group',
        { 'has-error' : field.meta.touched && field.meta.error }
    ])
    const options = field.schema.enum

    const enum_titles = field.schema.enum_titles || field.schema.options? field.schema.options.enum_titles: {}
    const optionNames = enum_titles || options

    const selectOptions = _.zipObject(options, optionNames)
    return (
        <div className={className}>
            <label className="control-label" htmlFor={'field-'+field.name}>{field.label}</label>
            <select {...field.input} className="form-control" id={'field-'+field.name} required={field.required} multiple={field.multiple}>
                { !field.required && !field.multiple && <option key={''} value={''}>{field.placeholder}</option> }
                { _.map(selectOptions, (name, value) => {
                    return <option key={value} value={value}>{name}</option>
                })}
            </select>

            {field.meta.touched && field.meta.error && <span className="help-block">{field.meta.error}</span>}
            {field.description && <span className="help-block">{field.description}</span>}
        </div>
    )
}

const ChoiceWidget = props => {
    return (
        <Field
            component={renderSelect}
            label={props.label}
            name={props.fieldName}
            required={props.required}
            id={'field-'+props.fieldName}
            placeholder={props.schema.default}
            description={props.schema.description}
            schema={props.schema}
            multiple={props.multiple}
        />
    )
}

ChoiceWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    fieldName: PropTypes.string,
    label: PropTypes.string,
    theme: PropTypes.object,
    multiple: PropTypes.bool,
    required: PropTypes.bool,
}

export default ChoiceWidget
