import React from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Horarios from './components/horarios'
import Title from './components/title'

const App = () => (
    <MuiThemeProvider>
        <div>
            <Title />
            <Horarios />
        </div>
    </MuiThemeProvider>
);

Meteor.startup(() => {
    render(<App />, document.getElementById('app'));
});
