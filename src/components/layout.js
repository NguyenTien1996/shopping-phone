import React from 'react';
import {Layout} from 'antd';
import HeaderComponent from './header';
import FooterComponent from './footer';
import PropTypes from 'prop-types'

const {Content} = Layout;
const LayoutComponent = () => {
    return(
        <Layout>
            <HeaderComponent/>
            <Content style={{padding:'0 50px'}}>
                <div className="site-layout-content"> 
                     {props.children}
                </div>
            </Content>
            <FooterComponent/>
        </Layout>
    )
}
LayoutComponent.propTypes = {
    children: PropTypes.node.isRequired
}
export default React.memo(LayoutComponent)