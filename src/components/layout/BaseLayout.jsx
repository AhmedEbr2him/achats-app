import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageWrapper } from '../../style/style';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
const BaseLayout = () => {
  return (
    <PageWrapper>
      <Header />
      <Sidebar />
      <div style={{ minHeight: 'calc(100vh - 545px)' }}>
        <Outlet />
      </div>
      <Footer />
    </PageWrapper>
  );
};
export default BaseLayout;
