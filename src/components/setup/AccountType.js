import React from 'react';
import AuthLayout from '../auth';
import { ReactComponent as  ContributorIMG }  from '../../assets/images/contributor.svg';
import { ReactComponent as  CreditorIMG }  from '../../assets/images/creditor.svg';

export default () => (
<AuthLayout>
  <div id="accountType">
    <h2 className="font-bold text-center text-xl mb-8">As?</h2>
    <div className="flex flex-row align-middle justify-around w-11/12 mx-auto">
      <a href="#">
          <ContributorIMG style={{ width: '80px', height: '80px'}} className="mb-3"/>
          <p className="font-bold">Contributor</p>
      </a>
      <a href="">
         <CreditorIMG style={{ width: '80px', height: '80px' }} className="mb-3"/>
         <p className="font-bold">Creditor</p>
      </a>
    </div>
  </div>
</AuthLayout>
)