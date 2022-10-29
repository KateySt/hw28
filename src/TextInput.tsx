import React, {Dispatch, useState} from 'react';

interface textI {
    value: string;
}

interface numI {
    num: number;
}

function TextInput() {
    const [text, setText] = useState<textI>({value: ''});
    const [num, setNum] = useState<numI>({num: 0});
    let arr = new Array("");

    function fillArr(num: number, value: string): any {
        arr = [...Array(num)].map(() => value);
    }

    const clickHanderText = (stateSetter: Dispatch<textI>, e: any) => {
        stateSetter({value: e.target.value});
    }

    const clickHanderNum = (stateSetter: Dispatch<numI>, e: any) => {
        if(e.target.value==='')
            stateSetter({num: 0});
        else
            stateSetter({num: parseInt(e.target.value)});
    }

    return (
        <div>
            <p>Input text: </p>
            <input onChange={(e) => clickHanderText(setText, e)}/>
            <br/>
            <p>Input num: </p>
            <input onChange={(e) => clickHanderNum(setNum, e)}/>
            <br/>
            <br/>
            <div>
                {fillArr(num.num, text.value)}
                {arr.map((name: string, id: number): JSX.Element => {
                    return <p key={id}>{name}</p>;
                })}
            </div>
        </div>
    );
}

export default TextInput;
