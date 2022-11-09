import React, { useState, useEffect } from 'react';
import { FlexBox } from './style';

const items = [
    {
        name : '비빔밥',
        src : require("../img/bibimbap.jpg")
    },
    {
        name : '보쌈',
        src : require("../img/bossam.jpg")
    },
    {
        name : '치킨',
        src : require("../img/chicken.jpg")
    },
    {
        name : '닭갈비',
        src : require("../img/dakgalbi.jpg")
    },
    {
        name : '돈가스',
        src : require("../img/dongas.jpg")
    },
    {
        name : '회',
        src : require("../img/fish.jpg")
    },
    {
        name : '감자탕',
        src : require("../img/gamjatang.jpg")
    },
    {
        name : '곱창',
        src : require("../img/gopchang.jpg")
    },
    {
        name : '제육덮밥',
        src : require("../img/jaeyuk.jpg")
    },
    {
        name : '짜장면',
        src : require("../img/jjajang.jpg")
    },
    {
        name : '조개찜',
        src : require("../img/jogaejjim.jpg")
    },
    {
        name : '족발',
        src : require("../img/jokbal.jpg")
    },
    {
        name : '칼국수',
        src : require("../img/kalgooksu.jpg")
    },
    {
        name : '김밥',
        src : require("../img/kimbab.jpg")
    },
    {
        name : '김치볶음밥',
        src : require("../img/kimchifriedrice.jpg")
    },
    {
        name : '김치찜(찌개)',
        src : require("../img/kimchijjim.jpg")
    },
    {
        name : '콩국수',
        src : require("../img/kongguksu.jpg")
    },
    {
        name : '콩나물국밥',
        src : require("../img/kongnamul.jpg")
    },
    {
        name : '양념갈비',
        src : require("../img/libwithsauce.jpg")
    },
    {
        name : '막창',
        src : require("../img/makchang.jpg")
    },
    {
        name : '라면',
        src : require("../img/ramyun.jpg")
    },
    {
        name : '삼계탕',
        src : require("../img/samgyetang.jpg")
    },
    {
        name : '삼겹살',
        src : require("../img/samgyup.jpg")
    },
    {
        name : '떡볶이',
        src : require("../img/tteokbokki.jpg")
    },
    {
        name : '육사시미',
        src : require("../img/yuksasimi.jpg")
    },
    {
        name : '닭볶음탕',
        src : require("../img/dakbokumtang.jpg")
    },
    {
        name : '막국수',
        src : require("../img/makguksu.jpg")
    },
    {
        name : '샤브샤브',
        src : require("../img/shabu.jpg")
    },
    {
        name : '장어구이',
        src : require("../img/jangeo.jpg")
    },
    {
        name : '소고기',
        src : require("../img/beef.jpg")
    },
    {
        name : '순대국밥',
        src : require("../img/sundaeguk.jpg")
    },
    {
        name : '닭발',
        src : require("../img/dakbal.jpg")
    },
];

// useState로 state를 사용함으로서 값이 변할때마다 component가 업데이트 되도록 도와줌 
// Math.random이 음수 또는 양수의 값을 가지려면 -0.5를 해주면됨 -> 자동으로 음식이 랜덤하게 정렬되게 만들어줌

const Game = () => {
    const [ foods, setFoods ] = useState([]);
    const [ displays, setDisplays ] = useState([]);
    const [ winners, setWinners ] = useState([]);

    useEffect(() => {  
        items.sort(()=> Math.random() - 0.5);
        setFoods(items);
        setDisplays([items[0], items[1]]);
    }, []);

    const clickHandler = (food) => (d) => {
        if (foods.length <= 2) {
            if (winners.length === 0) {
            setDisplays([food]);
            } else {
                let updatedFood = [...winners, food];
                setFoods(updatedFood);
                setDisplays([updatedFood[0], updatedFood[1]]);
                setWinners([]);
            }
        } else if (foods.length > 2) {
            setWinners([...winners, food]);
            setDisplays([foods[2], foods[3]]);
            setFoods(foods.slice(2));
        }
    };
    
    return(
        <FlexBox>
        <h1 className='title'>음식월드컵</h1>
        {displays.map((d) => {
            return (
                <div className='flex-1' key={d.name} onClick={clickHandler(d)}
                >
                    <img className="food-img" src={d.src} />
                    <div className='name'>{d.name}</div>
                </div>
            );
        })}
        </FlexBox>
    );
};

export default Game;