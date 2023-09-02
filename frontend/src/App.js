import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { UserContext } from 'context/UserContext';
import { useState, useEffect } from 'react';  // <-- Added useEffect

// ==============================|| APP - THEME, ROUTER, LOCAL, CONTEXTS ||============================== //

const App = () => {
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    // Check if JWT exists in local storage
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      // Fetch user data from backend
      fetch('YOUR_BACKEND_API_ENDPOINT_FOR_USERDATA', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && data.user) {
            setUserData(data.user);
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);  // The empty dependency array ensures this useEffect runs only once, similar to componentDidMount

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
