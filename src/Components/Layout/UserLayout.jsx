import { Outlet } from 'react-router-dom';
import Header from '../Common/Header';

const UserLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
    </>
  )
}

export default UserLayout;
