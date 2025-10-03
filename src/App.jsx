// import React,{  Suspense, useEffect } from 'react';
import { useEffect } from 'react';
import Root from './jsx/root/root';
// import { connect, useDispatch } from 'react-redux';
// import {  Route, Routes } from 'react-router-dom';
// import { checkAutoLogin } from './services/AuthService';
// import { isAuthenticated } from './store/selectors/AuthSelectors';
// import './assets/plugins/fontawesome/css/font-awesome.min.css'
import './assets/css/plugins.css';
import './assets/css/style.css';
import './assets/css/templete.css';
import './assets/css/skin/skin-1.css';
import './assets/css/dark-layout.css';
import './assets/css/coming-soon.css'
import './assets/plugins/slick/slick.min.css';
import './assets/plugins/slick/slick-theme.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
// import Login from './jsx/pages/authentication/Loginpage2';
// import Register2 from './jsx/pages/authentication/Register2';

// import Login from './jsx/pages/authentication/Loginpage2';
// import SignUp from './jsx/pages/authentication/Register2';

//const SignUp = lazy(() => import('./markup/Pages/Register2'));
//const ForgotPassword = lazy(() => import('./markup/pages/ForgotPassword'));
/*  const Login = lazy(() => {
    return new Promise(resolve => {
    setTimeout(() => resolve(import('./markup/Pages/Loginpage2')), 500);
  });
});  */


function App() {
    useEffect(() => {
        document.querySelector('body').setAttribute('id', 'bg');
    }, [])


    // const dispatch = useDispatch();
    // useEffect(() => {
    //     checkAutoLogin(dispatch, props.history);
    // }, [dispatch, props.history]);

    // let routes = (  
    //     <Routes> 
    //         <Route path='/login' element={<Login />} />
    //         <Route path='/register-2' element={<SignUp />} />
    //     </Routes>
    // );
    // if (props.isAuthenticated) {
    return (
        <>
            {/* <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"></div>
                            <div className="sk-child sk-bounce2"></div>
                            <div className="sk-child sk-bounce3"></div>
                        </div>
                    </div>  
                   }
                > */}
            <Root />
            {/* </Suspense> */}
        </>
    );

    // }else{
    // 	return (
    // 		<div className="vh-100">
    //               <Suspense fallback={
    //                   <div id="preloader">
    //                       <div className="sk-three-bounce">
    //                           <div className="sk-child sk-bounce1"></div>
    //                           <div className="sk-child sk-bounce2"></div>
    //                           <div className="sk-child sk-bounce3"></div>
    //                       </div>
    //                   </div>
    //                 }
    //               >
    //                   {routes}
    //               </Suspense>
    // 		</div>
    // 	);
    // }
};

// const mapStateToProps = (state) => {
//     return {
//         isAuthenticated: isAuthenticated(state),
//     };
// };

// export default connect(mapStateToProps)(App); 

export default App;
