
import React from 'react';
import socialMediaIcons from './socialMediaIcons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const socialMediaList = () => {
  return (
    <ul>
    {
      socialMediaIcons.map(({iconClass}) => (
        <li key={iconClass}>
          <FontAwesomeIcon icon={faCoffee} style={{ fontSize: 100, color: 'orange' }}/>
        </li>
      ))
    }
   </ul>
  )
}

export default socialMediaList;
