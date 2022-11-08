import styled from 'styled-components';

export const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    font-size: 16px;
    * {
    font-family: 'Gowun Dodum', sans-serif;
    }

    @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');

    .flex-1 {
        flex: 1;
        min-width: 500px;
        overflow: hidden;
        position: relative;
    }
    
    .title {
        margin: 0 auto;
        position: absolute;
        z-index: 2;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.5);
        color: #fff;
        padding: 0 7px;
        width: 100%;
        text-align: center;
    }

    .img_wrap {
        width: 100%;
        height: 30rem;
    }

    .food-img {
        width:100%;
        height: 100%;
        transition: all .8s;
        cursor: pointer;
        overflow: hidden;
    }

    .food-img:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }

    .name {
        position: absolute;
        z-index: 3;
        color: #fff;
        font-size: 36px;
        top: 50%;
        left:50%;
        transform: translate(-50%,-100%);
        background: rgba(0,0,0,0.5);
        padding: 0 8px;
    }
`;