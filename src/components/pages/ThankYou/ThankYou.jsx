import React from 'react';

import ContinueButton from '../../ContinueButton';
import { ThankYouText } from '../../Texts';
import MasterPage from '../MasterPage';
import ThankYouStyle from './ThankYouStyle';

const displayName = 'ThankYou';

export default function ThankYou() {
  return (
    <MasterPage pageTitle="ThankYou">
      <ThankYouStyle>
        <ThankYouText>Thank You!</ThankYouText>
        <ContinueButton link="catalog" value="Catalog" />
      </ThankYouStyle>
    </MasterPage>
  );
}

ThankYou.displayName = displayName;
