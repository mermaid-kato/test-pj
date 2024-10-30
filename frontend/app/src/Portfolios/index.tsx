import styled from 'styled-components';

export const Portfolios = () => {
  return (
    <AppPortfolio>
      <PortfolioTitle>Profile</PortfolioTitle>
      <PortfolioName>まめかと（氏名）</PortfolioName>
      <PortfolioGroup>
        <PortfolioImage></PortfolioImage>
        <PortfolioGroup2>
          <PortfolioBirthday>生年月日：1998年10月19日</PortfolioBirthday>
          <PortfolioLanguage>使用言語：Ruby、Javascript、etc...</PortfolioLanguage>
          <PortfolioThing>ひとこと：やる気だけはあります！！</PortfolioThing>
        </PortfolioGroup2>
      </PortfolioGroup>
    </AppPortfolio>
  );
};

const AppPortfolio = styled.div`
  background-color: #FDF0E9;
  min-height: 250px;
`;

const PortfolioTitle = styled.h1`
  margin: 0px;
  max-width: 100%;
  display: flex;
  margin-left: 15px;
  font-size: 2.5em;
`;

const PortfolioName = styled.div`
  display: flex;
  margin-left: 15px;
  margin-top: 5px;
`;

const PortfolioGroup = styled.div`
  margin-top: 5px;
  display: flex;
`;

const PortfolioGroup2 = styled.div`
  display: grid;
  align-items: center;
  margin-left: 10px;
`;

const PortfolioImage = styled.div`
  width: 150px;
  height: 150px;
  background: #D9D9D9;
  margin-left: 15px;
`;

const PortfolioBirthday = styled.div`
  display: flex;
`;

const PortfolioLanguage = styled.div`
  display: flex;
`;

const PortfolioThing = styled.div`
  display: flex;
`;
