import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CategoryProvider,DateProvider,FilterProvider,AuthProvider,WishlistProvider} from './context';
import  {BrowserRouter as Router} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Router>
    <CategoryProvider>
        <DateProvider>
            <FilterProvider>
                <AuthProvider>
                    <WishlistProvider>
                    <App/>
                    </WishlistProvider>
                </AuthProvider>
            </FilterProvider>  
        </DateProvider>  
    </CategoryProvider>
    </Router>
    
    
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

