liform-tabs-react
============

Adds tab functionality to the liform-react component.  Original documentation for the liform-react component can be found here: [liform-react](https://github.com/Limenius/liform-react).


### Basic usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import Liform from '../../../../src/'

const Demo = () => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    const schema = {
        'tabs': 3,
        'tabNames': ["Personal Information", "Work Eligibility", "Demographics"],
        'type':'object',
        'properties': {
            'firstName': { 'type':'string', 'title': 'First Name', 'tab': 1 },
            'lastName': { 'type':'string', 'title': 'Last Name', 'tab': 1 },
            'email': { 'type': 'string', 'title': 'Email', 'widget': 'email', 'format': 'email', 'tab': 1  },
            'resume': {'type': 'string', 'title': 'Resume', 'widget': 'textarea', 'tab': 1},
            'ethnicity': { 'enum':[ 'Hispanic/Latino','Not Hispanic/Latino' ], 'type':'string', 'title': 'Ethnicity', 'tab': 3 },
            'veteranStatus': { 'enum':[ 'Protected Veteran','Veteran', 'Not a Veteran', 'Do not wish to disclose' ], 'type':'string', 'title': 'Veteran Status', 'tab': 3 },
            'disability': { 'enum':[ 'Disabled','Not Disabled', 'Do not wish to disclose' ], 'type':'string', 'title': 'Disability', 'tab': 3 },
            'eligibtyProof': { 'type':'string', 'title': 'Are you able to provide proof of eligibilty to work in the US?', 'tab': 2 },
            'sponsorship': { 'enum':[ 'Yes','No' ], 'type':'string', 'title': 'Will you require sponsorship for employment status?', 'tab': 2 },
            'availability': { 'type': 'string', 'title': 'When would you be available to start?', 'widget': 'compatible-date', 'format': 'date', 'tab': 2 },
            'checkbox': { 'type':'boolean', 'title': 'I agree with your terms', 'tab': 3 }
        }
    }
    return (
        <Provider store={store}>
            <Liform schema={schema} onSubmit={(v) => {console.log(v)}}/>
        </Provider>
    )
}

ReactDOM.render(
    <Demo/>,
    document.getElementById('placeholder')
)

```

Added two new keys to schema and another key for the descendants of properties within schema.

- `'tabs':`  is a key on schema and the value is an integer representation of how many tabs will be displayed.
- `'tabNames':`  is a key on schema and the value is an array of strings that represent the title of the tabs.
- `'tab':` is a key on the descendants of properties and the value is an integer representation of which tab the field will appear on.

![liform-tabs-react-example](https://github.com/adamk1230/liform-tabs-react/blob/master/docs/images/example-liform-tabs-react.png "liform-tabs-react example")

### Running the Example

Run the 'tabs' example to see the tab functionality.  The 'simple' is located example in `doc/pages/examples/tabs`, clone this repository, then run:

```bash
npm install
webpack

cd doc/pages/examples/tabs
node server.js
```

### Tab Functionality Authors

- Adam Kwan

### Original Authors 

- found at [liform-react](https://github.com/Limenius/liform-react).