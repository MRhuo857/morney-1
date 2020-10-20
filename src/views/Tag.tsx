import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icons';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';

type Params = {
  id: string
}
const InputWrapper = styled.div`
  background:white;
  padding: 0 16px;
  margin-top: 8px;
`;
const Topbar = styled.header`
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
const Space = styled.div`
  height: 40px;
`;
const Tag: React.FC = (props) => {
  const {findTags, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTags(parseInt(idString));
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <div>
        <InputWrapper>
          <Input label="标签名" type="text" placeholder="标签名"
                 value={tag.name}
                 onChange={(e) => {
                   updateTag(tag.id, {name: e.target.value});
                 }}
          />
        </InputWrapper>
      </div>
      <Center>
        <Space/>
        <Button onClick={() => {
          deleteTag(tag.id);
        }}>删除标签</Button>
      </Center>
    </div>
  );
  // const history = useHistory();
  const onClickBack = () => {
   window.history.back()
    console.log('hi')
  };
  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>

      {tag ? tagContent(tag) : <Center>tag 不存在</Center>}
    </Layout>

  );
};
export {Tag};
