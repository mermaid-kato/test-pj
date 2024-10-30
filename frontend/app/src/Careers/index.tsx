import styled from 'styled-components';
import { useEffect, useState } from 'react';


export const Careers = () => {
  const [userData, setUserData] = useState([ { year: null, title: null }]);

  useEffect(() => {
    const fetchData = async () => {
      fetch('http://localhost:3001/career', {
        method: "GET",
        mode: 'cors',
        credentials: "same-origin",
        headers: {
          'Content-Type': 'application/json',
          "credentials": "include"
        }
      })
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error(error));
    };

    fetchData();
  }, []);

  return (
    <AppCareer>
      <CareerTitle>Career</CareerTitle>
      <CareerGroup>
      <>
        {
          userData.map((career) => {
            return <CareerPj>{career.year}：{career.title}</CareerPj>
          })
        }
      </>
      </CareerGroup>
    </AppCareer>
  );
};

const AppCareer = styled.div`
  background-color: white;
`;

const CareerTitle = styled.h1`
  margin: 0px;
  max-width: 100%;
  margin-left: 15px;
  font-size: 2.5em;
`;

const CareerGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CareerPj = styled.div`
  text-align: center;
  width: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.3rem;
`;
