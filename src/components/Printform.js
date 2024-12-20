import React from 'react';
import { useSelector } from 'react-redux';

const Printform = () => {
    const { header, details } = useSelector((state) => state.sales);

    return ( <
        div className = "mt-3 p-3 border rounded" >
        <
        h4 > Printable Voucher < /h4> <
        h5 > Header < /h5> <
        pre > { JSON.stringify(header, null, 2) } < /pre> <
        h5 > Details < /h5> <
        pre > { JSON.stringify(details, null, 2) } < /pre> <
        /div>
    );
};

export default Printform;