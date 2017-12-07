import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import Anchor from '@trendmicro/react-anchor';
import Iframe from '@trendmicro/react-iframe';
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import components from './components.png';
//import styles from './index.styl';

const Nav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1006;
    //min-width: 240px;
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

    > a {
        display: block;
        color: rgb(249, 220, 221);
        font-size: 13px;
        line-height: 28px;
        text-decoration: none;
        padding: 0px 14px 0px 20px;
    }

    &.selected > a {
        color: #fff;
    }
`;

const Main = styled.main`
    margin-left: 240px;
`;

class App extends PureComponent {
    timer = null;

    state = {
        component: 'react-anchor'
    };

    components = [
        'react-anchor',
        'react-breadcrumbs',
        'react-buttons',
        'react-checkbox',
        'react-datepicker',
        'react-dropdown',
        'react-iframe',
        'react-interpolate',
        'react-liquid-gauge',
        'react-loader',
        'react-modal',
        'react-navbar',
        'react-navs',
        'react-notifications',
        'react-paginations',
        'react-popover',
        'react-portal',
        'react-radio-button',
        'react-table',
        'react-toggle-switch',
        'react-tooltip',
        'react-validation'
    ];

    render() {
        return (
            <div>
                <Nav style={{ width: 240 }}>
                    <NavItems>
                        <NavItem>
                            <Anchor style={{ fontSize: 14 }}>
                                <img src={components} alt="" style={{ marginRight: 4 }} />
                                <span style={{ color: '#fff', textTransform: 'uppercase' }}>COMPONENTS</span>
                            </Anchor>
                            <SubNavItems>
                                {this.components.map(component => (
                                    <SubNavItem>
                                        <Anchor
                                            onClick={() => {
                                                this.setState({ component: component });
                                            }}
                                        >
                                            {component}
                                        </Anchor>
                                    </SubNavItem>
                                ))}
                            </SubNavItems>
                        </NavItem>
                    </NavItems>
                </Nav>
                <Main style={{ height: '99vh' }}>
                    <Iframe
                        ref={node => {
                            if (this.timer) {
                                clearInterval(this.timer);
                                this.timer = null;
                            }

                            if (!node) {
                                return;
                            }

                            const iframe = ReactDOM.findDOMNode(node);
                            iframe.addEventListener('load', () => {
                                const target = iframe.contentDocument.body;

                                // Recalculate the height of the content
                                iframe.style.height = 0;
                                const nextHeight = target.scrollHeight;
                                iframe.style.height = `${nextHeight}px`;

                                this.timer = setInterval(() => {
                                    // Recalculate the height of the content
                                    iframe.style.height = 0;
                                    const nextHeight = target.scrollHeight;
                                    iframe.style.height = `${nextHeight}px`;
                                }, 200);
                            });
                        }}
                        src={`https://trendmicro-frontend.github.io/${this.state.component}/`}
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
