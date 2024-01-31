import styled from "styled-components";
import {
  StyledHeadingMedium,
  StyledHeadingSmall,
  StyledParagraphBold,
} from "../../components/UI/Styled";

export const HeaderResume = ({ data = {} }) => {
  // {
  //     "name": "Syed Abdul Wahid",
  //     "designation": "MERN stack developer (React, Node.js)",
  //     "mail": "abdulwahid.syed@outlook.com",
  //     "phone": "+91 9581122911",
  //     "linkedinProfile": "www.linkedin.com/in/abdul-wahid-syed-8b5728265",
  //     "githubProfile": "https://github.com/abdulwahidsyed",
  //     "description": "With 5+ years of software development experience, I have contributed to projects small and large, demonstrating my professionalism with extremely high quality and reliability. Being a professional developer means understanding all the requirements of a project and finding the best way to implement it to a high-quality standard. As a senior full-stack engineer, I am proficient with modern web languages and I always focus on project structures and coding style, and etc.  I'm considering myself one of the most qualified engineers."
  // }
  return (
    <StyledCtn>
      <StyledAvatar>
        <StyledHeadingMedium>{data.name}</StyledHeadingMedium>
        <StyledHeadingSmall>{data.designation}</StyledHeadingSmall>
      </StyledAvatar>
      <StyledDescriptionBox>
        <StyledParagraphBold style={{ textAlign: "justify" }}>
          {data.description}
        </StyledParagraphBold>
        <StyledUL>
          <StyledLI>Email: {data.mail}</StyledLI>
          <StyledLI>Phone: {data.phone}</StyledLI>
          <StyledLI>linkedin: {data.linkedinProfile}</StyledLI>
          <StyledLI>Github: {data.githubProfile}</StyledLI>
        </StyledUL>
      </StyledDescriptionBox>
    </StyledCtn>
  );
};

export const StyledCtn = styled.div`
  min-height: 400px;
  background: black;
  display: flex;
  padding: 30px;
  gap: 20px;

  & * {
    color: white !important;
  }
`;

export const StyledAvatar = styled.div`
  flex-basis: 30%;
`;

export const StyledDescriptionBox = styled.div`
  flex-basis: 70%;

  & * {
    line-height: 26.4px;
    word-spacing: 1.5px;
  }
`;

export const StyledUL = styled.ul`
  padding-left: 16px;
  margin-top: 40px;
`;
export const StyledLI = styled.li`
  margin: 4px 0;
`;
