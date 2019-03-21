import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Components/NotFoundPage.css';

const NotFoundPage = () => (
    <div className="center_error_404">
        <span className="error_style">Error 404 </span><div><Link to="/">Go to home</Link></div>
    </div>
);

export default NotFoundPage;