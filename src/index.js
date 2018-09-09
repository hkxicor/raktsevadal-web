import React from 'react';
import ReactDOM from 'react-dom';
import RootNavigator from './Navigation/index.navigation';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RootNavigator />, document.getElementById('root'));
registerServiceWorker();
