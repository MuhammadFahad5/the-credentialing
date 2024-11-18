'use client'
import './common.css'

import React from 'react'
import { FloatButton } from 'antd';
// import { BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

const BackToTop = () => {
    return (
        <>
            < FloatButton.BackTop icon={<ArrowUpOutlined />}
            />
            
        </>

    )
}

export default BackToTop
