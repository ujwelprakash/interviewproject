import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHeader } from '../pages/sale';

const HeaderForm = () => {
    const header = useSelector((state) => state.sales.header);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setHeader({...header, [name]: value }));
    };

    return ( <
        div className = "p-3 border rounded mb-3" >
        <
        h4 > Header Information < /h4> <
        form className = "row g-3" >
        <
        div className = "col-md-4" >
        <
        label className = "form-label" > Voucher Number < /label> <
        input type = "number"
        name = "vr_no"
        className = "form-control"
        value = { header.vr_no }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        div className = "col-md-4" >
        <
        label className = "form-label" > Date < /label> <
        input type = "date"
        name = "vr_date"
        className = "form-control"
        value = { header.vr_date }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        div className = "col-md-4" >
        <
        label className = "form-label" > Account Name < /label> <
        input type = "text"
        name = "ac_name"
        className = "form-control"
        value = { header.ac_name }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        div className = "col-md-4" >
        <
        label className = "form-label" > Status < /label> <
        select name = "status"
        className = "form-select"
        value = { header.status }
        onChange = { handleChange } >
        <
        option value = "A" > Active < /option> <
        option value = "I" > Inactive < /option> <
        /select> <
        /div> <
        /form> <
        /div>
    );
};

export default HeaderForm;