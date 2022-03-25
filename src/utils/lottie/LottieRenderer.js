import React from 'react';
import LottieView from 'lottie-react-native';

export default class LottieRenderer extends React.Component {
  render() {
    return <LottieView source={require('../../animations/award.json')} autoPlay loop />;
  }
}