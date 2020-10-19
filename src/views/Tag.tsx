import React from 'react';
import {useTags} from '../useTags';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icons';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
type Params={
  id:string
}
const InputWrapper = styled.div`
  background:white;
  padding: 0 16px;
  margin-top: 8px;
`;
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
`;
const Space=styled.div`
  height: 40px;
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
        <InputWrapper>
          <Input label="标签名" type="text" placeholder="标签名" value={tag.name}/>
        </InputWrapper>
      </div>
      <Center>
        <Space/>
        <Button> 删除按钮</Button>

      </Center>
    </Layout>


  )
}
export {Tag}
