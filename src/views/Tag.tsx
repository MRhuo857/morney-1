import React from 'react';
import {useTags} from '../useTags';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icons';
import {Button} from '../components/Button';
import styled from 'styled-components';
type Params={
  id:string
}
const Topbar=styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 12px;
  background: #fff;
    >.icon{
      width: 20px;
      height: 20px;
    }
`
const Tag:React.FC=(props)=>{
  const {findTags}=useTags()
  let {id}=useParams<Params>()
  const tag=findTags(parseInt(id))
  return(
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="标签名"/>
        </label>
      </div>
      <div>
        <Button> 删除按钮</Button>
      </div>
      <div>
        {tag.name}
      </div>
    </Layout>


  )
}
export {Tag}
