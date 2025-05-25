
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { withBreadcrumbs } from 'react-router-breadcrumbs-hoc';
// import routes from "./breadcrumbRoutes";

// const Breadcrumbs = ({ breadcrumbs }) => {
//     return (
//         <nav className="text-sm text-gray-700">
//             {breadcrumbs.map(({ breadcrumb, match }, index) => (
//                 <span key={match.pathname}>
//                     {index > 0 && <span className="mx-1">›</span>}
//                     <Link to={match.pathname} className="hover:underline">
//                         {breadcrumb}
//                     </Link>
//                 </span>
//             ))}
//         </nav>
//     )
// }

// export default withBreadcrumbs(routes)(Breadcrumbs);





import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import breadcrumbMap from './breadcrumbRoutes';
import { IoIosArrowForward } from 'react-icons/io';

const Breadcrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(p => p !== '');

    const breadcrumbs = paths.map((segment, idx) => {
        const path = '/' + paths.slice(0, idx + 1).join('/');
        return {
            label: breadcrumbMap[segment] || segment,
            path
        };
    });

    return (
        <nav className="text-xs text-gray-700">
            <Link to="/" className="hover:underline">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
                <span key={idx}>
                    <span className="mx-2">
                        <IoIosArrowForward className='inline w-[10px] h-[10px]' />
                    </span>
                    {idx !== breadcrumbs.length - 1 ? (
                        <Link to={crumb.path} className="hover:underline">{crumb.label}</Link>
                    ) : (
                        <span>{crumb.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumb;
