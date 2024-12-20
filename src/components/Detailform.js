import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDetail, removeDetail, calculateAmount } from '../pages/sale';

const DetailForm = () => {
    const details = useSelector((state) => state.sales.details);
    const dispatch = useDispatch();
    const [newRow, setNewRow] = useState({ item_code: '', item_name: '', description: '', qty: 0, rate: 0 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewRow({...newRow, [name]: value });
    };

    const handleAddRow = () => {
        dispatch(addDetail({...newRow, qty: Number(newRow.qty), rate: Number(newRow.rate) }));
        setNewRow({ item_code: '', item_name: '', description: '', qty: 0, rate: 0 });
        dispatch(calculateAmount());
    };

    const handleRemoveRow = (index) => {
        dispatch(removeDetail(index));
        dispatch(calculateAmount());
    };

    return ( <
        div className = "p-3 border rounded" >
        <
        h4 > Detail Information < /h4> <
        div className = "table-responsive" >
        <
        table className = "table table-striped" >
        <
        thead >
        <
        tr >
        <
        th > Item Code < /th> <
        th > Item Name < /th> <
        th > Description < /th> <
        th > Quantity < /th> <
        th > Rate < /th> <
        th > Action < /th> <
        /tr> <
        /thead> <
        tbody > {
            details.map((row, index) => ( <
                tr key = { index } >
                <
                td > { row.item_code } < /td> <
                td > { row.item_name } < /td> <
                td > { row.description } < /td> <
                td > { row.qty } < /td> <
                td > { row.rate } < /td> <
                td >
                <
                button className = "btn btn-danger btn-sm"
                onClick = {
                    () => handleRemoveRow(index) } >
                Remove <
                /button> <
                /td> <
                /tr>
            ))
        } <
        tr >
        <
        td >
        <
        input type = "text"
        name = "item_code"
        placeholder = "Item Code"
        value = { newRow.item_code }
        onChange = { handleChange }
        className = "form-control" /
        >
        <
        /td> <
        td >
        <
        input type = "text"
        name = "item_name"
        placeholder = "Item Name"
        value = { newRow.item_name }
        onChange = { handleChange }
        className = "form-control" /
        >
        <
        /td> <
        td >
        <
        input type = "text"
        name = "description"
        placeholder = "Description"
        value = { newRow.description }
        onChange = { handleChange }
        className = "form-control" /
        >
        <
        /td> <
        td >
        <
        input type = "number"
        name = "qty"
        placeholder = "Quantity"
        value = { newRow.qty }
        onChange = { handleChange }
        className = "form-control" /
        >
        <
        /td> <
        td >
        <
        input type = "number"
        name = "rate"
        placeholder = "Rate"
        value = { newRow.rate }
        onChange = { handleChange }
        className = "form-control" /
        >
        <
        /td> <
        td >
        <
        button className = "btn btn-success btn-sm"
        onClick = { handleAddRow } >
        Add <
        /button> <
        /td> <
        /tr> <
        /tbody> <
        /table> <
        /div> <
        /div>
    );
};

export default DetailForm;