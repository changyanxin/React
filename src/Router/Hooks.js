import React from 'react';
import {useHistory,useLocation,useParams,useRouteMatch} from 'react-router-dom';

export default function Hooks(){
    let history = useHistory();
    let {id} = useParams();
    console.log(id);
    function toHoc(){
        history.push('/Hoc');
    }
    return <div>
        <button onClick={toHoc}>跳转到Hoc</button>
    </div>
}