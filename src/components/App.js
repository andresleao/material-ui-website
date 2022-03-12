import { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './ui/Theme';

import Header from './ui/Header';
import Footer from './ui/Footer';

import LandingPage from './LandingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';
import MobileApps from './ui/MobileApps';
import Websites from './Websites';
import Revolution from './Revolution';
import About from './About';
import Contact from './Contact';
import Estimate from './Estimate';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header
          tabValue={tabValue}
          setTabValue={setTabValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                setTabValue={setTabValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            path="/services"
            element={
              <Services
                setTabValue={setTabValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            path="/custom-software"
            element={<CustomSoftware setSelectedIndex={setSelectedIndex} />}
          />
          <Route
            path="/mobile-apps"
            element={
              <MobileApps
                setSelectedIndex={setSelectedIndex}
                setTabValue={setTabValue}
              />
            }
          />
          <Route
            path="/websites"
            element={
              <Websites
                setSelectedIndex={setSelectedIndex}
                setTabValue={setTabValue}
              />
            }
          />
          <Route path="/revolution" element={<Revolution />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={
              <Contact
                setSelectedIndex={setSelectedIndex}
                setTabValue={setTabValue}
              />
            }
          />
          <Route
            path="/estimate"
            element={
              <Estimate
                setSelectedIndex={setSelectedIndex}
                setTabValue={setTabValue}
              />
            }
          />
        </Routes>
        <Footer setTabValue={setTabValue} setSelectedIndex={setSelectedIndex} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
