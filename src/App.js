import { Route, Routes, Router, Navigate} from 'react-router-dom'
import { publicRoutes, privateRoutes } from './Routes';
import { FaRegArrowAltCircleUp } from "react-icons/fa"
import { Fragment, useState, useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';


const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export { scrollTop }

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 500)
    }

    //window.addEventListener("scroll", handleScroll)
  }, [])

  localStorage.setItem("isLogin", "")
  let isLogin = localStorage.getItem("isLogin")
  console.log("isLogin : " + isLogin)
  function PrivateRoute({ children }) {

    if (!isLogin) {
      // not logged in so redirect to login page with the return url
      return <Navigate to="/login" />
    }
    // authorized so return child components
    return children;
  }

  return (
    <>
      <Header />
      <Routes>
        {publicRoutes.map((route, index) => {
          // const Page = route.component
          return <Route key={index} path={route.path} element={<route.component />} />
        })}
        {privateRoutes.map((route, index) => {
          // const Page = route.component
          return <Route key={index} path={route.path} element={
            <PrivateRoute>
              <route.component />
            </PrivateRoute>
            } />
        })}
      </Routes>
      {/* <Routes>
        {privateRoutes.map((route, index) => {
          // const Page = route.component
          return <Route key={index} path={route.path} element={<route.component />} />
        })}
      </Routes> */}
      {(showGoToTop) ? (
        <div className="scroll-top" onClick={scrollTop}>
          <FaRegArrowAltCircleUp />
        </div>
      ) : <Fragment />}
      {/* <Footer /> */}
    </>
  );
}

export default App;
