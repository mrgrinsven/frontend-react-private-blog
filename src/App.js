import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Blog from './pages/blog/Blog';
import BlogPost from './pages/blog-post/BlogPost';
import PageNotFound from './pages/page-not-found/PageNotFound';

import Navigation from './components/navigation/Navigation';
import PrivateRoute from './components/private-routes/PrivateRoutes';


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <Navigation
                auth={isAuthenticated}
                authToggle={toggleIsAuthenticated}
            />
            <main>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login auth={isAuthenticated} authToggle={toggleIsAuthenticated}/>}/>

                    {/*private routes zonder component*/}
                    {/*<Route path='/blogposts' element={isAuthenticated ? <Blog/> : <Navigate to='/'/>}/>
                    <Route path='/blogposts/:blogId' element={isAuthenticated ? <BlogPost/> : <Navigate to='/'/>}/>*/}

                    {/*private routes met component*/}
                    <Route path='/blogposts'
                           element={<PrivateRoute auth={isAuthenticated}> <Blog/> </PrivateRoute>}
                    />
                    <Route path='/blogposts/:blogId'
                           element={<PrivateRoute auth={isAuthenticated}> <BlogPost/> </PrivateRoute>}
                    />
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </main>
        </>
    );
}

export default App;
