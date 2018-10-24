import React from 'react'
import PropTypes from 'prop-types'
import { DeveloperTemplate } from '../../templates/developer'

const DeveloperPreview = ({ entry, widgetFor }) => (
  <DeveloperTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

DeveloperPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DeveloperPreview
