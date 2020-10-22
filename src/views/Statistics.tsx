import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const Wrapper = styled.div`
  background: white;
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  >.note{
  margin-right: auto;
  margin-left: 16px;
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  return (
    <Layout>
      <Wrapper>
        <CategorySection value={category}
                         onChange={value => setCategory(value)}/>
      </Wrapper>
      <div>
        {records.map(t => {
          return <Item>
            <div className="tags">
              {t.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
            </div>
            {t.note && <div className="note">
              {t.note}
            </div>}
            <div className="amount">
              ￥{t.amount}
            </div>
            {/*{day(t.createdAt).format('YYYY年MM月DD日')}*/}
          </Item>;
        })}
      </div>
    </Layout>
  );
}

export default Statistics;