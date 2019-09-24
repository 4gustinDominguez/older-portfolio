import * as React from 'react';
import { render } from 'react-dom';
import './styles.css';

type AppProps = {};

const App: React.FunctionComponent<AppProps> = () => <>{`Hi, I'm fg93 website!`}</>;

render(<App />, document.getElementById('root'));
