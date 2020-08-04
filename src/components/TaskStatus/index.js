import React, { useState, useEffect } from 'react';
import { Container } from './style';

function TaskStatus({data}) {
    const [qtd, setQtd] = useState(0);
    const [ok,setOk] = useState(0);
    const [pending,setPending] = useState(0);

    useEffect(()=>{
        const dataok = data.filter((item,i)=>item.done === "true");
        const datapending = data.filter((item,i)=>item.done === "false");
        const qtdItem = data.length;
        setOk(dataok.length);
        setPending(datapending.length)
        setQtd(qtdItem);
    },[data]);

    return (
        <Container>
            <ul>
                <li>
                    <span>Quantidade</span>
                    <p>{qtd}</p>
                </li>
                <li>
                    <span>Concluidos</span>
                    <p>{ok}</p>
                </li>
                <li>
                    <span>Pendentes</span>
                    <p>{pending}</p>
                </li>
            </ul>
        </Container>
  );
}

export default TaskStatus;