import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Iframe from '@trendmicro/react-iframe';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import components from './components.png';

const Main = styled.main`
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
    height: 100vh;
    overflow-y: hidden;
`;

class App extends PureComponent {
    timer = null;

    state = {
        expanded: true,
        componentName: 'react-anchor'
    };

    components = [
        { name: 'react-anchor', label: 'Anchor' },
        { name: 'react-breadcrumbs', label: 'Breadcrumbs' },
        { name: 'react-buttons', label: 'Buttons' },
        { name: 'react-checkbox', label: 'Checkbox' },
        { name: 'react-datepicker', label: 'Datepicker' },
        { name: 'react-dropdown', label: 'Dropdown' },
        { name: 'react-iframe', label: 'Iframe' },
        { name: 'react-interpolate', label: 'Interpolate' },
        { name: 'react-liquid-gauge', label: 'Liquid Gauge' },
        { name: 'react-loader', label: 'Loader' },
        { name: 'react-modal', label: 'Modal' },
        { name: 'react-navbar', label: 'Navbar' },
        { name: 'react-navs', label: 'Navs' },
        { name: 'react-notifications', label: 'Notifications' },
        { name: 'react-paginations', label: 'Paginations' },
        { name: 'react-popover', label: 'Popover' },
        { name: 'react-portal', label: 'Portal' },
        { name: 'react-radio', label: 'Radio' },
        { name: 'react-sidenav', label: 'Side Navigation' },
        { name: 'react-table', label: 'Table' },
        { name: 'react-toggle-switch', label: 'Toggle Switch' },
        { name: 'react-tooltip', label: 'Tooltip' },
        { name: 'react-validation', label: 'Validation' }
    ];

    render() {
        const { expanded } = this.state;

        return (
            <div>
                <SideNav
                    expanded={expanded}
                    onToggle={expanded => {
                        this.setState({ expanded: expanded });
                    }}
                    onSelect={selected => {
                        this.setState({ componentName: selected });
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav>
                        <NavItem
                            eventKey="react-component"
                            expanded
                        >
                            <NavIcon>
                                <img src={components} alt="" style={{ marginRight: 4 }} />
                            </NavIcon>
                            <NavText>
                                React Components
                            </NavText>
                            {this.components.map(component => (
                                <NavItem
                                    key={component.name}
                                    eventKey={component.name}
                                    active={this.state.componentName === component.name}
                                >
                                    <NavText>{component.label}</NavText>
                                </NavItem>
                            ))}
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                <Main expanded={expanded}>
                    <Iframe
                        height="100%"
                        src={`https://trendmicro-frontend.github.io/${this.state.componentName}/`}
                    />
                </Main>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
