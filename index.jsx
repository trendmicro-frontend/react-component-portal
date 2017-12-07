import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import Anchor from '@trendmicro/react-anchor';
import Iframe from '@trendmicro/react-iframe';
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import components from './components.png';

const Nav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1006;
    background: #db3d44;
    transition: min-width 0.15s;
`;

const NavItems = styled.ul`
    float: left;
    clear: both;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
`;

const NavItem = styled.li`
    clear: both;
    position: relative;
`;

const SubNavItems = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    float: left;
    clear: both;
    width: 100%;
    box-shadow: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    background: transparent;
    overflow: hidden;
`;

const SubNavItem = styled.li`
    position: relative;
    margin-top: 8px;

    &::before {
        content: " ";
        width: 100%;
        height: 28px;
        position: absolute;
        top: 0;
        z-index: -1;
    }

    &:hover {
        &::before {
            opacity: 0.15;
            background: #fff;
        }
        > a {
            color: #fff;
            background: transparent;
        }
    }

    > a {
        display: block;
        color: #f9dcdd;
        font-weight: normal;
        font-size: 13px;
        line-height: 28px;
        text-decoration: none;
        padding: 0px 14px 0px 20px;
    }

    ${props => (props.active && `
    > a {
        color: #fff;
        font-weight: bold;

        &::before {
            content: " ";
            width: 2px;
            height: 20px;
            position: absolute;
            left: 10px;
            top: 4px;
            border-left: 2px solid #fff;
        }
    }
    `)}
`;

const Main = styled.main`
    margin-left: 240px;
    height: 100vh;
    overflow-y: hidden;
`;

class App extends PureComponent {
    timer = null;

    state = {
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
        { name: 'react-radio-button', label: 'Radio Button' },
        { name: 'react-table', label: 'Table' },
        { name: 'react-toggle-switch', label: 'Toggle Switch' },
        { name: 'react-tooltip', label: 'Tooltip' },
        { name: 'react-validation', label: 'Validation' }
    ];

    render() {
        return (
            <div>
                <Nav style={{ width: 240 }}>
                    <NavItems>
                        <NavItem>
                            <Anchor style={{ fontSize: 16 }}>
                                <img src={components} alt="" style={{ marginRight: 4 }} />
                                <span style={{ color: '#fff' }}>React Components</span>
                            </Anchor>
                            <SubNavItems>
                                {this.components.map(component => (
                                    <SubNavItem
                                        key={component.name}
                                        active={this.state.componentName === component.name}
                                    >
                                        <Anchor
                                            style={{ fontSize: 14 }}
                                            onClick={() => {
                                                this.setState({ componentName: component.name });
                                            }}
                                        >
                                            {component.label}
                                        </Anchor>
                                    </SubNavItem>
                                ))}
                            </SubNavItems>
                        </NavItem>
                    </NavItems>
                </Nav>
                <Main>
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
