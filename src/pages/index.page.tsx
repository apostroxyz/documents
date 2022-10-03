import React from 'react';

import { LEGAL_NOTICE_URL, PRIVACY_NOTICE_URL } from 'docs';

function HomePage() {
  return (
    <>
      <a href={LEGAL_NOTICE_URL} style={{ display: 'none' }}>
        {LEGAL_NOTICE_URL}
      </a>
      <a href={PRIVACY_NOTICE_URL} style={{ display: 'none' }}>
        {PRIVACY_NOTICE_URL}
      </a>
    </>
  );
}

// eslint-disable-next-line import/no-default-export
export default HomePage;
