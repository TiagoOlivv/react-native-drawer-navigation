import React from 'react';

import HeaderComponent from '../../components/Header';

interface Props {
  navigation: any;
}

const Cities: React.FC<Props> = ({ navigation }) => {
  return <HeaderComponent navigation={navigation} title={'CIDADES'} />;
};

export default Cities;