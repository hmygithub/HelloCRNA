import React, {Component} from 'react';

const BagView = require('./components/BagView');
const LoginView = require('./components/LoginView');
const BannerView = require('./components/BannerView');
const RainBowScrollView  = require('./components/RainBowScrollView');
export default class first extends Component {
    render() {
        /*
                return <LoginView />
         return <BagView />
         return <BannerView />
        */
        return <RainBowScrollView />
    }
}