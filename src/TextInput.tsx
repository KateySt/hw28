import React, {Dispatch, useState} from 'react';

interface textI {
    value: string;
}

interface numI {
    num: number;
}

function TextInput():JSX.Element{
    const [text, setText] = useState<textI>({value: ''});
    const [num, setNum] = useState<numI>({num: 0});
    let arr = new Array("");

    const fillArr = (num: number, value: string): void => {
        arr = [...Array(num)].map(() => value);
    };

    const clickHandlerText = (stateSetter: Dispatch<textI>, e: React.ChangeEvent<{ value: string }>) => {
        stateSetter({value: e.target.value});
    }

    const clickHandlerNum = (stateSetter: Dispatch<numI>, e: React.ChangeEvent<{ value: string }>) => {
        if (e.target.value === '')
            stateSetter({num: 0});
        else
            stateSetter({num: parseInt(e.target.value)});
    }

    fillArr(num.num, text.value);

    return (
        <div>
            <p>Input text: </p>
            <input onChange={(e: React.ChangeEvent<{ value: string }>) => clickHandlerText(setText, e)}/>
            <br/>
            <p>Input num: </p>
            <input onChange={(e: React.ChangeEvent<{ value: string }>) => clickHandlerNum(setNum, e)}/>
            <br/>
            <div>
                {arr.map((name: string, id: number): JSX.Element => {
                    return <p key={id}>{name}</p>;
                })}
            </div>
        </div>
    );
}

export default TextInput;
