import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { UserContext } from 'context/UserContext';
import { useState } from 'react';

// ==============================|| APP - THEME, ROUTER, LOCAL, CONTEXTS ||============================== //

const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <ThemeCustomization>
        <ScrollTop>
          <Routes />
        </ScrollTop>
      </ThemeCustomization>
    </UserContext.Provider>
  );
};

export default App;
