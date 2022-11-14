import styled from "styled-components";

export const OptionTitle = styled.h3`
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
  margin-bottom: 1.4rem;
`;

const SubTitle = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;

  margin-bottom: 0.6rem;
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;

  padding-left: 1.6rem;
  font-size: 1.4rem;
  line-height: 1.7rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gary100};
  border-radius: 0.6rem;

  background-color: ${({ theme }) => theme.colors.blue030};
`;

const St = { Subject, SubTitle, Input };

export default St;
