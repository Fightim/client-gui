import styled from "styled-components";

const OptionTitle = styled.h3`
  width: 17rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1rem solid ${({ theme }) => theme.colors.blue300};
  border-radius: 1.5rem;

  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue300};
`;

const Subject = styled(OptionTitle)`
  margin: 3.2rem 0 2rem;
`;

const Title = styled.div`
  width: 100%;
  height: 2.9rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 0.8rem;

  border-top: 0.1rem solid ${({ theme }) => theme.colors.gary100};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gary100};

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.7rem;
`;

const St = {
  Subject,
  Title,
};

export default St;
