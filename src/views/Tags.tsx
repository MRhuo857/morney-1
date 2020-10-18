import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icons';

const TagList=styled.ol`
  font-size: 16px;
  background: #fff;
  >li{
    border-bottom: 1px solid #d5d5d5;
    line-height: 20px;
    padding: 12px 16px 12px 0;
    margin:0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >.icon{
        width: 20px;
        height: 20px;
    }
  }
`
const Button=styled.button`
  font-size: 16px;border: none;padding: 8px 12px;background: #f60;
  color: white;border-radius: 4px;
`
const Center=styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Space=styled.div`
  height: 40px;
`
function Tags() {
  const {tags,setTags}=useTags()
  return (
    <Layout>
      <TagList>
        {tags.map(tag=>
          <li key={tag}>
           <span className="onLine">{tag}</span>
          <Icon name="right"/>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Button>新增标签</Button>
      </Center>


    </Layout>

  );
}
export default Tags