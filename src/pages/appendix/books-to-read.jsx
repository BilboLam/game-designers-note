import React from 'react';
import { Breadcrumb, ExtLink, H1, H2, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Books to Read</H1>
      <H2 id="level-design">Level Design</H2>
      <P>file-pdf5MB<ExtLink href="https://2702655020-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FRBtL4bkZWbF1vqRmc4h2%2Fuploads%2FZATNKPXR6sviXdpX1apu%2Fgdcchinamegadeck-121122191908-phpapp01.pdf?alt=media&token=a0cd5396-db17-49a3-9c2a-1d504a4a1716">Level Design Workshop 2012 GDC China</ExtLink>PDFdownloadDownload<ExtLink href="https://2702655020-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FRBtL4bkZWbF1vqRmc4h2%2Fuploads%2FZATNKPXR6sviXdpX1apu%2Fgdcchinamegadeck-121122191908-phpapp01.pdf?alt=media&token=a0cd5396-db17-49a3-9c2a-1d504a4a1716">arrow-up-right-from-squareOpen</ExtLink>file-pdf51MB<ExtLink href="https://2702655020-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FRBtL4bkZWbF1vqRmc4h2%2Fuploads%2FsiGMO2borCdZNC9uVlLW%2Fching-architecture_form_space_order.pdf?alt=media&token=33cbdc55-814f-467a-8d1a-01eff1b1d075">Architecture: Form, Space, and Order</ExtLink>PDFdownloadDownload<ExtLink href="https://2702655020-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FRBtL4bkZWbF1vqRmc4h2%2Fuploads%2FsiGMO2borCdZNC9uVlLW%2Fching-architecture_form_space_order.pdf?alt=media&token=33cbdc55-814f-467a-8d1a-01eff1b1d075">arrow-up-right-from-squareOpen</ExtLink></P>
    </div>
  );
}
