import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, TitleText2 } from "../../common/Text";
import { Button, CenterFlex, FixedBottom, Layout } from "../../components/cafestudyCreate/styles";
import ListComponent from "../../components/cafestudyLists/ListComponent";
import { Color } from "../../constants";
import { MainLayout2, NoResultLayout } from "../../styles/Layout.styles";

const CafeStudyCreateListPage = () => {
  const [lists, setLists] = useState(1);
  // const [loading, setLoading] = useState(false);
  const user = '카페고리';
  const navigate = useNavigate();
  //웹 최적화 검증
  useEffect(() => {
    console.log("카페 스터디 생성 렌더링");
  });
  
  console.log(lists)
  const handleNavigate = () => {
    navigate("/cafestudy/create/edit");
    window.scrollTo(0, 0);
  }
  
  return (
    <>
      <MainLayout2 $padding={'0 16px'}>
        <Text
          $margin={'0 0 24px 0'} 
          $fontSize={16}
          $fontWeight={700}
          $color={'#2a2a2a'}
        >
          <TitleText2 as="span" $color={Color.GreenText}>
            {user}
          </TitleText2>
          님이 모집한 카공이에요!
        </Text>
        {lists === 0 ? 
          <NoResultLayout>
            <Text $color={'#939393'} $fontSize={22} $fontWeight={700}>
              아직 카공을 모집 한 적이 없어요.
            </Text>
          </NoResultLayout>
           : 
          <>
            {/* <Layout> */}
              <ListComponent />
              <ListComponent />
              <ListComponent />
              <ListComponent />
              <ListComponent />
              <ListComponent />
              <ListComponent />
              <ListComponent />
            {/* </Layout> */}
          </>
        }
        <FixedBottom> 
          <CenterFlex>
            <Button onClick={handleNavigate}
              $fontSize={22} $fontWeight={700} $backGround={Color.GreenText}>
              카공 모집하기
            </Button>
          </CenterFlex>
        </FixedBottom>
      </MainLayout2>
    </>
  );
};

export default CafeStudyCreateListPage;