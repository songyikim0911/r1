import React, {useState} from 'react';

const ShowName = ({name, num,fn}) => {//함수의 명이 정해져 있는것이 props,,, props 대신 구조분해해서 name변수, fn함수를 따로 가져옴!

    console.log("show name..........")
fn()

    return (
        <div>
            <h1>{name}</h1>
            <h2>{num}</h2>
        </div>
    );
};

export default ShowName;